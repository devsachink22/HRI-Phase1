#from google import genai
#from google.genai import errors

#import openai
#from openai import OpenAI

import os
from time import time
import requests
from typing import List, Tuple
import json

geminiModel:str = "gemini-3.7-flash"
openAIModel:str = "gpt-5.6-luna"
purdueModel:str =  "gpt-oss:120b"

preamble: str = f"""The body of the prompt is from a user attempting to send a command to a robot using natural language.
                    The robots commands are limited to placing items in specific berths. Berth 1 is green and on the left 
                    while berth 2 is blue and on the right. I need you to decern what command that this would translate to
                    and return the answer in the specified json format, do NOT send anything but the command in the specified
                     json format. If you are unable to determine the command, return an error in the specified json format.
                    Commands:
                    {{"command":"place","location":"berth1"}}
                    {{"command":"place","location":"berth2"}}
                    Error Format:
                    {{"error":"unable to determine command"}}"""
                    
                    
"""Format:{{"command":realCommand, "argument_1":realArg1, "argument_2":realArg2}} and so on"""

#A preamble is the explanation to the LLM what the prompt is and what we are trying to have it do/return
def appendPreamble(promptBody: str)->str:
    prompt = f"{preamble}\nBody:{promptBody}"
    return prompt

"""
#sends the prompt to the LLM, catches and prints errors to the command line. If there was some kind of error returns None
def sendPromptGemini(prompt: str, geminiClient)->str:
    prompt = appendPreamble(prompt)
    response: str = None
    try:
        response = geminiClient.models.generate_content(
                    model=geminiModel,
                    contents=prompt
                    )
        
        return response
    except errors.APIError as e:
        print(f"Code: {e.code}\nMessage: {e.message}")
        return None

def sendPromptOpenAi(prompt: str, openAIClient)->str:
    prompt =  appendPreamble(promptBody=prompt)
    response = None
    try:
        response = openAIClient.chat.completions.create(
            model=openAIModel,
            messages=[
                    {"role": "system", "content":"You are to send the appropriate command"},
                    {"role": "user", "content": prompt}
            ],
            timeout=60.0
        )

        if response.choices and response.choices[0].message.content:
            return response.choices[0].message.content

    except Exception as e:
        print(f"Code:{e.status_code}\nMessage:{e.message}")

    return None
"""

def sendPromptPurdueGenAI(messagesList: List = None)->str:

    url = "https://genai.rcac.purdue.edu/api/chat/completions"
    headers = {
        "Authorization": f"Bearer {os.environ['GENAI_API_KEY']}",
        "Content-Type": "application/json",
    }
    body = {
    "model": purdueModel,
    "messages": messagesList,
    "stream": False,
    }

    try:
        response = requests.post(url, headers=headers, json=body, timeout=60)
        response.raise_for_status()
        return response.json()["choices"][0]["message"]["content"]

    except requests.exceptions.HTTPError as e:
        if e.response is not None and e.response.status_code == 429:
            print("Too many requests, max of 20 requests per minute")
            return "{\"error\": \"Too many requests, max of 20 requests per minute\"}"
        return json.dumps({"error": f"LLM service error: {e}"})
    except Exception as e:
        print(f"NLTC request failed: {e}")
        return json.dumps({"error": "Could not reach the LLM service"})

def toCommand(prompt: str)->str:
    response: str = ""
    validity: bool = False
    messageList: List = initMessageList(prompt)
    print(f"Start time: {time()}")
    tryCounter = 0
    #if response is invalid, retry while we are still getting responses from the model
    while(response != None and not validity):
        tryCounter += 1
        print(f"Attempt {tryCounter}: Sending prompt to Purdue GenAI")
        response = sendPromptPurdueGenAI(messagesList=messageList)
        
        validity, message = verifyCommand(response)

        #if the LLM cannot fulfill the request and returns an error, stop retrying
        if message.startswith("Error in response:"):
            return response
        
        # If the response is invalid, append it to the message list and ask the LLM to fix it
        if not validity:
            messageList = appendAssistantMessageList(messageList, response)
            messageList = appendUserMessageList(messageList, f"Please fix the following error with your response: {message}")
            #print(messageList)
        else:
            break

    print(f"End time: {time()}")
    return response

def initMessageList(prompt: str)->List:
    return [
        {"role": "system", "content": preamble},
        {"role": "user", "content": prompt}
    ]

def appendAssistantMessageList(messagesList: List, content: str)->List:
    messagesList.append({"role": "assistant", "content": content})
    return messagesList

def appendSystemMessageList(messagesList: List, content: str)->List:
    messagesList.append({"role": "system", "content": content})
    return messagesList

def appendUserMessageList(messagesList: List, content: str)->List:
    messagesList.append({"role": "user", "content": content})
    return messagesList

#verify that the response has a valid command and arguments. Returns true if valid
def verifyCommand(response: str)->Tuple[bool, str]:
    if (response == None):
        return (False, "Response is None")

    #verify that response is json
    respDict: dict = None
    try:
        respDict = json.loads(response)
    except json.JSONDecodeError as e:
        return (False, "Response is not valid JSON")

    #check for error message
    if "error" in respDict:
        return (False, f"Error in response: {respDict['error']}")

    #verify command values
    #list of commands alongside a list of arguments and their possible values
    commandList =  {"place":[("location", "berth1", "berth2", "berth3")]}

    usedArgs = []
    #verify the command exists
    respArgs = list(respDict.keys())[1:]#remove the command key from the list of arguments

    respCommand = respDict.get("command", None)
    #no command 
    if respCommand is None:
        return (False, "No command found in response")

    #unknown command
    if(respCommand not in commandList):
        return (False, f"Unknown command \"{respCommand}\"")

    validArgFound: bool = False
    #no arguments found for the command
    if not respArgs:
        return (False, f"No arguments found for \"{respCommand}\"")
    
    #verify arguments 
    for arg in respArgs:
        #iterate through all args and their values (for the found command)
        for possibleArg in commandList[respCommand]:
            #if valid arg is found
            if arg == possibleArg[0]:#actual arg is the first value in the tuple
                #cannot have duplicate args
                if arg in usedArgs:
                    return (False, f"Argument \"{arg}\" is listed twice")
                usedArgs.append(arg)
                validArgFound = True

                #verify the argument value is valid for this argument
                if respDict[arg] not in possibleArg[1:]:
                    return (False, f"Argument \"{arg}\" has invalid value")
        
    if(validArgFound):
        return (True, "Valid command")
    else:
        return (False, f"No valid argument found for \"{respCommand}\"")




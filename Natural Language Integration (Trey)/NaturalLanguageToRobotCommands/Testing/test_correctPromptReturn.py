import sys
from pathlib import Path
#this adds the main folder to the sys path and allows the import of NLTC
NLTC_Direct = Path(__file__).resolve().parent.parent
sys.path.append(str(NLTC_Direct))
import NaturalLangToCommand as NLTC
import time
import pytest
from typing import List, Tuple
"""
def generalRun():
    prompts = listTestPrompts()
    for i, prompt in enumerate(prompts):
        if(i % 20 == 0 and i != 0):
            time.sleep(60)  # Sleep for 60 seconds after every 20 prompts
        response = NLTC.toCommand(prompt)
        print(f"Prompt {i+1}: {prompt}\nResponse: {response}\n")
        print("--------------------------------------------------")
"""
def cleanPrompts(lines: List[str])->List[Tuple[str, str]]:
    promptsAndAnswers: List[(str, str)] = []
    for line in lines:
        prompt, correctAns = line.split("|")
        promptsAndAnswers.append((prompt.strip(), correctAns.strip()))
    return promptsAndAnswers

def assertCorrectAnswer(promptAnswers)->None:
    for prompt, correctAns in promptAnswers:
        LLM_Response = NLTC.toCommand(prompt=prompt)
        assert correctAns == LLM_Response
        #since we are only allowed 20 calls a min, we must throttle calls
        time.sleep(3.5)

########## TESTS + Fixtures ###########
#I may add more tests using the each set of prompts/answers, hence the fixture and single test set-up

#llm should reject prompt injections
@pytest.fixture
def promptInjection_promptAnswers()->List[Tuple[str, str]]:
    with open("prompts/injections.txt", "r") as promptFile:
        prompts = promptFile.readlines()

    #return a list of prompts and answer combos
    return cleanPrompts(prompts)

def test_rejectPromptInjection(promptInjection_promptAnswers):
    assertCorrectAnswer(promptAnswers=promptInjection_promptAnswers)

#tests if typical reasonable prompts get correct answers
@pytest.fixture
def validPrompts_promptAnswers()->List[Tuple[str, str]]:
    with open("prompts/validPrompts.txt", "r") as promptFile:
        prompts = promptFile.readlines()
    return cleanPrompts(prompts)

def test_validPrompts(validPrompts_promptAnswers):
    assertCorrectAnswer(promptAnswers=validPrompts_promptAnswers)


#tests if prompts that make sense but ask for something impossible (like asking for the cargo to be placed on berth4) to be rejected
@pytest.fixture
def invalidPrompts_promptAnswers()->List[Tuple[str, str]]:
    with open("prompts/invalidPrompts.txt", "r") as promptFile:
        prompts = promptFile.readlines()
    return cleanPrompts(prompts)

def test_invalidPrompts(invalidPrompts_promptAnswers):
    assertCorrectAnswer(promptAnswers=invalidPrompts_promptAnswers)

#tests if the LLM rejects nonsense
@pytest.fixture
def nonsensePrompts_promptAnswers()->List[Tuple[str, str]]:
    with open("prompts/nonsense.txt", "r") as promptFile:
        prompts = promptFile.readlines()
    return cleanPrompts(prompts)

def test_nonsensePrompts(nonsensePrompts_promptAnswers):
    assertCorrectAnswer(promptAnswers=nonsensePrompts_promptAnswers)

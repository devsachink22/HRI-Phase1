# NaturalLanguageToRobotCommands
This is a portion of an experiment where participants will be asked to aid a simulated robot (specifically an Astrobee) place cargo into different locations. This code specifically uses an LLM to convert natural human language into commands that the robot can understand.

# Environment
For context, we are using Purdue Lafayette's hosted LLMs that are free for students and faculty(I do not believe that they are available otherwise), 
there is not currently support for other LLMs. If you are a Purdue student then you can get an API key using: https://genai.rcac.purdue.edu/
Once you have signed in using your Purdue Credentials and are on the main chat page, click on your name in the bottom left corner. Then click "account" under 
the profile section. Then under the API key section at the bottom of the window create a new API key.

Otherwise:
Ubuntu 24.04 
python 3.8
Please take a look at NLTC_requirements.txt to see all of the libraries


# Run
1. Source venv or create one
    (if already created)
    source .venv/bin/activate
    or 
    (assumes that you have uv and python 3.8 installed in uv)
    uv venv --python 3.8 .venv 
    uv pip install -r NLTC_requirements.txt
    source .venv/bin/activate

2. export API key
    (in terminal)
    export GENAI_API_KEY="Your API key"

3. A: Run tests using pytest
    cd to the "Testing" folder
    pytest -v
    or 
    run pytest with whatever flags that you like
OR
3. B: Run Experiment
    psiturk server on 
    psiturk debug

    If you would like to run the Natural Language to Command experiment specifically you can use the link:
    http://localhost:22362/exp?assignmentId=debug_1&hitId=debug_1&workerId=debug_1&mode=debug&condition=9
    Note: Using this link is for debug features only, and in the database debug_1 is used in the data, if 
    you do not change these in the link for subsequent experiments those rows will be overwritten. 

    To end:
    psiturk server off
    deactivate

# Experiment Design
There are 12 conditions, a 3×4 design. Two things vary: how hard the memory game is, and how the robot asks for help. 

Memory game difficulty (n-back)

Conditions 0, 3, 6, 9 use the 0-back game: press the number currently shown.
Conditions 1, 4, 7, 10 use the 1-back game: press the number shown 1 back.
Conditions 2, 5, 8, 11 use the 2-back game: press the number shown 2 back.

Robot communication style (every 80 seconds)

Conditions 0, 1, 2 use the silent style, run by silentFunction. The robot just states "I think Berth 1 is blocked." It
    doesn't ask a question.
Conditions 3, 4, 5 use the yes/no style, run by myFunction. The robot asks something like "I think Berth 1 is blocked. 
    Can I put the bag on Berth 2?" and the participant answers.
Conditions 6, 7, 8 use the wh style, run by whFunction. The robot asks "I think Berth 1 is blocked. Where you want me 
    to put this bag?" This is the prompt that now has the text box.
Conditions 9, 10, 11 use natural language to command

# Future Fixes
Currently the model + program consistently succeed except for the valid prompts asking for the cargo to be placed on the left/right/middle ones

# Important Notes
Note: As of Oct 28, 2026, this code will actually be a integrated into Amazon Psiturk and be an independent repository.
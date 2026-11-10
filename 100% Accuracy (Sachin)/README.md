# Astrobee Robot Software
Astrobee's flight software performs vision-based localization, provides autonomous navigation, docking and perching, manages various sensors and actuators, and supports human-robot interaction with co-located astronauts via screen-based displays, light signaling, and sound. The flight software is hosted on each Astrobee's three internal single board computers and uses the open-source Robot Operating System (ROS) framework as message-passing middleware. It provides a high-level Astrobee Command API for controlling the robot and has multiple operating modes. It can execute a plan (command sequence), individual operator commands (teleoperation), or commands from guest science code running onboard Astrobee.

The Astrobee Robot Software simulator, built using ROS and Gazebo, enables the flight software to be evaluated without the need for robot hardware. The supporting tools include a tool that processes ISS imagery to build maps for Astrobee localization, along with many others.

# Environment
Ubuntu 24.04 
python 3.8

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

3. B: Run Experiment
    psiturk server on 
    psiturk debug

    If you would like to run the experiment you can use the link:
    http://localhost:22362/

    To end:
    psiturk server off
    deactivate

# Experiment Design
There are 9 conditions, a 3×3 design. Two things vary: how hard the memory game is, and how the robot asks for help. 

Memory game difficulty (n-back)

Conditions 0, 3, 6 use the 0-back game: press the number currently shown.
Conditions 1, 4, 7 use the 1-back game: press the number shown 1 back.
Conditions 2, 5, 8 use the 2-back game: press the number shown 2 back.

Robot communication style (every 80 seconds)

Conditions 0, 1, 2 use the silent style, run by silentFunction. The robot just states "I think Berth 1 is blocked." It
    doesn't ask a question.
Conditions 3, 4, 5 use the yes/no style, run by myFunction. The robot asks something like "I think Berth 1 is blocked. 
    Can I put the bag on Berth 2?" and the participant answers.
Conditions 6, 7, 8 use the wh style, run by whFunction. The robot asks "I think Berth 1 is blocked. Where you want me 
    to put this bag?" This is the prompt that now has the text box.

# Future Fixes
Currently the model + program consistently succeed except for the valid prompts asking for the cargo to be placed on the left/right/middle ones

# Important Notes
Note: As of Oct 28, 2026, this code will actually be a integrated into Amazon Psiturk and be an independent repository.
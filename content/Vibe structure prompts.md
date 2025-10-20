

 1. Research
2. Specification
3. Blueprint
4. Roadmap


## Research
Step 1
Context

Description

User

Job to be done

Research

APIs

Code libraries
## Specification
### Step 2 - o4 mini
Ask me one question at a time so we can develop a thorough, step-by-step spec for an idea. Each question should build on my previous answers, and our end goal is to have a detailed specification I can hand off to a developer. Let’s do this iteratively and dig into every relevant detail.

Remember, only one question at a time.

Here’s the idea:

IDEA

### Step 3
Now that we’ve wrapped up the brainstorming process, can you compile our findings into a comprehensive, developer-ready specification? Include all relevant requirements, architecture choices, data handling details, error handling strategies, and a testing plan so a developer can immediately begin implementation.

## Blueprint
### Step 4 -Claude 3.7
Draft a detailed, step-by-step blueprint for building this project. Then, once you have a solid plan, break it down into small, iterative chunks that build on each other. Look at these chunks and then go another round to break it into small steps. Review the results and make sure that the steps are small enough to be implemented safely with strong testing, but big enough to move the project forward. Iterate until you feel that the steps are right sized for this project.

From here you should have the foundation to provide a series of prompts for a code-generation LLM that will implement each step in a test-driven manner. Prioritize best practices, incremental progress, and early testing, ensuring no big jumps in complexity at any stage. Make sure that each prompt builds on the previous prompts, and ends with wiring things together. There should be no hanging or orphaned code that isn't integrated into a previous step.

Make sure to separate each prompt section and use prompting best practices. Use markdown.

Each prompt should be tagged as text using code tags. The goal is to output prompts, but context is important as well.

Make sure to write out all the prompts, shorten them if needed to ensure we have every prompt needed to build this entire project. Each prompt should stand alone and not reference other prompts.

## Road Map
### Step 5
Can you make a ’todo.md’ that I can use as a checklist? Be thorough.
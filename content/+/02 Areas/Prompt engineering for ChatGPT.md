---
up: "[[Prompts MOC]]"
related: 
created: 2024-09-13
tags: 
---




From Coursera course 
## TOC
  
# Contents 
- [Persona Pattern](Persona%20pattern.md) 
 - [Question refinement pattern](Question%20Refinement%20pattern.md)
 -  [Cognitive verifier pattern](Cognitive%20Verifier%20pattern.md) 
 -  [Audience persona pattern](Audience%20Persona%20pattern.md) 
 -  [[#Flipped interaction pattern]] 
 -  [[#Few shot prompting pattern]]
- [[#Template pattern]]
- [[#Meta language pattern]]
- [[#Recipe pattern]]
- [[#Alternative Approaches pattern]]
- [[#Outline expander pattern]]
- [[#Menu prompt pattern]]
- [[#Fact check list pattern]]
- [[#Tail Generation pattern]]
- [[#Semantic Filter pattern]]

### Persona pattern
 - prompt: Act as a [ROLE]
### Question  Refinement pattern
- Prompt: - From now on, whenever I ask a question, suggest a better version of the question and ask me if I would like to use it instead

### Cognitive verifier pattern
 - Prompt:  when you're asked a question, follow these rules:
Generate a number of additional questions that would help more accurately answer the question. Combine the answers to the individual questions to produce the final answer to the overall question.

### Audience persona pattern
 - prompt: Assume I am a [audience]
### Flipped interaction pattern
 - prompt: - I would like you to ask me questions to achieve [X]
- You should ask questions until condition [Y] is met or to achieve this goal (alternatively, forever)
- (Optional) ask me the questions one at a time, two at a time, ask me the first question, etc.
### Few shot prompting pattern
 - prompt: 
Chain of thought reasoning pattern
 - prompt:
https://arxiv.org/abs/2201.11903
ReAct prompting:
 - 
https://arxiv.org/abs/2210.03629

### Template pattern:
 - prompt: - I am going to provide a template for your output
- X is my placeholder for content
- Try to fit the output into one or more of the placeholders that I list
- Please preserve the formatting and overall template that I provide
- This is the template: PATTERN with PLACEHOLDERS
You will need to replace "X" with an appropriate placeholder, such as "CAPITALIZED WORDS" or "<PLACEHOLDER>". You will then need to specify a pattern to fill in, such as "Dear <FULL NAME>" or "NAME, TITLE, COMPANY".

### Meta language pattern
 - When I say X, I mean Y (or would like you to do Y)
###  Recipe pattern
 - I would like to achieve X
- I know that I need to perform steps A,B,C
- Provide a complete sequence of steps for me
- Fill in any missing steps
- (Optional) Identify any unnecessary steps
- Example: - I would like to purchase a house. I know that I need to perform steps make an offer and close on the house. Provide a complete sequence of steps for me. Fill in any missing steps.
###  Alternative Approaches pattern:
 - If there are alternative ways to accomplish a task X that I give you, list the best alternate approaches
- (Optional) compare/contrast the pros and cons of each approach
- (Optional) include the original way that I asked
- (Optional) prompt me for which approach I would like to use
- Example:- For anything that I ask you to write, determine the underlying problem that I am trying to solve and how I am trying to solve it. List at least one alternative approach to solve the problem and compare / contrast the approach with the original approach implied by my request to you.
- 
### Outline expander pattern:
 - Act as an outline expander.
- Generate a bullet point outline based on the input that I give you and then ask me for which bullet point you should expand on.
- Create a new outline for the bullet point that I select.
- At the end, ask me for what bullet point to expand next.
- Ask me for what to outline.
Examples:
- Act as an outline expander. Generate a bullet point outline based on the input that I give you and then ask me for which bullet point you should expand on. Each bullet can have at most 3-5 sub bullets. The bullets should be numbered using the pattern [A-Z].[i-v].[* through ****]. Create a new outline for the bullet point that I select. At the end, ask me for what bullet point to expand next. Ask me for what to outline.
### Menu prompt pattern
 - Whenever I type: X, you will do Y.
- (Optional, provide additional menu items) Whenever I type Z, you will do Q. 
- At the end, you will ask me for the next action.
Example:
 -Whenever I type: "add FOOD", you will add FOOD to my grocery list and update my estimated grocery bill. Whenever I type "remove FOOD", you will remove FOOD from my grocery list and update my estimated grocery bill. Whenever I type "save" you will list alternatives to my added FOOD to save money. At the end, you will ask me for the next action. Ask me for the first action.
###  Fact check list pattern:
- Generate a set of facts that are contained in the output
- The set of facts should be inserted at POSITION in the output
- The set of facts should be the fundamental facts that could undermine the veracity of the output if any of them are incorrect
Example:
- Whenever you output text, generate a set of facts that are contained in the output. The set of facts should be inserted at the end of the output. The set of facts should be the fundamental facts that could undermine the veracity of the output if any of them are incorrect.
###  Tail Generation pattern:
 - At the end, repeat Y and/or ask me for X.
Example:
-  Act as an outline expander. Generate a bullet point outline based on the input that I give you and then ask me for which bullet point you should expand on. Create a new outline for the bullet point that I select. At the end, ask me for what bullet point to expand next. Ask me for what to outline
###  Semantic Filter pattern:
- Filter this information to remove X
Example:
- Filter this email to remove redundant information.


Notes:
# [A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT](https://arxiv.org/abs/2302.11382 "A Prompt Pattern Catalog to Enhance Prompt Engineering with ChatGPT")

Jules White, Quchen Fu, Sam Hays, Michael Sandborn, Carlos Olea, Henry Gilbert, Ashraf Elnashar, Jesse Spencer-Smith, Douglas C. Schmidt

[https://arxiv.org/abs/2302.11382](https://arxiv.org/abs/2302.11382)

# [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/abs/2201.11903)

Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten Bosma, Brian Ichter, Fei Xia, Ed Chi, Quoc Le, Denny Zhou

[https://arxiv.org/abs/2201.11903](https://arxiv.org/abs/2201.11903)

# [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629)

Shunyu Yao, Jeffrey Zhao, Dian Yu, Nan Du, Izhak Shafran, Karthik Narasimhan, Yuan Cao

[https://arxiv.org/abs/2210.03629](https://arxiv.org/abs/2210.03629)

# [ChatGPT Prompt Patterns for Improving Code Quality, Refactoring, Requirements Elicitation, and Software Design](https://arxiv.org/abs/2303.07839)

Jules White, Sam Hays, Quchen Fu, Jesse Spencer-Smith, Douglas C. Schmidt

[https://arxiv.org/abs/2303.07839](https://arxiv.org/abs/2303.07839)

# [Follow Jules White's Research](https://www.magnum.io/people/jules.html)


**Instructions**: Anywhere that you see a placeholder like "<Fill in a List of Concepts>", please provide the requested information in the prompt. For example, if it says "<Fill in a List of Concepts>", you can replace the placeholder with something like "basic arithmetic operations".

"Prompt:' indicates what you would type into ChatGPT.

**Example Prompts:**

Prompt: Create examples of <Fill in a List of Concepts> that are expressed in terms of <List of Student Interests>

Prompt: Create examples of <Concept 1 and Concept 2> that are expressed in terms of <List of Student Interests> and help explain the difference between the two concepts.

Prompt: Create examples of <Concept 1> where there are special circumstances or exceptions to the rule.




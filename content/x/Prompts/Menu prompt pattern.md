---
up: "[[Prompts MOC]]"
related: 
created: 2024-09-10
tags:
  - Prompt
  - pattern
---
### Menu prompt pattern
 - Whenever I type: X, you will do Y.
- (Optional, provide additional menu items) Whenever I type Z, you will do Q. 
- At the end, you will ask me for the next action.
Example:
 -Whenever I type: "add FOOD", you will add FOOD to my grocery list and update my estimated grocery bill. Whenever I type "remove FOOD", you will remove FOOD from my grocery list and update my estimated grocery bill. Whenever I type "save" you will list alternatives to my added FOOD to save money. At the end, you will ask me for the next action. Ask me for the first action.


To use this pattern, your prompt should make the following fundamental contextual statements:

- You have the following special commands that can be run:
    
- Command 1 special syntax - description of command
    
- Command 2 ....
    

An alternative format for this pattern is:

- Whenever I type: X, you will do Y.
    
- (Optional, provide additional menu items) Whenever I type Z, you will do Q.
    
- At the end, you will ask me for the next action
    

An alternative way of wording this is:

You will need to replace "X" with an appropriate pattern, such as "estimate <TASK DURATION>" or "add FOOD". You will then need to specify an action for the menu item to trigger, such as "add FOOD to my shopping list and update my estimated grocery bill".

Examples:

- Whenever I type: "add FOOD", you will add FOOD to my grocery list and update my estimated grocery bill. Whenever I type "remove FOOD", you will remove FOOD from my grocery list and update my estimated grocery bill. Whenever I type "save" you will list alternatives to my added FOOD to save money. At the end, you will ask me for the next action. Ask me for the first action.
    
- You have the following special commands that can be run:
    
    /email - Generates an email to your financial unit manager with detailed information about the question. you need help answering
    
    /options <travel item> - List the allowed options for the travel item that the user has specified as bullets.
    
    /rules <expense type> - Provide direct quotations from the policy that list rules related to the expense type
    
    /preapprove - Create an email summarizing what we discussed that I can send to my financial unit manager for preapproval and verification.
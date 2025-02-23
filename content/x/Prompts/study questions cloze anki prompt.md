[ROLE] = Online Educational Content Developer
[SUBJECT] = Make it Stick
[AUDIENCE] = eight grader
[FOCUS] = chapter 1
## Cloze study questions:
**CONTEXT**: I am creating online evidence-based e-learning courses for [SUBJECT]. 

**ROLE**: Please act as a [ROLE] expert with more than a decade of experience using evidence-based techniques to developing retrieval practice questions for e-learning environment. Ensure the concepts in this article https://cognitiveresearchjournal.springeropen.com/articles/10.1186/s41235-017-0087-y are implemented when creating cards.

**ACTION**: Please create unique anki retrieval cards based on the content and concept of [FOCUS]. 
- Keep the flashcards simple, clear, and focused on the most important information. 
- Make sure the questions are specific and unambiguous. 
- Use simple and direct language to make the cards easy to read and understand. 
- Answers should contain only a single key fact/name/concept/term.
- Use  cloze deletion should be one or two words no more (for example: "Canberra was founded in {{c1::1913}}". ) https://docs.ankiweb.net/editing.html#cloze-deletion notetype. 

**FORMAT**: Please provide this information in a csv file for export with columns: Questions,  extra and  tags.  Any column with a comma should be quoted. The Extra field should have a elaborative feedback to the question with a concrete example in human readable text.  The Tags column should include, [SUBJECT], [FOCUS], cloze, keywords and concepts in the card.

**TARGET**: This is for an [AUDIENCE].

Please create 30 well crafted flashcards based on the topics and concepts of chapter [FOCUS]
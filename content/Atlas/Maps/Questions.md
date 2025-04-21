---
up:
  - "[[Dots]]"
collection:
  - "[[Maps]]"
  - "[[Views]]"
related:
  - "[[Quotes]]"
created: 2023-11-26
rank: 2
mapState:
  - 🟩
---
~ [[Dots]] 

> [!shapes] [[Things]] | [[Statements]] | [[People]] | [[Quotes]] | **[[Questions]]** 

This note collects all notes in the folder `Questions`, sorted most recently created. 

```dataview
TABLE WITHOUT ID
	choice(contains(file.path, "Atlas/Dots/Questions"),
		"❓ " + file.link,
	file.link) as "Questions",
 
 (date(today) - file.mday).day as "Last modified"

FROM "Atlas/Dots/Questions"

SORT file.mtime desc
```

---

For questions you want to resolve, go to the garden-related note: [[Question]].

---

Back to [[Dots]].
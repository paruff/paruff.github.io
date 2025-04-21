---
up:
  - "[[Dots]]"
collection:
  - "[[Maps]]"
  - "[[Views]]"
related:
  - "[[Things]]"
down:
  - "[[Questions]]"
  - "[[Quotes]]"
created: 2023-11-21
rank: 3.5
mapState:
  - 🟩
---
~ [[Dots]] 

> [!shapes] [[Things]] | **[[Statements]]** | [[People]] | [[Quotes]] | [[Questions]] 

This note collects all notes in the folder `Statements`, sorted most recently created.

```dataview
TABLE WITHOUT ID
	choice(contains(file.path, "Atlas/Dots/Statements"), 
		"📣 " + file.link, file.link) as "Statements",
	length(file.inlinks) as "Links"
		
FROM "Atlas/Dots/Statements"

SORT file.ctime desc, file.link asc

LIMIT 133
```

This is a coffeehouse of conversation—lean forward and bump elbows.

---

Back to [[Dots]] 


---


Shh, don't tell anyone, but here's a cool view that shows both Things and Statements in a single dual-column view: [[With our dots combined...]] 
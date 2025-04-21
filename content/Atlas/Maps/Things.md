---
up:
  - "[[Dots]]"
collection:
  - "[[Maps]]"
  - "[[Views]]"
related:
  - "[[Statements]]"
down:
  - "[[Concepts]]"
created: 2021-01-01
rank: 3
mapState:
  - 🟩
---
~ [[Dots]] 

> [!shapes] **[[Things]]** | [[Statements]] | [[People]] | [[Quotes]] | [[Questions]] 

This note collects all notes in the folder `Things`, sorted by last created.
```dataview
TABLE WITHOUT ID
	choice(contains(file.path, "Atlas/Dots/Things"), 
		"🧩 " + file.link, file.link) as "Things",
	length(file.inlinks) as "Links"
 
FROM "Atlas/Dots/Things"

SORT file.ctime desc

LIMIT 77
```

These "things" act as a cabinet of curiosities, each with a story. Consider adding a column for `rank` or even for `tags`.

```
 rank as Rank, 
 join(file.etags) as Tags
```

---

Back to [[Dots]] 

---


Shh, don't tell anyone, but here's a cool view that shows both Things and Statements in a single dual-column view: [[With our dots combined...]] 
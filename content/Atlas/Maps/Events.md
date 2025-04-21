---
up:
  - "[[Records]]"
collection:
  - "[[Maps]]"
  - "[[Collections]]"
related: 
created: 2025-03-19
rank: 3
---
~ [[Records]] 

> [!boxes]  **[[Events]]** | [[Ideas]] | [[Meetings]] | [[Nice Things]] 

This note collects all notes where the `collection` property says `Events`. 

```dataview
TABLE WITHOUT ID
	choice(contains(file.path, "Calendar/Records/Events"), 
		"🎪 " + file.link,
	file.link) as "Events",
	
	dateformat(created, "EEE, MMM dd, yyyy") as Date

WHERE
	contains(collection,this.file.link) and
	!contains(file.name, "Template")

SORT file.name desc

LIMIT 77
```

---

Back to [[Records]] 


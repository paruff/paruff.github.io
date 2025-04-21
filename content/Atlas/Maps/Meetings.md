---
up:
  - "[[Records]]"
collection:
  - "[[Maps]]"
  - "[[Collections]]"
related: 
created: 2023-11-21
rank: 1.5
mapState:
  - 🟩
---
~ [[Records]] 

> [!boxes]  [[Events]] | [[Ideas]] | **[[Meetings]]** | [[Nice Things]] 

This note collects all notes where the `collection` property says `Meeting`.

```dataview
TABLE WITHOUT ID
	choice(contains(file.path, "Calendar/Records/Meetings"), 
		"☎️ " + file.link,file.link) as "Meetings",
	one-liner as One-liner
WHERE
	contains(collection,link("Meetings")) and
	!contains(file.name, "Template")
SORT file.name desc
```

---

Back to [[Records]] 
---
collection:
  - "[[Collections]]"
  - "[[Maps]]"
created: 2023-11-27
rank: 1
mapState:
  - 🟩
updates: Updated query in template to properly show linked meetings
---
~ [[Dots]] 

This note collects all notes where the `collection` property says `Entities`.

```dataview
TABLE WITHOUT ID
	choice(contains(collection,link("Entities")), 
		"🛗 " + file.link,file.link) as "Entities",
	length(file.inlinks) as "Links"
WHERE
	contains(collection,link("Entities")) and
	!contains(file.name, "Template")
SORT rank desc, year asc
```

---
up: 
collection:
  - "[[Maps]]"
  - "[[Collections]]"
related: 
created: 2025-04-07
rank: 1.5
mapState:
  - 🟩
---
~ [[x]]

> [!ghost] **[[Packs]]** | [[Templates]] | [[Visuals]] 

Packs are a major part of modularizing the building and sharing of knowledge. The most important pack included in Ideaverse Pro 2 are the ACE Pack.

This note collects all notes where the `collection` property says `Packs`.

```dataview
TABLE WITHOUT ID
	choice(contains(file.path, "x/Packs"),
		"🎒 " + file.link,
	file.link) as "Packs",
	
	about as About
WHERE
	contains(collection,this.file.link) and
	!contains(file.name, "Template")
SORT file.name asc
LIMIT 55
```
 

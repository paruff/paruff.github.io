---
up:
  - "[[Maps]]"
collection:
  - "[[Collections]]"
  - "[[Maps]]"
related: 
created: 2024-07-07
rank: 4
mapState:
  - 🟩
version: "1.5"
---
~ [[Maps]]

> [!map] [[Collections]] | **[[Views]]** | [[Maps by Links]] | [[Maps by Type]] 

"View notes" show auto-updating, dynamic views of custom searches.

This note collects all notes where the `collection` property says `Views`.

```dataview
TABLE WITHOUT ID
	choice(contains(collection,link("Maps")),
		"🔭 " + file.link,
	file.link) as "Views",
	
	rank as Rank,
	join(mapState) as State
WHERE
	contains(collection,this.file.link) and
	!contains(file.name, "Template")
SORT mapState desc, rank desc
LIMIT 111
```

---
up: 
collection:
  - "[[Views]]"
  - "[[Maps]]"
related: 
created: 2025-04-07
rank: 2
mapState:
  - 🟩
---
~ [[Maps]]

> [!map] [[Collections]] | [[Views]] | **[[Maps by Rank]]** | [[Maps by Links]] 

This note shows all the maps in the ideaverse where the `collection` property has `Maps`, sorted by rank.
```dataview
TABLE WITHOUT ID 
	choice(contains(collection,link("Maps")),
		"🗺️ " + file.link,
	file.link) as "Maps",

rank as "Rank",

choice( contains(file.folder, "+"), "`" + file.folder + "`", file.folder ) as "Folder Path"

WHERE contains(collection,link("Maps")) 

SORT rank desc 

LIMIT 222
```
---
up: "[[Atlas]]"
collection:
  - "[[Maps]]"
  - "[[Collections]]"
related: 
created: 2023-11-21
rank: 5
mapState:
  - 🟩
---
~ [[Atlas]] 

> [!map] [[Collections]] | [[Views]] | [[Maps by Links]] | [[Maps by Type]] 

Maps of content help you ***gather, develop, and navigate ideas***. As you make and customize your maps, you are making sense of some part of the world that matters to you. This note shows all the maps in the ideaverse where the `collection` property has `Maps`, sorted by rank.

```dataview
TABLE WITHOUT ID 
	choice(contains(collection,link("Maps")),
		"🗺️ " + file.link,
	file.link) as "Maps",

rank as "Rank",

choice( contains(file.folder, "+"), "`" + file.folder + "`", file.folder ) as "Folder Path"

WHERE contains(collection,link("Maps")) 

SORT rank desc 

LIMIT 133
```


---

These are my favorite sensemaking maps in my ideaverse. This view shows when the `collection` property has `Maps` but NOT `Collections` or `Views`. This means I've manually made the links—making it more meaningful to me. Additionally, the rank is above `3.5`

```dataview
TABLE WITHOUT ID
	choice(contains(collection,link("Maps")),
		"🗺️ " + file.link,
	file.link) as "Maps",
	
rank as Rank,
join(mapState) as State,
length(file.inlinks) as "Links"

FROM "Atlas" or "Calendar"

WHERE contains(collection,link("Maps")) and !contains(collection,link("Collections")) and
!contains(collection,link("Views")) and
	rank > 3.5

SORT rank desc

LIMIT 77
```

---

Back to [[Home Pro]] 

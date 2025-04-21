---
up: 
collection:
  - "[[Views]]"
  - "[[Maps]]"
related: 
created: 2025-04-07
rank: 1
mapState:
  - 🟩
---
~ [[Maps]] 

> [!map] [[Collections]] | [[Views]] | [[Maps by Links]] | **[[Maps by Type]]** 

This note will cause headaches on how maps are technically classified, but it's also interesting to parse the differences between what's a simple map of content, and what is also a "view," and what is also a "collection." You should probably just ignore this note.

KEY: 🗃️ Collection | 🔭 View | 🗺️ Map

```dataview
TABLE WITHOUT ID
    choice(contains(collection,link("Maps")) AND contains(collection,link("Collections")) AND contains(collection,link("Views")),
        "🗺️ 🔭 🗃️ " + file.link,
        choice(contains(collection,link("Maps")) AND contains(collection,link("Collections")),
            "🗺️ 🗃️ " + file.link,
            choice(contains(collection,link("Maps")) AND contains(collection,link("Views")),
                "🗺️ 🔭 " + file.link,
                choice(contains(collection,link("Collections")) AND contains(collection,link("Views")),
                    "🗃️ 🔭 " + file.link,
                    choice(contains(collection,link("Maps")),
                        "🗺️ " + file.link,
                        choice(contains(collection,link("Views")),
                            "🔭 " + file.link,
                            choice(contains(collection,link("Collections")),
                                "🗃️ " + file.link,
                                file.link
                            )
                        )
                    )
                )
            )
        )
    ) as "Maps",
    
	length(file.inlinks) as "Inlinks",

	length(file.outlinks) as "Outlinks",

    rank as Rank
    
WHERE 
    contains(collection,link("Maps")) OR
    contains(collection,link("Views")) OR
    contains(collection,link("Collections"))
SORT rank desc, file.name asc
LIMIT 333
```

---

Back to [[Maps]] 
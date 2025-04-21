---
up: 
collection:
  - "[[Views]]"
  - "[[Maps]]"
related: 
created: 2025-04-09
rank: 4.5
mapState:
  - 🟩
---
~ [[Home Pro]] 

> [!trees] [[Plant]] | [[Cultivate]] | [[Question]] | [[Repot]] | [[Revitalize]] | [[Revisit]] — [[Architect]] ⤴️

When you are in a note and have a feeling that you want to return to it, just add a `garden` tag in that note. It doesn't matter if you have a fuzzy or clear reason. Then through the following Garden views, you will be able to find it later (and make serendipitous connections along the way).

KEY: 🌱 Plant | ☘️ Cultivate | 🪴 Repot | 🍄 Question | 💦 Revitalize | 🍁 Revisit

```dataview
TABLE WITHOUT ID
	choice(contains(file.tags, "#garden/plant"),
        "🌱 " + file.link,
	choice(contains(file.tags, "#garden/cultivate"),
		"☘️ " + file.link,
	choice(contains(file.tags, "#garden/question"),
		"🍄 " + file.link,
	choice(contains(file.tags, "#garden/repot"),
		"🪴 " + file.link,
	choice(contains(file.tags, "#garden/revitalize"),
		"💦 " + file.link,
	choice(contains(file.tags, "#garden/revisit"),
		"🍁 " + file.link,
	file.link)))))) as "Notes to Garden",
    
    join(filter(file.tags, (t) => startswith(t, "#garden/")), ", ") as "Garden Tags",
    
    choice(contains(file.folder, "+"),
	    "`" + file.folder + "`",
	    regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1")
		) as "Parent Folder"

FROM #garden

WHERE !contains(file.name, "Master Key (Garden Tags)")

SORT file.mtime DESC

LIMIT 77
```


---

Go back to [[ARC Framework]] 


---



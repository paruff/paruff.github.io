---
up:
  - "[[Home Pro]]"
collection:
  - "[[Maps]]"
  - "[[Views]]"
created: 2023-08-19
rank: 4.5
cssclasses: 
mapVisibility: Public
mapState:
  - 🟨
---
~ [[Efforts]]

> [!mountain] [[Areas]] | **[[Projects]]** | [[Works]] 

> [!training] [[Active Projects|Active]] | [[Simmering Projects|Simmering]] | [[Sleeping Projects|Sleeping]] 

Keep your priorities in order. Quickly adjust your bandwidth as needed. Rerank often. 

This view shows your top-ranked projects, where the `rank` is above `2`, along with their current level of intensity. 

```dataview
TABLE WITHOUT ID
	choice(contains(file.path, "Efforts/Projects/Active"),
		"⚗️ " + file.link,
	choice(contains(file.path, "Efforts/Projects/Simmering"),
		"⚗️ " + file.link,
		choice(contains(file.path, "Efforts/Projects/Sleeping"),
		"⚗️ " + file.link,
	file.link))) as "Top Ranked Projects",

	rank as "Rank",
	
    regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1") as "Level of Intensity"
	

FROM "Efforts/Projects"

WHERE rank > 2

SORT rank desc

LIMIT 17
```

---

Back to [[Efforts]] 
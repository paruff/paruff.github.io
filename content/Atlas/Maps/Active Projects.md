---
up:
  - "[[Home Pro]]"
collection:
  - "[[Maps]]"
  - "[[Views]]"
created: 2023-08-19
rank: 4.5
mapState:
  - 🟨
---
~ [[Efforts]]

> [!mountain] [[Areas]] | **[[Projects]]** | [[Works]] 

> [!training] **[[Active Projects|Active]]** | [[Simmering Projects|Simmering]] | [[Sleeping Projects|Sleeping]] 

These are active projects that have most of your attention.  Aim for 3-11. Prioritize by rank.

``` dataview
TABLE WITHOUT ID
	choice(contains(file.path, "Efforts/Projects/Active"),
		"⚗️ " + file.link,
	file.link) as "Active Projects",

rank as "Rank"

FROM "Efforts/Projects/Active"

SORT rank desc

LIMIT 33
```


---
up:
  - "[[Home Pro]]"
collection:
  - "[[Maps]]"
  - "[[Views]]"
created: 2023-08-19
rank: 2.5
mapState:
  - 🟨
---
~ [[Efforts]]

> [!mountain] [[Areas]] | **[[Projects]]** | [[Works]] 

> [!training] [[Active Projects|Active]] | **[[Simmering Projects|Simmering]]** | [[Sleeping Projects|Sleeping]] 

These are allowed to subconsciously simmer in the background guilt-free. Aim for < 15.

``` dataview
TABLE WITHOUT ID
	choice(contains(file.path, "Efforts/Projects/Simmering"),
		"⚗️ " + file.link,
	file.link) as "Simmering Projects",

rank as "Rank"

FROM "Efforts/Projects/Simmering"

SORT rank desc

LIMIT 33
```

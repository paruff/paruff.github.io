---
up:
  - "[[Home Pro]]"
collection:
  - "[[Maps]]"
  - "[[Views]]"
created: 2023-08-19
tags:
  - architect/build
rank: 1
mapState:
  - 🟨
---
~ [[Efforts]]

> [!mountain] [[Areas]] | **[[Projects]]** | [[Works]] 

> [!training] [[Active Projects|Active]] | [[Simmering Projects|Simmering]] | **[[Sleeping Projects|Sleeping]]** 

These projects are barely on the plane of awareness, but can easily be reawakened. 

``` dataview
TABLE WITHOUT ID
	choice(contains(file.path, "Efforts/Projects/Sleeping"),
		"⚗️  " + file.link,
	file.link) as "Sleeping Projects",

rank as "Rank"

FROM "Efforts/Projects/Sleeping"

SORT rank desc

LIMIT 33
```



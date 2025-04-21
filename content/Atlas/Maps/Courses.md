---
collection:
  - "[[Collections]]"
  - "[[Maps]]"
related: 
created: 2022-01-01
rank: 1.5
mapState:
  - 🟩
---
~ [[Sources]]

> [!kindling] [[Books]] | [[Movies]] | [[Series]] | **[[Courses]]** 

If a note has a `collection` property that says `Courses`, it will show up below.

Courses sorted by YearXP:

```dataview
TABLE WITHOUT ID
	yearXP as YearXP,
	file.link as Title,
	join(list(by)) as By
WHERE
	contains(collection,this.file.link) and
	!contains(file.name, "Template")
SORT yearXP desc
```


---

Back to [[Sources]] 
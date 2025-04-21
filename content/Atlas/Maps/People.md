---
up:
  - "[[Dots]]"
collection:
  - "[[Maps]]"
  - "[[Collections]]"
created: 2023-10-12
rank: 2.5
mapState:
  - 🟩
---
~ [[Dots]] 

> [!shapes] [[Things]] | [[Statements]] | **[[People]]** | [[Quotes]] | [[Questions]] 

This displays notes where the `collection` property says `People`, sorted by date born. 

```dataview
TABLE WITHOUT ID
 choice(contains(file.path, "Atlas/Dots/People"), 
		"👤 " + file.link, file.link) as "People",
	lifespan as "Lifespan",
	finalAge as "Final Age",
	join(list(peopleDomain)) as Domain
WHERE
	contains(collection,this.file.link) and
	!contains(file.name, "Template") and
	!contains(file.name, "Master Key (People)")
SORT lifespan asc, file.name asc
```

---

Ideaverse Pro also comes with [[People ROARs]] for managing your "Reach-Outs And Replies".

---

Back to [[Dots]] 
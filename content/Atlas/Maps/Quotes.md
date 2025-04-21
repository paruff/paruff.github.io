---
up:
  - "[[Dots]]"
collection:
  - "[[Maps]]"
  - "[[Collections]]"
related:
  - "[[Questions]]"
created: 2023-11-24
rank: 3.5
mapState:
  - 🟩
---
~ [[Dots]] 

> [!shapes] [[Things]] | [[Statements]] | [[People]] | **[[Quotes]]** | [[Questions]] 

This note renders all notes where their `collection` property has `Quotes`, sorted by `rank`.

```dataview
TABLE WITHOUT ID 

choice(contains(file.path, "Atlas/Dots/Quotes"), 
"💬 " + file.link, file.link) as "Quotes", 

join(list(by)) as By, 
rank as Rank 

WHERE contains(collection,this.file.link) and !contains(file.name, "Template") 

SORT rank desc, by asc

LIMIT 77
```

---

# Inline Quotes

Not all quotes are their own dedicated note, but if you type `quote::` at the beginning of a line, then the following view will render it.
```dataview
TABLE WITHOUT ID
	file.link as Note,
	join(quote, "
	") as Quote
WHERE
	quote and
	!contains(file.name, "Template")
SORT rank desc, by asc
```

---

Back to [[Dots]] 
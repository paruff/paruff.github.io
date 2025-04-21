---
up:
  - "[[Sources]]"
collection:
  - "[[Collections]]"
  - "[[Maps]]"
related:
  - "[[Books]]"
  - "[[Movies]]"
  - "[[Series]]"
created: 2022-01-01
rank: 3
mapState:
  - 🟩
cssclasses: []
---
~ [[Sources]]

> [!kindling] [[Books]] | **[[Movies]]** | [[Series]] | [[Courses]] 

> [!film] [[Movies Highest Rated]] | [[Movies with Creatives and Genre]] | [[Movies, Extra Views]] 

This note collects all notes where the `collection` property says `Movies`. Be sure to check out the additional movie views above.

```dataview
TABLE WITHOUT ID
	year as Year,
	"![|60](" + image + ")" as Poster,
	file.link as Title,
	rating as Rating,
	yearXP as YearXP,
	yearXPL as YearXPL
WHERE
	contains(collection,this.file.link) and
	!contains(file.name, "Template")
SORT year asc
```
---

Back to [[Sources]] 


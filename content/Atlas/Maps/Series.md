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
rank: 2
mapState:
  - 🟩
cssclasses: []
---
~ [[Sources]]

> [!kindling] [[Books]] | [[Movies]] | **[[Series]]** | [[Courses]] 

This note collects all notes where the `collection` property says `Series`.

# Series sorted by Ratings & Year Experienced

Series sorted by Rating, with Covers & YearXP.

```dataview
TABLE WITHOUT ID
	years as Years,
	"![|60](" + image + ")" as Poster,
	file.link as Title,
	rating as Rating,
	yearXP as YearXP,
	yearXPL as YearXPL
WHERE
	contains(collection,this.file.link) and
	!contains(file.name, "Template")
SORT rating desc, year asc
```

# Series sorted by Ratings, with People and Genres

This "works in progress" but they should give you some ideas for your own series groups and series shelves.
```dataview
TABLE WITHOUT ID
	years as Years,
	"![|60](" + image + ")" as Poster,
	file.link as Title,
	rating as Rating,
	join(list(writer, actors)) as People,
	join(list(showGenre)) as Genre
WHERE
	contains(collection,this.file.link) and
	!contains(file.name, "Template")
SORT rating desc, year asc
```

---

Back to [[Sources]] 
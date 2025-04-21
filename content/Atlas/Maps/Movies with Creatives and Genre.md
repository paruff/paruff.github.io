---
up: 
related: 
created: 2025-04-07 15:19
cssclasses: []
---
~ [[Sources]] 

> [!kindling] [[Books]] | **[[Movies]]** | [[Series]] | [[Courses]] 

> [!film] [[Movies Highest Rated]] | **[[Movies with Creatives and Genre]]** | [[Movies, Extra Views]] 
> 

# Movies sorted by Rating, with People and Genres

This view is sorted by my personal rating and adds some of the creative people involved and the genre.

```dataview
TABLE WITHOUT ID
	year as Year,
	"![|60](" + image + ")" as Poster,
	file.link as Title,
	rating as Rating,
	join(list(director, actors)) as People,
	join(list(showGenre)) as Genre
WHERE
	contains(collection,[[Movies]]) and
	!contains(file.name, "Template")
SORT rating desc, year desc
```

---

Back to [[Movies]] 
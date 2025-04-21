---
up: 
related: 
created: 2025-04-07 15:19
cssclasses: []
---
~ [[Sources]] 

> [!kindling] [[Books]] | **[[Movies]]** | [[Series]] | [[Courses]] 

> [!film] [[Movies Highest Rated]] | [[Movies with Creatives and Genre]] | **[[Movies, Extra Views]]** 
> 

These are "works in progress" but they should give you some ideas for your own movie groups and movie shelves.

# Groundhog Day
Shows sorted by the `showGroup` property of "groundhog day"

```dataview
TABLE WITHOUT ID
	year as Year,
	"![|60](" + image + ")" as Poster,
	file.link as Title,
	rating as Rating,
	join(list(director, actors)) as People
WHERE
	contains(showGroup,"groundhog day")
SORT rating desc, year desc
```

# MAX Testosterone!
Shows sorted by showGroup of "max testosterone"

```dataview
TABLE WITHOUT ID
	year as Year,
	"![|60](" + image + ")" as Poster,
	file.link as Title,
	rating as Rating,
	join(list(director, actors)) as People
WHERE
	contains(showGroup,"max testosterone")
SORT rating desc, year desc
```

# Adaptations
Shows sorted by showGroup of `adaptation`

```dataview
TABLE WITHOUT ID
	year as Year,
	"![|60](" + image + ")" as Poster,
	file.link as Title,
	rating as Rating,
	join(list(director, actors)) as People
WHERE
	contains(showGroup,"adaptation")
SORT rating desc, year desc
```


---

Back to [[Movies]] 
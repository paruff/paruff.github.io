---
up:
  - "[[Sources]]"
in:
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
cssclasses:
  - wide-page
---

> [!video]- Click here to view the related video lessons
> - [How to Use the Movies Collection](https://community.linkingyourthinking.com/c/ideaverse-pro/sections/146181/lessons/508102)

This note collects all notes where the `in` property says `Movies`.
# My Top Movie Shelf

> [!multi-column]
> 
> > [!Wand] 5.7+
> > ```dataview
> > TABLE WITHOUT ID
> > 	file.link as Movie,
> > 	"![|100](" + image + ")" as Poster,
> > 	rating as Rating
> > WHERE
> > 	contains(in,this.file.link) and
> > 	rating >= 5.7 and
> > 	!contains(file.name, "Template")
> > SORT rating desc, year asc
> > ```
> 
> > [!Zap] 5.4 - 5.6
> > ```dataview
> > TABLE WITHOUT ID
> > 	file.link as Movie,
> > 	"![|75](" + image + ")" as Poster,
> > 	rating as Rating
> > WHERE
> > 	contains(in,this.file.link) and
> > 	rating < 5.7 and
> > 	rating > 5.3 and
> > 	!contains(file.name, "Template")
> > SORT rating desc, year asc
> > ```
> 
> > [!Waves] 5.1 - 5.3
> > ```dataview
> > TABLE WITHOUT ID
> > 	file.link as Movie,
> > 	"![|50](" + image + ")" as Poster,
> > 	rating as Rating
> > WHERE
> > 	contains(in,this.file.link) and
> > 	rating < 5.4 and
> > 	rating > 5 and
> > 	!contains(file.name, "Template")
> > SORT rating desc, year asc
> > ```
> 
> 
> > [!Gem] 5's
> > ```dataview
> > TABLE WITHOUT ID
> > 	file.link as Movie,
> > 	"![|40](" + image + ")" as Poster,
> > 	rating as Rating
> > WHERE
> > 	contains(in,this.file.link) and
> > 	rating = 5 and
> > 	!contains(file.name, "Template")
> > SORT rating desc, year asc
> > ```


# Movies sorted by Ratings

> [!Film]- # Movies sorted by Ratings, with Covers & YearXP
> ```dataview
> TABLE WITHOUT ID
> 	year as Year,
> 	"![|60](" + image + ")" as Poster,
> 	file.link as Title,
> 	rating as Rating,
> 	yearXP as YearXP,
> 	yearXPL as YearXPL
> WHERE
> 	contains(in,this.file.link) and
> 	!contains(file.name, "Template")
> SORT rating desc, year desc
> ```

> [!Film]- # Movies sorted by Ratings, with People and Genres
> ```dataview
> TABLE WITHOUT ID
> 	year as Year,
> 	"![|60](" + image + ")" as Poster,
> 	file.link as Title,
> 	rating as Rating,
> 	join(list(director, actors)) as People,
> 	join(list(showGenre)) as Genre
> WHERE
> 	contains(in,this.file.link) and
> 	!contains(file.name, "Template")
> SORT rating desc, year desc
> ```

# Extra
These are "works in progress" but they should give you some ideas for your own movie groups and movie shelves. 

> [!Film]- ### Shows sorted by showGroup of "groundhog day"
> ```dataview
> TABLE WITHOUT ID
> 	year as Year,
> 	"![|60](" + image + ")" as Poster,
> 	file.link as Title,
> 	rating as Rating,
> 	join(list(director, actors)) as People
> WHERE
> 	contains(showGroup,"groundhog day") 
> SORT rating desc, year desc
> ```

> [!multi-column]
> 
> > [!Film]+ # MAX Testosterone!
> > Shows sorted by showGroup of "max testosterone"
> > ```dataview
> > TABLE WITHOUT ID
> > 	year as Year,
> > 	"![|60](" + image + ")" as Poster,
> > 	file.link as Title,
> > 	rating as Rating,
> > 	join(list(director, actors)) as People
> > WHERE
> > 	contains(showGroup,"max testosterone") 
> > SORT rating desc, year desc
> > ```
> 
> 
> 
> > [!Film]+ ### Adaptations
> > Shows sorted by showGroup of `adaptation`
> > ```dataview
> > TABLE WITHOUT ID
> > 	year as Year,
> > 	"![|60](" + image + ")" as Poster,
> > 	file.link as Title,
> > 	rating as Rating,
> > 	join(list(director, actors)) as People
> > WHERE
> > 	contains(showGroup,"adaptation") 
> > SORT rating desc, year desc
> > ```

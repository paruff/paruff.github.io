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
rank: 2
mapState:
  - 🟩
cssclasses:
  - wide-page
---

> [!video]- Click here to view the related video lessons
> - [How to Use the Series Collection](https://community.linkingyourthinking.com/c/ideaverse-pro/sections/146181/lessons/513567)

This note collects all notes where the `in` property says `Series`.

# Series sorted by Ratings

> [!Waves]+ Series sorted by Ratings, with Covers & YearXP
> ```dataview
> TABLE WITHOUT ID
> 	years as Years,
> 	"![|60](" + image + ")" as Poster,
> 	file.link as Title,
> 	rating as Rating,
> 	yearXP as YearXP,
> 	yearXPL as YearXPL
> WHERE
> 	contains(in,this.file.link) and
> 	!contains(file.name, "Template")
> SORT rating desc, year asc
> ```


# Extra
These are "works in progress" but they should give you some ideas for your own series groups and series shelves. 

> [!Waves]- Series sorted by Ratings, with People and Genres
> ```dataview
> TABLE WITHOUT ID
> 	years as Years,
> 	"![|60](" + poster + ")" as Poster,
> 	file.link as Title,
> 	rating as Rating,
> 	join(list(writer, actors)) as People,
> 	join(list(showGenre)) as Genre
> WHERE
> 	contains(in,this.file.link) and
> 	!contains(file.name, "Template")
> SORT rating desc, year asc
> ```


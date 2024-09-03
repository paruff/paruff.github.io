---
up:
  - "[[Home Pro Basic]]"
in:
  - "[[Collections]]"
  - "[[Views]]"
  - "[[Maps]]"
created: 2020-06-01
rank: 3
mapState:
  - 🟩
---
This is where I keep tabs on some of the sources I have encountered. 

What "sources" should you track? 

I've tracked various sources over the years, including *books, movies, songs, research papers, plays, paintings, quotes, videos, speeches, poems, tweets, articles, and newsletters*. 

> [!book]- ## Books
> [[Books]] sorted by `Ratings` & `YearXP`. 
> ```dataview
> TABLE WITHOUT ID
> 	year as Year,
> 	"![|60](" + image + ")" as Cover,
> 	file.link as Title,
> 	join(list(by)) as Author,
> 	yearXP as YearXP,
> 	rating as Rating
> WHERE
> 	contains(in,link("Books")) and
> 	!contains(file.name, "Template")
> SORT rating desc, year asc
> ```

> [!video]- ## Movies
[[Movies]] sorted by Ratings, with Covers & YearXP
> ```dataview
> TABLE WITHOUT ID
> 	year as Year,
> 	"![|60](" + image + ")" as Poster,
> 	file.link as Title,
> 	rating as Rating,
> 	yearXP as YearXP,
> 	yearXPL as YearXPL
> WHERE
> 	contains(in,link("Movies")) and
> 	!contains(file.name, "Template")
> SORT rating desc, year desc
> ```

> [!Waves]- ## Series
> [[Series]] sorted by Ratings, with Covers & YearXP
> ```dataview
> TABLE WITHOUT ID
> 	years as Years,
> 	"![|60](" + image + ")" as Poster,
> 	file.link as Title,
> 	rating as Rating,
> 	yearXP as YearXP,
> 	yearXPL as YearXPL
> WHERE
> 	contains(in,link("Series")) and
> 	!contains(file.name, "Template")
> SORT rating desc, year asc
> ```

---

> [!Script]- ## ALL SOURCES by `in` property
> This is a simple data view collecting any note where the `in:` property links to `[[Sources]]`. The default view is sorted by year, to give a chronological view of all sources. This can be nice to see them in a different context.
> 
> ```dataview
> TABLE WITHOUT ID
>  year as "Year",
>  file.link as Source,
>  join(file.etags) as Tags
>  
> WHERE contains(in,link("Sources")) and !contains(file.name, "Template")
> 
> SORT year asc
> 
> LIMIT 333
> ```

> [!Script]- ## ALL SOURCES by folder
> This is a simple data view pulling anything from the **Sources** folder. The default view is sorted by year, to give a chronological view of all sources. This is nice to see them in a different context of sorts.
> 
> ```dataview
> TABLE WITHOUT ID
>  year as "Year",
>  file.link as Source,
>  join(file.etags) as Tags
>  
> FROM "Atlas/Sources" and -#x/readme 
> 
> SORT year asc
> ```

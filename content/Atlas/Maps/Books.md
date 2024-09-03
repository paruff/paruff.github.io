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
rank: 1
mapState:
  - 🟩
cssclasses:
  - wide-page
---

> [!video]- Click here to view the related video lessons
> - [How to Use the Books Collection](https://community.linkingyourthinking.com/c/ideaverse-pro/sections/146181/lessons/513565)

This note collects all notes where the `in` property says `Books`.

> [!book]+ ## Books
> Books sorted by `Ratings` & `YearXP`
> ```dataview
> TABLE WITHOUT ID
> 	year as Year,
> 	"![|60](" + image + ")" as Cover,
> 	file.link as Title,
> 	join(list(by)) as Author,
> 	yearXP as YearXP,
> 	rating as Rating
> WHERE
> 	contains(in,this.file.link) and
> 	!contains(file.name, "Template")
> SORT rating desc, year asc
> ```


# Extra
These are "works in progress" but they should give you some ideas for your own book groups and bookshelves. 

> [!book]- Books by Type, Category, Group
> For those wondering how to take advantage of all those properties that book notes have, here is an example. Remember, just because you can, doesn't mean you should. 
> ```dataview
> TABLE WITHOUT ID
> 	year as Year,
> 	file.link as Title,
> 	bookCategory as Category,
> 	join(list(bookGroup)) as Group,
> 	join(list(bookLCSH)) as LCSH,
> 	bookType as Type
> WHERE
> 	contains(in,this.file.link) and
> 	!contains(file.name, "Template")
> SORT bookCategory, desc, year desc
> ```

> [!book]- Books by Status as "Reading"
> ```dataview
> TABLE WITHOUT ID
> 	year as Year,
> 	"![|60](" + image + ")" as Cover,
> 	file.link as Title,
> 	bookCategory as Category,
> 	bookType as Type
> WHERE
> 	contains(in,this.file.link) and
> 	bookStatus = "reading" and
> 	!contains(file.name, "Template")
> SORT bookCategory, desc, year desc
> ```

---
up:
  - "[[Statements]]"
in:
  - "[[Collections]]"
  - "[[Maps]]"
created: 2023-11-24
rank: 2
mapState:
  - 🟩
---

> [!video]- Click here to view the related video lessons
> - [How to Use the Quotes Collection](https://community.linkingyourthinking.com/c/ideaverse-pro/sections/146181/lessons/513564)

This note collects all notes where their `in` property has `Quotes`.

> [!Keaton]+ # Quotes
> ```dataview
> TABLE WITHOUT ID
> 	file.link as Quote,
> 	join(list(by)) as By,
> 	rank as Rank
> WHERE
> 	contains(in,this.file.link) and
> 	!contains(file.name, "Template")
> SORT rank desc, by asc
> ```

If a quote isn't in its own dedicated note, you can instead prefix it with `quote::` to show in the results below:

> [!Keaton]+ # Inline Quotes
> ```dataview
> TABLE WITHOUT ID
> 	join(quote, "
> 	") as Quote,
> 	file.link as From
> WHERE
> 	quote and
> 	!contains(file.name, "Template")
> SORT rank desc, by asc
> ```
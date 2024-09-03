---
up:
  - "[[Things]]"
in:
  - "[[Collections]]"
  - "[[Maps]]"
created: 2023-11-26
rank: 3.5
mapState:
  - 🟩
---

> [!video]- Click here to view the related video lessons
> - [How to Use the Concepts Collection](https://community.linkingyourthinking.com/c/ideaverse-pro/sections/146181/lessons/513559)

This note collects all notes where the `in` property says `Concepts`. Notice the "Says" property. One of the most underrated and LYT-like things you can do is to personify any concept you come across. If it could utter a single line, what what it say?

> [!aperture]+ ## Concepts by rank and what they say
> ```dataview
> TABLE WITHOUT ID
> 	file.link as Concept,
> 	says as Says,
> 	rank as Rank
> WHERE
> 	contains(in,this.file.link) and
> 	!contains(file.name, "Template")
> SORT rank desc, file.link asc
> ```

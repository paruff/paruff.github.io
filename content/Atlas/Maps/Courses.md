---
in:
  - "[[Collections]]"
  - "[[Maps]]"
related: 
created: 2022-01-01
rank: 1.5
mapState:
  - 🟩
---
This note passively looks at the properties of all notes.

If a note has a `in` property that says `Courses`, it will show up below.


> [!book]+ Courses sorted by YearXP
> ```dataview
> TABLE WITHOUT ID
> 	yearXP as YearXP,
> 	file.link as Title,
> 	join(list(by)) as By
> WHERE
> 	contains(in,this.file.link) and
> 	!contains(file.name, "Template")
> SORT yearXP desc
> ```
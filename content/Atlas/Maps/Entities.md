---
in:
  - "[[Collections]]"
  - "[[Maps]]"
created: 2023-11-27
rank: 1
mapState:
  - 🟩
updates: Updated query in template to properly show linked meetings
---

> [!video]- Click here to view the related video lessons
> - [How to Use the Meetings & Entities Collection](https://community.linkingyourthinking.com/c/ideaverse-pro/sections/146181/lessons/513568)

This note collects all notes where the `in` property says `Entities`.

> [!industry]+ # Entities
> ```dataview
> TABLE WITHOUT ID
> 	file.link as Note
> WHERE
> 	contains(in,this.file.link) and
> 	!contains(file.name, "Template")
> SORT rank desc, year asc
> ```

---
up:
  - "[[People Map]]"
in:
  - "[[Collections]]"
  - "[[Maps]]"
created: 2023-10-12
rank: 2.5
mapState:
  - 🟩
cssclasses:
  - wide-page
---

> [!video]- Click here to view the related video lessons
> - [How to Use the People Collection](https://community.linkingyourthinking.com/c/ideaverse-pro/sections/146181/lessons/513560)

This note collects all notes where the `in` property says `People`. The views provided focus on prominent people so you can get plenty of ideas on how to do cultural sensemaking.

Ideaverse Pro also comes with [[People ROARs]] for managing your "Reach-Outs And Replies".

> [!contact]+ # People by date born
> ```dataview
> TABLE WITHOUT ID
> 	file.link as People,
> 	lifespan as "Lifespan",
> 	finalAge as "Final Age",
> 	join(list(peopleDomain)) as Domain
> WHERE
> 	contains(in,this.file.link) and
> 	!contains(file.name, "Template")
> SORT lifespan asc, file.name asc
> ```

> [!contact]- # People by first name
> ```dataview
> TABLE WITHOUT ID
> 	file.link as People,
> 	lifespan as "Lifespan",
> 	finalAge as "Final Age",
> 	join(list(peopleDomain)) as Domain
> WHERE
> 	contains(in,this.file.link) and
> 	!contains(file.name, "Template")
> SORT file.name asc
> ```

> [!contact]- # People by date born, with images
> ```dataview
> TABLE WITHOUT ID
> 	file.link as People,
> 	"![|60](" + image + ")" as Image,
> 	lifespan as "Lifespan",
> 	finalAge as "Final Age",
> 	join(list(peopleDomain)) as Domain
> WHERE
> 	contains(in,this.file.link) and
> 	!contains(file.name, "Template")
> SORT lifespan asc, file.name asc
> ```

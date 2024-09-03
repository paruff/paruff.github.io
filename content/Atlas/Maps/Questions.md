---
up:
  - "[[Statements]]"
in:
  - "[[Collections]]"
  - "[[Maps]]"
created: 2023-11-26
rank: 2
mapState:
  - 🟩
---

> [!video]- Click here to view the related video lessons
> - [How to Use the Questions Collection](https://community.linkingyourthinking.com/c/ideaverse-pro/sections/146181/lessons/513563)

 This note collects all notes where the `in` property says `Questions`.

> [!Question]+ ## Questions
> ```dataview
> TABLE WITHOUT ID
> 	file.link as Questions,
> 	(date(today) - file.cday).day as "Days wondered"
> WHERE
> 	contains(in,this.file.link) and
> 	!contains(file.name, "Template")
> SORT "days wondered" asc, year asc
> ```


---


> [!Question]- #### Questions with `#note/question`
> Ultimately, get this down to zero.
> 
> ``` dataview
> TABLE WITHOUT ID
>  file.link as "Questions across the ideaverse",
>  (date(today) - file.cday).day as "Days officially wondering"
> 
> FROM #note/question❔ and -#on/readme 
> 
> SORT file.cday asc
> ```


> [!question]- #### Questions based on folders
> ```dataview
> TABLE WITHOUT ID
>  file.link as "Questions",
>  (date(today) - file.cday).day as "Days alive"
>  
> FROM "Atlas/x/Questions"
> 
> SORT file.ctime desc
> ```





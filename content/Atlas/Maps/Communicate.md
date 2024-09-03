---
up:
  - "[[Home Pro Basic]]"
in:
  - "[[Views]]"
  - "[[Maps]]"
related:
  - "[[Add]]"
  - "[[Relate]]"
created: 2022-01-01
rank: 2
mapState:
  - 🟩
---
This **Communicate** note is a place to track your various *outputs*.

Below are simple examples using the tag `output` to track my, well, outputs. 

This is enough to get you started. Over time, you should customize your views.

> [!Script]- ##### Newsletters
> ```dataview
> TABLE WITHOUT ID
>  file.link as "",
>  created as "Published"
>  
> FROM #output/newsletter and -#x/readme
> 
> SORT created desc
>  ```

> [!Watch]- ##### Videos on Deck
> This filters for `#output/youtube◻️` with a rank above `3`. This may be empty for Ideaverse Pro, but it's not for Nick's personal ideaverse.
> 
> ```dataview
> TABLE WITHOUT ID
>  file.link as "",
>  rank as "Rank"
> 
> FROM #output/youtube◻️ 
> 
> WHERE rank > 3
> 
> SORT rank desc
> ```

> [!Video]- ##### Premiered Youtube Videos
> ```dataview
> TABLE WITHOUT ID
>  file.link as "",
>  premiered as "Premiered"
>  
> FROM #output/youtube☑️  and -#x/readme
> 
> SORT created desc
>  ```

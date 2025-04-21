---
collection:
  - "[[Collections]]"
  - "[[Maps]]"
related:
  - "[[Things]]"
down:
  - "[[Questions]]"
  - "[[Quotes]]"
created: 2023-11-21
rank: 3.5
mapState:
  - 🟩
cssclasses:
  - wide-page
---
~ [[Dots]] 

> [!shapes] [[Things]] | [[Statements]] | [[People]] | [[Quotes]] 

Sometimes in the conversations that happen behind the scenes that elicit strange new avenues of insight.

> [!multi-column]
> ```dataview
> TABLE WITHOUT ID
>  choice(contains(file.path, "Atlas/Dots/Quotes"), 
> 		"💬 " + file.link, file.link) as "Quotes"
>  
> FROM "Atlas/Dots/Quotes"
> 
> SORT file.ctime desc
> 
> LIMIT 44
> ```
> ```dataview
> TABLE WITHOUT ID
>  choice(contains(file.path, "Atlas/Dots/Things"), 
> 		"🧩 " + file.link, file.link) as "Things"
>  
> FROM "Atlas/Dots/Things"
> 
> SORT file.ctime desc
> 
> LIMIT 55
> ```
> 
> ```dataview
> TABLE WITHOUT ID
>  choice(contains(file.path, "Atlas/Dots/People"), 
> 		"👤 " + file.link, file.link) as "People"
>  
> FROM "Atlas/Dots/People"
> 
> SORT file.ctime desc
> 
> LIMIT 77
> ```
> 
> ```dataview
> TABLE WITHOUT ID
>  choice(contains(file.path, "Atlas/Dots/Statements"), 
> 		"📣 " + file.link, file.link) as "Statements"
>  
> FROM "Atlas/Dots/Statements"
> 
> SORT file.ctime desc
> 
> LIMIT 37
> ```

---

Sometimes in the conversations that happen behind the scenes that elicit strange new avenues of insight.

---

Back to [[Dots]] 


---
up:
  - "[[Home Pro Basic]]"
collection:
  - "[[Views]]"
  - "[[Maps]]"
related:
  - "[[Relate]]"
  - "[[Communicate]]"
created: 2022-01-01
rank: 3
mapState:
  - 🟩
---
~ [[ARC Framework]] 

> [!rainbow] ARC » **[[Add]]** | [[Relate]] | [[Communicate]] 

This note isn't just an inbox. It's a cooling pad 🧊. Thoughts come in hot. But after a few days, they cool down. When cooler thoughts prevail, you can better prioritize. Cool? 

This view looks at the 10 newest notes in your `+` folder. As you process each note, try to write something in your own words and link it to another note.  Then, you can move the note to the best folder, and likely never have to move it again.  

``` dataview
TABLE WITHOUT ID
 file.link as "Newest added notes",
 (date(today) - file.cday).day as "Days alive"

FROM "+" and -#x/readme 

SORT file.cday desc

LIMIT 10
```


---

If you want to encounter some new things, check out: [🐦](https://www.twitter.com) or [📚](https://readwise.io/lyt/).  

---

To discover placeholder notes with a lot of links already, go to [[Idea Accretion]].
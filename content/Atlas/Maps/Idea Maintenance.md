---
up:
  - "[[Home Pro Basic]]"
in:
  - "[[Views]]"
  - "[[Maps]]"
related:
  - "[[Idea Accretion]]"
  - "[[Idea Development]]"
  - "[[Idea Maintenance]]"
created: 2023-10-15
rank: 3
mapState:
  - 🟩
cssclasses:
  - wide-page
---
A healthy ideaverse will have notes that you'll want to do something to, but it may not be specific or too urgent. Here are my favorite time-tested examples.

> [!Multi-column] 
> > [!connect]+ #### Notes to refactor across the ideaverse
> > All notes with `#note/refactor🪓`. Limit `10`
> > 
> > ``` dataview
> > TABLE WITHOUT ID
> >  file.link as "Notes",
> >  (date(today) - file.mday).day as "Days since last evolved"
> > 
> > FROM #note/refactor🪓 
> > 
> > SORT file.name asc
> > 
> > LIMIT 10
> > 
> > ```
> 
> > [!blocks]+ #### Notes to tidy across the ideaverse
> > All notes with `#note/tidy🧹`. Limit `10`
> > 
> > ``` dataview
> > TABLE WITHOUT ID
> >  file.link as "Notes",
> >  (date(today) - file.mday).day as "Days since last evolved"
> > 
> > FROM #note/tidy🧹 
> > 
> > SORT file.name asc
> > 
> > LIMIT 10
> > 
> > ```

> [!Multi-column] 
> > [!recycle]+ #### Notes to revisit across the ideaverse
> > All notes with `#note/revisit🔎`. Limit `10`
> > 
> > ``` dataview
> > TABLE WITHOUT ID
> >  file.link as "Notes",
> >  (date(today) - file.mday).day as "Days since last evolved"
> > 
> > FROM #note/revisit🔎 
> > 
> > SORT file.name asc
> > 
> > LIMIT 10
> > 
> > ```
> 
> > [!calendar]+ #### Dusty notes across the ideaverse
> > The oldest unchanged notes. Limit `10`
> > ``` dataview
> > TABLE WITHOUT ID
> >  file.link as "Notes",
> >  (date(today) - file.mday).day as "Days since last encounter"
> > 
> > FROM "Atlas"
> > 
> > SORT file.mtime asc
> > 
> > LIMIT 10
> > ```

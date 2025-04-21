---
up: 
collection:
  - "[[Maps]]"
  - "[[Views]]"
related: 
created: 2025-04-12 15:15
rank: 1.5
---
~ [[ARC Framework]] 

One more view...Here are the dustiest notes in your Atlas. These are the oldest unchanged notes. Limited to `10`.

``` dataview
TABLE WITHOUT ID
 file.link as "Dusty Notes in the Atlas",
 (date(today) - file.mday).day as "Days since last encounter"

FROM "Atlas"

SORT file.mtime asc

LIMIT 10
```



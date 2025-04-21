---
up:
  - "[[Calendar]]"
collection:
  - "[[Maps]]"
  - "[[Views]]"
related: 
created: 2025-04-07 19:27
---
~ [[Calendar]] 

> [!calendar] **[[Days]]** | [[Records]] | [[Reviews]] 

Showing the most recent daily notes, based on how they are named.
```dataview
TABLE WITHOUT ID
    file.link as "Daily Notes",
    regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1") as "Parent Folder"

FROM "Calendar/Days"

WHERE regextest("\\d{4}-\\d{2}-\\d{2}", file.name)

SORT regexreplace(file.name, ".*?(\\d{4}-\\d{2}-\\d{2}).*", "$1") DESC

LIMIT 40
```


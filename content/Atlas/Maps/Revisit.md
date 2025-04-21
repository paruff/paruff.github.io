---
up:
  - "[[Garden]]"
collection:
  - "[[Maps]]"
  - "[[Views]]"
related: 
created: 2025-04-01
---
 ~ [[Garden]] 

> [!trees] [[Plant]] | [[Cultivate]] | [[Question]] | [[Repot]] | [[Revitalize]] | **[[Revisit]]** — [[Architect]] ⤴️

If you've tagged notes with `#garden/revisit` then you want to **reread to these notes.** You may want the reminder. Or a refresher. Or you just want to reread it for whatever reason because you know that not all that glitters is gold and some of the dustiest notes hold the most treasure. 

The following view is sorted by most recently modified.

```dataview
TABLE WITHOUT ID
    "🍁 " + file.link as "Notes to revisit in the ideaverse",
    
    choice(
        contains(file.folder, "+"),
        "`" + file.folder + "`",
        regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1")
    ) as "Parent Folder"

FROM #garden/revisit

SORT file.mtime DESC

WHERE !contains(file.name, "Master Key (Garden Tags)")

LIMIT 77
```

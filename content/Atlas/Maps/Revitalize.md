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

> [!trees] [[Plant]] | [[Cultivate]] | [[Question]] | [[Repot]] | **[[Revitalize]]** | [[Revisit]] — [[Architect]] ⤴️

If you've tagged notes with `#garden/revitalize` then you want to **revise these notes in a way that gives them new life.** This is often a feeling that something is stuck in the note and if you just rewrote or restructured it, then it would provide you with more clarity and value. 

The following view is sorted by most recently modified.

```dataview
TABLE WITHOUT ID
    "💦 " + file.link as "Notes to revitalize in the ideaverse",
    
    choice(
        contains(file.folder, "+"),
        "`" + file.folder + "`",
        regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1")
    ) as "Parent Folder"

FROM #garden/revitalize

SORT file.mtime DESC

WHERE !contains(file.name, "Master Key (Garden Tags)")

LIMIT 77
```

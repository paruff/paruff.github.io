---
up:
  - "[[Garden]]"
collection:
  - "[[Maps]]"
  - "[[Views]]"
related:
  - "[[Questions]]"
created: 2025-04-01
---
 ~ [[Garden]] 

> [!trees] [[Plant]] | [[Cultivate]] | **[[Question]]** | [[Repot]] | [[Revitalize]] | [[Revisit]] — [[Architect]] ⤴️

If you've tagged notes with `#garden/question` then you want to **reflect on the questions in these notes.** This might mean using the questions as inspiration or to reflect and ruminate more deeply on the thoughts that these questions provoke. 

The following view is sorted by most recently modified.

```dataview
TABLE WITHOUT ID
    "🍄 " + file.link as "Notes with questions in the ideaverse",
    
    choice(
        contains(file.folder, "+"),
        "`" + file.folder + "`",
        regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1")
    ) as "Parent Folder"

FROM #garden/question

SORT file.mtime DESC

WHERE !contains(file.name, "Master Key (Garden Tags)")

LIMIT 77
```

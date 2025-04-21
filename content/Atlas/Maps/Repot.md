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

> [!trees] [[Plant]] | [[Cultivate]] | [[Question]] | **[[Repot]]** | [[Revitalize]] | [[Revisit]] — [[Architect]] ⤴️

If you've tagged notes with `#garden/repot` then you want to **refactor these notes by splitting or reformatting them.** This often looks like cutting a specific section of a daily note and pasting the content into a brand new note with a clear title. 

The following view is sorted by most recently modified.

```dataview
TABLE WITHOUT ID
    "🪴 " + file.link as "Notes to repot in the ideaverse",
    
    choice(
        contains(file.folder, "+"),
        "`" + file.folder + "`",
        regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1")
    ) as "Parent Folder"

FROM #garden/repot

WHERE !contains(file.name, "Master Key (Garden Tags)")

SORT file.mtime DESC

LIMIT 77
```

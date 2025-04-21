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

> [!trees] [[Plant]] | **[[Cultivate]]** | [[Question]] | [[Repot]] | [[Revitalize]] | [[Revisit]] — [[Architect]] ⤴️

If you've tagged notes with `#garden/cultivate` then you want to **develop these notes further.** This might mean adding more thoughts, context, links, sources, or adding more value to it in some way. You might also make new remarks—clarifying, critiquing, or expanding on the ideas inside. 

The following view is sorted by most recently modified.

```dataview
TABLE WITHOUT ID
    "☘ " + file.link as "Notes to cultivate in the ideaverse",
    
    choice(
        contains(file.folder, "+"),
        "`" + file.folder + "`",
        regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1")
    ) as "Parent Folder"

FROM #garden/cultivate

SORT file.mtime DESC

WHERE !contains(file.name, "Master Key (Garden Tags)")

LIMIT 77
```

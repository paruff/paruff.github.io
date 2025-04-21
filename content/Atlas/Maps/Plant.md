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

> [!trees] **[[Plant]]** | [[Cultivate]] | [[Question]] | [[Repot]] | [[Revitalize]] | [[Revisit]] — [[Architect]] ⤴️

If you've tagged notes with `#garden/plant`, you probably made them in a rush, but you want to remind yourself to **connect these notes to the rest of your ideaverse.** 

The following view is sorted by most recently modified.

```dataview
TABLE WITHOUT ID
    "🌱 " + file.link as "Notes to plant in the ideaverse",
    
    choice(contains(file.folder, "+"),
	    "`" + file.folder + "`",
	    regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1")
		) as "Parent Folder"

FROM #garden/plant

SORT file.mtime DESC

WHERE !contains(file.name, "Master Key (Garden Tags)")

LIMIT 77
```


---


Did you know? In the original starter kits from LYT, thse notes were affectionately called BOAT  These [[BOAT notes]] are *lonely boats floating in an empty ocean*. All you need to do is tether them to other notes.
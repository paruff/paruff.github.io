---
up: 
collection:
  - "[[Views]]"
  - "[[Maps]]"
related: 
created: 2025-04-10
tags:
  - architect/build
rank: 1
---
~ [[Architect]] 

> [!scale] **[[Build]]** | [[Renovate]] — [[Garden]] ⤵️

When you have a newer or mostly unfinished map of content that needs some work, you might give it the tag `architect/build`. The following view is sorted by most recently modified.

```dataview
TABLE WITHOUT ID
    "🧱 " + file.link as "Notes to build in the ideaverse",
    
    choice(contains(file.folder, "+"),
	    "`" + file.folder + "`",
	    regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1")
		) as "Parent Folder"

FROM #architect/build 

SORT file.mtime DESC

WHERE !contains(file.name, "Master Key (Architect Tags)")

LIMIT 77
```


---

Back to [[Architect]] 
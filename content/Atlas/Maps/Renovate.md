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

> [!scale] [[Build]] | **[[Renovate]]** — [[Garden]] ⤵️

When you have a older map of content or one that you feel needs some sort of update, you might give it the tag `architect/renovate`. The following view is sorted by most recently modified.

```dataview
TABLE WITHOUT ID
	choice(contains(file.tags, "#architect/renovate"),
		"🪜 " + file.link,
	file.link) as "Notes to Architect",
    
    join(filter(file.tags, (t) => startswith(t, "#architect/")), ", ") as "Architect Tags",
    
    choice(contains(file.folder, "+"),
	    "`" + file.folder + "`",
	    regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1")
		) as "Parent Folder"

FROM #architect/renovate 

WHERE !contains(file.name, "Master Key (Architect Tags)")

SORT file.mtime DESC

LIMIT 77
```


---

Back to [[Architect]] 
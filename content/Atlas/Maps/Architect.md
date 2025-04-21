---
up: 
collection:
  - "[[Views]]"
  - "[[Maps]]"
related: 
created: 2025-04-10
tags: []
rank: 1
---
~ [[Home Pro]] 

> [!scale] [[Build]] | [[Renovate]] — [[Garden]] ⤵️

When you have a map of content that needs some work, just add an `architect` tag in that note. Then through the following Architect views, you will be able to find the note when you need it.

KEY: 🧱 Build | 🪜 Renovate

```dataview
TABLE WITHOUT ID
	choice(contains(file.tags, "#architect/build"),
        "🧱 " + file.link,
	choice(contains(file.tags, "#architect/renovate"),
		"🪜 " + file.link,
	file.link)) as "Notes to Architect",
    
    join(filter(file.tags, (t) => startswith(t, "#architect/")), ", ") as "Architect Tags",
    
    choice(contains(file.folder, "+"),
	    "`" + file.folder + "`",
	    regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1")
		) as "Parent Folder"

FROM #architect

WHERE !contains(file.name, "Master Key (Architect Tags)")

SORT file.mtime DESC

LIMIT 77
```



---

Back to [[Home Pro]] 
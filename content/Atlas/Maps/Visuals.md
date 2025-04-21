---
up: 
related: 
created: 2025-04-10 09:57
---
~ [[x]]

> [!ghost] [[Packs]] | [[Templates]] | **[[Visuals]]** 

Visuals can hold all sorts of files. Images, canvas files, PDFs, and my favorite: excalidraw drawings. As such, this following view looks for a specific property that all excalidraw drawings have, `excalidraw-plugin`, and displays the results below:

```dataview 
TABLE WITHOUT ID 
	choice(contains(file.path, "x/Visuals"),
		"🖼️ " + file.link,
	file.link) as "Excalidraw Drawings",

dateformat(file.mtime, "MMM yyyy") as "Modified",
dateformat(file.ctime, "MMM yyyy") as "Created"

WHERE contains(excalidraw-plugin,"") 
and !contains(file.name, "Template") 
and !contains(file.name, "excalibrain") 

SORT file.mtime desc 

LIMIT 155
```


---
up:
  - "[[Calendar]]"
collection:
  - "[[Maps]]"
  - "[[Views]]"
related: 
created: 2025-03-19
---
~ [[Calendar]] 

> [!calendar] [[Days]] | **[[Records]]** | [[Reviews]] 

> [!boxes]  [[Events]] | [[Ideas]] | [[Meetings]] | [[Nice Things]] 

Showing all notes in the Records folders if it has a name with the date like `YYYY-MM-DD`. 
```dataview
TABLE WITHOUT ID
	choice(contains(file.path, "Calendar/Records/Events"), 
		"🎪 " + file.link,
	choice(contains(file.path, "Calendar/Records/Ideas"), 
		"💡 " + file.link,
	choice(contains(file.path, "Calendar/Records/Logs"), 
		"🪵 " + file.link,
	choice(contains(file.path, "Calendar/Records/Meetings"),
		"☎️ " + file.link,
	choice(contains(file.path, "Calendar/Records/Nice Things"),
		"🌈 " + file.link,
	file.link))))) as "Records",
    
    regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1") as "Parent Folder"

FROM "Calendar/Records"

WHERE 
    regextest("\\d{4}-\\d{2}-\\d{2}", file.name)

SORT regexreplace(file.name, ".*?(\\d{4}-\\d{2}-\\d{2}).*", "$1") DESC

LIMIT 44
```



---


If you are curious, here's [[how to remove the emojis from the rendered views]].


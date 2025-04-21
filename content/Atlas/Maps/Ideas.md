---
up:
  - "[[Records]]"
collection:
  - "[[Maps]]"
  - "[[Collections]]"
related: 
created: 2025-03-19
---
~ [[Records]] 

> [!boxes]  [[Events]] | **[[Ideas]]** | [[Meetings]] | [[Nice Things]] 

Showing the latest dates in

```dataview
TABLE WITHOUT ID
	choice(contains(file.path, "Calendar/Records/Ideas"), 
		"💡 " + file.link,
	file.link) as "Ideas",
	
	dateformat(created, "EEE, MMM dd, yyyy") as Date

WHERE
	contains(collection,this.file.link) and
	!contains(file.name, "Template")

SORT file.name desc

LIMIT 77
```




---
up:
  - "[[Home Pro]]"
collection:
  - "[[Collections]]"
  - "[[Views]]"
  - "[[Maps]]"
created: 2023-08-19
tags:
  - architect/renovate
rank: 4.5
mapState:
  - 🟩
---
~ [[Home Pro]] 

> [!mountain] [[Areas]] | [[Projects]] | [[Works]] 

Keep your priorities in order. Quickly adjust your bandwidth as needed. Rerank often.

This view combines your top Areas, Projects, and Works—and sorts them by rank.

KEY:  – Areas | ⚗️ Projects | 🎨 Works

```dataview
TABLE WITHOUT ID
	choice(contains(file.path, "Efforts/Areas"),
		" –  " + file.link,
	choice(contains(file.path, "Efforts/Projects/Active"),
		"⚗️ " + file.link,
	choice(contains(file.path, "Efforts/Projects/Simmering"),
		"⚗️ " + file.link,
	choice(contains(file.path, "Efforts/Projects/Sleeping"),
		"⚗️ " + file.link,
	choice(contains(file.path, "Efforts/Works"),
		"🎨 " + file.link,
	file.link))))) as "Top Efforts",
	
	rank as "Rank"

FROM "Efforts/Projects" or "Efforts/Areas" or "Efforts/Works"

WHERE rank > 2

SORT rank desc

LIMIT 22
```

---


Back to [[Home Pro]] 
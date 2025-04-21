---
up: 
collection:
  - "[[Maps]]"
  - "[[Views]]"
  - "[[Collections]]"
created: 2023-11-30
tags:
  - architect/build
rank: 4
mapVisibility: TBD
mapState:
  - 🟨
---
~ [[Efforts]] 

> [!mountain] [[Areas]] | [[Projects]] | **[[Works]]** 

Works are things we create. This note represents the third step in the ARC Framework, [[Communicate]], and shows both works you've shared and works in progress. 

The following collection shows works in progress (WIPs), sorted by rank. 

KEY: 🖋️ Articles | 🗞️ Newsletters | 🎤 Talks | 📹 Videos

```dataview
TABLE WITHOUT ID
	choice(contains(file.path, "Efforts/Works/Articles"), 
		"🖋️ " + file.link,
	choice(contains(file.path, "Efforts/Works/Artifacts"), 
		"💠 " + file.link,
	choice(contains(file.path, "Efforts/Works/Lessons"), 
		"📓 " + file.link,
	choice(contains(file.path, "Efforts/Works/Lyrics"),
		"🎵 " + file.link,
	choice(contains(file.path, "Efforts/Works/Newsletters"),
		"🗞️ " + file.link,
	choice(contains(file.path, "Efforts/Works/Slides"),
		"🛝 " + file.link,
	choice(contains(file.path, "Efforts/Works/Talks"),
		"🎤 " + file.link,
	choice(contains(file.path, "Efforts/Works/Videos"),
		"📹 " + file.link,
choice(contains(file.path, "Efforts/Works/Walkthroughs"),
		"🥾 " + file.link,
	file.link))))))))) as "Works in Progress",
	
    rank as "Rank",

	regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1") as "Parent Folder"

WHERE rank and contains(collection,[[Works]]) 

SORT rank DESC

LIMIT 11
```



---



# All Shared Works

Here is a list of all shared works, sorted by the most recent `published` date.

```dataview
TABLE WITHOUT ID
	choice(contains(file.path, "Efforts/Works/Articles"), 
		"🖋️ " + file.link,
	choice(contains(file.path, "Efforts/Works/Artifacts"), 
		"💠 " + file.link,
	choice(contains(file.path, "Efforts/Works/Lessons"), 
		"📓 " + file.link,
	choice(contains(file.path, "Efforts/Works/Lyrics"),
		"🎵 " + file.link,
	choice(contains(file.path, "Efforts/Works/Newsletters"),
		"🗞️ " + file.link,
	choice(contains(file.path, "Efforts/Works/Slides"),
		"🛝 " + file.link,
	choice(contains(file.path, "Efforts/Works/Talks"),
		"🎤 " + file.link,
	choice(contains(file.path, "Efforts/Works/Videos"),
		"📹 " + file.link,
choice(contains(file.path, "Efforts/Works/Walkthroughs"),
		"🥾 " + file.link,
	file.link))))))))) as "Shared Works",
	
    published as "Published"
    
FROM "Efforts/Works"

SORT published DESC

LIMIT 55
```

---


Back to [[Efforts]] 
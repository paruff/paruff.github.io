---
up:
  - "[[Home Pro]]"
related: 
created: 2025-04-06 18:45
---
~ [[Home Pro]] 

> [!globe] [[Dots]] | [[Maps]] | [[Sources]] 

The atlas is a folder and a headspace dedicated to ideas and knowledge. 

Below are the most recently created notes in the **Atlas** folder.

```dataview
TABLE WITHOUT ID
	choice(contains(file.path, "Atlas/Dots/Things"), 
		"🧩 " + file.link,
	choice(contains(file.path, "Atlas/Dots/Statements"), 
		"📣 " + file.link,
	choice(contains(file.path, "Atlas/Dots/People"), 
		"👤 " + file.link,
	choice(contains(file.path, "Atlas/Dots/Quotes"),
		"💬 " + file.link,
	choice(contains(file.path, "Atlas/Dots/Questions"),
		"❓ " + file.link,
	choice(contains(file.path, "Atlas/Dots/x"),
		"𝔁 " + file.link,
	choice(contains(file.path, "Atlas/Maps"),
		"🗺️ " + file.link,
    choice(contains(file.path, "Atlas/Sources/Books"), 
        "📚 " + file.link,
    choice(contains(file.path, "Atlas/Sources/Clippings"), 
        "✂ " + file.link,
    choice(contains(file.path, "Atlas/Sources/Courses"), 
        "⛳️ " + file.link,
    choice(contains(file.path, "Atlas/Sources/Games"),
        "🎮 " + file.link,
    choice(contains(file.path, "Atlas/Sources/Papers"),
        "🔬 " + file.link,
    choice(contains(file.path, "Atlas/Sources/Shows"),
        "📺 " + file.link,
    choice(contains(file.path, "Atlas/Sources/Songs"),
        "🎵 " + file.link,
    choice(contains(file.path, "Atlas/Sources/Talks"),
        "🎤 " + file.link,
    choice(contains(file.path, "Atlas/Sources/x"),
        "𝙓 " + file.link,
	file.link)))))))))))))))) as "Atlas Notes",
    
    regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1") as "Parent Folder",
	
	length(file.inlinks) as "Links"


FROM "Atlas"

SORT file.ctime desc

LIMIT 77
```

---

Back to [[Home Pro]] 

---
up:
  - "[[Atlas]]"
collection:
  - "[[Maps]]"
  - "[[Views]]"
created: 2020-06-01
rank: 3
mapState:
  - 🟩
---
~ [[Atlas]] 

> [!kindling] [[Books]] | [[Movies]] | [[Series]] | [[Courses]] | [[Clippings]] 

This is where I keep tabs on some of words and works I have encountered that are interesting or important to me in some way.

What "sources" should you track? I've tracked various sources over the years, including _books, movies, songs, research papers, plays, paintings, quotes, videos, speeches, poems, tweets, articles, and newsletters_.

This is a simple data view pulling anything from the **Sources** folder. The default view is sorted by year, giving a nice—and sometime profound—chronological view of all sources. 

```dataview
TABLE WITHOUT ID
	year as "Year",
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
        file.link))))))))) as "Sources",
    
    regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1") as "Parent Folder"

FROM "Atlas/Sources" and -#x/readme

SORT year desc

LIMIT 77
```

---



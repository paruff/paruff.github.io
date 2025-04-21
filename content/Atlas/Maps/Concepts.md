---
up:
  - "[[Things]]"
collection:
  - "[[Maps]]"
  - "[[Collections]]"
created: 2023-11-26
rank: 3.5
mapState:
  - 🟩
---
~ [[Things]]

This note collects all notes where the `collection` property says `Concepts`. Notice the "Says" property. One of the most underrated and LYT-like things you can do is to personify any concept you come across. If it could utter a single line, what what it say?

The following concepts are sorted by rank.

```dataview
TABLE WITHOUT ID
	file.link as Concept,
	says as Says,
	rank as Rank

WHERE
	contains(collection,this.file.link) and
	!contains(file.name, "Template")

SORT rank desc, file.link asc

LIMIT 77
```

---
up:
  - "[[Sources]]"
collection:
  - "[[Collections]]"
  - "[[Maps]]"
  - "[[Books]]"
related:
  - "[[Books]]"
  - "[[Movies]]"
  - "[[Series]]"
created: 2022-01-01
rank: 1
mapState:
  - 🟩
cssclasses:
---
~ [[Sources]] 

> [!kindling] **[[Books]]** | [[Movies]] | [[Series]] | [[Courses]] 

This note collects all notes where the `collection` property says `Books`, sorted by `Rating`.

```dataview
TABLE WITHOUT ID
	year as Year,
	"![|60](" + image + ")" as Cover,
	file.link as Title,
	join(list(by)) as Author,
	yearXP as YearXP,
	rating as Rating
WHERE
	contains(collection,this.file.link) and
	!contains(file.name, "Template")
SORT rating desc, year asc
```

---

# Books by Category

For those wondering how to take advantage of all those properties that book notes have, here is an example of organizing by `bookCategory`.

```dataview
TABLE WITHOUT ID
	year as Year,
	file.link as Title,
	bookCategory as Category
WHERE
	contains(collection,this.file.link) and
	!contains(file.name, "Template")
SORT bookCategory, desc, year desc
```

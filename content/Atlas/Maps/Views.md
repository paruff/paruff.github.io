---
up:
  - "[[Maps]]"
in:
  - "[[Collections]]"
  - "[[Maps]]"
related: 
created: 2024-07-07
rank: 4
mapState:
  - 🟩
version: "1.5"
---
"Views" are maps whose main purpose is ***to show auto-updating, dynamic results of custom searches.*** 

> [!planet]+ # Views
> This note collects all notes where the `in` property says `Views`. 
> 
> ```dataview
> TABLE WITHOUT ID
> 	file.link as Map,
> 	rank as Rank,
> 	join(mapState) as State
> WHERE
> 	contains(in,this.file.link) and
> 	!contains(file.name, "Template")
> SORT mapState desc, rank desc
> LIMIT 222
> ```

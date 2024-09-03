---
up:
  - "[[Home Pro Basic]]"
in:
  - "[[Collections]]"
  - "[[Maps]]"
related:
  - "[[Views]]"
created: 2023-11-21
rank: 5.5
mapState:
  - 🟩
updates: Adding new ranks and state properties + updated queries to show them
---

> [!video]- Related video lessons
> - [How to Use the Maps Collection](https://community.linkingyourthinking.com/c/ideaverse-pro/sections/146181/lessons/513557)

This note collects all notes where the `in` property says `Maps`.

> [!planet]- # Atlas Maps

> [!map]+ #### Maps that are "Collections"
> "Collections" are maps whose main purpose is ***to collect and display notes that link to it*** using the `in` property.
> 
> ```dataview
> TABLE WITHOUT ID
> file.link as "Collections",
> rank as Rank,
> join(mapState) as State
> 
> WHERE
> contains(in,[[Collections]]) and
> !contains(file.name, "Template")
> 
> SORT rank desc, mapState desc, file.name asc
> LIMIT 100
> ```

> [!map]- #### Map that are "Views"
> "Views" are maps whose main purpose is ***to show auto-updating, dynamic results of custom searches.*** 
> 
> ```dataview
> TABLE WITHOUT ID
> file.link as "Map views",
> rank as Rank,
> join(mapState) as State
> 
> WHERE contains(in, link("Views")) and
> !contains(file.name, "Template")
> 
> SORT rank desc, file.name asc
> 
> LIMIT 155
> ```

---

> [!map]- ## Atlas maps by rank
> All maps in the "Atlas" folder.
> ```dataview
> TABLE WITHOUT ID
> file.link as "",
> rank as Rank,
> join(mapState) as State
> 
> FROM "Atlas/Maps"
> 
> SORT rank desc, file.name asc
> 
> LIMIT 333
> ```

> [!calendar]- ## Calendar maps
> All maps in the "Calendar" folder.
> 
> ```dataview
> TABLE WITHOUT ID
>  file.link as "Maps",
> rank as Rank,
> join(mapState) as State
>  
> FROM "Calendar"
> WHERE contains(in,link("Maps")) and
>  !contains(file.name, "Template")
> 
> SORT file.link asc
> 
> LIMIT 55
> ```

> [!training]- ## Effort maps
> All maps in the "Efforts" folder.
> 
> ```dataview
> TABLE WITHOUT ID
>  file.link as "Maps",
> rank as Rank
>  
> FROM "Efforts"
> 
> WHERE contains(in,link("Maps"))
> 
> SORT rank desc, file.name asc
> 
> LIMIT 55
> ```

---

> [!map]- # All the maps by folder
> All the maps in the ideaverse where the `in` property has `Maps`.
> ```dataview
> TABLE WITHOUT ID
> file.link as "",
> file.folder AS Folder,
> rank as Rank,
> join(mapState) as State
> 
> WHERE contains(in,link("Maps"))
> 
> SORT file.folder asc
> 
> LIMIT 333
> ```

> [!zap]+ # My favorite handmade maps
> All the maps in the ideaverse where the `in` property has `Maps`—but not `Collections` or `Views`—and the rank is above `3.5`
> ```dataview
> TABLE WITHOUT ID
> file.link as "",
> rank as Rank,
> join(mapState) as State,
> join(in) as Collection
> 
> FROM "Atlas" or "Calendar"
> 
> WHERE contains(in,link("Maps")) and !contains(in,link("Collections")) and !contains(in,link("Views")) and
> 	rank > 3.5
> 
> SORT rank desc
> 
> LIMIT 77
> ```

> [!zap]- # General list of my favorite maps
> All the maps in the ideaverse where the `in` property has `Maps` and the rank is above `3.5`
> ```dataview
> TABLE WITHOUT ID
> file.link as "",
> rank as Rank,
> join(mapState) as State,
> join(in) as "Map Type"
> 
> FROM "Atlas" or "Calendar"
> 
> WHERE contains(in,link("Maps")) and
> 	rank > 3.5
> 
> SORT rank desc, file.name asc
> 
> LIMIT 77
> ```

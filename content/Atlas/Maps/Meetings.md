---
in:
  - "[[Collections]]"
  - "[[Maps]]"
created: 2023-11-21
rank: 1.5
mapState:
  - 🟩
---

> [!video]- Click here to view the related video lessons
> - [How to Use the Meetings & Entities Collection](https://community.linkingyourthinking.com/c/ideaverse-pro/sections/146181/lessons/513568)

This note collects all notes where the `in` property says `Meeting`.

> [!calendar]+ # Meetings
> ```dataview
> TABLE WITHOUT ID
> 	file.link as Note,
> 	join(list(meetingGroups)) as Group,
> 	one-liner as One-liner
> WHERE
> 	contains(in,link("Meetings")) and
> 	!contains(file.name, "Template")
> SORT file.name desc
> ```

---

> [!calendar] # Inline Meetings `meeting::`
> This works well if you work within your daily note.
> ```dataview  
> TABLE WITHOUT ID
>   file.link as Note,
>   meeting as Meeting
> 
> FROM 
>   "Calendar"  
> 
> WHERE 
>   meeting  
> 
> SORT 
>   rows.file.day desc  
> ```
> 
> 



---
up:
  - "[[Calendar]]"
collection:
  - "[[Maps]]"
  - "[[Views]]"
related: 
created: 2025-04-07 19:28
tags:
  - architect/build
---
~ [[Calendar]] 

> [!calendar] [[Days]] | [[Records]] | **[[Reviews]]** 

This view shows all notes in the Reviews folder that have "Review" or "Preview" in their name.

```dataview
TABLE WITHOUT ID
    file.link as "Reviews",
    regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1") as "Parent Folder"
    
FROM "Calendar/Reviews"

WHERE 
    contains(file.name, "Review") OR
    contains(file.name, "Preview")
    
SORT 
    regexreplace(file.name, ".*?(\\d{4}).*", "$1") desc,
    regexreplace(file.name, ".*?Q(\\d+).*", "$1") desc
    
LIMIT 66
```


# All

This view includes all the notes within the Reviews folder, as long as they have a `YYYY` date in their name. It can also sort it somewhat intelligently, recognizing quarterly reviews (Q1, Q2, etc) and even month names (Apr or April). The result is that the most recent dates will sort near the top. 

```dataview
TABLE WITHOUT ID
    file.link as "Reviews",
    regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1") as "Parent Folder"
FROM "Calendar/Reviews"
SORT 
    regexreplace(file.name, ".*?(\\d{4}).*", "$1") desc,
    
    choice(
        regextest("\\d{4}-\\d{2}", file.name),
        regexreplace(file.name, ".*?(\\d{4})-(\\d{2}).*", "$2"),
        choice(
            regextest("Q(\\d+)", file.name),
            choice(
                regexreplace(file.name, ".*Q(\\d+).*", "$1") = "1", "01",
                choice(
                    regexreplace(file.name, ".*Q(\\d+).*", "$1") = "2", "04", 
                    choice(
                        regexreplace(file.name, ".*Q(\\d+).*", "$1") = "3", "07",
                        choice(
                            regexreplace(file.name, ".*Q(\\d+).*", "$1") = "4", "10",
                            "00"
                        )
                    )
                )
            ),
            choice(
                contains(file.name, "January") OR contains(file.name, "Jan"), "01",
                choice(
                    contains(file.name, "February") OR contains(file.name, "Feb"), "02",
                    choice(
                        contains(file.name, "March") OR contains(file.name, "Mar"), "03",
                        choice(
                            contains(file.name, "April") OR contains(file.name, "Apr"), "04",
                            choice(
                                contains(file.name, "May"), "05",
                                choice(
                                    contains(file.name, "June") OR contains(file.name, "Jun"), "06",
                                    choice(
                                        contains(file.name, "July") OR contains(file.name, "Jul"), "07",
                                        choice(
                                            contains(file.name, "August") OR contains(file.name, "Aug"), "08",
                                            choice(
                                                contains(file.name, "September") OR contains(file.name, "Sep"), "09",
                                                choice(
                                                    contains(file.name, "October") OR contains(file.name, "Oct"), "10",
                                                    choice(
                                                        contains(file.name, "November") OR contains(file.name, "Nov"), "11",
                                                        choice(
                                                            contains(file.name, "December") OR contains(file.name, "Dec"), "12",
                                                            "00"
                                                        )
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    ) desc,
    
    choice(
        regextest("\\d{4}-\\d{2}-\\d{2}", file.name),
        regexreplace(file.name, ".*?(\\d{4})-(\\d{2})-(\\d{2}).*", "$3"),
        "15"
    ) desc
LIMIT 66
```

---


Back to [[Calendar]] 
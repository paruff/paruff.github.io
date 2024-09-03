---
up:
  - "[[People]]"
in:
  - "[[Views]]"
  - "[[Maps]]"
related: 
created: 2023-11-21
rank: 1.5
mapState:
  - 🟩
cssclasses:
  - wide-page
---
ROAR stands for "Reach-Outs And Replies".

> [!video]- Click here to view the related video lessons
> - [How to Use the People Collection](https://community.linkingyourthinking.com/c/ideaverse-pro/sections/146181/lessons/513560) 

> [!multi-column]
> 
> > [!zap]+ ## Reach-outs
> > ```dataview
> > TABLE WITHOUT ID
> > 	file.link as "Name",
> > 	"![|60](" + image + ")" as Image,
> > 	ROARdetails as Details,
> > 	ROARrank as RRank
> > WHERE
> > 	ROARrank and
> > 	contains(ROAR,"reach-out") and
> > 	contains(in, [[People]]) and
> > 	!contains(file.name, "Template")
> > SORT ROARrank desc
> > ```
> 
> > [!messages]+ ## Replies
> > ```dataview
> > TABLE WITHOUT ID
> > 	file.link as "Name",
> > 	"![|60](" + image + ")" as Image,
> > 	ROARdetails as Details,
> > 	ROARrank as RRank
> > WHERE
> > 	ROARrank and
> > 	contains(ROAR,"reply") and
> > 	contains(in, [[People]]) and
> > 	!contains(file.name, "Template")
> > SORT ROARrank desc
> > ```
> 

> [!watch]+ ## Waiting
> ```dataview
> TABLE WITHOUT ID
> 	file.link as "Name",
> 	"![|60](" + image + ")" as Image,
> 	ROARdetails as Details,
> 	ROARrank as RRank
> WHERE
> 	ROARrank and
> 	contains(ROAR,"waiting") and
> 	contains(in, [[People]]) and
> 	!contains(file.name, "Template")
> SORT ROARrank desc
> ```

---

> [!Layers]- ### Backburner
> ```dataview
> TABLE WITHOUT ID
> 	file.link as "Name",
> 	"![|60](" + image + ")" as Image,
> 	ROARdetails as Details,
> 	ROARrank as RRank
> WHERE 
> 	contains(ROAR,"backburner") and
> 	contains(in, [[People]]) and
> 	!contains(file.name, "Template")
> SORT ROARrank desc
> ```



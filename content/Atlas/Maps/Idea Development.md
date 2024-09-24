---
up:
  - "[[Home Pro Basic]]"
in:
  - "[[Views]]"
  - "[[Maps]]"
related:
  - "[[Idea Accretion]]"
  - "[[Idea Development]]"
  - "[[Idea Maintenance]]"
created: 2023-10-15
rank: 3.5
mapState:
  - "🟩"
cssclasses:
  - wide-page
---
What do you want to ideate on? Get the idea into 80-90% shape and then move to the *medium of expression*. 

> [!Multi-column] 
> 
> > [!Sailboat]+ ###### Ranked Boats to Tether 🚤
> > All notes in "Atlas" with `#note/connect🚤` prioritizing `rank`. Limit `10`
> > 
> > ```dataview
> > TABLE WITHOUT ID
> > 	 file.link as "Idea",
> > 	 rank as "Rank"
> >   
> > FROM "Atlas" and #note/connect🚤  
> > 
> > SORT rank desc
> > 
> > LIMIT 10
> > ```
> 
> > [!Leaf]+ ###### Ranked Ideas to Develop 🍃
> > All notes in "Atlas" with `#note/develop🍃` prioritizing `rank`. Limit `10`
> > 
> > ```dataview
> > TABLE WITHOUT ID
> > 	 file.link as "Idea",
> > 	 rank as "Rank"
> > 
> > FROM "Atlas" and #note/develop🍃 
> > 
> > SORT rank desc
> > 
> > LIMIT 10
> > ```

> [!rocket]+ ###### Ranked ideas across the ideaverse
> All notes in "Atlas" and prioritizing `rank`. Limit `10`
> ``` dataview
> TABLE WITHOUT ID
> 	 file.link as "Idea",
> 	 rank as "Rank"
> 
> FROM "Atlas"
> 
> WHERE rank > 0
> 
> SORT rank desc
> 
> LIMIT 10
> ```

> [!Multi-column] 
> 
> > [!boxes]+ ###### ***Concepts*** to Connect 🚤
> > All notes with `in:concepts` and `#note/connect🚤` prioritizing `rank`. Limit `10`
> > 
> > ```dataview
> > TABLE WITHOUT ID
> > 	 file.link as "Concept",
> > 	 rank as "Rank"
> >   
> > FROM #note/connect🚤
> > 
> > WHERE
> > contains(in,[[Concepts]])
> > 
> > SORT rank desc
> > 
> > LIMIT 10
> > ```
> 
> > [!snowflake]+ ###### ***Concepts*** to Develop 🍃
> > All notes with `in:concepts` and `#note/develop🍃` prioritizing `rank`. Limit `10`
> > 
> > ```dataview
> > TABLE WITHOUT ID
> > 	 file.link as "Concept",
> > 	 rank as "Rank"
> > 
> > FROM #note/develop🍃 
> > 
> > WHERE
> > contains(in,[[Concepts]])
> > 
> > SORT rank desc
> > 
> > LIMIT 10
> > ```

Daily note users, don't forget that you can tag ideas on the same line as the idea using an `ember` tag. These will start out as blank in the version of Ideaverse Pro, until you add your own.

> [!Multi-column] 
> 
> > [!sun]+ ###### ember1
> > Limit `5`
> > 
> > ```dataview
> > TABLE WITHOUT ID
> > 	 file.link as "Note",
> > 	 ember1 as Embers
> >   
> > WHERE ember1
> > 
> > SORT file.name asc
> > 
> > LIMIT 5
> > ```
> 
> 
> > [!sun]+ ###### ember2
> > Limit `5`
> > 
> > ```dataview
> > TABLE WITHOUT ID
> >   file.link as Note,
> >   ember2 as Embers
> >   
> > WHERE ember2
> > 
> > SORT file.name asc
> > 
> > LIMIT 5
> > ```
> 
> > [!sun]+ ###### ember3
> > Limit `5`
> > 
> > ```dataview
> > TABLE WITHOUT ID
> > 	 file.link as "Note",
> > 	 ember3 as Embers
> >   
> > WHERE ember3
> > 
> > SORT file.name asc
> > 
> > LIMIT 5
> > ```
> 
> > [!sun]+ ###### `ember4`
> > Limit `5`
> > 
> > ```dataview
> > TABLE WITHOUT ID
> > 	 file.link as "Note",
> > 	 ember4 as Embers
> >   
> > WHERE ember4
> > 
> > SORT file.name asc
> > 
> > LIMIT 5
> > ```
> 
> > [!sun]+ ###### `ember5`
> > Limit `5`
> > 
> > ```dataview
> > TABLE WITHOUT ID
> > 	 file.link as "Note",
> > 	 ember5 as Embers
> >   
> > WHERE ember5
> > 
> > SORT file.name asc
> > 
> > LIMIT 5
> > ```


> [!venetian]+ ###### Questions across the ideaverse
> All notes with `#note/question❔` newest first. Limit `10`
> ``` dataview
> TABLE WITHOUT ID
> 	 file.link as "Questions across the ideaverse",
> 	 (date(today) - file.cday).day as "Days sinced asked"
> 
> FROM #note/question❔ 
> 
> SORT file.cday desc
> 
> LIMIT 10
> ```


https://www.consumerreports.org/vpn-services/vpn-testing-poor-privacy-security-hyperbolic-claims-a1103787639/

> [!calendar]+ Calendar Time Windows ±1 and ±3 Days
> 
> >[!calendar]+ ± 1 days
> > All notes created 1 day before & after this note was created. Limit `20`
> > 
> > ```dataview
> > TABLE WITHOUT ID
> > file.link as Note,
> > dateformat(created, "yyyy-MM-dd") as "Date Created"
> > 
> > FROM ""
> > 
> > WHERE date(this.file.ctime) - file.ctime <= dur(1 days)
> > 
> > SORT file.ctime asc
> > 
> > LIMIT 20
> > ```
> 
> >[!calendar]- ± 3 days
> > All notes created 3 days before & after this note was created. Limit `30`
> > 
> > ```dataview
> > TABLE WITHOUT ID
> > file.link as Note,
> > dateformat(created, "yyyy-MM-dd") as "Date Created"
> > 
> > FROM ""
> > 
> > WHERE date(this.file.ctime) - file.ctime <= dur(3 days)
> > 
> > SORT file.ctime asc
> > 
> > LIMIT 30
> > ```


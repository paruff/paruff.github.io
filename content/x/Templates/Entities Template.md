---
collection:
  - "[[Entities]]"
related: 
created: "{{date}}"
---


> [!industry]+ Mtgs pointing to this note
> - This shows all meeting notes where the `meetingGroups` property is set to `{{title}}`. 
> - This will also show any notes in the "Calendar" folder where you have a line that starts with `meeting::` and then includes the title of this note: `{{title}}`.
> ```dataview
> LIST
> 
> FROM "Calendar"
> 
> WHERE contains(meetingGroups, this.file.link) OR contains(meeting, this.file.name) 
> 
> SORT file.name desc
> ```


---
up:
  - "[[Home Pro]]"
collection:
  - "[[Maps]]"
related:
  - "[[Collections]]"
created: 2023-10-15
rank: 4
mapState:
  - 🟨
---
~ [[Home Pro]] 

> [!ghost] [[Packs]] | **[[Templates]]** | [[Visuals]] 

Templates keep things tidy. You won't need them early on, but as you have more notes, they grow in importance, not just because of keeping things clean, but because of how you can effectively search across notes if they share similar information. This is what makes [[Collections]] come alive.

Here are the two automated templates when new notes are created:

- Create a new note, and the [[Base Template (Templater)]] gets applied. 
	- Just type `cmd/ctrl-n`. 
	- Adds three properties: `up`, `related`, and `created`.
- Create a new daily note, and the [[Daily Template (First Light, Last Light)]] gets applied.
	- Just type `cmd/ctrl-d`.
	- Just adds the property: `created`. 

# Templates View

Here are all the templates, in alphabetical order, showing the # of properties they have. 

```dataviewjs
// Get all files from the Templates folder
const templateFiles = dv.pages('"x/Templates"').sort(page => page.file.name);

// Create table headers
const headers = ["Templates", "`#` of Properties"];

// Process each file safely
const rows = templateFiles.map(page => {
    // Safe file link with icon
    const fileLink = page.file.path.includes("x/Templates") 
        ? "📋 " + dv.fileLink(page.file.path)
        : dv.fileLink(page.file.path);
    
    // Safely count properties
    let propCount = 0;
    try {
        if (page.file.frontmatter && typeof page.file.frontmatter === 'object') {
            propCount = Object.keys(page.file.frontmatter).length;
        }
    } catch (e) {
        propCount = "Error";
    }
    
    return [fileLink, propCount];
});

// Render the table with minimal CSS for better spacing
dv.container.addClass("template-table");

// Add minimal CSS to fix spacing issue without making it too narrow
const style = document.createElement('style');
style.textContent = `
.template-table .table-view-table {
    width: 100%;
}
.template-table .table-view-table th:last-child,
.template-table .table-view-table td:last-child {
    text-align: center;
}
`;
document.head.appendChild(style);

// Render the table
dv.table(headers, rows);
```

---

# All Templates, Curated

I find it most useful to look at all templates by organizing them by ACE, and then also placing associated [[Collections]] right next to associated templates. Let's start with the `+` folder.
## + Templates
Any new note you create by hitting `cmd/ctrl-n` will get a `created` date at the top of the note. That's thanks to how Ideaverse Pro is using the Templater plugin. Want to customize what goes into a new note? Then customize this template: [[Base Template (Templater)]]. But I recommend keeping it as simple as possible.

If you are in a new or old note that doesn't have a base template and you want to add one, here are the three most common options to use:

- [[Base Template]]: Just the basics: `up`, `related`, and `created`
- [[Base Template (with Collection)]]: Includes `collection` property
- [[Base Template (with Tags)]]: Includes `tags` property

## Atlas Templates
The Atlas is home to templates for keeping your ideas and knowledge structured, which is especially valuable as the number of your notes increases.

- Dots
	- [[Concepts Template]] 
	- [[Entities Template]] 
	- [[People Template]] 
	- [[People Template (Pro)]] - Includes lifespan & cultural things
	- [[People Template (ROAR add-on)]] - Adds a way to manage relationships
	- [[Questions Template]] 
	- [[Quotes Template]] 
- Maps
	- [[Map Template (MOC)]] - For manual gathering, developing, creating
	- [[Map Template (View)]] - For more passive, dynamic dashboards
	- [[Map Template (Collections)]] - For specifically curated lists
- Sources
	- [[Book Template]] - Base that BookSearch uses
	- [[Book Template (Backup)]] - If things get wonky, this is a solid backup
	- [[Clippings Template]] - Use sparingly
	- [[Movie Template (QuickAdd)]] - Base that QuickAdd uses
	- [[Movie Template (Backup)]] - If things get wonky, this is a solid backup
	- [[Series Template (QuickAdd)]] - Base that QuickAdd uses
	- [[Series Template (Backup)]] - If things get wonky, this is a solid backup

## Calendar Templates

- Days
	- [[Daily Template (First Light, Last Light)]] - Base
	- [[Daily Template (± 1 Week Window)]] - Includes a time-based query
- Records
	- [[Event Template]] 
	- [[Meetings Template]] 
	- [[Idea Template]] 
	- [[Nice Things Template]] 
- Reviews
	- [[Review Template (Quarterly)]] 

## Efforts Templates

- Areas 
	- [[Areas Template]] 
- Projects
	- [[Projects Template]] 
- Works
	- [[Works Template]] 

## x Templates
The x folder doesn't have any dedicated templates, but it is the place where all the actual templates themselves are stored. 

- Packs
	- [[Lesson Template]] 

# Add-ons
These are not full templates, but rather add-ons that you can place inside existing notes.

- Idea add-ons
	- [[Unrequited Notes add-on]] - Resurfaces the right thing at the right time
	- [[Unrequited Notes add-on (By Tag)]] - Relies on related tags
- People add-ons
	- [[People Template (ROAR add-on)]] - Adds a way to manage relationships
- Calendar add-ons
	- [[Time Window add-on (Plus-Minus 1-3 Days)]] - Leverage time context
	- [[Linked Calendar Notes add-on]] - Lists all notes in `Calendar` mentioning the note. Great for pulling in meeting notes.
- Placeholder text
	- [[Lorem 50 add-on]] - Around 50 words of Latin dummy text
	- [[Lorem 500 add-on]] - Around 500 words of Latin dummy text

![[robert-mccall-black-hole-concept-art-bottom-IDV-Pro.jpg|695]]

Note: Add these templates to your Templates folder as needed. If you're unfamiliar with templates, you can review Obsidian's documentation [here](https://help.obsidian.md/Plugins/Templates).


---


Go to [[The forest entrance]].



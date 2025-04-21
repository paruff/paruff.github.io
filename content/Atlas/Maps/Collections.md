---
up:
  - "[[Home Pro]]"
collection:
  - "[[Collections]]"
  - "[[Maps]]"
related:
  - "[[Templates]]"
created: 2023-01-01
rank: 4.5
mapState:
  - 🟩
---
~ [[Maps]]

> [!map] **[[Collections]]** | [[Views]] | [[Maps by Links]] | [[Maps by Type]] 

"Collection notes" display notes that link to it using the `collection` property.

These are all the collections across your ideaverse, sorted by `rank`.

```dataview
TABLE WITHOUT ID
	choice(contains(collection,link("Maps")),
		"🗃️ " + file.link,
	file.link) as "Collections",
	
rank as Rank,
join(mapState) as State

WHERE
contains(collection,[[Collections]]) and
!contains(file.name, "Template")

SORT rank desc, mapState desc, file.name asc
LIMIT 111
```

# Collections sorted by ACE

### Atlas Collections

- Dots
	- [[Things]] | [[Concepts]] | [[People]] | [[Entities]]
	- [[Statements]] | [[Questions]] | [[Quotes]]
- Maps
	- [[Maps]] | [[Collections]] | [[Views]]
- Sources
	- [[Sources]] | [[Books]] | [[Movies]] | [[Series]] | [[Courses]]

### Calendar Collections

- Days
- Records
	- [[Meetings]]
- Reviews

### Efforts Collections

- [[Efforts]]
- Areas
	- [[Projects]] | [[Active Projects]] | [[Simmering Projects]] | [[Sleeping Projects]]
- Works

![[whelan-space-station-1978-narrow.jpg|700]]

> [!NOTE] **Collections** are a work in progress because they leverage "Obsidian Properties", which is still under development, with new features still expected. What you see here is very much a test...or as we like to say, a "work in progress".

# Installation instructions for special collections

## Books

- [[Books]] | [[Book Template]]
  - Current Install Instructions (Difficulty Level: 5/10)
    - Hit `cmd-p`, type `book search`, select `create new book note`.
    - Type the book you want, select it from the list, and voila!
    - Of course, make sure the plugin "Book Search" is downloaded and that it knows to look for the [[Book Template]] provided with Ideaverse Pro.
  - Personal note: This is the easiest one to develop, but I need to be conscious to preserve the Shadow Mapping work I did.

## Movies

- [[Movies]] | [[Movie Template (QuickAdd)]] | if needed [[Movie Template (Backup)]]
  - Current Instructions Instructions (Difficulty Level: 10/10)
    - Make sure your vault has the the community plugin "Quick Add".
    - In "Pro", go to `Settings/Community Plugins` and click on the 'open folder' icon.
    - In the File Browser, find the folder called `quickadd`. Click and hit copy.
    - In Your Vault, go to `Settings/Community Plugins` and click on the 'open folder' icon.
    - In the File Browser, find the folder called `quickadd`. Click and hit paste.
    - Now restart Obsidian.
    - To test this, try to hit `Cmd-p` and type `add a movie`. Do you see the QuickAdd option? Good. You're 1/3 of the way there.
    ***
    - In "Pro", find the `x/x/Scripts` folder. Right click and "Reveal in Finder".
    - You will find a file called `movie.js`. This hidden js file is used by a QuickAdd macro. If you want it to work immediately without changing the QuickAdd settings, put this file in your vault at exactly this folder path: `x/x/Scripts`.
    - It won't show up in Obsidian; you'll need to move it in Finder on Mac or File Explorer on Windows.
    - Now restart Obsidian.
    ***
    - In Your Vault, go to Settings and click Quick Add in the sidebar.
    - Find `Movie Template (OuickAdd)` and click on its cog wheel.
    - Change the "Template Path" to wherever you keep your templates.
    - Make sure you added the "Pro" templates, especially "Movie Template (QuickAdd)"
    - Delete the file path `Atlas/Sources/Shows` and add your preferred file path for where you want movies to go.
  - Instructions to Use
    - Hit `Cmd-p`, type `add a movie`, hit enter, then type the movie name, select it.
    - Voila, a new note will open with cool information auto-populated.

## Series

- [[Series]] | [[Series Template (QuickAdd)]] | if needed [[Series Template (Backup)]]
  - If you got "movies" to work, then you should be 90% of the way there.
  - To test this, try to hit `Cmd-p` and type `add a series`. Do you see the QuickAdd option? Good. All you need to do is change where these notes get saved.
  ***
  - In Your Vault, go to Settings and click Quick Add in the sidebar.
  - Find `Series Template (OuickAdd)` and click on its cog wheel.
  - Change the "Template Path" to wherever you keep your templates.
  - Make sure you added the "Pro" templates, especially "Series Template (QuickAdd)"
  - Delete the file path `Atlas/Sources/Shows` and add your preferred file path for where you want movies to go.

# Works in progress, maybe...

For future releases of Ideaverse Pro, I may add more collections:

- [[Outputs]] | [[Game]] | [[Paper]] | [[Song]] | [[Speech]]

If you want to track stuff over the years, here's a starting list of collections you can create: _books, movies, songs, research papers, plays, paintings, quotes, videos, speeches, poems, tweets, articles, and newsletters_.

Not included here, but in my personal vault, to honor the old ones, I also keep a [[Commonplace Book]] based on tags.

> [!NOTE]+ This is a sanitized version of my actual note.
>
> - Content and links have been removed.

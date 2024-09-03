---
cssclasses: 
banner: https://images.unsplash.com/photo-1461173890990-f128607276ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80
banner_x: 0.5
banner_y: 0.479
up:
  - "[[Library]]"
related: []
---
## Main 

 - Base
	- [[01 Projects/Projects MOC|Projects MOC]]
	- [[02 Areas/Areas MOC|Areas MOC]]
	- [[03 Resources/Resources MOC|Resources MOC]]
- Products/boards
	- [[01 Projects/Learn Portuguese/Portuguese MOC|Portuguese MOC]]
	- [[01 Projects/eb lllearning process/EB learning prompt|EB learning prompt]]
	- [[02 Areas/Galope/Galope Board|Galope Board]]
- Process
	- [[habits/Habits MOC|Habits MOC]]
	- [[Unifed Mindfulness|Unifed Mindfulness]]
 - Report/Measure
	 - [[habits/Exercise tracker|Exercise tracker]]
	 - [[habits/Meditation tracker|Meditation tracker]]
	 - [[habits/Portuguese tracker|Portuguese tracker]]
- Planning
	- [[01 Projects/Planning/Daily Progress]]
	- [[01 Projects/Planning/Weekly board]]
	- [[02 Areas/Galope/Galope Board|Galope Board]]
	- [[02 Areas/Mindfulness board]]
	- [[01 Projects/Planning/Learning Progress]]
	- [[02 Areas/POD biz process/POD MOC|POD MOC]]
	- [[01 Projects/eb lllearning process/EB learning prompt|EB learning prompt]]
	- [[03 Resources/BYPP/Monthly values and vision|Monthly values and vision]]
	- [[01 Projects/Planning/Values based organizing]]
	- [[01 Projects/Planning/Retirement values]]

## Vault Info
 - Recent updates
`$=dv.list(dv.pages('').sort(f=>f.file.mtime.ts,"desc").limit(4).file.link)`
- Recent ideas
`$=dv.list(dv.pages('').sort(f=>f.file.mtime.ts,"desc").limit(4).file.link)`
 - Stats:
	- Total Files: `$=dv.pages().length`
	- Journal Entries: `$=dv.pages('"Daily"').length`
	- People: `$=dv.pages('"People"').length`
	- Inbox Items: `$=dv.pages('"Inbox"').length`
	-  Articles: `$=dv.pages('"Articles"').length`

```tracker
searchType: frontmatter
searchTarget: planned
folder: Daily
datasetName: Plan
month:
	mode: annotation
	annotation: 🗓️ 
	startWeekOn: 'Mon'
	color: steelblue
```

```tracker
searchType: frontmatter
searchTarget: portuguese
folder: Daily
datasetName: Portuguese
month:
	mode: annotation
	annotation: 🇵🇹
	startWeekOn: 'Mon'
	color: steelblue
```
```tracker
searchType: frontmatter
searchTarget: meditation
folder: Daily
datasetName: meditation
month:
	mode: annotation
	annotation: 🧘‍♂️
	startWeekOn: 'Mon'
	color: steelblue
```
```dataviewjs
dv.span("** 😊 Habits  😥**") /* optional ⏹️💤⚡⚠🧩↑↓⏳📔💾📁📝🔄📝🔀⌨️🕸️📅🔍✨ */
const calendarData = {
    colors: {    // (optional) defaults to green
        blue:        ["#8cb9ff", "#69a3ff", "#428bff", "#1872ff", "#0058e2"], // first entry is considered default if supplied
        green:       ["#c6e48b", "#7bc96f", "#49af5d", "#2e8840", "#196127"],
        red:         ["#ff9e82", "#ff7b55", "#ff4d1a", "#e73400", "#bd2a00"],
        orange:      ["#ffa244", "#fd7f00", "#dd6f00", "#bf6000", "#9b4e00"],
        pink:        ["#ff96cb", "#ff70b8", "#ff3a9d", "#ee0077", "#c30062"],
        orangeToRed: ["#ffdf04", "#ffbe04", "#ff9a03", "#ff6d02", "#ff2c01"]
    },
    showCurrentDayBorder: true, // (optional) defaults to true
    defaultEntryIntensity: 4,   // (optional) defaults to 4
    intensityScaleStart: 10,    // (optional) defaults to lowest value passed to entries.intensity
    intensityScaleEnd: 100,     // (optional) defaults to highest value passed to entries.intensity
    entries: [meditation],                // (required) populated in the DataviewJS loop below
}

//DataviewJS loop
for (let page of dv.pages('"Daily"').where(p => p.meditation)) {
    //dv.span("<br>" + page.file.name) // uncomment for troubleshooting
    calendarData.entries.push({
        date: page.file.name,     // (required) Format YYYY-MM-DD
        intensity: page.meditaion, // (required) the data you want to track, will map color intensities automatically
        content: "🏋️",           // (optional) Add text to the date cell
        color: "orange",          // (optional) Reference from *calendarData.colors*. If no color is supplied; colors[0] is used
    })
}

renderHeatmapCalendar(this.container, calendarData)
```
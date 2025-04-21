---
up:
  - "[[Efforts]]"
collection:
  - "[[Maps]]"
  - "[[Views]]"
created: 2024-02-09
tags:
  - architect/build
rank: 2.5
mapState:
  - 🟨
---
~ [[Efforts]]

> [!mountain] **[[Areas]]** | [[Projects]] | [[Works]] 

When an area of effort grows big enough, it justifies a dedicated note to keep track of all the projects in that area. The following view shows any area note, sorted by rank.

```dataview
TABLE WITHOUT ID 

choice(contains(file.path, "Efforts/Areas"), 
" –  " + file.link, file.link) as "Area Notes", 

rank as Rank,

regexreplace(file.path, ".*/([^/]+)/[^/]+$", "$1") as "Area Folder"


WHERE contains(collection,this.file.link) and !contains(file.name, "Template") 

SORT rank desc, by asc

LIMIT 77
```

---

The view below is strange and powerful. It assembles all the main folders under `Efforts/Areas`, along with their number of subfolders, the number of notes within, and most intriguingly, the total number of incoming links to all the notes within each area!

```dataviewjs
// Recursively count files in a folder and its subfolders
function countFilesRecursively(folder) {
  return app.vault.getFiles()
    .filter(file => file.path.startsWith(folder + "/") && file.extension === "md")
    .length;
}

// Get all top-level folders in Areas
const areasFolder = "Efforts/Areas";
app.vault.adapter.list(areasFolder).then(result => {
  if (result && result.folders) {
    // Sort folders alphabetically
    const folders = result.folders.sort((a, b) => a.localeCompare(b));
    const tableRows = [];
    let processedFolders = 0;
    
    folders.forEach(folderPath => {
      const folderName = folderPath.split('/').pop();
      
      // Skip hidden folders
      if (folderName.startsWith('.')) {
        processedFolders++;
        return;
      }
      
      // Count files recursively
      const fileCount = countFilesRecursively(folderPath);
      
      // Count direct subfolders
      app.vault.adapter.list(folderPath).then(subfoldersResult => {
        const subfolderCount = subfoldersResult.folders ? subfoldersResult.folders.length : 0;
        
        // Count incoming links
        const incomingLinks = app.vault.getMarkdownFiles()
          .filter(file => !file.path.startsWith(folderPath + "/"))
          .reduce((sum, file) => {
            const cache = app.metadataCache.getFileCache(file);
            if (!cache || !cache.links) return sum;
            
            return sum + cache.links.filter(link => {
              const dest = app.metadataCache.getFirstLinkpathDest(link.link, file.path);
              return dest && dest.path.startsWith(folderPath + "/");
            }).length;
          }, 0);
        
        // Add to table
        tableRows.push([
          "🔋 " + folderName,
          subfolderCount,
          fileCount,
          incomingLinks
        ]);
        
        processedFolders++;
        if (processedFolders === folders.length) {
          // Sort and display table
          tableRows.sort((a, b) => a[0].localeCompare(b[0]));
          dv.table(
            ["Areas of Effort", "Subfolders", "Notes", "Incoming Links"],
            tableRows
          );
        }
      });
    });
  }
});
```


---


Back to `= this.up`

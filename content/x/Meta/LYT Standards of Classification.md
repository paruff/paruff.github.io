---
up:
  - "[[Meta Map]]"
related:
  - "[[Collections]]"
created: 2023-11-12
---
`Version 0.7`

With the emergence of [[Properties|Obsidian Properties]] (basically a proper way to manage metadata), it is more important than ever to offer a suggested collection of best practices and standards for specific types of notes. 

Uber-nerds might call these "ontologies" but we'll use the term "standards" throughout the text. Keep in mind these are not set in stone. They are a curated list of best practices. Some have emerged through heavy use; some are tiny tests yet to be fully validated. Input from the global community will continue to shape the LYT's Standards of Classification for future iterations. 

You can expect standards on:

- The [[LYT Classification System for Personal Knowledge Management]]
- Terms
- Ranking System
- Specific kinds of Collections
- Best Practices for PKM Classification

# Terms
**Collections**: Collections refer to special notes that have "saved searches" (queries) that automatically stay up-to-date (some say "automagically"). They can also referred to as "dynamic dashboards". Common collections include:

- Maps
- Things, Concepts, People
- Statement, Questions, Quotes
- Books, Movies, Series
- Meetings, Entities
- Efforts

**Views**: Views refer to notes that have "saved searches" (query) for the different note types in your vault, not just one type like collections do.

They can be used to group together different collections like in [[Sources]], facilitate LYT workflows like [[Add]], or create more practical views for existing collections like [[People ROARs]].
# The 5+ Ranking System
LYT uses a standard 0-5 ranking system with one exception in that as some collections grow in quantity, there becomes a need to adjust the scale. The release valve for this is to use the 5+ ranking system. Start with the regular 5 rank system, and then when you feel the need, feel free to go 5+. The best example of this is [[Movies]], where I have watched around 2000 movies and felt the need to give great movies 5's, but then reserve my very special favorites for the land of 5+. 

# Best Practices for PKM Classification
- `collectionProperty`: An emergent best practice is to have specialized properties start with the collection they relate to. For example, `bookGroups` and `showGroups` and `peopleGroups` are all separate properties. Why not just `Groups`? 
	- Because then you'll always get tons of noisy auto-complete suggestions. When you are adding `showGroups`, you just want to see suggestions like "family favorites" and "adaptations" or whatever you have decided to group. You won't want to be misdirected by suggestions like "business", "statement", and "non-fiction" from all your Meeting, Idea, and Book groups. 
	- Additionally, by having the special collection be in the property value, you don't have to remember any of the properties for a collection; you just need to start typing a collection name, like `books` and you'll be presented with a clean dropdown of suggestions like `bookGenre` and `bookCategory` and even `bookAgent` if you are researching the literary industry like I am.
- Singular vs Plural: The singular vs plural debate is still being ironed out. For tags, the LYT recommendation was to keep them all singular. For properties, there is no clear recommendation yet...

## Best Practices for Classifying Properties by `Type` and `Category`  and `Group` and `Class` and `Genre` and `Kind`
Let us first remember that no collection needs every kind of classification possible. Less is more *until* you develop a reason for classifying a collection. 

Again, less is more.

That being said, sometimes it doesn't hurt to lay down some track before your train is rumbling at full speed. A simple way this happens without much effort on your part is by using a pre-made template. For example, my templates for Books and Shows, auto-magically pulls in all sorts of metadata—at no extra cost on my part. This means that when I finally want to put together a curated collection dramas or family favorites, I can create a dynamic dashboard in less than 10 minutes. 

For your collections, properties get interesting because you can use many words in overlapping ways. That's where the LYT USC has been created to provide a working framework that individuals and teams can use with confidence.

- `Type` (*most abstract*): Use the `Type` property for the highest level of differentiating something. Think of it as the most zoomed out. For `bookType` there is "fiction" and "non-fiction" (where I prefer using "NF"). For `showType` there is "movie" and "series" (and if you start watching plays, then you would also add "plays" like I have). 
- `Category` (*most official*): Use the `Category` property for the most obvious and generally agreed-upon classifications. For example...
- `Genre` (*most official in the Arts*): Use the `Genre` property for the most obvious and generally agreed-upon classifications—usually as an alternative to the `Category` property. What are these "generally agreed-upon classifications"? Well for example, no one would really argue against the `showGenre` for the Lord of the Rings movies are "Action", "Adventure", and "Drama". And no one is going to classify the `showGenre` as "Comedy"—even if Gimli has a lot of one-liners. 
	- Remember, you won't always need your collections to have a "genre" property. For example. you wouldn't have `meetingGenre` but you would have `showGenre`.
- `Groups` (*most personal*): Use the `Groups` property when you are the one grouping things. You are defining the groups; not the public. These are not official groupings. They are your groups. You group them however you see fit.
	- If you are like this author, you will find that the `Groups` property is the most useful for spinning up special dynamic dashboards in your collections. All you need to do is add a new value to the `showGroup` to a few movies, like "Sci-Fi", then build the dynamic dashboard to have a new dynamic view of all the Sci-Fi movies you care about.

To summarize, the way I think about these special kinds of note is: 

- "I'll have `type` at the top and `group` at the bottom."
- "Is that enough or do I need something in the middle? If so, does a `category` or `genre` make more sense?"

You will rarely need much else, but you might need much more depending on how comprehensive you care to go. For example, maybe you want to build special historical collections. 

- Let's imagine we want to put together an epic collection of "Historically Significant" people. Well, we might consider all of the following: `peopleDomain`, `peopleField`, `peopleWorks` and maybe even `peopleContext`. It's okay if you're not sure what would go in `peopleContext`, but that's how these collections start to take shape: by your tiny tests. Later, you might turn `peopleContext` into `peopleTimeline` or `peopleMovements` or `peopleEra`. If we use Beethoven as an example, that's where you might put "Classical Music" and "Romantic Music". 

In these situations, you will need to balance a fine line between adding way to much unearned information and trying out tiny tests. The more you do this, the more your intuitive sense of this improves. Here are helpful questions to keep handy: 

- "What dynamic dashboard do I want to see at the end of all this effort?"
- "What's the minimal viable version of this that I can test out right now, instead of wasting hours building out an elaborate and unearned collection?"

What about `kind`? Kind is so similar to `type` that having it as an additional classification next to `type` causes confusion. Kind is fuzzier than type. Fuzziness is good for associative thinking (creativity) but not good for properties. That said, we can still effectively use "kind" by referring to different "kinds" of notes:

- Example of different "kinds" of notes: Book, Effort, Idea, Meeting, Movie, People, Series

What about `class`? Class is also similar to `kind` and `type` and isn't used in properties for the same reasons. That said, it's used to describe the note we are currently in as "classifications".

For advanced uses, you may need further ways to disambiguate information and find a need to use `kind` and `class` as additional properties. If that ever happens then simply test it out in a manageable way. Make it a tiny test and see how it goes.

# Standards for People Notes
You, me, everyone we know...there are endless possibilities for notes on people. How can we possible find consensus on a universal standard? Here's the current thinking:

`peopleType`: Sort people in the broadest buckets
`peopleDomain` Segment people into smaller, but still very broad, buckets
`peopleGroups`: Group people into customized, personalized buckets

> [!contact]- 4 peopleTypes
> - fictional
> - network
> - notable
> - prominent

> [!contact]- 10 peopleDomains
> 1. Arts
> 2. Business
> 3. Humanities
> 4. Politics
> 5. Science & Tech
> 6. Spirituality
> 7. Sports
> 8. Warfare
> 9. Public Figure
> 10. Other

This standard gives you powerful ways to slice and data in the future. For easy use, the `peopleType` and `peopleDomain` fields will have a dropdown list of auto-suggestions, even if you are just starting out, thanks to the [[People Master Key Template]].

I initially included `peopleField` to filter people into mid-size buckets. It worked best for the arts and humanities, so Bob Ross would be under "painting" and Octavia Butler would be under "writing". But what I found was that it wasn't natural to classify the majority of people's fields and as a result, the field value was more often than not blank—suggesting that for general purposes, it is not needed. But if you have the need for further classification, then the `peopleField` property is what I recommend you add.

Now, I actually love figuring out the hidden contextual threads between prominent people over the course of human history, so I've added an add-on template called [[People add-on - Prominent]]. Add-ons don't erase any properties, they just "add on" to the existing ones. The properties I care the most about adding are the following:

`lifespan`: Give a span of years, like 1954 - 2006
`finalAge`: If you'd like, do the math to get 52
`culturalEra`: [[Mary Shelley]]'s would be "Romantic Period"
`culturalWorks`: Mary Shelley would have "Frankenstein"

Additionally, you can include an `image` property for people. I find it helpful, but it isn't automated, so I've left it off of the template. So for now, if you want an image of the person, you need to find and paste a URL link of an image.

#### ROAR: A simple way to track reach-outs and replies
ROAR stands for "Reach-Outs And Replies". I've personally used the ROAR system for a while and it's purposely simple and deliberately hard to overdo. See how you can manage your [[People ROARs]]. There are only three fields:

`ROAR`: Choose one of three options: reach-out; reply; waiting
`ROARrank`: Choose a number 1-5, with 5 being the most urgent/important
`ROARdetails`: Summarize the nature of the ROAR in a single sentence

Don't overdo it here. If you are communicating daily with someone, like a family member or a colleague, managing ROARs this way doesn't work as well—it's just not needed. Just go talk to the person. Managing ROARs works best for people you don't communicate with every day, or even every week.

# Standards for Idea Notes
This is a very special kind of note where the standard of `type, category, group` can cause trouble. Substantial trouble. In fact, ***almost every attempt at classifying ideas backfires***. Linked notes are supposed to be freeing. They should be a part of a thinking environment that catalyzes your best thinking. The classification of ideas is not your best thinking. In trying to add an `ideaCategory` and I immediately felt off. Why? Because I realized that classification was a poor substitute for the endless power of making a Map of Content (MOC). `

Attempting to have `ideaCategory` in particular is crushing to any creative force. `ideaGroup` can work *only if* you remember that your groupings are personal groupings, and not official ones. For example, I considered having an `ideaGroup` called "concepts" but then I felt the dark impulses of over-classifying spring up within in.  I'd argue that for ideas, it's absolutely vital not to over-classify them. The simple fix? Call the group something like "cool concepts" or "top concepts" to immediately put the "personal" back into your groupings.

...What am I doing? I think ideas shouldn't be classified. Nothing feels right because nothing is right. My current solution of Folders and Tags feel like the better solution for anything idea-based. I'd just like to whittle the Thing and Statement folders down to an Ideas folder; however, as much as I want to do that, I haven't found a way to do it and not lose something. 

Interesting, the heavy classification needs of People erroneously primed me to handle ideas in the same fashion, when all *some of them* need (like "Concepts") is to clarify the collection under the `in` property!

# Standards for Media Notes
`yearXP` and `yearXPL` Obsidian properties - These are in some of the media templates and stand for Year Experienced and Year Experienced Last as a way to note when you first and most recently explored that book, movie, series, etc.
# Standards for Output Notes
Outputs, because of the breadth of states and conditions, are likely the most difficult standard to provide recommendations for. Think about all the variations just from the medium of output and the status of output for each of those mediums. 

You might start with the outputMedium, like YouTube or Newsletter. Then you'll feel the need to track the status for the output. But the problem becomes matching the outputMedium and the outputMediumStatus without creating endless properties and property values. 

It might be about tracking the "hub" or initial output and the the "spokes" or subsequent outputs.

Output standards will arrive in future releases of Ideaverse Pro. 


# More standards to come in the future...
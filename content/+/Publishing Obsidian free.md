Here is the first go at publishing 

[Gatsby](https://github.com/mathieudutour/gatsby-digital-garden)

Seems to have a mind map unlike the git lab version
[gitlab](https://about.gitlab.com/blog/2022/03/15/publishing-obsidian-notes-with-gitlab-pages/)

[Quartz is a github publishing solutions ](https://github.com/jackyzha0/quartz)

It took me some time to get this sorted out on my mac and iOS platform.

I sync my vault via icloud . I sync from iphone, ipad and my mac. 

Once I have that sorted, I cloned quartz into my github account.

There is customization that is needed to publish as github pages to paruff.github.io/garden/

then the process is copying the files from the icloud folder then pasting it into the contents dir ... of the right branch, I think this has changed in the last few months and mine is still using hugo, even though quartz is not using hugo any more.

Than at the command line in the right github dir issue the following command:

git add . ; git commit -a -m "periodic update" ; git push

then you can go to the github actions to see how things are going. 

If all goes well you can go and refresh your page(s) at {ur github account}.github.io/{project/fork name}
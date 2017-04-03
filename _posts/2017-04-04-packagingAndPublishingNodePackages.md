---
layout: post
Title:Packing and Publishing node.js packages
---
#
## Packaging
You can use npm init to create the package.json. It will prompt you for values for the package.json fields. The two required fields are name and version. You'll also want to have a value for main. You can use the default, index.js.

https://docs.npmjs.com/getting-started/creating-node-modules

##Publishing
1. npm publish --registry http://localhost:8081/nexus/content/repositories/npm-internal/

[Nexus publish](https://books.sonatype.com/nexus-book/reference/npm-deploying-packages.html)


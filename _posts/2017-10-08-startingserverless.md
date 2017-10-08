---
layout: post
title: Starting serverless conversion effort for trend following
summary: "links to info needed to support the packaging and publishing of node modules."
date:   2017-04-04 06:16:01 -0600
published: true
categories: node packge publish
tags: [node, packge, publish]
---
# Packaging and Publishing node.js modules
## Packaging
You can use npm init to create the package.json. It will prompt you for values for the package.json fields. The two required fields are name and version. You'll also want to have a value for main. You can use the default, index.js.

https://docs.npmjs.com/getting-started/creating-node-modules

## Publishing
1. npm publish --registry http://localhost:8081/nexus/content/repositories/npm-internal/

[Nexus publish](https://books.sonatype.com/nexus-book/reference/npm-deploying-packages.html)



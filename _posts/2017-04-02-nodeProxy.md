---
layout: post
title: Proxying npm through the firewall
summary: "How to proxy npm modules through your firewall node modules."
date:   2017-04-02 06:16:01 -0600
published: true
categories: node packge publish
tags: [node, npm, proxy]
---
I am currently working in a enterprise the has a firewal and proxy for maven and other resources so this came in useful.

```
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080
```

[from](https://jjasonclark.com/how-to-setup-node-behind-web-proxy/)

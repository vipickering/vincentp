---
layout: "post"
title: "Fluid Type"
date: "2017-02-20 16:50:00 +/-GMT"
meta: "Make Your Type Scale With Your Screen Size In Proportion"
summary: "Make Your Type Scale With Your Screen Size In Proportion"
category: "Tips"
---

Make your type scale in proportion to the viewport size.

The fixed width is the minimum font size, the ```vw``` unit is your scale.

```
h1 {
    font-size: calc(16px  + 3.5vw);
}
```

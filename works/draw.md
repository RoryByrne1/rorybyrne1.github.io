---
layout: project
title: draw
slug: draw
date: 2025-11
description: simple web pixel drawing
skills:
  - JavaScript
  - HTML
  - CSS
---

I created a page on my website that lets you <a href="/draw" target="new">draw</a> in black and white on a 24x24 grid. You can find the code within <a href="https://github.com/RoryByrne1/rorybyrne1.github.io" target="_blank" aria-label="GitHub">this site's GitHub page</a>.

You can export your drawing as a PNG. This uses a canvas, redrawing your drawing at 16 times the scale and then downloading it as a PNG.

You can generate and copy a link to your drawing. This encodes the drawing into a binary string and then into a hex string, adds it as a parameter to a URL, and then copies this URL to your clipboard. When you open the URL, the hex is decoded into a binary string and then into the grid.

You can email me the drawing. This opens a link with a prefilled subject and body containing your drawing's URL. I initially wanted to send the PNG but that is impossible without a server of sorts. I then tested out representing the grid as ASCII art in the email body but it couldn't format well with body length restrictions. Then I got the idea for encoding the grid and generating links. I added a filter to my inbox that automatically categorises these emails.

There is a <a href="/draw/hall-of-fame" target="new">hall of fame</a> of my favourite drawings that have been sent to me.

I could've made this project more complex with different colours and erasing etc but it is simple on purpose and I think being able to erase is sometimes a drawback (although if you really want to you can edit the hex of a generated link).
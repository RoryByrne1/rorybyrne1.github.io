---
layout: about
title: jewellery
list:
  - date: 2024-08-14
    description: a silver ring with a ball end inserted
    image: /assets/jewellery/IMG_0848.jpg
    dated: august 2024
    
  - date: 2025-08-12
    description: 4 rings i made from a relative's old banjo strings
    image: /assets/jewellery/IMG_4137.jpg
    dated: august 2025

  - date: 2025-08-12
    description: another picture of 3 of the banjo rings
    image: /assets/jewellery/IMG_4157.jpg
    dated: august 2025

  - date: 2022-12-28
    description: the first rings i made, using gold strings
    image: /assets/jewellery/IMG_4971.jpg
    dated: december 2022

  - date: 2023-02-11
    description: a silver ring with a ball end inserted
    image: /assets/jewellery/IMG_5476.jpg
    dated: february 2023

  - date: 2023-02-11
    description: two solid rings
    image: /assets/jewellery/IMG_5479.jpg
    dated: february 2023

  - date: 2023-03-26
    description: a bracelet made for myself
    image: /assets/jewellery/IMG_5858.jpg
    dated: march 2023

  - date: 2023-03-12
    description: an adjustable ring
    image: /assets/jewellery/IMG_5669.jpg
    dated: march 2023
---

in maybe november or december of 2022 i started making rings out of my old guitar strings

since then i have made rings, bracelets, and necklaces

i use my own and my friends' old strings and then solder them to hold them in place

i make these for myself and for my favourite people

below is a gallery of some of the ones i remembered to take pictures of

i'm not sure why i liked taking pictures with that rock

<div class="gallery">
  {% assign tiles = page.list | sort: "date" | reverse %}
  {% for tile in tiles %}
    <div class="gallery-tile">
      <img src="{{ tile.image }}" alt="{{ tile.description }}" class="tile-cover">
      <strong class="gallery-date">{{ tile.dated }}</strong><br>
      <span>{{ tile.description }}</span>
    </div>
  {% endfor %}
</div>

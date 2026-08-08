---
layout: about
title: woodworking
list:
  - date: 2026-01-21
    description: a stackable bedside table with wood from a broken chair
    image: /assets/images/woodworking/bedsidetable.jpg
    dated: january 2026
    
  - date: 2026-06-11
    description: a salt cellar in mahogany
    image: /assets/images/woodworking/saltcellar.jpg
    dated: june 2026

  - date: 2026-07-31
    description: a small box in mahogany
    image: /assets/images/woodworking/box.jpg
    dated: july 2026

  - date: 2026-08-04
    description: a boat shaped incense holder in mahogany
    image: /assets/images/woodworking/incense.jpg
    dated: august 2026

  - date: 2026-08-06
    description: a small pot in mahogany
    image: /assets/images/woodworking/pot.jpg
    dated: august 2026
---

i started making things at the <a href="https://www.instituteofmaking.org.uk/" target="_blank">Institute of Making</a> when my nice chair broke and i was in need of a bedside table

i then got some beautiful mahogany and started making gifts for people

below are some of the things i've made

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

---
layout: default
title: photos
list:
  - date: 2025-08-19
    description: 
    where: Connemara, Ireland
    image: /assets/photos/DSC06867.JPG
    camera: Sony DSC-RX100
    settings: f/5, 1/250 sec, ISO 200

  - date: 2025-08-20
    description:
    where: Connemara, Ireland
    image: /assets/photos/DSC07132.JPG
    camera: Sony DSC-RX100
    settings: f/6.3, 1/500 sec, ISO 400

  - date: 2025-08-22
    description:
    where: Connemara, Ireland
    image: /assets/photos/DSC07609.JPG
    camera: Sony DSC-RX100
    settings: f/5.6, 1/400 sec, ISO 200

  - date: 2025-08-26
    description:
    where: Dingle Peninsula, Ireland
    image: /assets/photos/DSC08004.JPG
    camera: Sony DSC-RX100
    settings: f/6.3, 1/800 sec, ISO 200

  - date: 2025-08-28
    description:
    where: Dingle Peninsula, Ireland
    image: /assets/photos/DSC08290.JPG
    camera: Sony DSC-RX100
    settings: f/4.5, 1/1000 sec, ISO 200

  - date: 2024-09-12
    description:
    where: Oxfordshire, England
    image: /assets/photos/IMG_8998.JPG
    camera: Canon EOS 400D
    settings: f/5.6, 1/400 sec, ISO 1600
---

<a href="/">← back to about</a>

# photos

below is a gallery of some of my favourite photos that i've taken

<div class="photo-gallery">
  {% assign tiles = page.list | sort: "date" | reverse %}
  {% for tile in tiles %}
    <div class="photo-gallery-tile">
      <img class="photo" src="{{ tile.image }}" alt="{{ tile.description }} ">
      <div class="photo-gallery-details">
        <strong>{{ tile.date | date: "%-d.%-m.%Y" }}</strong>
        <span>{{tile.settings}}</span>
      </div>
      <div class="photo-gallery-details">
        <span>{{ tile.where }}</span>
        <span>{{ tile.camera }}</span>
      </div>
    </div>
  {% endfor %}
</div>
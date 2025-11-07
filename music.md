---
layout: default
title: music
list:
  - title: In Rainbows
    creator: Radiohead
    year: 2007
    image: /assets/albums/inrainbows.png
    link: 

  - title: Getting Killed
    creator: Geese
    year: 2025
    image: /assets/albums/gettingkilled.jpg
    link: 
    
  - title: Ants From Up There
    creator: Black Country, New Road
    year: 2022
    image: /assets/albums/afut.jpg
    link: https://open.spotify.com/album/21xp7NdU1ajmO1CX0w2Egd

  - title: Crushing
    creator: Julia Jacklin
    year: 2019
    image: /assets/albums/crushing.png
    link: https://open.spotify.com/album/455vksW9TxVTyB9qqj1Lpu

  - title: The New Abnormal
    creator: The Strokes
    year: 2020
    image: /assets/albums/thenewabnormal.png
    link: https://open.spotify.com/album/2xkZV2Hl1Omi8rk2D7t5lN

  - title: For Emma, Forever Ago
    creator: Bon Iver
    year: 2008
    image: /assets/albums/foremma.jpg
    link: https://open.spotify.com/album/7EJ0OT5ZqybXxcYRa6mccM

  - title: Funeral
    creator: Arcade Fire
    year: 2004
    image: /assets/albums/funeral.jpg
    link: https://open.spotify.com/album/6ZB8qaR9JNuS0Q0bG1nbcH

  - title: Ys
    creator: Joanna Newsom
    year: 2006
    image: /assets/albums/ys.jpg
    link: https://music.apple.com/us/album/ys/204051949

  - title: Heavy Metal
    creator: Cameron Winter
    year: 2024
    image: /assets/albums/heavymetal.png
    link: https://open.spotify.com/album/7mOrnQqDad3RgYQsJGaaqk

  - title: Carrie & Lowell
    creator: Sufjan Stevens
    year: 2015
    image: /assets/albums/carrie&lowell.jpg
    link: https://open.spotify.com/album/0U8DeqqKDgIhIiWOdqiQXE
    
  - title: The Glow Pt. 2
    creator: The Microphones
    year: 2001
    image: /assets/albums/theglowpt2.jpg
    link: https://open.spotify.com/album/6QYoRO2sXThCORAifrP4Bl

  - title: Dummy
    creator: Portishead
    year: 1994
    image: /assets/albums/dummy.png
    link: https://open.spotify.com/album/3539EbNgIdEDGBKkUf4wno

  - title: Hail to the Thief
    creator: Radiohead
    year: 2003
    image: /assets/albums/hailtothethief.png
    link: https://open.spotify.com/album/5mzoI3VH0ZWk1pLFR6RoYy

  - title: Dragon New Warm Mountain I Believe in You
    creator: Big Thief
    year: 2022
    image: /assets/albums/dnwmibiy.png
    link: https://open.spotify.com/album/7Ln81p86r5cCsesd3KBWIY

  - title: If You're Feeling Sinister
    creator: Belle and Sebastian
    year: 1996
    image: /assets/albums/b&s.jpg

  - title: Two Saviors
    creator: Buck Meek
    year: 2021
    image: /assets/albums/twosaviors.jpg

  - title: 3D Country
    creator: Geese
    year: 2023
    image: /assets/albums/3dcountry.png

  - title: Bloom
    creator: Beach House
    year: 2012
    image: /assets/albums/bloom.png
  # titanic rising, a crow looked at me, fetch the boltcutters, sound of silver, bewitched
---

<a href="/">← back to about</a>

# music

i play and listen to a lot of music

i've been playing piano and guitar for a very long time, more recently starting to play bass and drums

below are some of my favourite albums

<div class="image-tiles">
    {% assign tiles = page.list | sort: "year" | reverse %}
    {% for tile in tiles %}
        <div class="image-tile">
        <div class="tile-card">
            <img src="{{ tile.image }}" alt="{{ tile.title }} cover" class="tile-cover">
            <div class="tile-info">
            <strong>{{ tile.title }}</strong><br>
            <span>{{ tile.creator }}</span>
            <span>{{ tile.year }}</span>
            </div>
        </div>
        </div>
    {% endfor %}
</div>

<div class="small-text">album art copyright belongs to the respective artists/labels</div>

one day i'd like to make an album myself
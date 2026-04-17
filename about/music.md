---
layout: about
title: music
list:
  - title: In Rainbows
    creator: Radiohead
    year: 2007
    image: /assets/images/albums/inrainbows.png
    date: 2007-10-10

  - title: Getting Killed
    creator: Geese
    year: 2025
    image: /assets/images/albums/gettingkilled.jpg
    date: 2025-09-26
    
  - title: Ants From Up There
    creator: Black Country, New Road
    year: 2022
    image: /assets/images/albums/afut.jpg
    date: 2022-02-04

  - title: Crushing
    creator: Julia Jacklin
    year: 2019
    image: /assets/images/albums/crushing.png
    date: 2019-02-22

  - title: The New Abnormal
    creator: The Strokes
    year: 2020
    image: /assets/images/albums/thenewabnormal.png
    date: 2020-04-10

  - title: For Emma, Forever Ago
    creator: Bon Iver
    year: 2007
    image: /assets/images/albums/foremma.jpg
    date: 2007-07-08

  - title: Funeral
    creator: Arcade Fire
    year: 2004
    image: /assets/images/albums/funeral.jpg
    date: 2004-09-14

  - title: Ys
    creator: Joanna Newsom
    year: 2006
    image: /assets/images/albums/ys.jpg
    date: 2006-11-14

  - title: Heavy Metal
    creator: Cameron Winter
    year: 2024
    image: /assets/images/albums/heavymetal.png
    date: 2024-12-06

  - title: Carrie & Lowell
    creator: Sufjan Stevens
    year: 2015
    image: /assets/images/albums/carrie&lowell.jpg
    date: 2015-03-31
    
  - title: The Glow Pt. 2
    creator: The Microphones
    year: 2001
    image: /assets/images/albums/theglowpt2.jpg
    date: 2001-09-11

  - title: Dummy
    creator: Portishead
    year: 1994
    image: /assets/images/albums/dummy.png
    date: 1994-08-22

  - title: Hail to the Thief
    creator: Radiohead
    year: 2003
    image: /assets/images/albums/hailtothethief.png
    date: 2003-06-09

  - title: Dragon New Warm Mountain I Believe in You
    creator: Big Thief
    year: 2022
    image: /assets/images/albums/dnwmibiy.png
    date: 2022-02-11

  - title: If You're Feeling Sinister
    creator: Belle and Sebastian
    year: 1996
    image: /assets/images/albums/b&s.jpg
    date: 1996-11-18

  - title: Two Saviors
    creator: Buck Meek
    year: 2021
    image: /assets/images/albums/twosaviors.jpg
    date: 2021-01-15

  - title: 3D Country
    creator: Geese
    year: 2023
    image: /assets/images/albums/3dcountry.png
    date: 2023-06-23

  - title: Bloom
    creator: Beach House
    year: 2012
    image: /assets/images/albums/bloom.png
    date: 2012-05-15
  
  - title: Blizzard
    creator: Dove Ellis
    year: 2025
    image: /assets/images/albums/blizzard.jpeg
    date: 2025-12-05
  
  - title: Manning Fireworks
    creator: MJ Lenderman
    year: 2024
    image: /assets/images/albums/manningfireworks.png
    date: 2024-09-06
  
  - title: Charm
    creator: Clairo
    year: 2024
    image: /assets/images/albums/charm.png
    date: 2024-06-12

  - title: Is This It
    creator: The Strokes
    year: 2001
    image: /assets/images/albums/isthisit.png
    date: 2001-07-30
  # titanic rising, a crow looked at me, fetch the boltcutters, sound of silver, bewitched
---

i play and listen to a lot of music

i've been playing piano and guitar for a very long time, more recently starting to play bass and drums

below are some of my favourite albums

<div class="image-tiles">
    {% assign tiles = page.list | sort: "date" | reverse %}
    {% for tile in tiles %}
        <div class="image-tile">
        <div class="tile-card">
            <img src="{{ tile.image }}" alt="{{ tile.title }} cover" class="tile-cover">
            <div class="tile-info">
            <strong>{{ tile.title }}</strong>
            <span>{{ tile.creator }}</span>
            <span>{{ tile.year }}</span>
            </div>
        </div>
        </div>
    {% endfor %}
</div>

<div class="small-text">album art copyright belongs to the respective artists/labels</div>

one day i'd like to make an album myself
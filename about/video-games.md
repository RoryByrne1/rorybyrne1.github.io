---
layout: about
title: video games
list:
  - title: 'Hollow Knight: Silksong'
    creator: Team Cherry
    year: 2025
    image: /assets/images/games/silksong.png
    link: 

  - title: Minecraft
    creator: Mojang
    year: 2012
    image: /assets/images/games/minecraft.jpg
    link: 

  - title: Outer Wilds # story, storytelling, world, art style, soundtrack
    creator: Annapurna Interactive
    year: 2019
    image: /assets/images/games/outerwilds.jpg
    link:

  - title: Stardew Valley
    creator: Concerned Ape
    year: 2016
    image: /assets/images/games/stardewvalley.jpeg
    link: 

  - title: Outward # RPG systems, co-op
    creator: Nine Dots
    year: 2019
    image: /assets/images/games/outward.jpg
    link: 

  - title: Subnautica # scary, story, storytelling, progression system, world
    creator: Unknown Worlds
    year: 2018
    image: /assets/images/games/subnautica.png
    link: 

  - title: "The Legend of Zelda: Breath of the Wild"
    creator: Nintendo
    year: 2017
    image: /assets/images/games/botw.jpg
    link: 

  - title: Hollow Knight # graphics, atmosphere, story, storytelling, combat, upgrade systems
    creator: Team Cherry
    year: 2017
    image: /assets/images/games/hollowknight.jpg
    link: 

  - title: A Short Hike
    creator: Adam Robinson-Yu
    year: 2019
    image: /assets/images/games/ashorthike.png
    link: 

  - title: The Witness # puzzles, eeriness, unlike anything else
    creator: Thekla, Inc.
    year: 2016
    image: /assets/images/games/thewitness.jpeg
    link: 
    
  - title: "The Elder Scrolls V: Skyrim"
    creator: Bethesda Game Studios
    year: 2011
    image: /assets/images/games/skyrim.jpg
    link: 

  - title: Shadow of the Colossus # storytelling, puzzles, art style / atmosphere
    creator: Sony Computer Entertainment
    year: 2005
    image: /assets/images/games/sotc.jpg
    link: 

  - title: Portal
    creator: Valve
    year: 2007
    image: /assets/images/games/portal.jpg
    link: 

  - title: Tunic # innovation, puzzles
    creator: Isometricorp Games
    year: 2022
    image: /assets/images/games/tunic.jpg
    link: 

  - title: Raft
    creator: Redbeet Interactive
    year: 2018
    image: /assets/images/games/raft.jpeg
    link: 

  - title: Slime Rancher
    creator: Monomi Park
    year: 2017
    image: /assets/images/games/slimerancher.png
    link: 

  - title: "Animal Crossing: New Horizons"
    creator: Nintendo
    year: 2020
    image: /assets/images/games/acnh.jpg
    link: 

  - title: The Last of Us
    creator: Naughty Dog
    year: 2013
    image: /assets/images/games/thelastofus.jpg
    link: 

  - title: Rain World # innovation, world doesn't care, graphics, atmosphere
    creator: Videocult
    year: 2017
    image: /assets/images/games/rainworld.jpg
    link: 

  - title: Ico # innovation, atmosphere, storytelling
    creator: Sony Computer Entertainment
    year: 2001
    image: /assets/images/games/ico.png

  - title: Celeste # soundtrack, graphics
    creator: Maddy Makes Games
    year: 2018
    image: /assets/images/games/celeste.png

  - title: "The Legend of Zelda: The Wind Waker"
    creator: Nintendo
    year: 2002
    image: /assets/images/games/windwaker.webp

  - title: "Tomodachi Life" # soundtrack, graphics
    creator: Nintendo
    year: 2013
    image: /assets/images/games/tomodachi.jpg
---

being raised with 3 older brothers i played a lot of video games growing up

i don't play very many games now and mostly only play games with other people but i do love the ones i play

below are some of my favourite games

<div class="image-tiles">
    {% assign tiles = page.list | sort: "year" | reverse %}
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

<div class="small-text">game art copyright belongs to the respective creators/publishers</div>

one day i'd like to make a game myself
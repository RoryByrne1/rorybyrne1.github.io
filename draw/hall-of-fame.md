---
layout: draw
title: hall of fame
list:
  - date: 2025-11-07T17:14:00Z
    image: /assets/drawings/2025-11-07.png
    link: https://rorybyrne.com/draw?data=0000000000000000000000000000000000000000000078000187000301800200c03e01c027fe003d8600018600000000000000000000000000000000000000000000000000000000
  - date: 2025-11-15T00:16:00Z
    image: /assets/drawings/2025-11-15 (1).png
    link: https://rorybyrne.com/draw?data=000000000000000fe000183000201000601000443800c0080180e801007802000c0400060400fe000018080010000010098010090470110c9011191011621011c210100410100010
  - date: 2025-11-15T00:19:30Z
    image: /assets/drawings/2025-11-15 (2).png
    link: https://rorybyrne.com/draw?data=00000000f000010800020400060400040200044e00040500080100080d0000388108408108008108004208004409802c09003009001009000809000809000c0800040c000c07fff8
  - date: 2025-11-15T00:19:00Z
    image: /assets/drawings/2025-11-15 (3).png
    link: https://rorybyrne.com/draw?data=5fc000fa0000700000e00000e0f80080bc0081ef0003ffe007c2cc0f01f03c3870785c3804fe2504fe4004fc4104388306010301440700280e00000c000018700010fc0030fe0060
  - date: 2025-12-11T16:27:00Z
    image: /assets/drawings/2025-12-11.png
    link: https://rorybyrne.com/draw?data=00050000050020051020053838e54c3d254427e94c26097827690001c0003ff800200801200801200847200801303b5d1866d50fc7d51fc4141dc4001ec4001fc0001fc000000000
---

<div class="gallery-of-fame">
  {% assign tiles = page.list | sort: "date" | reverse %}
  {% for tile in tiles %}
    <div>
      <a href="{{ tile.link }}" target="new">
        <img src="{{ tile.image }}" alt="{{ tile.date }}" class="project-image">
      </a>
      <strong class="gallery-date">{{ tile.date | date: "%-d.%-m.%Y" }}</strong>
    </div>
  {% endfor %}
</div>
---
layout: default
title: projects
---

# my projects
this is where i put my projects


<ul>
  {% for page in site.pages %}
    {% if page.dir == "/projects/" %}
      <li><a href="{{ page.url }}">{{ page.title }}</a></li>
    {% endif %}
  {% endfor %}
</ul>

make this display fancier

<!-- ## latest logs -->
<!-- <ul>
  {% assign all_devlogs = site.pages | where: "layout", "devlog" | sort: "date" | reverse %}
  {% for log in all_devlogs limit:5 %}
    <li>
      <a href="{{ log.url }}">{{ log.title }}</a>
      – <em>{{ log.date | date: "%B %-d, %Y" }}</em>
      <br><small>From <a href="/projects/{{ log.project }}">{{ log.project }}</a></small>
    </li>
  {% endfor %}
</ul> -->
---
layout: index
title: works
---

# works

## big things
<div class="project-tiles">
  {% assign pages = site.pages | sort: "date" | reverse %}
  {% for page in pages %}
    {% if page.dir == "/works/" and page.title != "works" and page.type == "big" and page.title != "New Project" %}
      <a href="{{ page.url }}" class="project-tile">
        <img src="/assets/projects/{{ page.slug }}.png" class="project-image retro-button">
        <span class="project-title">{{ page.title }}</span>
      </a>
    {% endif %}
  {% endfor %}
</div>

<div style="margin-bottom:2rem"></div>

## little things
<div class="project-tiles">
  {% assign pages = site.pages | sort: "date" | reverse %}
  {% for page in pages %}
    {% if page.dir == "/works/" and page.title != "works" and page.type == "little" and page.title != "New Project" %}
      <a href="{{ page.url }}" class="project-tile">
        <img src="/assets/projects/{{ page.slug }}.png" class="project-image retro-button">
        <span class="project-title">{{ page.title }}</span>
      </a>
    {% endif %}
  {% endfor %}
</div>


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
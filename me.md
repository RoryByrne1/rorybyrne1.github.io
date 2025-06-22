---
layout: default
title: me
---

# more about me

This page is so you can learn a little more about my passions and hobbies. It's a little profile of me.
It's selfish of me to think anyone will be interested in my passions and hobbies. My CV for you to think I'm cool. PLEASE THINK I'M COOL

I'll be putting more about me and also anything I want to put here

<div class="me-tiles">
  {% assign me_sections = site.me | sort: "order" %}
  {% for section in me_sections %}
    {% if section.order != -1 %}
      <div class="me-tile">
        {% if section.title == "favourite albums" or section.title == "games that inspire me" %}
          <h3>{{ section.title }}</h3>
          <div class="image-tiles">
            {% assign tiles = section.list | sort: "year" | reverse %}
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
          {{ section.content }}
        {% else %}                                    <!-- OTHER -->
          <h3>{{ section.title }}</h3>
          {{ section.content }}
        {% endif %}
      </div>
    {% endif %}
  {% endfor %}
</div>
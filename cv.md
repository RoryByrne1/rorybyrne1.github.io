---
layout: default
title: cv
experience:
  - who: Solas Oxford
    what: Web Developer
    where: Oxford, United Kingdom
    when: June 2025 - Present
  - who: The Mole Inn &bull; June 2025 - September 2025 <br> The Seven Stars At Marsh Baldon
    what: Waiter
    where: Oxford, United Kingdom
    when: June 2024 - September 2024
    notes:
      - worked closely with other waiters to ensure smooth operations
      - efficiently managed multiple tables and orders
      - developed strong communication skills through daily interactions with customers
education:
  - who: University College London (UCL)
    what: BSc Computer Science
    where: London, United Kingdom
    when: September 2024 - June 2027
    notes:
      - currently on track to achieve a first class

  - who: Wheatley Park School
    what: A-Levels and GCSEs
    where: Oxford, United Kingdom
    when: September 2017 - June 2024
    notes:
      - achieved A*A*A* in Mathematics, Computer Science, Physics, and A in Further Mathematics AS
      - achieved 11 GCSEs at grades 7-9
---

# my cv

<a href="/assets/CV.pdf" target="_blank" aria-label="CV">view pdf</a>

## experience

<div class="cv-list">
{% assign experience = page.experience %}
{% for e in experience %}
    <div class="cv-entry">
      <strong>{{ e.what }}</strong><br>
      {{ e.who }} &bull; {{ e.when }}
      {% if e.notes %}
        <ul class="cv-notes">
          {% for note in e.notes %}
            <li>{{ note }}</li>
          {% endfor %}
        </ul>
      {% endif %}
    </div>
{% endfor %}
</div>


## education

<div class="cv-list">
{% assign education = page.education %}
{% for e in education %}
  <div class="cv-entry">
      <strong>{{ e.who }}</strong><br>
      {{ e.what }} &bull; {{ e.when }}
      {% if e.notes %}
        <ul class="education-notes">
          {% for note in e.notes %}
            <li>{{ note }}</li>
          {% endfor %}
        </ul>
      {% endif %}
    </div>
{% endfor %}
</div>
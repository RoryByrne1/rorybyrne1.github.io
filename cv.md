---
layout: default
title: cv
experience:
  - who: Solas Oxford
    what: Web Developer
    where: Oxford, United Kingdom
    when: June 2025 - Present
  - who: The Mole Inn &bull; June - September 2025 <br> The Seven Stars At Marsh Baldon
    what: Waiter
    where: Oxford, United Kingdom
    when: June - September 2024
    notes:
      - worked closely with other waiters to ensure smooth operations
      - efficiently managed multiple tables and orders
      - developed strong communication skills through daily interactions with customers
  - who: Rutherford Appleton Laboratory
    what: ISIS Synchrotron Group Work Experience
    where: Didcot, United Kingdom
    when: June - July 2023
    notes:
      - worked in teams developing GUIs in Python to help accelerator physicists understand proton beams
      - responsible for creating peak and loss finders for live MQTT beam intensity monitor data using NumPy
      - employed the agile methodology, regularly presenting our progress to our clients and implementing feedback
      - delivered a comprehensive presentation on our GUI and project journey to a panel of physicists
      
education:
  - who: University College London (UCL)
    what: BSc Computer Science
    where: London, United Kingdom
    when: September 2024 - June 2027
    notes:
      - achieved a grade of 85.31% in first year
  - who: Wheatley Park School
    what: A-Levels and GCSEs
    where: Oxford, United Kingdom
    when: September 2017 - June 2024
    notes:
      - achieved A*A*A* in Mathematics, Computer Science, Physics, and A in Further Mathematics AS
      - achieved 11 GCSEs at grades 7-9

achievements:
  - Distinction award and Best in School in Elite Bebras Computing Challenges 2022 and 2023
  - Senior Kangaroo award and Best in School in Senior Maths Challenges 2022 and 2023
  - FUZE Wheatley Park Excellence in Computing 2023 award
  - achieved 100th percentile out of all Computer Science applicants in the UCL STAT admissions test
  - achieved 10th in the UK in the Náboj International Mathematics Competition 2023 working in a team of 5
  - achieved runners up out of over 1200 schools in the Ritangle 2023 competition working with my peers

skills:
  - languages:
      - Python
      - C/C++
      - Haskell
      - Java
      - JavaScript
      - HTML
      - SQL
  - tools:
      - Git
      - GitHub
      - Jupyter
      - Jekyll
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
      <div class="cv-where">{{ e.where }}</div>
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
      <div class="cv-where">{{ e.where }}</div>
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

## awards and achievements

{% assign achievements = page.achievements %}
<ul class="cv-notes">
  {% for a in achievements %}
    <li>{{ a }}</li>
  {% endfor %}
</ul>

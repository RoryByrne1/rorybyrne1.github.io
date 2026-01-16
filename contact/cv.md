---
layout: default
title: cv
experience:
  - who: Solas Oxford CIC
    what: Web Developer
    where: Oxford, United Kingdom
    when: June 2025 - Present
    notes:
      - leading an ongoing redesign and structural rebuild of a live WordPress website using Elementor
      - improving content organisation, maintainability, and long-term scalability of the site
      - designing and implementing dynamic systems to centralise content and reduce duplication
      - working closely with a graphic designer to translate visual designs into responsive, accessible pages
  - who: The Mole Inn &bull; June - September 2025 <br> The Seven Stars At Marsh Baldon
    what: Waiter
    where: Oxford, United Kingdom
    when: June - September 2024
    notes:
      - worked effectively in a fast-paced environment, managing multiple tables and orders
      - collaborated closely with other waiters and kitchen staff to ensure smooth operations
      - developed strong communication and problem-solving skills through daily customer interactions
  - who: Rutherford Appleton Laboratory
    what: ISIS Synchrotron Group Work Experience
    where: Didcot, United Kingdom
    when: June - July 2023
    notes:
      - worked in teams developing GUIs in Python to help accelerator physicists understand proton beams
      - responsible for creating peak and loss finders for live MQTT beam intensity monitor data using NumPy
      - employed the agile methodology, regularly presenting our progress and implementing feedback
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
  - achieved 100th percentile out of all Computer Science applicants in the UCL STAT admissions test
  - Distinction award and Best in School in Elite Bebras Computing Challenges 2022 and 2023
  - Senior Kangaroo award and Best in School in Senior Maths Challenges 2022 and 2023
  - FUZE Wheatley Park Excellence in Computing 2023 award
  - achieved 10th in the UK in the Náboj International Mathematics Competition 2023 working in a team of 5
  - achieved runners up out of over 1200 schools in the Ritangle 2023 competition working with my peers

skills:
  languages:
    - Python
    - C
    - C++
    - C#
    - Java
    - JavaScript
    - Haskell
    - HTML
    - SQL
  developer tools:
    - Git
    - GitHub
    - Jupyter
    - VS Code
    - Postman
    - npm
  libraries & frameworks:
    - NumPy
    - MySQL
    - Matplotlib
    - FastAPI
    - Uvicorn
    - Electron
---

# cv

<a href="/assets/CV.pdf" target="_blank" aria-label="CV">view pdf</a>


## education

<div class="cv-list cv-section">
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


## experience

<div class="cv-list cv-section">
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


## awards and achievements

{% assign achievements = page.achievements %}
<ul class="cv-notes cv-section">
  {% for a in achievements %}
    <li>{{ a }}</li>
  {% endfor %}
</ul>


## skills

{% assign skills = page.skills %}
<ul class="cv-notes cv-skills cv-section">
  {% for category in skills %}
    <li>
      <strong>{{ category[0] }}:</strong> {{ category[1] | join: ", " }}
    </li>
  {% endfor %}
</ul>

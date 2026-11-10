---
layout: default
title: cv
experience:
  - who: MotionInput Games
    what: Software Engineering Intern
    where: London, United Kingdom
    when: July - September 2026
    notes:
      - developed a real-time modular puppeteering system in Python using pose landmarks to drive custom 2D avatars
      - implemented landmark smoothing, jump detection and missing-landmark handling for tracking stability
      - implemented OpenCV and PySide6 renderers for in-window and desktop overlay display with configurable assets
      - debugged, packaged, and shipped four MotionInput games to the Microsoft Store using MSIX
  - who: Solas Oxford CIC
    what: Web Developer
    where: Oxford, United Kingdom
    when: June 2025 - Present
    notes:
      - leading the redesign and rebuild of a live WordPress website to improve organisation and maintainability
      - developing a reusable system for trainings and events to centralise content and reduce redundancy
      - translating visual designs into responsive, accessible page layouts in collaboration with a graphic designer
  - who: The Mole Inn &bull; June - September 2025 <br> The Seven Stars At Marsh Baldon
    what: Waiter
    where: Oxford, United Kingdom
    when: June - September 2024
    notes:
      - worked effectively in a fast-paced environment, managing multiple tables and orders
      - collaborated closely with other waiters and kitchen staff to ensure smooth operations and timely service
      - developed strong communication and problem-solving skills through daily customer interactions
  - who: Rutherford Appleton Laboratory
    what: ISIS Synchrotron Group Work Experience
    where: Didcot, United Kingdom
    when: June - July 2023
    notes:
      - developed Python GUIs to help accelerator physicists monitor and understand proton beams
      - implemented NumPy-based peak and loss finders for live MQTT beam-intensity monitor data
      - delivered a comprehensive presentation on the GUI and project journey to a panel of physicists
      
education:
  - who: University College London (UCL)
    what: MEng Computer Science
    where: London, United Kingdom
    when: September 2024 - June 2028
    notes:
      - current weighted average of 83.21% across my first two years
  - who: Wheatley Park School
    what: A-Levels and GCSEs
    where: Oxford, United Kingdom
    when: September 2017 - June 2024
    notes:
      - achieved A*A*A* in Mathematics, Computer Science, Physics, and A in Further Mathematics AS
      - achieved 11 GCSEs at grades 7-9

achievements:
  - achieved 100th percentile in the UCL STAT admissions test out of over 2000 shortlisted applicants
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
    - HTML
    - SQL
    - Haskell
    - GLSL
  graphics & game development:
    - OpenGL
    - Unity
    - Godot
  libraries & frameworks:
    - NumPy
    - MySQL
    - Matplotlib
    - FastAPI
    - Electron
  developer tools:
    - Git
    - GitHub
    - Jupyter
    - VS Code
    - Postman
    - WordPress
    - LaTeX

---

# cv

<a href="/assets/pdfs/CV.pdf" target="_blank" aria-label="CV">view pdf</a>


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

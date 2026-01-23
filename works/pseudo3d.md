---
layout: project
title: pseudo 3D maze
slug: pseudo3d
type: little
date: 2023-06
description: pseudo 3d maze game
skills:
  - Python
  - PyGame
---

This project is an exploration of raycasting as a technique to create a 3D perspective within a 2D grid-based environment in Python and Pygame. This technique was used in early 3D games (often called pseudo 3D or 2.5D games) like *Wolfenstein 3D*, allowing simulated 3D rendering on hardware created for 2D games. 

Mazes are represented as a 2D grid, where each cell has a value indicating whether it's a wall or not. For every vertical line on the screen, a ray is cast from the player's position at an angle determined by their viewing direction. The ray moves through the grid using numerous optimisation techniques until it hits a wall, at which point the distance to the wall is calculated. This distance is used to determine the height to render the wall at on the screen as well as how light or dark the color of the wall appears, simulating lighting around the player. You can create custom maps (stored as text files) to create different layouts, wall types, and colours. The player can navigate the maze using keyboard controls to move forward or backwards and rotate left or right.

Here is a clip of the simulated 3D view:

<img width=400 src="/assets/gifs/3d_view.gif">

Here is a clip without a simulated 3D view, showing the maze layout and the rays that are cast from the player:

<img width=400 src="/assets/gifs/2d_view.gif">

I found <a href="https://lodev.org/cgtutor/raycasting.html" target="new">Lode's Computer Graphics Tutorial on Raycasting</a> a very useful resource for this project and the code can be found <a href="https://github.com/RoryByrne1/pseudo-3d-maze" target="new">on my GitHub</a>.
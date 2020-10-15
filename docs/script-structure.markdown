---
layout: default
title: Script Structure
nav_order: 1
parent: Site Structure
permalink: /site-structure/script-structure
---

# JS Structure

        src/
            static/
                js/
                    .../
                    app.js

**app.js** - js entrypoint for your site

# SASS Structure

Bowman's default scss structure is based on Hugo Giraudel's SCSS 7-1 architecture pattern. [Click here](https://sass-guidelin.es/#architecture) to learn more.

        src/
            static/
                scss/
                    .../
                    app.scss
                    critical.scss

**app.scss** - css entrypoint for your site

**critical.scss** - critical css to be inlined for improved page load performance

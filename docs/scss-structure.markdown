---
layout: default
title: SCSS Structure
nav_order: 1
parent: Site Structure
permalink: /site-structure/scss-structure
---

# SCSS Structure

Bowman's default scss structure is based on Hugo Giraudel's SCSS 7-1 architecture pattern. [Click here](https://sass-guidelin.es/#architecture) to learn more.

        src/
            static/
                scss/
                    abstracts/
                    base/
                    components/
                    layouts/
                    pages/
                    vendors/
                    app.scss
                    critical.scss

**app.scss** - css entrypoint for your site

**critical.scss** - critical css to be inlined for improved page load performance
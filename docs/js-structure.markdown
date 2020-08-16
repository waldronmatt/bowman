---
layout: default
title: JS Structure
nav_order: 1
parent: Site Structure
permalink: /site-structure/js-structure
---

# JS Structure

        src/
            static/
                ejs/
                    components/
                    layouts
                    pages/
                    vendors/
                    app.js
                    _load-apps.js

**components** - component-specific scripts

**layouts** - scripts specific to the main parts of your site (head, header, navigation, footer)

**pages** - scripts specific to a particular page

**vendors** - external scripts

**app.js** - js entrypoint for your site

**_load-apps.js** - code splitting/dynamic imports for your js scripts
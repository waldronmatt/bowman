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
                    helpers/
                    layouts
                    pages/
                    vendors/
                    app.js

**components** - component-specific scripts.

**helpers** - general-purpose scripts not tied to a particular component.

**layouts** - scripts specific to the main parts of your site (head, header, navigation, footer).

**pages** - scripts specific to a particular page.

**vendors** - external scripts.

**app.scss** - js entrypoint for your site.
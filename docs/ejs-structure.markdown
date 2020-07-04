---
layout: default
title: EJS Structure
nav_order: 1
parent: Site Structure
permalink: /site-structure/ejs-structure
---

# EJS Structure

        src/
            static/
                ejs/
                    components/
                    layouts/
                    pages/
                    partials/
                    templates/

**components** - markup that can be reused on your site.

**layouts** - shared html markup for the main parts of your site (head, header, navigation, footer).

**pages** - markup specific to a particular page.

**partials** - group related components together via multiple ejs includes. Useful for blog posts, articles, etc.

**templates** - ejs calls to the main parts of your site (head, header, navigation, footer).

            
            

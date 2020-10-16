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
                        foot.ejs
                        footer.ejs
                        head.ejs
                        header.ejs
                    partials/
                    templates/
                        default.ejs
                    favicons.ejs

**components** - markup that can be reused on your site

**layouts** - shared html markup for the main parts of your site (head, header, navigation, footer)

**foot.ejs** - contains script tags and critical inlined scripts

**footer.ejs** - stores the bottom markup of the page

**head.ejs** - contains page metadata, style tags, favicon references, and inlined critical styles

**header.ejs** - stores references to generated favicons

**partials** - group related components together via multiple ejs includes. Useful for blog posts, articles, etc.

**templates** - ejs calls to the main parts of your site (head, header, navigation, footer)

**default.ejs** - fallback page template

**favicons.ejs** - stores references to generated favicons

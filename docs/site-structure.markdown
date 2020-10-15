---
layout: default
title: Site Structure
nav_order: 7
has_children: true
permalink: /site-structure/
---

# Site Structure

        /
            dist/
            scripts/
            src/


## src/

**build** - the directory Bowman looks for to build HTML markup

<ul>
<li>content - website page containers</li>
<li>data - website page data</li>
</ul>
            
        src/
            build/
                content/
                    index.ejs
                    about.ejs
                    custom-folder/
                        contact.ejs
                data/
                    index.json
                    about.json
                    custom-folder/
                        contact.json

**static** - project assets

<ul>
<li>ejs - page components</li>
<li>json - shared data</li>
</ul>
            
        src/
            static/
                ejs/
                fonts/
                img/
                js/
                json/
                scss/

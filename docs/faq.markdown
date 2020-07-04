---
layout: default
title: FAQ
nav_order: 8
has_children: false
permalink: /faq
---

# Frequently Asked Questions

## What is the minimum structure I need for Bowman to work?

        scripts/
            ...
        src/
            build/
                content/
                    ...
                data/
                    ...
            static/
                ejs/
                    templates/
                        default.ejs
                js/
                    app.js
                json/
                    site.json
                scss/
                    app.scss
        .eslintignore
        .eslintrc
        .stylelintrc.json
        postcss.config.js
        package.json
        package-lock.json
                
## How do I set up additional entry points?

To set up additional entry points, simply create a new js/scss file **without an underscore preceding** the filename. Bowman will recursively look for these files and feed into webpack, so the directory structure is completely up to you:

        src/
            static/
                js/
                    some-directory/
                        my-custom-code.js
                scss/
                    folder/
                        another-folder/
                            my-custom-code.scss

Creating custom entry points can be useful in several situations. For example, you might want to keep vendor code used on a few pages separate from your main bundle. Or you might want to do the same for pages with custom code.

## How do I reference images in my project?

A basic example:

### index.ejs

        "pictures": [
            {
            "picture": "some-folder/pic1"
            }, 
            {
            "picture": "some-folder/pic2"
            },
            {
            "picture": "a-different-folder/pic1"
            }
        ]
<br>

### index.json

Bowman uses a manifest file to map images to take advantage of Webpack's contenthash feature to prevent caching when running production builds.

        <% data.pictures.forEach((el) => { %>
            <img src="<%= site.imagesManifest[`static/images/${el.picture}`] %>">
        <% }) %>
<br>

### Site Structure:

        scripts/
            ...
        src/
            build/
                content/
                    index.ejs
                data/
                    index.json
            static/
                images/
                    some-folder/
                        pic1
                        pic2
                    a-different-folder/
                        pic1

## Where does the name Bowman come from?

The project name comes from the character Dr. David Bowman in Arthur C. Clarke's 2001 Space Odyssey.
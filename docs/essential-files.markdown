---
layout: default
title: Essential Files
nav_order: 8
has_children: false
permalink: /essential-files
---

# Essential Files

Bowman offers flexibility with how you want to structure your project files. However, there are a few critical files that are required for your site to work properly.

## Everything under /scripts
These files contain Bowman's webpack configuration files, HTML markup generator scripts, and live server/reload configurations.

## The src/build directory

        build/
            content/
                index.ejs
            data/
                index.json

<br>
Bowman's HTML generator looks for matching file names under **content/** and **data/** directories. A 1:1 relationship of content and data for a page must exist or the build process will fail.

You can structure your pages however you'd like; as long as the directory structure of **content/** matches **data/** and vice versa.

## site.json

        src/
            static/
                json/
                    site.json

<br>

        { 
            "title": "Bowman",
            "description": "Simple static site generator powered by Node.js and Webpack",
            "keywords" : "bowman, static site generator, nodejs, javascript, webpack, browsersync"
        }

<br>
site.json supplies metadata shared by pages in your project. Edit scripts/utils/config.js if you want to customize how this data is handled.
            
## default.ejs

        src/
            static/
                ejs/
                    templates/
                        default.ejs

<br>

        <!DOCTYPE html>
        <html lang="en-US">
        <head>
            <%- include('../layouts/head') %>
        </head>
        <body>
            <%- include('../layouts/header') %>

            <%- body %>

            <%- include('../layouts/footer') %>
        </body>
        </html>

<br>
default.ejs is the fallback page template option for Bowman's HTML markup generator. You can change the default behavior by editing scripts/buildMarkup.js:

    // render template
    const template = pageContent.attributes.template || 'default';

## app.js, app.scss

        src/
            static/
                js/
                    app.js
        src/
            static/
                scss/
                    app.scss

<br>
Bowman recursively searches your project for js/scss files that **do not contain an underscore preceding** the file name. These files are used as Webpack's entry points for serving your code. 

All other files **with underscores preceding** the file name can be structured to your liking, but should ultimately be called in your entry points for serving:

app.js

        // Layouts
        import './layouts/_footer';
        ...

app.scss

        // Abstracts
        @import
        'abstracts/variables',
        'abstracts/mixins',
        'abstracts/breakpoints';
        ...

<br>
You can safely rename ***app.js** and **app.scss** to something more suitable for your project, however, it is not recommended removing these files entirely.

***Note**: Update scripts/webpack/webpack.common.prebuild.js

        entry: ['./src/static/js/app.js'],

You can create **additional** files without underscores to signify assets you want imported separately from your main entry points. [Click here](/bowman/faq) to read more.
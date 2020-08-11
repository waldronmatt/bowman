---
layout: default
title: Layouts
nav_order: 6
---

# Layouts

Layouts contain shared html markup for the main parts of your site (head, header, navigation, footer).
<br>
<br>
Define a custom layout for your page template by creating one and calling it:

        src/
            static/
                ejs/
                    layouts/
                        navigation

<br>
default.ejs

        <!DOCTYPE html>
        <html lang="en-US">
            <head>
                ...
            </head>
            <body>
                <%- include('../layouts/navigation') %>

                <%- body %>

                ...
            </body>
        </html>

<br>

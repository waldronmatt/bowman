---
layout: default
title: Layouts
nav_order: 5
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
**Note:** It is generally good practice to reference global css tags in the head and global js scripts right before the closing body tag. You will find these files reference in the head and footer layouts respectively.

---
layout: default
title: Page Templates
nav_order: 5
---

# Page Templates

Page templates contain ejs calls to the main parts of your site (head, header, navigation, footer).
<br>
<br>
Define a custom template for your page by creating one and calling it:

        src/
            static/
                ejs/
                    templates/
                        basic.ejs

<br>
index.ejs

        ---
        template: basic
        ---

<br>
**Note:** Pages will use **default.ejs** via **/src/static/ejs/templates** if none specified. 
<br>
<br>
default.ejs

        <!DOCTYPE html>
        <html lang="en-US">
        <head>
            <%- include('../layouts/head') %>
        </head>

        <body>
            <%- include('../layouts/header') %>

            <%- body %>

            <footer>
                <%- include('../layouts/footer') %>
            </footer>

            <%- include('../layouts/foot') %>
        </body>
        </html>

<br>
[Click here](/bowman/layouts) for information on creating layouts.
---
layout: default
title: Creating Pages
nav_order: 2
---

# Creating New Pages

Create new pages under the **content** directory.
            
        build/
            content/
                index.ejs
            
<br>
Pages contain page includes and a page template declaration.
<br>
<br>
index.ejs

        ---
        template: your-custom-page-template
        ---

        <%- include(site.ejsPath + 'components/your-custom-component') %>

<br>
**Options:**
<br>
[Page templates](/templates)
<br>
[Page includes](/page-includes)
<br>
<br>
<br>
Page data is stored under the **data** directory and injected into your components/pages.
<br>
            
        build/
            data/
                index.json
       
<br>
index.json

        { 
        "title": "Hello World!",
            "info": {
                "header": "Bowman",
                "description": "Create static sites using...",
                "link": {
                    "text": "Click here to read the documentation.",
                    "href": "https://www.myprojectsite.com"
                },
                "features": [
                    {
                        "list": "Keep things DRY:..."
                    },
                    {
                        "list": "Separation of concerns:..."
                    },
                    {
                        "list": "Use familiar languages and linters:..."
                    },
                    {
                        "list": "Develop faster:..."
                    },
                    {
                        "list": "Be production-ready:..."
                    }
                ]
            }
        }

<br>

**Note**: content and data file/folder structures must match. In other words, a 1:1 relationship of content and data for a page must exist:

        build/
            content/
                index.ejs
            data/
                index.json
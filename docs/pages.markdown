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
[Page templates](/bowman/templates)
<br>
[Page includes](/bowman/page-includes)
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
                "description": "A simple static site generator...",
                "link": {
                    "text": "Click here to read the documentation.",
                    "href": "https://www.myprojectsite.com"
                },
                "features": [
                    {
                        "list": "Recursively generates page markup"
                    },
                    {
                        "list": "Recursively finds and outputs entry points"
                    },
                    {
                        "list": "Hot reloading of pages and assets"
                    },
                    {
                        "list": "Asset bundling, cache prevention, and code splitting support"
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

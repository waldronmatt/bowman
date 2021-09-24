# Page Includes

Page includes refer to your page markup.

## Partials / Components

Reference page components or partials (groupings of components) for reuse:

        src/
            static/
                ejs/
                    partials/
                        basic-content.ejs
                    components/
                        features.ejs
                        heading.ejs

<br>
Partials make it easier to create pages with similar component groupings.
<br>
<br>
basic-content.ejs

        <%- include('../components/heading') %>

        <%- include('../components/features') %>

<br>
heading.ejs

        <h1><%= data.info.header %></h1>

        <div class="container">
            <p><%= data.info.description %></p>
        </div>

<br>
features.ejs

        <div class="container">
            <a href="<%= data.info.link.href %>"><%= data.info.link.text %></a>
            <ul>
                <% data.info.features.forEach((el) => { %>
                    <li><%= el.list %></li>
                <% }) %>
            </ul>
        </div>

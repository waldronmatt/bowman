# Bowman

[![Netlify Status](https://api.netlify.com/api/v1/badges/981f8252-c7bd-4215-8b05-60aee8402a2d/deploy-status)](https://app.netlify.com/sites/bowman/deploys) ![npm](https://img.shields.io/npm/v/@waldronmatt/bowman) ![webpack](https://img.shields.io/badge/webpack-4.43.0-green)

A simple static site generator with an integrated toolchain for efficient development and delivery. [Click here to see it live on Netlify](https://bowman.netlify.app).

![](bowman.gif)

## Introduction

Bowman is a simple static site generator powered by Node.js, Webpack, and Browsersync. Bowman comes with pre-configured scripts to bundle assets, generate markup, and hot-reload pages. Pages are generated using the J.E.N. technology core (JSON - data, EJS - templating, Node.js - markup generation).

## Languages
Use core front-end languages and JavaScript-like technologies to build your site.
- Next-Gen JavaScript
- Sass
- EJS - generate HTML markup with plain JavaScript
- JSON - store page text/data

## Workflow
Take advantage of Bowman's build scripts with performance and best practices built in using Webpack and Browsersync.
- Bowman
    - Recursively find, generate, and minify html markup
    - Integration with Browsersync and Webpack middleware to hot reload pages
    - JSON cache prevention and file watch debouncing for improved hot-reloading
- Webpack
    - Recursively find and output entry points
    - Transpile Next-Gen JavaScript using Babel
    - Compile Sass using Webpack loaders
    - Hot-reload js and css
    - Code splitting using SplitChuncks and dynamic loading
    - Cache busting with [contenthash]
    - Manifest generation for assets so you can reference in pages
    - Minify js and css
    - Compress images
    - Generate next-gen image formats
    - Lint code using stylelint and eslint
    - Autoprefixer support
    - Optimized dev builds
- Browsersync
    - Serve pages and assets for development

## Bowman Starter Template
- 100% Lighthouse Score on Mobile and Desktop (Excluding PWA)
- Eliminates render blocking js/css
- Critical css, dynamic loading, and vendor SplitChuncks integration for production builds
- Next-gen image and fallback support for production builds
- Includes popular css reset and normalizing libraries
- Includes polyfill support
- Suggested folder structure for an organized project

## Installation

Install globally:

        npm i -g @waldronmatt/bowman

Create project:

       create-bowman-starter -y
        
Install dependencies:

        npm install

## Getting Started

Run dev environment:

        npm run dev

Build and serve for production:

        npm run build

## Usage

### Create the markup

        build/
            content/
                my-page.ejs

my-page.ejs

        <h1><%= data.info.header %></h1>

        <div class="container">
            <p><%= data.info.description %></p>
        </div>

### Create the data

        build/
            data/
                my-page.json

my-page.json

        {
            "title": "My Page",
            "info": {
                "header": "Hello World!",
                "description": "This is my cool new page."
            }
        }

## Documentation
[Read the full documentation](https://waldronmatt.github.io/bowman/)

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

MIT

## Credits

- CLI authored by Dominik Kundel's [create-project](https://github.com/dkundel/create-project)

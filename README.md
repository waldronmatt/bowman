# Bowman

[![Netlify Status](https://api.netlify.com/api/v1/badges/981f8252-c7bd-4215-8b05-60aee8402a2d/deploy-status)](https://app.netlify.com/sites/bowman/deploys) ![npm](https://img.shields.io/npm/v/@waldronmatt/bowman) ![webpack](https://img.shields.io/badge/webpack-4.43.0-green)

A simple static site generator with an integrated toolchain for efficient development and delivery. [Click here to see it live on Netlify](https://bowman.netlify.app).

![](bowman.gif)

## Introduction

Bowman is a simple static site generator powered by Node.js, Webpack, and Browsersync. Bowman comes with pre-configured scripts to bundle assets, generate markup, and hot-reload pages. Pages are generated using the J.E.N. technology core (JSON - data, EJS - templating, Node.js - markup generation).

## Features

- Recursively generates page markup
- Recursively finds and outputs entry points
- Hot reloading of pages and assets
- Asset bundling, cache prevention, and code splitting support

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

## Useage

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

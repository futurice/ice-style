<a href="https://github.com/futurice/ice-style" target="_blank" rel="noopener noreferrer">
    <img width="180" src="./docs/images/brand/ice-logo.svg" alt="Ice Logo">
</a>

# Ice Style

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat)](https://opensource.org/licenses/MIT)

Ice Style provides the stylesheets for the broad design language of the [Ice](https://github.com/futurice/ice) web component library. By design these are not needed to use the web component library, and are part of an added broader foundation for styling web applications. 

Each web component comes with its own functional styling which can be customised as needed. 

## Installing

To install the style library you can use [Node Package Manager](https://npmjs.org).

```
npm install "@futurice/ice-style" --save-dev
```

## Usage

To use the project either reference the full library:

```html
<link
    rel="stylesheet"
    href="node_modules/ice-style/ice.css"
    type="text/css"
  />
```

Or reference the module you wish to use (note that the base module is vital to the library working effectively). 

```html
<!-- Add the base style module -->
<link
    rel="stylesheet"
    href="node_modules/ice-style/base.css"
    type="text/css"
  />
<!-- Add handheld styling for small touch devices -->
<link
    rel="stylesheet"
    href="node_modules/ice-style/handheld.css"
    media="screen and (max-width: 960px)" 
    type="text/css"
  />
```

> **Note:** This enables media queries to be used selectively and can improve the performance of the styling library by optimizing the rendering pipeline in the browser.

## Building

To build the project you can use [Node Package Manager](https://npmjs.org). The following example cleans any existing artifacts and builds the development, production, and compatible versions of the CSS library. 

```
npm run clean && npm run build
```

## Developing

To get started in developing the project it's recommended to use the official [_Node_ Docker image](https://hub.docker.com/_/node/), as this will provide a consistent and reliable environment for developing and testing changes. It's the exact image the project uses as part of the continuous integration (CI) build pipeline.

To start with Docker you can use the following command-line statement.

The project is built using [Vite](https://vitejs.dev) and the configuration can be found in the `build` directory (along with any other build-specific files). 

For further details on contributing to this project, follow [the CONTRIBUTING guide](./CONTRIBUTING).

```
docker run -it --name "ice-node" -P -v $(pwd):/src node:16-alpine sh; docker rm "ice-node"
```

> **Note:** The statement automatically removes the Docker image after use through the post-fixed `docker rm ...` command. If you want to keep the image, remove the post-fix statement and continue.
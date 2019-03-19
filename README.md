Site Template
=============

Template for a static website build.

## Project deets

**Job number**: TBD

**Project Files**: []()

**JIRA**: []()

## Repo and environment structure

There is one permanent remote branch, `master`, which should always correspond with the production server environment. There will typically be one semi-permanent remote development branch, which the development lead will specify.

All development work should primarily occur in local topic branches to be created as required, merged into the remote dev branch and then pushed to the remote dev branch. The tech lead (or whomever is responsible for deploy) will merge into any other relevant branches on deploy.

* Dev: `localhost` development using `grunt serve`.

## Requirements

To build and run the site locally, you'll need:

* [Node.js](http://nodejs.org/) 4.2.2 (For Grunt; **Note**: This _must_ be version 4.2.2)
* The [Grunt](http://gruntjs.com/getting-started) command line interface
* A [LiveReload browser extension](http://livereload.com/extensions/)

## Installation

First, review the build requirements above and ensure everything is correctly installed on your system.

Next, simply clone this repo to the local directory of your choice.

_Note:_ The relevant Node modules have been included in the repo; you should not need to run `npm  install`.

## Building the site

To build the front-end files, run the following from the cloned repo root:

    grunt build

By default, the build will be in `dev` mode. To switch modes, pass either `dev`, `stage` or `prod` as a parameter to the `build` task. Note that all of the tasks listed below accept the environment as a parameter.

    grunt build:dev
    grunt build:prod

To build just the site HTML files, run:

    grunt buildHTML

To build just the site CSS files, run:

    grunt buildCSS

To build just the site image files, run:

    grunt buildImg

To "watch" the site and rebuild on file save, run:

    grunt watch

_Note:_ The watch task is currently configured to only work with HTML, JavaScript and Sass files.

## Running the site locally

From the repo root, run:

    grunt serve

This will build the site (`grunt build:dev`), launch a dev server on port 35730 and open the site web root in your default browser.

## Deploying the site to stage

The site can be deployed to stage by running the following:

    grunt deploy 

_Note:_ To deploy the site to stage, you'll need to create an `.ftppass` file in the repo root with the following structure:

<pre>
{
  "key1": {
    "username": "",
    "password": ""
  }
}
</pre>

## Troubleshooting

* You might want to consider using Node.js v0.12.7 (there's some weirdness going on with the compilation of `node-gyp` in version greater than this) __as of 9 September 2015__.
* You might need to install Xcode's command line tools `xcode-select --install`
* If you get the following sass error:

  `Error: libsass bindings not found.

  Delete the existing `/node_modules` directory and run `npm update`.



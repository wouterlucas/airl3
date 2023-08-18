## Welcome to AirUI in Lightning 3

This is a Lightning 3 version of the AirUI design (demo) using SolidJS and the Lightning 3 WebGL renderer.

# Getting started

The next steps are manual, which are required because we currently do not have the packages on NPMJS just yet. This will be automated in the future.

In order for this to work properly we need to create a folder structure that looks like this:

```bash
airUI/
    airL3/
    renderer/
    solid/
    threadx/
```

As the `airL3` package will import stuff from a top level directory.

## Clone the prerequisities:

```bash
$ git clone git@github.com:comcast-lightning/threadx.git
$ git clone git@github.com:comcast-lightning/renderer.git
$ git clone git@github.com:comcast-lightning/solid-lightning3.git
```

Build threadx:

```bash
$ cd ./threadx
$ npm install
$ npm run build
```

Build the renderer:

```bash
$ cd ./renderer
$ npm install
$ npm run build
```

Build the Lightning 3 Solid renderer

```bash
$ cd ./solid-lightning3
$ npm install
```

## Install this app

```bash
$ git clone git@github.com:comcast-lightning/airL3.git
$ npm install
```

## Running the app

To run a development version do:

```bash
$ npm run dev
```

For a production build run:

```bash
$ npm run build 
```

---
slug: "html-singlefile-app"
date: "2020-05-30"
title: "Single File Apps[React, HTML]"
bannerImg: blog/rain.png
bannerTitleCol: "white"
description: "A Little how & why, on crafting Single File React Apps"
---

#### Contents

- [Why](#why)
- [How](#how)
- [Setup](#setup)
- [Form Construction](#form-setup)
- [Summary](#summary)

## Introduction

#### Why?

Creating a Single Page App wholly contained within a single HTML file, offers a few nice bonuses

- can be `shared` & without hosting (normally would see CORS issues)
- can be `used offline`
- engenders a higher level of trust than an unknown link
- offers more permanence that a 3rd party hosting service
- can be used with a webform to construct a single file output from the form

Ultimately I found it a useful way for sharing an App I create on some forums. It App itself was an [interactive app For Choose Your Own Adventures](https://github.com/aronedwards91/CYOA-Viewer) (CYOA) along with a [CYOA form](https://github.com/aronedwards91/CYOA-Form/releases) for building your own (which exports a single HTML file)

#### How?

I used a custom webpack library to inject everything into a single file, and built the app around a populating itself from a single json file, this was done for the form project so that it was a simple string replace.

I chose React more from experience than any other choice, I used [create-react-app](https://github.com/facebook/create-react-app) as the build setup though the solution mainly relates to webpack. Below are the 2 libraries used to setup webpack for self-contained HTML files:

- https://github.com/jantimon/html-webpack-plugin
  And the extension for this:
- https://github.com/DustinJackson/html-webpack-inline-source-plugin

#### Setup

Thankfully quite simple thanks to some nice webpack plugins.

In package.json

```
    "html-webpack-inline-source-plugin": "1.0.0-beta.2",
    "html-webpack-plugin": "4.0.0-beta.4",
```

For React apps made with create-react-app (ejection required); Within config\webpack.config.js add the below:

```
const HtmlWebpackPlugin = require('html-webpack-plugin'); -- Most react projects will already have this
+++  const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

...

  isEnvProduction &&
    shouldInlineRuntimeChunk &&
+++    new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
...
```

For newer React version with react-scripts

React automatically merges small `images` into the app to save on server calls, we can increase the limit by adding the below to the .env

`IMAGE_INLINE_SIZE_LIMIT=5000000`

#### Form Setup

For an App to be buildable from a single file, I generated the App's entire contents into a single json Object , which I will refer to as the setup object.

The form construct's the app by combining the base64 data of the app minus the setup object which was replaced with a base64 json output from the form. These are then simply stitched together as strings, and are then made into a file. I used base64 so that I could store these sections as strings within the form App.

To get the app ready I opened the resulting HTML file in notepad++, searched for the setup json item, extracted all of the before text, and all the after text, running it through an online base64 converter. [converter](https://base64.guru/converter)

[Here is the output in use on the project](https://github.com/aronedwards91/CYOA-Form/blob/master/src/filebreakdown/index.js)

My form then decodes the two sections of the app, replaces the old HTML title and stitches it all together as a single HTML file which is then downloaded and can be immediately viewed.

##### Decode & stitch
```
  const decodedPre = window.atob(BuildTextObj.pre);
  const decodedData =
    decodedPre.replace("Old Title", newTitle) +
    JSON.stringify(form) +
    window.atob(BuildTextObj.post);

  createFile(
    decodedData,
    `${data.formData.cyoa.header.title}.html`,
    "text/html"
  );
```

##### Create The File
```
  export function createFile(data, filename, type) {
    var file = new Blob([data], { type: type });
    if (window.navigator.msSaveOrOpenBlob)
      // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
    else {
      // Others
      var a = document.createElement("a"),
        url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    }
  }

  export const createFileFromObj = (dataObj, filename) => {
    createFile(JSON.stringify(dataObj), `${filename}.cyoa.json`, "application/json");
  };
```

#### Summary

In the days of easy hosting the advantages may be limited, but I do like the of being able to send people a little interactive app with no install, and fast setup, and for that it's quite a nifty little solution, hope it can be of use to you.

Many thanks to Pomo on [stackoverflow](https://stackoverflow.com/questions/51949719/is-there-a-way-to-build-a-react-app-in-a-single-html-file) for his answer which prompted me to build the project

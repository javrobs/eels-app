# Eels app
## Intro
This is a game about eels.
## FAQ
Why did you make this game?
- I haven't, it's just a bunch of broken code for now.

Is this snake?
- No, how dare you ask that. It's eel game.



## How to set up
- Django side (with conda):
    1. Create a new conda environment:
        > conda create --name \<your-env>
    1. Install pip from conda:
        > conda install pip
    1. Install django using
        > pip install django
    1. Install django rest framework (to use django as api)
        > pip install djangorestframework
    1. Start project using
        > django-admin startproject eels
    1. Start apps using 
        > python manage.py api 

        > python manage.py frontend
    1. Remember to config the app(s) in eels/settings.py according to Django documentation.
    1. Create a django view to run the url.
    1. Add references to static file js and css needed.
- React side:
    1. In new folder, run npm init
    1. Install dependencies
        > npm install react reactdom

        > npm install webpack webpack-cli babel-loader @babel/preset-react --save-dev
    1. In babel.config.json:
        >{"presets": ["@babel/preset-react"]}
    1. In webpack.config.js:
        > const path = require("path");
        // const webpack = require("webpack");
        module.exports = {
        entry: "./src/index.js",
        output: {
            path: path.resolve(__dirname, "../frontend/static/frontend/"),
            filename: "main.js",
        },
        module: {
            rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {loader: "babel-loader"}
            }]
        },
        optimization: {
            minimize: true
        },
        stats:
            {errorDetails: true}
        };
      1. in package.json add to scripts:
        > "dev": "webpack --mode development --watch"
## How to work on it:
- To run django side:  
    1. conda activate the environment you created.
    1. go to main app folder and run:
        - python manage.py runserver
- To run react side:
    1. go to react app folder and run:
        - npm run dev
- Every time react components are added or modified npm will generate a new js compilation. If update isn't current remember to clear caché in dev tools.
- Happy eeling.

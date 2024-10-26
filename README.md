# Eels app
## Intro
This is a game about eels.
## FAQ
Why did you make this game?
- I haven't, it's just a bunch of broken code for now.

Is this snake?
- No, how dare you ask that. It's eel game.


## How it was set up the first time
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
    1. In \<your-app-name>/settings.py INSTALLED_APPS add:
        > 'api.apps.ApiConfig','frontend.apps.FrontendConfig'
    1. In \<your-app-name>/urls.py
        - import 'include' from django.urls 
        - then in urlpatterns
            > path('',include('frontend.urls')), path('api/',include('api.urls'))
    1. Create frontend/urls.py
        >from django.urls import path  
        from django.shortcuts import render  
        def main(request):  
            return render(request,"frontend/index.html")  
        urlpatterns = [path('', main)]
    1. Create api/urls.py
        > from django.urls import path  
        from . import views  
        urlpatterns = [path('', views.main)]
    1. In api/views.py
        > from django.shortcuts import render  
            from django.http import HttpResponse  
            def main(request):  
            return HttpResponse("")
    1. Create template file frontend/templates/frontend/index.html
        > {% load static %}  
            \<!DOCTYPE html>  
            \<html lang="en">  
            \<head>  
            \<meta charset="UTF-8">  
            \<meta name="viewport" content="width=device-width, initial-scale=1.0">  
            \<title>\<title placeholder>\</title>  
            \<link rel="stylesheet" href="{% static 'frontend/styles.css'%}">  
            \</head>  
            \<body>  
            \<main id="root">\</main>  
            \<script src="{% static 'frontend/main.js'%}">\</script>  
            \</body>  
            \</html>  
    1. Create static files folder and include css frontend/static/frontend/styles.css
- React side:
    1. In new folder 'reactapp', run npm init
    1. Install dependencies
        > npm install react reactdom

        > npm install webpack webpack-cli babel-loader @babel/preset-react --save-dev
    1. Create babel.config.json:
        >{"presets": ["@babel/preset-react"]}
    1. Create webpack.config.js:
        > const path = require("path");  
        // const webpack = require("webpack");  
        module.exports = {  
        entry: "./src/index.js",  
        output: {  
            path: path.resolve(__dirname, "../  frontend/static/frontend/"),  
            filename: "main.js",  
        },  
        module: {  
            rules: [{  
            test: /\.js$/,  
            exclude: /node_modules/,  
            use: {loader: "babel-loader"}  
            }]  
        },  
        optimization: {minimize: true},  
        stats:{errorDetails: true}  
        };
    1. in package.json:
        - add to scripts:
            > "dev": "webpack --mode development --watch"
        - change main address to:
            > './src/index.js'
    1. create "src" folder in reactapp
    1. create working file named "index.js"
    1. Add node_modules/ to gitignore
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

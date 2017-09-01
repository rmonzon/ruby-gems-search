# Ruby Gems Search App

## Getting Started

Clone this repo. CD into the project folder and then run:

    yarn install

Once the installation is complete, run:

    yarn start

At this point you should be able to open up a browser, type `http://localhost:8080` and see the app.

## API

If you attempt to hit the Ruby Gems API directly you'll run into CORS issues. So we built
a proxy server for you. Just make your API requests to `http://localhost:3000/` instead
of `https://rubygems.org`. For example:

    curl http://localhost:3000/api/v1/search.json?query=rails

This server starts up automatically when you run `npm start`.
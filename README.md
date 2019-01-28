# boilerplate-dashboard

Kick off your Discord bot dashboard development with this boilerplate dashboard built with [Gatsby](https://www.gatsbyjs.org) and [React](https://reactjs.org/).

## Features

* Automatic routing
* Uses SCSS out of the box
* Material UI support
* A clean home page and features page, featuring a customizable NavBar and footer.

## Getting started

Start by cloning this repository and looking through `src/pages/`. Information regarding customizing specific pages/components should be in code comments.

Install the gatsby CLI using `npm install -g gatsby-cli`. To start the dashboard in development mode, run `gatsby develop`.

Some pages need an API running to connect the standalone dashboard to your bot. An example API will be provided soon, but it is easy to reverse-engineer it. Configure your API URL by making a `.env.development` file and adding `GATSBY_API_URL` to it.

## Like what you're looking at?

Star the repo so more people can see it! (and like what they're looking at ;))

## Notes

1) This dashboard uses Material UI, the most popular React CSS framework. For more information, visit https://material-ui.com/.

2) The default Material theme uses purple and pink as colors. To change those, update the theme provider in `src/withRoot.jsx`.

3) This dashboard supports (Sass)[https://sass-lang.com] by default, but you can use regular CSS too. It is idiomatic to put all stylesheets in `src/styles`, although not compulsory. Stylesheets are **not** automatically loaded, unlike pages.

## TODO

Contributions to this libraries are appreciated, and the following is a rough roadmap of planned features

* Unit testing using [Jest](https://jestjs.io/)
* More default pages - stats, commands, docs.
* Supporting Discord Oauth2 out of the box.
* Typescript and Flow support.
* A better CSS design under the covers.
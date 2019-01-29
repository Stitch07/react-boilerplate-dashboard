// gatsby config, currently used only to load plugins. read more at https://www.gatsbyjs.org/docs/plugins/
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
    plugins: ['gatsby-plugin-sass']
}
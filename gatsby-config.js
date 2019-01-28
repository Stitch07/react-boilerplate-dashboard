// gatsby config, currently used only to load plugins. read more at https://www.gatsbyjs.org/docs/plugins/
require('dotenv').config({
    path: '.env'
});

module.exports = {
    plugins: ['gatsby-plugin-sass']
}
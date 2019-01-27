exports.createRedirect = ({ actions }) => {
    const { createRedirect } = actions;
    createRedirect({
        fromPath: '/invite',
        isPermanent: true,
        toPath: 'discordapp.com'
    })
}
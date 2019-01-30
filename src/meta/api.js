const baseURL = process.env.GATSBY_API_URL;

exports.fetchStats = async () => {
    const res = await fetch(`${baseURL}/api/application`);
    const result = await res.json();
    return result;
};

exports.getInvite = () => {
    const url = new URL('https://discordapp.com/oauth2/authorize');
    url.search = new URLSearchParams([
        ['client_id', process.env.GATSBY_CLIENT_ID],
        ['permissions', '0'],
        ['scope', 'bot']
    ]);
    return url.href;
}

exports.getOauth = () => {
    const url = new URL('https://discordapp.com/oauth2/authorize');
    url.search = new URLSearchParams([
        ['redirect_uri', process.env.GATSBY_WEB_URL],
        ['response_type', 'code'],
        ['scope', ['identify', 'guilds'].join(' ')],
        ['client_id', process.env.GATSBY_CLIENT_ID]
    ]);
    return url.href;
};

exports.user = async code => {
    const user = await fetch(`${baseURL}/api/oauth/callback`, {
        method: 'POST',
        body: JSON.stringify({
            code,
            redirectUri: process.env.GATSBY_WEB_URL
        })
    }).then(res => res.json());
    localStorage.setItem('user', JSON.stringify(user));
    return user;
}

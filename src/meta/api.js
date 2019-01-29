const baseURL = process.env.GATSBY_API_URL;

exports.fetchStats = async () => {
    const res = await fetch(`${baseURL}/api/application`);
    const result = await res.json();
    return result;
}

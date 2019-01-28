const baseURL = process.env.GATSBY_API_URL;

exports.fetchStats = async () => {
    console.log(process.env.GATSBY_API_URL);
    const res = await fetch(`${baseURL}/api/application`);
    const result = await res.json();
    return result;
}
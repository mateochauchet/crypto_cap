let baseUrl = "https://api.coingecko.com/api/v3/exchanges?";


export async function getEx () {
    const  response = await fetch(baseUrl);
    const resJson = await response.json();
    return resJson;
} 




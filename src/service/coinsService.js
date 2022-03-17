let coinGeckoURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

// Coin Market Cap Key
let Key = '76c3b371-5104-429f-88f9-5dc0db201225'

let cmcURL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info'


export async function getCoins (page) {
    const  response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=true`);
    const resJson = await response.json();
    return resJson;
} 

export async function getCoinsHome (num) {
    const  response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${num}&page=1&sparkline=false`);
    const resJson = await response.json();
    return resJson;
} 

export async function getCoinsById (id) {
    const  response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
    const resJson = await response.json();
    return resJson;
} 

let headers = {
    'Accepts': 'application/json',
    'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
}

export async function getCoinsCmc () {
    const  response = await fetch(cmcURL,{headers:headers});
    const resJson = await response.json();
    return resJson;
} 
let coinGeckoURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";


export async function getCoins (page) {
    const  response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=true`);
    const resJson = await response.json();
    return resJson;
} 

export async function getCoinsF (page,num,category) {
    const  response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${num}&page=${page}&sparkline=false&${category}`);
    const resJson = await response.json();
    return resJson;
} 

export async function getCoinsHome (num) {
    const  response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${num}&page=1&sparkline=false`);
    const resJson = await response.json();
    return resJson;
} 

export async function getCoinsById (id) {
    const  response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?tickers=false&sparkline=true`);
    const resJson = await response.json();
    return resJson;
}




export async function getCoinChartData (id,days) {
    const  response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`);
    const resJson = await response.json();
    return resJson;
}


export async function getCategories () {
    const  response = await fetch('https://api.coingecko.com/api/v3/coins/categories/list');
    const resJson = await response.json();
    return resJson;
}
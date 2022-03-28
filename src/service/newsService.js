
let baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const headers =  {
    "x-bingapis-sdk": "true",
    "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
    "x-rapidapi-key": "980285b032msh5417c5bf9fc89acp1cb7bbjsn29e60eaf94f1"
}

export async function getNews (newsCategory,page) {
    const  response = await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${newsCategory}&count=10&freshness=Day&originalImg=true&textFormat=Raw&offset=${page}&safeSearch=Off`,{headers:headers});
    const resJson = await response.json();
    return resJson;
} 
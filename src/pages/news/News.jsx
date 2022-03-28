import React, { useState, useEffect } from 'react'
import { NewsContainer } from '../../containers';
import { getNews } from '../../service/newsService';


const News = () => {
    const [news, setNews] = useState();
    const [page, setPage] = useState(0);

    useEffect(() => {
        const getData = async () => {
            let res = await getNews('criptomonedas',page)
            console.log(res)
            setNews(res.value)
        }
        getData()
    }, [page]);


    return (
        <div>
            <NewsContainer news={news} setPage={setPage} page={page} />
        </div>
    )
}

export default News

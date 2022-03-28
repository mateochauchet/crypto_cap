import React from 'react';
import './newsCard.css';
import moment from 'moment';
import img from '../../assets/Thumbnail.png'


// let data = {
//     category: "Business",
//     datePublished: "2022-03-19T12:00:00.0000000Z",
//     description: "In the crypto world, it takes minutes.” Ukraine had already begun embracing crypto before its war with Russia. The country was ranked fourth for cryptocurrency adoption among its citizens in a global index by Chainalysis,",
//     image: 'https://www.si.com/.image/t_share/MTg3OTI1NzI2NTYzOTM1Mjgz/imago1010451676h.jpg',
//     img:'https://www.bing.com/th?id=ODF.DAlg1K6d6FcCd2ockBPdcQ&pid=news',
//     name: "How Ukraine embraced cryptocurrencies in response to war",
//     namee:'Sports Illustrated',
//     url: "https://www.ft.com/content/f3778d00-4c9b-40bb-b91c-84b60dd09698",
//     _type: "NewsArticle"
// }

const NewsCard = ({news}) => {
    return (
        <>
            {
                news &&
                
                <div className='app__newsCard' >
                    <a target='_blank' href={news.url}>
                        <div className="app__newsCard-img">
                            <img src={news?.image?.contentUrl || img}  alt=""/>
                        </div>
                        <div className="app__newsCard-content">
                            <h3>{news.name}</h3>
                            <p>{news.description}</p>
                        </div>
                        <div className="app__newsCard-footer">
                            <span>
                                <img src={news?.provider[0]?.image?.thumbnail?.contentUrl || '' } alt=""/>
                                <p>{news.provider[0].name}</p>
                            </span>
                            <p>{moment(news.datePublished).startOf('ss').fromNow()}</p>
                        </div>
                    </a>
                </div>
        
            }

        </>
        
    )
}

export default NewsCard

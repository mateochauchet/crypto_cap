import React from 'react';
import { NewsCard, Pagination } from '../../components';
import './newsContainer.css';
import {BiNews} from 'react-icons/bi';
import {FaRegNewspaper} from 'react-icons/fa'

const NewsContainer = ({news=[],setPage,page}) => {
    return (
        <div className='news__newsContainer'>
            <h1>Latest Crypto News</h1>

            <div className="news__newsContainer-container">
                {
                    
                    news.map(el => <NewsCard   news={el} key={el.name} /> )
                }
                
            </div>

            <Pagination setPage={setPage} page={page} num={10} />

        </div>
    )
}

export default NewsContainer

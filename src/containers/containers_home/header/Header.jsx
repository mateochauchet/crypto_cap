import React from 'react';
import './header.css';
import {Btn,CoinCard} from '../../../components'

const Header = ({coins}) => {
    return (
        <div className="home__header">
            <div className="home__header-heading">
                <h1 className='title'>Start and Build Your Crypto Portfolio Here</h1>
                <p className='subTitle'>Only at CryptoCap, you can build a good portfolio and learn best practices about cryptocurrency.</p>
                <Btn text='Get Started' />
            </div>
            <div className="home__header-container">
                <h2>Market Trend</h2>
                <div className="home__header-container_cards">
                {
                   coins && coins.map(coin => <CoinCard coin={coin} /> )
                }
                </div>
            </div>
        </div>
    )
}

export default Header

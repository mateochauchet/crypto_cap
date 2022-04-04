import React from 'react';
import './header.css';
import {Btn,CoinCard} from '../../../components'
import { NavLink } from 'react-router-dom';

const Header = ({coins}) => {
    return (
        <div className="home__header">
            <div className="home__header-heading">
                <h1 className='title'>Start and Build Your Crypto Portfolio Here</h1>
                <p className='subTitle'>Only at CryptoCap, you can build a good portfolio and learn best practices about cryptocurrency.</p>
                <NavLink to='/crypto_cap/cryptocurrencies' ><Btn text='Get Started' /></NavLink>
                
            </div>
            <div className="home__header-container">
                <h2>Market Trend</h2>
                <div className="home__header-container_cards">

                    <div className="cards1">
                        { coins && coins.map(coin => <CoinCard coin={coin} /> )}
                    </div>
                    <div className="cards2">
                        { coins && coins.map(coin => <CoinCard coin={coin} /> )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header

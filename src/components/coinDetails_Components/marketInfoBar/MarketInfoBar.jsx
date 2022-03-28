import React from 'react';
import './marketInfoBar.css';
import {AiFillCaretDown,AiFillCaretUp} from 'react-icons/ai';
import Numeral from 'react-numeral';

const MarketInfoBar = ({data,supply}) => {

    const format = '$0,0'

    return (
        <div className="app__marketBar">
            <hr/>
            <div className='app__marketBar-bar'>
                <div>
                    <h4>Market Cap</h4>
                    <p><Numeral value={data.market_cap} format={format}/></p>
                    <p className='porcentage_change' ><AiFillCaretUp/> {data.market_cap_change_24h}% </p>
                </div>
                <hr/>
                <div>
                    <h4>Diluated Market Cap</h4>
                    <p> <Numeral value={data.diluted_market_cap} format={format} /> </p>
                    <p className='porcentage_change' ><AiFillCaretUp/> {data.market_cap_change_24h}%</p>
                </div>
                <hr/>
                <div>
                    <h4>Volume</h4>
                    <p><Numeral value={data.volume} format={format} /></p>
                    <p className='porcentage_change'><AiFillCaretUp/> 5.73%</p>
                </div>
                <hr/>
                <div>
                    <h4>Circulating Supply</h4>
                    <p><Numeral value={supply.circulating_supply} format={format} /> </p>
                    <span className='margin__top'>
                        <h4>Max Supply </h4>
                        {supply.max_supply? <p> <Numeral value={supply.max_supply}  format={format} /> </p> : '---'} 
                    </span>
                    <span>
                        <h4>Total Supply</h4>
                        <p> {} <Numeral value={supply.total_supply} format={format} /> </p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MarketInfoBar

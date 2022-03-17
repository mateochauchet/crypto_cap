import React from 'react';
import './marketInfoBar.css';
import {AiFillCaretDown,AiFillCaretUp} from 'react-icons/ai'

const MarketInfoBar = () => {
    return (
        <div className="app__marketBar">
            <hr/>
            <div className='app__marketBar-bar'>
                <div>
                    <h4>Market Cap</h4>
                    <p>$56,785,456,334</p>
                    <p className='porcentage_change' ><AiFillCaretUp/> 5.73%</p>
                </div>
                <hr/>
                <div>
                    <h4>Diluated Market Cap</h4>
                    <p>$56,785,456,334</p>
                    <p className='porcentage_change' ><AiFillCaretUp/> 5.73%</p>
                </div>
                <hr/>
                <div>
                    <h4>Volume</h4>
                    <p>$56,785,456,334</p>
                    <p className='porcentage_change'><AiFillCaretUp/> 5.73%</p>
                </div>
                <hr/>
                <div>
                    <h4>Circulating Supply</h4>
                    <p>$56,785,456,334 BTC</p>
                    <span className='margin__top'>
                        <h4>Max Supply </h4> <p> 500,000,000</p>
                        
                    </span>
                    <span>
                        <h4>Total Supply</h4>
                        <p>100,000,000</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MarketInfoBar

import React from 'react'
import './coinCard.css';
import bitcoin from '../../assets/bitcoin-ic 2 (2).png'
import chart from '../../assets/chart-state 1.png'
import {FiArrowUpRight} from 'react-icons/fi'
import {BsFillArrowUpRightCircleFill,BsArrowUpRight} from 'react-icons/bs';
import {ImArrowUpRight2} from 'react-icons/im'




const CoinCard = ({coin}) => {

    const styles = {
        color : coin.price_change_percentage_24h>0? 'var(--up-color)' : 'var(--down-color)',
    }

    return (
        <div className="app__coinCard">
            <div className="app__coinCard-top">
                <div className="app__coinCard-top_info">
                    <img src={coin.image} alt="bitcoin"/>
                    <h3>{coin.symbol.toUpperCase()}</h3>
                    <div className="app__coinCard-top_info-name" >
                        <p>{coin.name.toUpperCase()}</p>
                    </div>
                </div>
                <div className="app__coinCard-top_arrow">
                    <ImArrowUpRight2 style={styles} /> 
                </div>
            </div>

            <hr/>

            <div className="app__coinCard-bottom">
                <div className="app__coinCard-bottom_price">
                    <h2>${coin.current_price}</h2>
                    <p style={styles}>{coin.price_change_percentage_24h}%</p>
                </div>
                <div className="app__coinCard-bottom_graph">
                    <img src={chart} alt="chart"/>
                </div>
            </div>
        </div>
    )
}

export default CoinCard

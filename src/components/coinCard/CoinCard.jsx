import React from 'react'
import './coinCard.css';
import chart from '../../assets/chart-state 1.png'
import {ImArrowUpRight2, ImArrowDown2, ImArrowUp2, ImArrowRight2, ImArrowDownRight2, ImArrowUp} from 'react-icons/im';
import Numeral from 'react-numeral';
import { NavLink } from 'react-router-dom';




const CoinCard = ({coin}) => {

    const styles = {
        color : coin.price_change_percentage_24h>0? 'var(--up-color)' : 'var(--down-color)',
    }

    const arrow = () => {
        let porcentage = coin.price_change_percentage_24h; 
        return (

            porcentage < -8 ? <ImArrowDown2 style={styles} /> :
            porcentage < -1 ? <ImArrowDownRight2 style={styles} /> : 
            porcentage <  1 ? <ImArrowRight2 style={styles} /> :
            porcentage <  8 ? <ImArrowUpRight2 style={styles} />:
            <ImArrowUp2 style={styles} />
        )
    }

    const format = '0,0.00';

    return (
        <div className="app__coinCard">
            <div className="app__coinCard-top">
                <NavLink to={`/cryptocurrencies/${coin.id}`} >
                    <div className="app__coinCard-top_info">
                        <img src={coin.image} alt="bitcoin"/>
                        <h3>{coin.symbol.toUpperCase()}</h3>
                        <div className="app__coinCard-top_info-name" >
                            <p>{coin.name.toUpperCase()}</p>
                        </div>
                    </div>
                </NavLink>

                <div className="app__coinCard-top_arrow">
                    {arrow()}
                </div>
            </div>

            <hr/>

            <div className="app__coinCard-bottom">
                <div className="app__coinCard-bottom_price">
                    <h2>$ <Numeral value={coin.current_price} format={format} /></h2>
                    <p style={styles}> <Numeral value={coin.price_change_percentage_24h} format={format} /> %</p>
                </div>
                <div className="app__coinCard-bottom_graph">
                    <img src={chart} alt="chart"/>
                </div>
            </div>
        </div>
    )
}

export default CoinCard

import React from 'react'
import { NavLink } from 'react-router-dom'
import './coinRow.css';
import Numeral from 'react-numeral';
import {AiFillCaretDown,AiFillCaretUp} from 'react-icons/ai'


const CoinRow = ({coin={}}) => {

    const format = '0,0.00';
    const format2 = '0,0';

    const styles = {
        color : coin.price_change_percentage_24h>0? 'var(--up-color)' : 'var(--down-color)',
    }

    const arrow = () => coin.price_change_percentage_24h>0? <AiFillCaretUp/> : <AiFillCaretDown/> ;
    
    return (
        <tr className='app__coinRow'>
            <td>{coin.market_cap_rank}</td>

            <NavLink to={`/crypto_cap/cryptocurrencies/${coin.id}`}>
                <td className='app__coinRow-name' >
                    <img src={coin.image} alt={coin.name}/> 
                    <p>{coin.name}</p>
                    <hr/>
                    <h4>{coin.symbol.toUpperCase()}</h4>
                </td>
            </NavLink>

            <td> <Numeral value={coin.current_price} format={format} /></td>
            <td> <span style={styles} > {arrow()} <Numeral value={coin.price_change_percentage_24h} format={format} /> %</span> </td>
            <td> <Numeral value={coin.market_cap} format={format2} /> </td>
            <td> <Numeral value={coin.total_volume}  format={format2} /> </td>
        </tr>
    )
}

export default CoinRow


{/* <tr> <NavLink className={navLinkDecoration}  to='/'>Home</NavLink>
<td>{index}</td>
<td>
    <img src={coin.image} alt={coin.name} /> 
    <span>{coin.name}</span>
    <span>{coin.symbol}</span>
</td>
<td>{coin.current_price}</td>
<td>{coin.price_change_percentage_24h} %</td>
<td>{coin.market_cap}</td>
<td>{coin.total_volume}</td>
</tr> */}
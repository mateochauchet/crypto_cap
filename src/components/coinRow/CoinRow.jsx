import React from 'react'
import './coinRow.css'


const CoinRow = ({coin={}}) => {
    
    return (
        <tr className='app__coinRow'>
            <td>{coin.market_cap_rank}</td>
            <td className='app__coinRow-name' >
                <img src={coin.image} alt={coin.name} /> 
                <p>{coin.name}</p>
                <hr/>
                <h4>{coin.symbol.toUpperCase()}</h4>
            </td>
            <td>{coin.current_price}</td>
            <td>{coin.price_change_percentage_24h} %</td>
            <td>{coin.market_cap}</td>
            <td>{coin.total_volume}</td>
        </tr>
    )
}

export default CoinRow


{/* <tr>
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
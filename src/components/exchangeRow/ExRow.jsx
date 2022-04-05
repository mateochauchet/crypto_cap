import React from 'react';
import './exchangeRow.css';
import Numeral from 'react-numeral';

const ExRow = ({ex={}}) => {
    return (
        <tr className='app__exRow'>
            <td>{ex.trust_score_rank}</td>
            <td className='app__coinRow-name' >
                <img src={ex.image} alt={ex.name} /> 
                <p>{ex.name}</p>
            </td>
            <td>{ex.trust_score}</td>
            <td>{ex.trade_volume_24h_btc}</td>
            <td> <Numeral value={ex.trade_volume_24h_btc} format='0' /> </td>
            <td><Numeral value={ex.trade_volume_24h_btc} format='0,00' /></td>
        </tr>
    )
}

export default ExRow

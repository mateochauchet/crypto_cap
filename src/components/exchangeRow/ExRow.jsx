import React from 'react';
import './exchangeRow.css'

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
            <td>{ex.name}</td>
            <td>{ex.name}</td>
        </tr>
    )
}

export default ExRow

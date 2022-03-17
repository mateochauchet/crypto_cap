import React, { useState } from 'react'
import { CoinRow, Table } from '../../../components'
import ExchangesList from '../../exchangesList/ExchangesList'
import './coinsList.css'

const titles = ['#', 'Name', 'Price', 'Price Change', 'Market Cap', '24h Volume' ]


const CoinsList = ({coins,pages}) => {
    const {page,setPage} = pages;



    return (
        <div className='coins__coinsList'>
            <Table titles={titles} coins={coins} >
                {
                    coins.map((coin) => <CoinRow coin={coin} key={coin.id}  /> )
                }
            </Table>
            <div className="coins__coinsList-numPage">
                <div>
                   {page!==1 && <p onClick={()=>setPage(page-1)} > {'<'} Previous  </p>} 
                </div>
                <div>
                   <p onClick={()=>setPage(page+1)} >Next  {'>'} </p> 
                </div>
            </div>
        </div>
    )
}

export default CoinsList

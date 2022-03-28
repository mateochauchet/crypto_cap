import React, { useState, useEffect } from 'react'
import { ExRow, Table } from '../../components';
import { getEx } from '../../service/exchangesService';
import './exchangesList.css'


const titles = ['#', 'Name', 'Trust Score', 'Volume(24h)', 'Avg. Liquidity', 'Visits' ]

const ExchangesList = () => {
    const [exchanges, setExchanges] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let res = await getEx();
            setExchanges(res)
        }
        getData()
    }, []);


    return (
        <div className='exchanges__exchangesList' >

            <div className="exchanges__exchangesList-filters">
                <div className="exchanges__exchangesList-filters_left">
                    <button >All</button>
                    <button >Spot</button>
                    <button>derivates</button>
                    <button>Dex</button>
                </div>
                <div className="exchanges__exchangesList-filters_right">
                    <select name="rows" /* onClick={(e)=>setNum(e.target.value)}*/ > 
                        <option value="100"  >100</option>
                        <option value="50"  >50</option>
                        <option value="25"  >25</option>
                        <option value="10"  >10</option>
                    </select>
                </div>
            </div>

            <Table titles={titles} >
                {
                    exchanges.map(ex => <ExRow ex={ex} key={ex.trust_score_rank} />)
                }
            </Table>
        </div>
    )
}

export default ExchangesList

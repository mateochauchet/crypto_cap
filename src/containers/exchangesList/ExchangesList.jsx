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
            <Table titles={titles} >
                {
                    exchanges.map(ex => <ExRow ex={ex} key={ex.trust_score_rank} />)
                }
            </Table>
        </div>
    )
}

export default ExchangesList

import React, { useState, useEffect } from 'react';
import './cryptocurrencies.css'
import {getCoins} from '../../service/coinsService';
import {CoinsList} from '../../containers'


const Cryptocurrencies = () => {
    const [coins, setCoins] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const getData = async () => {
            const res = await getCoins(page);
            setCoins(res)
        }
        getData()
    }, [page]);


   


    return (
        <div className='app__' >
            <CoinsList coins={coins} pages={{page,setPage}}/>
        </div>
    )
}

export default Cryptocurrencies



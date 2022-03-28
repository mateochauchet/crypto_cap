import React, { useState, useEffect } from 'react';
import './cryptocurrencies.css'
import {getCoins, getCoinsCmc, getCoinsF} from '../../service/coinsService';
import {CoinsList} from '../../containers'
import { useQuery } from 'react-query';


const Cryptocurrencies = () => {
    const [coins, setCoins] = useState([]);
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState('');
    const [num, setNum] = useState(100);
    

    useEffect(() => {
        const getData = async () => {
            // const res = await getCoins(page);
            // setCoins(res)
            const hola = await getCoinsF(page,num,category);
            setCoins(hola)
        }
        getData()
    }, [page,num,category]);

    

    return (
        <div className='app__' >
            <CoinsList coins={coins} pages={{page,setPage}} setCategory={setCategory} setNum={setNum} />
        </div>
    )
}

export default Cryptocurrencies



import React, { useState, useEffect } from 'react'

import { useQuery } from 'react-query'
import {Header, Features} from '../../containers'
import { getCoinsCmc, getCoinsHome } from '../../service/coinsService'

const Home = () => {
    const {data, isLoading, error} = useQuery(['getCoinsHome'],()=>getCoinsHome(4));

    


    useEffect(() => {
        const getData = async () =>{
            const res = await getCoinsCmc();
            console.log(res)
        }
        getData()
    }, []);

    return (
        <>
        <Header coins={data} />
        <Features/>
        </>
    )
}

export default Home

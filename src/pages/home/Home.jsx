import React, { useState, useEffect } from 'react'

import { useQuery } from 'react-query'
import {Header, Features} from '../../containers'
import { getCoinsCmc, getCoinsHome } from '../../service/coinsService'

const Home = () => {
    const {data, isLoading, error} = useQuery(['getCoinsHome'],()=>getCoinsHome(8));

    


    
    return (
        <>
        <Header coins={data} />
        <Features/>
        </>
    )
}

export default Home

import React, { useState, useEffect } from 'react'
import { Convertor } from '../../components'
import { ChartContainer, CoinFooter, CoinHeader } from '../../containers'


const CoinDetails = () => {
    
    
    // useEffect(() => {
    //     const getData = async () => {
    //         const res = await getCoinChartData(id,20);
    //         console.log({res})
    //     }
    //     getData()
    // }, []);


    return (
        <div>
            <CoinHeader/>
            <ChartContainer/>
            <CoinFooter/>
        </div>
    )
}

export default CoinDetails

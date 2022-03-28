import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import { CoinInfo, Convertor, MarketInfoBar, TextPill, UpDownPill } from '../../../components';
import { getCoinsById } from '../../../service/coinsService';
import './coinHeader.css';
import Numeral from 'react-numeral';



const CoinHeader = () => {
    const [data, setData] = useState(null);
    
    const {id} = useParams();

    useEffect(() => {
        const getData = async () => {
            let res = await getCoinsById(id)
            console.log(res)
            
            let details = {
                name:res.name,
                symbol:res.symbol.toUpperCase(),
                rank:res.market_cap_rank,
                description:res.description.en,
                contract:res.contract_address,
                platforms:res.platforms,
                links:res.links,
                img:res.image.small,
                img_big:res.image.large,
                supply:{
                    circulating_supply:res.market_data.circulating_supply,
                    max_supply:res.market_data.max_supply,
                    total_supply:res.market_data.total_supply,
                },
                market_data:{
                    price:res.market_data.current_price.usd,
                    price_change_24h:res.market_data.price_change_percentage_24h,
                    market_cap:res.market_data.market_cap.usd,
                    market_cap_change_24h:res.market_data.market_cap_change_percentage_24h,
                    diluted_market_cap:res.market_data.fully_diluted_valuation.usd,
                    volume:res.market_data.total_volume.usd,
                }
            }
            console.log(details)
            setData(details)
        }
        getData()
    }, []);
    
    
    
    return (
        <>
        {
            data && 

            <div className="coinDetails__header">
                <div className="coinDetails__header-heading">
                    <div className="coinDetails__header-heading_left">
                       <div className='coinDetails__header-heading_left-name' >
                           <img src={data.img_big} alt="coin_image"/>
                           <h1>{data.name}</h1>
                           <TextPill text={data.symbol} />
                       </div>
                       <div className='coinDetails__header-heading_left-rank'>
                           <TextPill text={'Rank #'+data.rank} color='var(--color-background)'/>
                       </div>
                    </div>

                    <div className="coinDetails__header-heading_right">
                        <h2>${data.market_data.price}</h2>
                        <UpDownPill porcentage={data.market_data.price_change_24h} />
                    </div>
                </div>

                <div className="coinDetails__header-detils">
                    <MarketInfoBar data={data.market_data} supply={data.supply} />
                    <CoinInfo data={{contract:data.contract,links:data.links,platforms:data.platforms,name:data.name}} />    
                </div>

                <Convertor price={data.market_data.price} img={data.img} name={data.name} symbol={data.symbol} />

            </div>
        }
        </>
    )
}

export default CoinHeader

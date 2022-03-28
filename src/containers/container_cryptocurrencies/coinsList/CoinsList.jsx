import React, { useState } from 'react'
import { CoinRow, Table } from '../../../components'
import './coinsList.css';
import Select from 'react-select'
import { useQuery } from 'react-query';
import { getCategories } from '../../../service/coinsService';
import {BiSearchAlt2} from 'react-icons/bi'

const titles = ['#', 'Name', 'Price', 'Price Change', 'Market Cap', '24h Volume' ]


const CoinsList = ({coins,pages,setCategory,setNum}) => {
    const {page,setPage} = pages;
    const [categories, setCategories] = useState([]);


    const {data, isLoading, error} = useQuery(['getCategories'],getCategories);
    console.log(data,isLoading,error)


    let options = isLoading? 'Loading...' : data.map(c => ({ value: c.category_id, label:c.name }));

    let options2 = [
        {value:'dot-ecosystem', label:"Polkadot Ecosystem"},
        {value:'binance-smart-chain', label:"BNB chain Ecosystem"},
        {value:'polygon-ecosystem', label:"Polygon Ecosystem"},
        {value:'solana-ecosystem', label:"Solana Ecosystem"},
        {value:'terra-ecosystem', label:"Terra Ecosystem"},
        {value:'near-protocol-ecosystem', label:"Near Protocol Ecosystem"},
        {value:'avalanche-ecosystem', label:"Avalanche Ecosystem"},
        {value:'moonbeam-ecosystem', label:"Moonbeam Ecosystem"},
        {value:'moonriver-ecosystem', label:"Moonriver Ecosystem"},
        {value:'oec-ecosystem', label:"OEC Ecosystem"},
        {value:'iotex-ecosystem', label:"IoTeX Ecosystem"},
        {value:'kardiachain-ecosystem', label:"KardiaChain Ecosystem"},
        {value:'harmony-ecosystem', label:"Harmony Ecosystem"},
        {value:'fantom-ecosystem', label:"Fantom Ecosystem"},
    ]

    const selectStyles = {
        control: (base, state) => ({
          ...base,
          background: "rgb(250, 250, 250, 0.15)",
          color:'white',
          // Overwrittes the different states of border
          border: 'none' ,
          
        }),
        option: (base, state) => ({
            ...base,
            fontWeight: state.isFocused ? "bold" : "normal",
            color: "black",
            background: "rgb(250, 250, 250, 0.15)",
            
        }),
        singleValue: (base, state) => ({
            ...base,
            color: 'white',

            // "&:hover": {
            //     // Overwrittes the different states of border
            // fontWeight: state.isFocused ? "bold" : "normal",
            // }
            
          })

      };
    
   

    return (
        <div className='coins__coinsList'>
            <div className="coins__coinsList-header">
                <h1>Cryptocurrency Prices by Market Cap</h1>
            </div>

            <div className="coins__coinsList-container">
                
                <div className="coins__coinsList-filters">
                    <div className="coins__coinsList-filters_left">
                        <button onClick={()=>setCategory(undefined) }>All</button>
                        <button onClick={()=>setCategory("category=decentralized-finance-defi") } >DeFi</button>
                        <button>NFT</button>
                        <button>Metaverse</button>
                        <button>Blockchains</button>
                        <span>
                        <Select placeholder='Ecosistems' options={options2}  styles={selectStyles} onChange={(e)=>setCategory(`category=${e.value}`)} />
                        </span>
                    </div>
                    <div className="coins__coinsList-filters_right">
                        <Select placeholder='Search a Category' options={options} styles={selectStyles} onChange={(e)=>setCategory(`category=${e.value}`)} />
                        <select name="rows" onClick={(e)=>setNum(e.target.value)} >
                            <option value="100"  >100</option>
                            <option value="50"  >50</option>
                            <option value="25"  >25</option>
                            <option value="10"  >10</option>
                        </select>
                    </div>
                </div>

                <Table titles={titles} coins={coins} >
                    {
                        coins.map((coin) => <CoinRow coin={coin} key={coin.id}  /> )
                    }
                </Table>
                
            </div>
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

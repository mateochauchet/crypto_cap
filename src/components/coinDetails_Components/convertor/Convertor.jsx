import React, { useState , useEffect} from 'react'
import './convertor.css';


const Convertor = ({price,img,symbol,name}) => {
    const [coinValue, setCoinValue] = useState();
    const [fiatValue, setFiatValue] = useState();

    const handleChange = (e) => {
        setCoinValue(e.target.value)
        setFiatValue(e.target.value * price)
    }

    // useEffect(() => {
    //     setFiatValue(coinValue * price)
    // });


    return (
        <div className="app__convertor card">
            <div className="app__convertor-left">
                <img src={img} alt="coin image"/>
                <span>
                    <p>{symbol.toUpperCase()}</p>
                    <h4>{name}</h4>
                </span>
                <input type="text" placeholder='0' onChange={handleChange} value={coinValue} />
            </div>
            <hr/>
            <div className="app__convertor-right">
                <img src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg" alt="usd image"/>
                <span>
                    <p>USD</p>
                    <h4>United States Dollar</h4>
                </span>
                <input type="text" placeholder='0' value={fiatValue}/>
            </div>

        </div>
    )
}

export default Convertor

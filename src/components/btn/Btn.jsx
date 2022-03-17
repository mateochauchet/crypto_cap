import React from 'react';
import  './btn.css';

const Btn = ({text}) => {
    return (
        <div className="app__btn">
            <button>{text}</button>
        </div>
    )
}

export default Btn

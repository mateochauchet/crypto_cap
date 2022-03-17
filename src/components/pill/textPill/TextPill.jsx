import React from 'react'
import './textPill.css'



const TextPill = ({text, color, background}) => {

    let styles = {
        color:color,
        backgroundColor:background
    }


    return (
        <div className='app__textPill' style={styles} >
            <p>{text}</p>
        </div>
    )
}

export default TextPill

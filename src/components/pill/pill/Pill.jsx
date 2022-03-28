import React from 'react'
import './pill.css'

const pill = ({children}) => {
    return (
        <span className='app__pill' >
            {children}
        </span>
    )
}

export default pill

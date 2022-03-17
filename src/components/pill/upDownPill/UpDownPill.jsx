import React from 'react';
import './upDownPill.css';
import {AiFillCaretDown,AiFillCaretUp} from 'react-icons/ai'

const UpDownPill = ({porcentage}) => {

    const styles = {
        backgroundColor : porcentage>0? 'var(--up-color)' : 'var(--down-color)',
    }


    return (
        <div className='app__UpDownPill' style={styles} >
            {porcentage>0 ?  <AiFillCaretUp/> : <AiFillCaretDown/> }
            <p>5.73%</p>
        </div>
    )
}

export default UpDownPill;
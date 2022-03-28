import React from 'react';
import './upDownPill.css';
import {AiFillCaretDown,AiFillCaretUp} from 'react-icons/ai'
import Numeral from 'react-numeral';

const UpDownPill = ({porcentage}) => {

    const styles = {
        backgroundColor : porcentage>0? 'var(--up-color)' : 'var(--down-color)',
    }


    return (
        <div className='app__UpDownPill' style={styles} >
            {porcentage>0 ?  <AiFillCaretUp/> : <AiFillCaretDown/> }
            <p> <Numeral value={porcentage} format='0.00' /> %</p>
        </div>
    )
}

export default UpDownPill;
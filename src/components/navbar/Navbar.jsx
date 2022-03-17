import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import './navbar.css';
import Logo from '../../assets/Logo.png'
import { Btn } from '..';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinkDecoration = ({isActive}) => isActive? 'active' : 'notActive';

    return (
       <div className="app__navbar">
           <div className="app__navbar-logo">
               <img src={Logo} alt="logo"/>
           </div>
           <ul className="app__navbar-links">
               <li><NavLink className={navLinkDecoration}  to='/'>Home</NavLink></li>
               <li><NavLink className={navLinkDecoration} to='/cryptocurrencies' >Cryptocurrencies</NavLink></li>
               <li><NavLink className={navLinkDecoration} to='/exchanges' >Exchanges</NavLink></li>
               <li>Market</li>
               <li>Learn</li>
           </ul>
           <div className="app__navbar-login">
                <Btn text='Login' />
           </div>
           <div className="app__navbar-menu .scale-up-center" >
               {isOpen? <AiOutlineClose onClick={()=>setIsOpen(false)} /> : <AiOutlineMenu onClick={()=> setIsOpen(true) }  /> }
               {isOpen && (
                    <div className="app__navbar-menu_container">
                        
                        <ul className='app__navbar-menu_container-links' >
                            <li>Home</li>
                            <hr/>
                            <li>Cryptocurrencies</li>
                            <hr/>
                            <li>trade</li>
                            <hr/>
                            <li>Market</li>
                            <hr/>
                            <li>Learn</li>
                            <hr/>
                        </ul>
                    
                        <div className="app__navbar-menu_container-login">
                            <Btn text='Login' />
                        </div>
                    </div>
                )}
           </div>
       </div>
    )
}

export default Navbar


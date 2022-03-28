import React from 'react';
import './footer.css'
import logo from '../../assets/Logo.png';

const Footer = () => {
    return (
        <>
            <hr style={{opacity:0.2,marginTop:'10rem'}}/>
            <div className="app__footer">
                <div className="app__footer-title">
                    <span>
                        <img src={logo} alt="logo"/>
                        <p>CryptoCap provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market capitalisation, CoinGecko tracks community growth, open-source code development, major events and on-chain metrics.</p>
                    </span>
                    <span>
                        <p></p>
                        <p>© 2022 Mateo_Chauchet. All Rights Reserved.</p>
                    </span>
                </div>
                <div className="app__footer-content">
                    <div>
                        <h4>About Us</h4>
                        <p>About</p>
                        <p>Careers</p>
                        <p>Blog</p>
                        <p>Legal & privacy</p>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <p>Terms & Conditions </p>
                        <p>Privacy Policy</p>
                        <p>Contact</p>
                    </div>
                    <div>
                        <h4>Get in touch</h4>
                        <p>Crechterwoord K12 182 DK Alknjkcb</p>
                        <p>085-132567</p>
                        <p>info@payme.net</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer

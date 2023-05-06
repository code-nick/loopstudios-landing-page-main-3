import React from 'react'
import img from '../assets/image/desktop/logo.svg'
import facebook from '../assets/image/desktop/icon-facebook.svg'
import twitter from '../assets/image/desktop/icon-twitter.svg'
import pinterest from '../assets/image/desktop/icon-pinterest.svg'
import instragram from '../assets/image/desktop/icon-instagram.svg'

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer__section'>

                    <div className='logo'>
                        <img src={img} alt="image" />
                    </div>
                    <div className='footer__section__footericon'>
                        <img src={facebook} alt="" />  
                        <img src={twitter} alt="" />  
                        <img src={pinterest} alt="" /> 
                        <img src={instragram} alt="" /> 
                    </div>
                </div>
                <div className='footer__title'>
                    <div className='footer__title__ul'>
                        <ul>
                            <li>About</li>
                            <li>careers</li>
                            <li>Events</li>
                            <li>Product</li>
                            <li>Support</li>
                        </ul>
                    </div>
                    <div className='loopstudio'>
                        <p>&copy;  2021 loopstudios,All rights reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

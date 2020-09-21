import React from 'react'

import logo from '../assets/CodeCoopLogo.png'

export default function NavBar() {
    return (
        <div className="nav">
            <div className="left">
                <img src={logo} alt="logo"/>
            </div>
            <div className="right"></div>
        </div>
    )
}

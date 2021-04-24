import React from 'react'

import logo from '../images/logo-kloia.png'

const Header = () => {
    return (
        <div className="d-flex flex-wrap my-3">
            <img src={logo} alt="logo" width="150" height="65" />
        </div>        
    )
}

export default Header

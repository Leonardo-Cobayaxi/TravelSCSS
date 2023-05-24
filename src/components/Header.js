import { MenuOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './styles/Header.scss'
import React, { useState } from 'react'
import { Menu } from './Menu'
const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const showMenu = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <div className='header'>

            <nav className='nav-container'>

                <div className="logo">
                    <Link to='/' className='link'>
                        <h1 className='logoColor'>G</h1> <h1>hoof’</h1> <h1 className='logoColor'>t</h1> <h1>ravels</h1>
                    </Link>
                </div>

                <div className="right">
                    <ul>
                        <li>
                            <Link to='/joinUs'>Join us</Link>
                        </li>
                        <li>
                            <Link to='/pricing'>Pricing</Link>
                        </li>
                        <li>
                            <Link to='/signup'>Collections</Link>
                        </li>
                        <li>
                            <Link to='/sponsors'>Sponsors</Link>
                        </li>
                    </ul>
                    <div className="menu">
                        <MenuOutlined className='menu-icon' onClick={showMenu} />
                    </div>
                </div>
            </nav>

            <nav className={openMenu ? 'slider active' : 'slider'}>
                <ul onClick={showMenu} className='ul-itens'>
                    {Menu.map((item, index) => {
                        return (
                            <div className='container'>
                                <li className={item.className}>
                                    <Link to={item.path}>
                                        {item.text}
                                    </Link>
                                </li>
                            </div>
                        )
                    })}
                </ul>
            </nav>


        </div>
    )
}

export default Header
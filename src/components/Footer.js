import { Link } from 'react-router-dom'
import React from 'react'
import './styles/Footer.scss'
import { Facebook, GitHub, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material'

const Footer = () => {
    return (
        <section className='footer'>
            <div className="carts">

                <form className='form-2'>
                    <div>
                        <h1>Join our newsletter</h1>
                    </div>
                    <div className='email'>
                        <label>Your Email</label>
                        <input type="text" required />
                        <button>send</button>
                    </div>
                </form>

            </div>
            <div className='line'></div>
            <div className='botton'>
                <div className="logo">
                    <Link to='/' className='link'>
                        <h1 className='logoColor'>G</h1> <h1>hoof’</h1> <h1 className='logoColor'>t</h1> <h1>ravels</h1>
                    </Link>
                </div>
                <div className="media">
                    <Link to='/'>
                        <Facebook />
                    </Link>

                    <Link to='/'>
                        <Instagram />
                    </Link>

                    <Link to='/'>
                        <Twitter />
                    </Link>

                    <Link to='/'>
                        <YouTube />
                    </Link>

                    <Link to='/'>
                        <LinkedIn />
                    </Link>

                    <Link to='/'>
                        <GitHub />
                    </Link>


                </div>

            </div>

        </section>
    )
}

export default Footer
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
                    <Link to='https://www.facebook.com/'>
                        <Facebook />
                    </Link>

                    <Link to='https://www.instagram.com/'>
                        <Instagram />
                    </Link>

                    <Link to='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4tZ2IifQ%3D%3D%22%7D'>
                        <Twitter />
                    </Link>

                    <Link to='https://www.youtube.com/'>
                        <YouTube />
                    </Link>

                    <Link to='https://www.linkedin.com/'>
                        <LinkedIn />
                    </Link>

                    <Link to='/https://github.com/'>
                        <GitHub />
                    </Link>


                </div>

            </div>

        </section>
    )
}

export default Footer
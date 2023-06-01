
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './styles/Pricing.scss'
import Header from './Header'
import small from './assets/small-paris.jpg'
import barca from './assets/barcelona.jpg'
import moscow from './assets/moscow.jpg'
import newyork from './assets/newyork.jpg'
import yarham from './assets/yharnam-small.jpg';
import pandora from './assets/pandora-small.jpg';
import dunwall from './assets/dunwall-alley.jpg';
import columbia from './assets/columbia-light.jpg';
import { ArrowBack, ArrowForward } from '@mui/icons-material'

const Pricing = () => {
    const [first, setFirst] = useState(true)
    const nextSlide = () => {
        setFirst(!first)
    }
    return (
        <div className='pricing'>
            <Header />
            <div className={first === true ? "cart-container" : "none"}>
                <ArrowBack onClick={nextSlide} />
                <div className="tour">
                    <h1>City of light</h1>
                    <img src={small} alt='Paris' />
                    <p>Paris , France</p>
                    <div className='price'>
                        <p>Per person from</p>
                        <h4>$1234</h4>
                    </div>
                    <Link to='/login' className='link'>
                        <button>
                            More
                        </button>
                    </Link>
                </div>

                <div className="tour">
                    <h1>Gothic architecture</h1>
                    <img src={yarham} alt='yharnam' />
                    <p>Healing Church , Yharnam</p>
                    <div className='price'>
                        <p>Per person from</p>
                        <h4>$1234</h4>
                    </div>
                    <Link to='/login' className='link'>
                        <button>
                            More
                        </button>
                    </Link>
                </div>

                <div className="tour">
                    <h1>City of Counts</h1>
                    <img src={barca} alt='barcelona' />
                    <p>Barcelona , Spain</p>
                    <div className='price'>
                        <p>Per person from</p>
                        <h4>$1234</h4>
                    </div>
                    <Link to='/login' className='link'>
                        <button>
                            More
                        </button>
                    </Link>
                </div>

                <div className="tour">
                    <h1>Flying city</h1>
                    <img src={columbia} alt='columbia' />
                    <p>Columbia , USA</p>
                    <div className='price'>
                        <p>Per person from</p>
                        <h4>$1234</h4>
                    </div>
                    <Link to='/login' className='link'>
                        <button>
                            More
                        </button>
                    </Link>
                </div>
                <ArrowForward onClick={nextSlide} />
            </div>
            <div className={first === true ? "none" : "cart-container"}>
                <ArrowBack onClick={nextSlide} />

                <div className="tour">
                    <h1>Coldest megacity</h1>
                    <img src={moscow} alt='moscow' />
                    <p>Moscow , Russia</p>
                    <div className='price'>
                        <p>Per person from</p>
                        <h4>$1234</h4>
                    </div>
                    <Link to='/login' className='link'>
                        <button>
                            More
                        </button>
                    </Link>
                </div>

                <div className="tour">
                    <h1>Industrial whaling city</h1>
                    <img src={dunwall} alt='dunwall' />
                    <p>Dunwall , Gristol </p>
                    <div className='price'>
                        <p>Per person from</p>
                        <h4>$1234</h4>
                    </div>
                    <Link to='/login' className='link'>
                        <button>
                            More
                        </button>
                    </Link>
                </div>

                <div className="tour">
                    <h1>The big apple</h1>
                    <img src={newyork} alt='nyc' />
                    <p>NYC , USA</p>
                    <div className='price'>
                        <p>Per person from</p>
                        <h4>$1234</h4>
                    </div>
                    <Link to='/login' className='link'>
                        <button>
                            More
                        </button>
                    </Link>
                </div>

                <div className="tour">
                    <h1>Otherworldly experience</h1>
                    <img src={pandora} alt='pandora' />
                    <p>Wasteland , Pandora</p>
                    <div className='price'>
                        <p>Per person from</p>
                        <h4>$1234</h4>
                    </div>
                    <Link to='/login' className='link'>
                        <button>
                            More
                        </button>
                    </Link>
                </div>
                <ArrowForward onClick={nextSlide} />

            </div>

        </div>
    )
}

export default Pricing
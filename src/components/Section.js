
import React, { useState } from 'react'
import { Data } from './Data'
import './styles/Section.scss'
import { ArrowBack, ArrowForward } from '@mui/icons-material'
import { Link } from 'react-router-dom'


const Section = ({ slides }) => {
    const [first, setFirst] = useState(0)
    const length = slides.length
    const nextSlide = () => {
        setFirst(first === length - 1 ? 0 : first + 1)
    }
    const prevSlide = () => {
        setFirst(first === 0 ? length - 1 : first - 1)
    }
    return (
        <section>
            <>
                <ArrowBack className='back' onClick={prevSlide} />
                <ArrowForward className='forward' onClick={nextSlide} />
            </>
            <div className='slide'>
                {Data.map((item, index) => {
                    return (
                        <div className={item.className}>
                            <div className={index === first ? 'slides active' : 'slides'} >
                                {index === first && (
                                    <div>
                                        <img src={item.image} alt={item.text} />
                                        <h1 className='title'>The best destinations for you to explore.</h1>
                                        <p className='places'>{item.text}</p>
                                        <p className='status'>{item.status}</p>
                                        <div className='buttons'>
                                            <Link to='/login' className='link'>
                                                <button>
                                                    Join
                                                </button>
                                            </Link>
                                            <Link to='/pricing' className='link'>
                                                <button>
                                                    Discover
                                                </button>
                                            </Link>
                                        </div>

                                    </div>

                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Section
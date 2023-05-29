import React from 'react';
import DiscountIcon from '@mui/icons-material/Discount';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import './styles/JoinUs.scss'
import Header from './Header';
import cardStack from '../components/assets/cardStack.svg'
import travel from '../components/assets/travel7.png'
const AboutUs = () => {

    return (

        <div className='joinUs'>
            <Header />
            <div className='upperSection'>
                <div>
                    <h1>Find the best experience of traveling</h1>
                    <p>When it comes to travel, the team at Ghoof’travels is a lot like you. We’re always bringing back travel tips and stories from our adventures because we don’t just think about trips, we go out and live them. And like you, we’re passionate about sharing insider knowledge of destinations, finding great deals, or simply discovering ways to save time and energy when planning and booking that next great getaway.
                        We understand that the more we travel, the more we enrich our lives.</p>
                </div>

                <img src={travel} />
            </div>
            <div className='midSection'>
                <h1>Why we're different</h1>
                <div className='cards'>

                    <div className='card' >
                        <h2>Flexible card</h2>
                        <CreditCardIcon className='creditCard' />
                        <p>Fully customazible card that you can edit freely, custom your own card based on tour taste.</p>
                    </div>
                    <div className='card' >
                        <h2>No payment fee</h2>
                        <MoneyOffIcon className='moneyOff' />
                        <p>Transfer and make your payment across the world without worrying about any fee in your transaction.</p>
                    </div>
                    <div className='card' >
                        <h2>Several discounts</h2>
                        <DiscountIcon className='discount' />
                        <p>Gain access to various discounts with partner companies.</p>
                    </div>
                </div>

            </div>
            <div className='lowerSection'>
                <div>
                    <h1>Customize your card</h1>

                    <img src={cardStack} />
                </div>
                <button>Sign in</button>
            </div>
        </div>
    )
}

export default AboutUs
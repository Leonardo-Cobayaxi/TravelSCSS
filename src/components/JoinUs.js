import React from 'react';

import './styles/JoinUs.scss'

const JoinUs = () => {

    return (
        <>
            <div className='upperSection'>
                <h1>Find the best experience of traveling</h1>
                <p>When it comes to travel, the team at **Hotwire** is a lot like you. We’re always bringing back travel tips and stories from our adventures because we don’t just think about trips, we go out and live them. And like you, we’re passionate about sharing insider knowledge of destinations, finding great deals, or simply discovering ways to save time and energy when planning and booking that next great getaway.
                    We understand that the more we travel, the more we enrich our lives.</p>
                <h2>Imagem aqui</h2>
            </div>
            <div className='midSection'>
                <h1>Why we're different</h1>
                <div className='card' >
                    <h2>Customazible card</h2>
                    <p>Fully customazible card that you can edit freely, custom your own card based on tour taste.</p>
                </div>
                <div className='card' >
                    <h2>No payment fee</h2>
                    <p>Transfer and make your payment across the world without worrying about any fee in your transaction.</p>
                </div>
                <div className='card' >
                    <h2>Discount on concerts and theaters</h2>
                    <p>Gain access to various discounts with partner companies</p>
                </div>


            </div>
            <div className='lowersection'>
                <div>
                    <h1>Customize your card</h1>
                    <h1>image cartao</h1>
                </div>
            </div>
            <button>Sign in</button>
        </>
    )
}

export default JoinUs
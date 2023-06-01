import React from "react";
import './styles/Product.scss'
import cards from '../components/assets/tiltedCards.png'

const Product = () => {
    return (
        <section className="product">
            <div className="title">

                <h1>More places. More miles.
                    More adventures.
                </h1>
                <h2>
                    Ghoof'Travels is your ticket to the world, with the most ways to earn and use miles and the most award destinations of any airline loyalty program.
                    Now all you need is more vacation days.
                </h2>
                <h3>
                    Oh, and those miles? They don't expire. Ever.
                </h3>
            </div>
            <img src={cards} alt="card" />
        </section>
    )
}
export default Product
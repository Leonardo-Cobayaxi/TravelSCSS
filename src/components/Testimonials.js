import React from "react";
import test from './assets/travel.jpg';
import './styles/Testimonials.scss'
const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="header">
                <h1>Connect with other members</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto distinctio delectus iste, voluptas dignissimos laudantium
                    repellendus repudiandae voluptatem amet expedita
                    quia eos porro ut a molestiae eaque impedit temporibus. Exercitationem!</p>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={test} />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Iusto distinctio delectus iste, voluptas dignissimos
                    </p>
                    <h3>Nome</h3>
                    <h4>Cargo</h4>
                </div>
                <div className="card">
                    <img src={test} />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Iusto distinctio delectus iste, voluptas dignissimos
                    </p>
                    <h3>Nome</h3>
                    <h4>Cargo</h4>
                </div>
                <div className="card">
                    <img src={test} />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Iusto distinctio delectus iste, voluptas dignissimos
                    </p>
                    <h3>Nome</h3>
                    <h4>Cargo</h4>
                </div>

            </div>
        </section >
    )
}
export default Testimonials
import React from "react";
import profile1 from './assets/profile1.jpg';
import profile2 from './assets/profile2.jpg';
import profile3 from './assets/profile3.jpg';
import './styles/Testimonials.scss'
const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="header">
                <h1>Connect with other members</h1>
                <p>We give people the power to build community
                    and bring the world closer together.
                    We’re commited to fostering a safe and supportive community for everyone.</p>
            </div>
            <div className="cards">
                <div className="card">
                    <img src={profile1} alt="user" />
                    <p>We had the most remarkable family tour.
                        Not only everything was perfect, but we felt, in every instance, that we became goofy.
                    </p>
                    <h3>Gary K. Katz</h3>
                    <h4>Barcelona, Spain</h4>
                </div>
                <div className="card">
                    <img src={profile2} alt="user" />
                    <p>The comfort, the incredibly caring crew, the goofiness, the history we learned, along with the stunning beauty of the islands.
                    </p>
                    <h3>Christopher Garcia
                    </h3>
                    <h4>Dunwall , Gristol</h4>
                </div>
                <div className="card">
                    <img src={profile3} alt="user" />
                    <p>Wonderful ! The two tour leaders who were archaeologists.
                        The food was bountiful. On the boat the meals were wholesome and goofy.
                    </p>
                    <h3>Sylvia J. Martin
                    </h3>
                    <h4>Paris, France</h4>
                </div>

            </div>
        </section >
    )
}
export default Testimonials
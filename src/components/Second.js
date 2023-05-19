import React from "react";
import './styles/Second.scss'
import small from './assets/small-paris.jpg'
import barca from './assets/barcelona.jpg'
import moscow from './assets/moscow.jpg'
import newyork from './assets/newyork.jpg'
import yarham from './assets/yharnam-small.jpg';
import pandora from './assets/pandora-small.jpg';
import dunwall from './assets/dunwall-alley.jpg';
import columbia from './assets/columbia-light.jpg';

const Second = () => {
    return (
        <section className="second">
            <h1>Gallery</h1>
            <div className="images">
                <div>
                    <img src={small} alt="paris" />
                    <p>Paris, France 2011</p>
                </div>
                <div>
                    <img src={yarham} alt="yharnam" />
                    <p>Healing Church , Yharnam 1896</p>
                </div>
                <div>
                    <img src={barca} alt="barcelona" />
                    <p>Barcelona, Spain 2019</p>
                </div>
                <div>
                    <img src={columbia} alt="columbia" />
                    <p>Columbia , USA 1912</p>
                </div>
                <div>
                    <img src={moscow} alt="moscow" />
                    <p>Moscow, Russia 2017</p>
                </div>
                <div>
                    <img src={dunwall} alt="dunwall" />
                    <p>Dunwall , Gristol 1837</p>
                </div>
                <div>
                    <img src={newyork} alt="new york" />
                    <p>NYC, USA 2020</p>
                </div>
                <div>
                    <img src={pandora} alt="pandora" />
                    <p>Wasteland , Pandora 2864</p>
                </div>
            </div>

        </section>
    )
}
export default Second
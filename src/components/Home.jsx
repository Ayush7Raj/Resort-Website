import React from 'react'
import vg from "../assets/2.png";
import {AiFillGoogleCircle, AiFillYoutube, AiFillInstagram, AiFillTwitterCircle} from "react-icons/ai";

const Home = () => {
  return (
    <>
    <div className="home" id ="home">
    <main>
        <h1>Sunset Haven Retreat</h1>
        <p>Savor the Sunset, Stay at Sunset Haven</p>
    </main>
    </div>

    <div className="home2">
        <img src ={vg} alt = "Graphics"/>
        <div>
          <p>
          We are your ultimate vacation destination, offering luxurious accommodations, breathtaking sunset views, gourmet dining experiences, rejuvenating spa treatments, and a host of recreational activities. Your escape to paradise awaits.</p>
        </div>
    </div>

    <div className="home3" id="about">
        <div>
            <h1>Why Choose us?</h1>
            <p>
            <ul>
<li>Luxurious Accommodations: Experience unparalleled comfort and elegance in our thoughtfully designed rooms and suites.</li>
<li>Breathtaking Sunset Views: Marvel at the stunning vistas as the sun dips below the horizon, creating unforgettable moments.</li>
<li>Gourmet Dining Experiences: Indulge your palate with exquisite culinary creations prepared by our talented chefs.</li>
<li>Rejuvenating Spa Treatments: Relax and unwind with a variety of spa treatments designed to refresh your body and mind.</li>
<li>Host of Recreational Activities: From water sports to nature walks, there's something for everyone to enjoy, ensuring a memorable stay.</li>
<li>Escape to paradise at Sunset Haven Retreat for an unparalleled vacation experience.</li>
</ul>
            </p>
        </div>
    </div>
    
    <div className="home4" id="brands">
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay: "0.3s",
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>

                <div style={{
                    animationDelay: "0.5s",
                }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>

                <div style={{
                    animationDelay: "0.7s",
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>

                <div style={{
                    animationDelay: "0.9s",
                }}>
                    <AiFillTwitterCircle/>
                    <p>Twitter</p>
                </div>
            </article>
        </div>
    </div>

    </>


  );
};

export default Home;
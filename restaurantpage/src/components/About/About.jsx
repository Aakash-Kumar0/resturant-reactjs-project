import React from 'react'
import BgPolygon from "../../assets/BgPolygon.png"
import Vector from "../../assets/Vector.png"
import { FaUser } from "react-icons/fa"
const bgStyle = {
    backgroundImage: `url(${BgPolygon})`,
    backgroundRepeat: "no-reapeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "relative",
};


const About = ({HandlePopup}) => {
  return <>
  
    <div style={bgStyle} className='py-14'>
        <div className="container min-h-[500px]
        relative z-10">
            <h1 className='pt-20 tracking-wider text-4xl font-semibold text-white text-center'>
                About Us
            </h1>

            {/* card section */}
            <div data-aos="fade" data-aos-delay="300" className='bg-white/80 p-10 my-10
            '>
            Our menu is a reflection of our dedication to fresh, locally sourced ingredients and creative, flavorful cooking. Whether you’re in the mood for a comforting classic or something new and adventurous, our chefs craft each dish with care and passion. We believe that great food brings people together, and we’re honored to be a part of your dining experiences.we’ve created a space that feels like home. With cozy interiors, thoughtful decor, and a friendly, welcoming vibe, we aim to make every visit special. Whether you’re here for a casual lunch, a romantic dinner, or a celebration with friends, you’ll find the perfect setting to relax and enjoy.

            <div className='pt-10 flex justify-center'>
            <button onClick={HandlePopup} className='flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-300'>
            <FaUser/>
                My Account
            </button>
            </div>

            </div>
        </div>
        {/* wave vector */}


        <div className='absolute top-0 right-0 w-full'>
            <img src={Vector} alt="" className='mx-auto'/>
        </div>


    </div>
  
  </>
}

export default About

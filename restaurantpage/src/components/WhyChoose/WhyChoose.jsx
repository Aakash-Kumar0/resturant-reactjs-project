import React from 'react'
import { FaBus } from "react-icons/fa"
const WhyChoose = () => {
  return <>
  
  <div className="py-14 md:py-28
  bg-gray-50">
    <div className='container'>
        {/* heading section */}
        <h1 data-aos="fade" className='pb-16 tracking-wider text-2xl
        font-semibold text-dark text-center'>
            Why Choose Us
        </h1>

        {/* card section */}


        <div>
            <div data-aos="fade" data-aos-delay="300" className='grid grid-cols-2 md:grid-cols-4
            gap-14 sm:gap-4' >

            {/* 1st card */}
            <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                <p className='text-dark/70 font-semibold'>Fresh, flavorful dishes made from quality ingredients.</p>
                <p className='text-5xl rotate-90 text-primary text-center translate-x-4'>....</p>
                <FaBus className='text-5xl text-primary' />
            </div>
            <div className='text-center flex justify-center items-center flex-col gap-2 px-3'>
            <FaBus className='text-5xl text-secondary' />
                
            <p className='text-5xl rotate-90 text-secondary text-center translate-x-4'>....</p>

                <p className='text-dark/70 font-semibold'>A welcoming space perfect for any occasion.</p>
            </div>
            <div className='text-center flex justify-center items-center flex-col gap-2 px-2'>
                <p className='text-dark/70 font-semibold'>Attentive staff who make you feel at home.</p>
                <p className='text-5xl rotate-90 text-primary text-center translate-x-4'>....</p>
                <FaBus className='text-5xl text-primary' />
            </div>
            <div className='text-center flex justify-center items-center flex-col gap-2 px-3'>
            <FaBus className='text-5xl text-secondary' />
                
            <p className='text-5xl rotate-90 text-secondary text-center translate-x-4'>....</p>

                <p className='text-dark/70 font-semibold'>We support local farmers and our community.</p>
            </div>
            </div>
            
        </div>

    </div>
  </div>
  
  </>
}

export default WhyChoose

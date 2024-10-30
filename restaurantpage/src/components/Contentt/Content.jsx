import React from 'react'
import Apple from '../../assets/png/apple.png'
import kiwi from '../../assets/png/kiwi.png'
import lemon from '../../assets/png/lemon.png'
import leaf from '../../assets/png/leaf.png'
import tomato from '../../assets/png/tomato.png'
import PrimaryButton from '../shared/PrimaryButton'

const Content = () => {
  return <>
  
  <div className="container py-14 relative">
    <div  className='relative z-20 '>
        <h1 data-aos="fade-up"
        data-aos-delay="300" className="py-8 tracking-wider text-2xl
        font-semibold text-dark text-center">
            Taste the Healthy Difference
        </h1>
            {/* content section */}
        <div className='space-y-10'>
            <div data-aos="fade-up"
                    data-aos-delay="500" className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
                <div>
                    <p>we believe that eating
                        <span className="text-primary"> healthy </span> doesn’t mean compromising on taste. Our mission is to make nutritious, delicious food accessible to everyone. From mouthwatering recipes to expert tips, we’re here to guide you on a journey toward better health and vibrant living.</p>
                </div>
                
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
            <div></div>
                <div data-aos="fade-up"
                    data-aos-delay="500">
                    <p> we are dedicated to proving that healthy food is not only <span className="text-primary">beneficial </span> but also incredibly enjoyable. Our goal is to inspire you to make healthier choices without sacrificing flavor or satisfaction. Discover a world where nutrition meets taste and wellness is a daily delight.</p>
                </div>
            </div>
        </div>
        {/* button section */}
        <div
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-offset="0" className='flex justify-center mt-10
        sm:mt-14'>
            <PrimaryButton/>
        </div>
    </div>
    {/* bg fruits pngs*/}
    <div data-aos="fade-right"
     className='absolute top-5 -left-16 
    sm:bottom-0 sm:left-0 opacity-50
    sm:opacity-100'>
    <img src={leaf} alt="" className='max-w-[160px'/>
    </div>

    <div data-aos="fade-right" className='absolute -bottom-16 -left-16 
    sm:bottom-0 sm:left-0 opacity-50
    sm:opacity-100'>
    <img src={tomato} alt="" className='max-w-[280px'/>
    </div>

    <div data-aos="fade-left" className='absolute top-10 -right-16 
    sm:right-20 opacity-50
    sm:opacity-100'>
    <img src={lemon} alt="" className='max-w-[200px'/>
    </div>

    <div data-aos="fade-left" className='hidden sm:block absolute -bottom-12 right-0'>
    <img src={Apple} alt="" className='max-w-[160px'/>
    </div>

    <div data-aos="fade" className='absolute top-1/2 -translate-y-1/2 
    left-1/3 -translate-x-1 opacity-50
    sm:opacity-100'>
    <img src={kiwi} alt="" className='max-w-[180px'/>
    </div>

  </div>
  
  </>
}

export default Content

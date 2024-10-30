import React from 'react'
import bannerImg from "../../assets/banner.png";
import bannerBg from "../../assets/bannerBg.png"
import PrimaryButton from '../shared/PrimaryButton';

const bgStyle = {
    backgroundImage: `url(${bannerBg})`,
    backgroundRepeat: "no:repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
};

const Banner = () => {
    return <>
    
    <div style={bgStyle} className='relative z-[-1]'>
        <div className="container py-16 sm:py-0">
            <div className="grid grid-cols-1 
            sm:grid-cols-2 gap-4 place-items-center
            min-h-[550px]">
                {/* text-content section */}

                <div className='space-y-7 text-dark order-2
                sm:order-1'>
                    <h1 data-aos="fade-up" className='text-5xl'>Indulge in Flavor – Fresh Ingredients, Unmatched Taste Meal Plan <span className='text-secondary font-cursive text-7xl'>Delivery</span> in Your City</h1>
                    <p data-aos="fade-up"
                    data-aos-delay="300" className='lg:pr-64'>Get our gourmet  delivered straight to you for only Rs.3500 per week. Quick, easy, and delicious – order now!</p>

                    {/* button section */}

                    <div data-aos="fade-up"
                    data-aos-delay="500">
                        <PrimaryButton/>
                    </div>

                </div>

                


                {/* Image section */}
                <div data-aos="zoom-in"
                    data-aos-delay="500"
                     className='realative z-30 order-1 sm:order-2'>
                    <img src={bannerImg} alt=""
                    className='w-full sm:scale-125 
                    sm:translate-y-16' />
                </div>

            </div>
        </div>
    </div>
    
    </>
}

export default Banner
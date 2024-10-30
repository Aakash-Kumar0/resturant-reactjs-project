import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md"
import { FaPhone } from "react-icons/fa"
const Footer = () => {
  return <>
  
  <div className='text-white mt-20'>
    <div data-aos="fade" className="container bg-gradient-to-b from-primary to-primaryDark rounded-t-3xl">
        {/* contact section */}
        <div>
            <h1 className='py-10 text-3xl font-bold text-yellow text-center'>Contact Us</h1>


            {/* grid section */}

            <div className='grid grid-cols-1 
            sm:grid-cols-2 md:grid-cols-3 gap-14
            border-b-2 border-white pb-6'>

                    {/* address Section */}

                <div className='text-center space-y-4'>
                   <div className='flex justify-center'>
                    <IoLocationSharp className='text-5xl' />
                    </div> 
                    <p>#92, 3rd Main, Virgo Nagar, Post, <br /> seegehalli, Bengaluru, Karnatka 560049</p>
                </div>
                {/* Email Section */}

                <div className='text-center space-y-4'>
                    <div className='flex justify-center'>
                    <MdEmail className='text-5xl' />
                    </div>
                    <div>
                        <p>info@foodwala.com</p>
                        <p>hr@foodwala.com</p>
                    </div>
                </div>

                {/* Number section */}

                <div className='text-center space-y-4'>
                    <div className='flex justify-center'>
                        <FaPhone className='text-5xl'/>
                    </div>
                    <div>
                        <p>+9 13123456789 - Sales and Services</p>
                        <p>+91 2387654321 - Hiring Queries</p>
                        <p>+91 2345232445 - WhatsApp</p>
                    </div>
                </div>
            </div>
        </div>
        {/* copyright section */}
        <div className='flex justify-between p-4 items-center'>
            <p>© 2022 TCJ. All rights reserved</p>
            <div className='flex items-center gap-6'>
                <a href="#">Privacy policy</a>
                <a href="#">Terms & Conditions</a>
            </div>
        </div>

    </div>
  </div>
  
  </>
}

export default Footer

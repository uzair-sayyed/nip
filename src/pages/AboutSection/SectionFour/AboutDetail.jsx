import React from 'react'
import "./AboutDetail.scss"

const AboutDetail = () => {
    return (
        <div className='about-section-two grid md:grid-cols-2 gap-10 md:gap-20'>
            <div>
                <h2 className=' text-[32px] md:text-[36px] lg:text-[48px] font-light'>
                    Founded on a great idea, over a cup of coffee, Quarter Digital was created to satisfy peculiar tastes in web design.
                </h2>
            </div>
            <div className='flex flex-col sm:gap-y-10'>
                <p className='lg:text-[18px]'>Too many websites could be made better with just a little more time and effort. Rather than complaining, we decided to do something about it.</p>
                <div className='sm:flex gap-8'>
                    <p className='lg:text[16px] leading-[1.5] col-span-6 flex flex-col gap-y-2 basis-3/6'>
                        <span>Our goal is to help you drive your business by showing off your unique offerings and values in a clear, simple, memorable way. We have a passion for helping people tell their stories and get their message out, so we knew we had to fill the gaps.</span>
                        <span>We set out to create a digital world that was an exciting and engaging place to visit.</span>
                    </p>
                    <p className='lg:text[16px] leading-[1.5] col-span-6 flex flex-col gap-y-2 basis-3/6'>
                        <span>Our main motivation though is to make your life easier. Utilising our skills in web design, we create stunning websites that truly represent your business.</span>
                        <span>We have been recognised as one of the top <strong>UI/UX Design Agencies in the United Kingdom</strong> by DesignRush</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutDetail
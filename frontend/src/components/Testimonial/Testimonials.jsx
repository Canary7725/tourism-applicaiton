import React from 'react'
import Slider from 'react-slick'

import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

    const settings= {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slideToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slideToScroll: 1,
                },
            },
        ]
    }
  return (
    <Slider { ...settings}>
    <div className="testimonial py-4 px-3">
        <p>"Our family vacation was truly unforgettable thanks to this amazing travel agency! The team took care of every detail, from booking our flights to selecting the best tours. We felt like VIPs the whole time!"</p>

        <div className="d-flex align-items-center gap-4">
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className="mb-0 mt-m">Akhilesh Sharma</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>"I had the best solo trip ever with this company! They helped me explore new places I never imagined visiting. The itinerary was perfect, and the local guides were knowledgeable and friendly. Highly recommend!"</p>

        <div className="d-flex align-items-center gap-4">
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className="mb-0 mt-m">Pranjal Subedi</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>"The group tour we took with this agency was incredible. Everything was well-organized, and we were able to see all the must-see spots in such a short time. The team made the entire trip smooth and enjoyable."</p>

        <div className="d-flex align-items-center gap-4">
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className="mb-0 mt-m">Renab Bogati</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>"I traveled with my friends, and we had an amazing time exploring new destinations. This agency truly knows how to curate unique experiences. Thanks for making our trip memorable!"</p>

        <div className="d-flex align-items-center gap-4">
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className="mb-0 mt-m">Aakriti Simkhada</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
</Slider>
  )
}

export default Testimonials
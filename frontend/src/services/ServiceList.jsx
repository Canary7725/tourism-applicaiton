import React from 'react'
import ServiceCard  from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Get accurate and up-to-date weather forecasts for your travels.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Discover the best places with experienced and friendly guides.",
    },
    {
        imgUrl: customizationImg,
        title: "Trip Customization",
        desc: "Plan your journey with personalized itineraries tailored to you.",
    },
];

const ServiceList = () => {
  return <>
    {
        servicesData.map((item,index) => (
        <Col lg='3' key={index}>
            <ServiceCard item={item} />
        </Col>
    ))}
  </>
};

export default ServiceList;
import React from 'react'
import './newsletter.css'

import { Container,Row,Col } from 'reactstrap'

import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subscribe now to get useful travelling information.</h2>

                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email' />
                        <button className="btn newsletter__btn">Subscribe</button>
                    </div>

                  <p>Stay updated with the latest travel tips, exclusive offers, and inspiring itineraries. By subscribing to our newsletter, you'll get access to curated travel advice, special discounts, and expert recommendations for your next adventure. Whether you're planning a relaxing vacation or an action-packed tour, we've got you covered!</p>  
                </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter
import React from 'react';
import '../styles/aboutus.css';
import userIcon from '../assets/images/user.png'


const TeamMember = ({ name, role, image }) => (
    <div className="team-member hover-3d">
        <img src={userIcon} alt={name} className="team-member-image" />
        <div className="team-member-info">
            <h3>{name}</h3>
            <p>{role}</p>
        </div>
    </div>
);

const AboutUs = () => {
    const teamMembers = [
        { 
            name: "Akhilesh Sharma", 
            role: "CTO", 
            image: "/images/akhilesh-sharma.jpg" 
        },
        { 
            name: "Renab Bogati", 
            role: "CFO", 
            image: "/images/renab-bogati.jpg" 
        },
        { 
            name: "Pranjal Subedi", 
            role: "CEO", 
            image: "/images/pranjal-subedi.jpg" 
        }
    ];

    return (
        <div className="about-page">
            <section className="about-hero">
                <div className="hero-content">
                    <h1>Discover Nepal with NepScape</h1>
                    <p>Transforming Travel, Celebrating Culture</p>
                </div>
            </section>

            <section className="about-mission">
                <div className="mission-content">
                    <h2>Our Mission</h2>
                    <div className="mission-grid">
                        <div className="mission-item hover-3d">
                            <i className="icon-globe"></i>
                            <h3>Authentic Experiences</h3>
                            <p>Connect travelers with genuine Nepalese culture</p>
                        </div>
                        <div className="mission-item hover-3d">
                            <i className="icon-mountain"></i>
                            <h3>Sustainable Tourism</h3>
                            <p>Protect local environments and communities</p>
                        </div>
                        <div className="mission-item hover-3d">
                            <i className="icon-heart"></i>
                            <h3>Meaningful Journeys</h3>
                            <p>Create life-changing travel experiences</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-team">
                <h2>Meet Our Team</h2>
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <TeamMember 
                            key={index} 
                            name={member.name} 
                            role={member.role} 
                            image={member.image} 
                        />
                    ))}
                </div>
            </section>

            <section className="testimonials">
                <h2>What Travelers Say</h2>
                <div className="testimonial-slider">
                    <div className="testimonial-card hover-3d">
                        <p>"NepScape showed me the heart of Nepal. An unforgettable journey!"</p>
                        <span>- Sarah Johnson, USA</span>
                    </div>
                </div>
            </section>

            <section className="call-to-action">
                <h2>Ready to Explore Nepal?</h2>
                <p>Every journey is a story waiting to be written</p>
                <button className="cta-button">View Our Tours</button>
            </section>
        </div>
    );
}

export default AboutUs;
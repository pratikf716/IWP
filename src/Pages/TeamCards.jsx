import React from 'react';
import Slider from 'react-slick';
import './TeamCards.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamCards = () => {
    const teamMembers = [
        { imgSrc: './Images/service1.png', designation: '1. BOXTYPE WATERPROOFING TREATMENT' },
        { imgSrc: './Images/service2.png', designation: '2. POLYUREA APPLICATION' },
        { imgSrc: './Images/service3.png', designation: '3. MEMBRANE WATERPROOFING TREATMENT' },
        { imgSrc: './Images/service4.png', designation: '4. POLYURETHANE COATING' },
        { imgSrc: './Images/service5.png', designation: '5. EPOXY COATING' }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <div className="container team-section">
            <h1 className="title">Our Services</h1>
            <Slider {...settings}>
                {teamMembers.map((member, index) => (
                    <div className="card" key={index}>
                        <img className="card-img" src={member.imgSrc} alt={member.designation} />
                        <div className="card-content">
                            <p className="designation">{member.designation}</p>
                        </div>
                        <div className="card-hover">
                            <p className="designation">{member.designation}</p>
                            <div className="social-links">
                                <a href="#" className="social-btn"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="social-btn"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social-btn"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TeamCards;

import React from 'react';
import './TeamCards.css'; // Importing the CSS file

const TeamCards = () => {
    const teamMembers = [
        {
            imgSrc: '/Images/team-1.jpg',
            name: 'John Doe',
            designation: 'Designer',
        },
        {
            imgSrc: '/Images/team-2.jpg',
            name: 'Jane Smith',
            designation: 'Developer',
        },
        {
            imgSrc: '/Images/team-3.jpg',
            name: 'Mike Johnson',
            designation: 'Manager',
        },
    ];

    return (
        <div className="container team-section">
            <h1 className="title">Dedicated Team Members</h1>
            <div className="cards">
                {teamMembers.map((member, index) => (
                    <div className="card" key={index}>
                        <img className="card-img" src={member.imgSrc} alt={`${member.name}`} />
                        <div className="card-content">
                            <h4 className="name">{member.name}</h4>
                            <p className="designation">{member.designation}</p>
                        </div>
                        <div className="card-hover">
                            <h4 className="name">{member.name}</h4>
                            <p className="designation">{member.designation}</p>
                            <div className="social-links">
                                <a href="#" className="social-btn"><i className="fab fa-twitter"></i></a>
                                <a href="#" className="social-btn"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social-btn"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamCards;

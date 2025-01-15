import React from 'react';
import './ProfileCard.css'; // Add styling here

const ProfileCard = () => {
  const profile = {
    name: "Amar Deep",
    headline: "Full-Stack Java Developer | Cloud Enthusiast",
    profilePicture: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",
    location: "Toronto, Canada",
    about: "Passionate about building scalable java applications and learning new technologies. Skilled in React, Spring Boot, AWS, MySQL and DevOps.",
    skills: ["React", "JavaScript", "Spring Boot", "AWS", "DevOps", "Terraform", "MySQL", "Docker", "Kubernetes"],
    linkedin: "https://www.linkedin.com/in/amar-deep-234612168/",
  };

  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={profile.profilePicture} alt={`${profile.name}'s profile`} className="profile-pic" />
        <h2>{profile.name}</h2>
        <h4>{profile.headline}</h4>
        <p className="location">{profile.location}</p>
      </div>
      <div className="profile-body">
        <h3>About</h3>
        <p>{profile.about}</p>
        <h3>Skills</h3>
        <ul className="skills-list">
          {profile.skills.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>
      <div className="profile-footer">
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
          View LinkedIn Profile
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;

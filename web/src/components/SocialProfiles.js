import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";

const SocialProfile = (props) => {
  const { link, image } = props.socialProfile;
  return (
    <span>
      <a href={link}>
        <img
          src={image}
          alt="social-profile"
          style={{ width: 25, height: 25, margin: 10 }}
        />
      </a>
    </span>
  );
};

const SocialProfiles = () => (
    <div>
      <h2>Connect with me!</h2>
      <div>
        {SOCIAL_PROFILES.map((profile) => {
          return <SocialProfile key={profile.id} socialProfile={profile} />;
        })}
      </div>
    </div>
)
export default SocialProfiles;

import React from 'react';
import { Profiles} from '../constant/constants';
const Profile: React.FC = () => {
  return (
    <div>
      <h2>{Profiles.userProfile}</h2>
      <p>{Profiles.name}</p>
      <p>{Profiles.email}</p>
      
    </div>
  );
};

export default Profile;
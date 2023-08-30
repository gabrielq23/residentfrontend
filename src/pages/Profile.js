import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const { person } = location.state || {};

  const handleBack = () => {
    navigate('/main'); // Navigate back to the main page
  };

  return (
    <div className="profile-page">
      <button className="back-button" onClick={handleBack}>Return</button>

      {/* BUTTON TO EDIT PROFILE HERE */}
      <button>Edit Profile (NOT IMPLEMENTED)</button>

      {/* BUTTON TO ADD PREFERENCES HERE */}
      <button>Add Preference (NOT IMPLEMENTED)</button>

      <h1>Resident: {person.name}</h1>
      <p>Name: {person.name}</p>
      <p>Preferences: {person.preferences ? person.preferences.join(', ') : 'No preferences'}</p>
      <p>Birth Year: {person.birthYear}</p>
      <p>Bio: NOT IMPLEMENTED</p>
    </div>
  );
}

export default Profile;
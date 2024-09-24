import React, { useState } from 'react';
import PropTypes from 'prop-types';
import videoBackground from '../assets/background.webm';

const DeployTroopsModal = ({ subTer, onDeploy }) => {
  const [troopsInput, setTroopsInput] = useState('');

  const handleDeploy = () => {
    const troops = parseInt(troopsInput, 10);
    if (!isNaN(troops) && troops >= 0) {
      onDeploy(troops);
      alert(`Successfully deployed ${troops} troops to Sub-Ter ${subTer.id}.`);
    } else {
      alert('Please enter a valid number of troops (0 or greater).');
    }
  };

  return (
    <div className="modal-container">
      <video autoPlay loop muted className="video-background">
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className = "time-parallel">
        <span>Time Left: </span>
      </div>
      <div className="modal-content">
        <input
          type="number"
          className="input-field"
          placeholder='TROOP COUNT'
          value={troopsInput}
          onChange={(e) => setTroopsInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleDeploy();
            }
          }}
          min="0"
          aria-label="Number of troops to deploy"
        />
        <button
          className="enter-button"
          onClick={handleDeploy}
          aria-label="Deploy troops"
        >
          Deploy
        </button>
      </div>
    </div>
  );
};

DeployTroopsModal.propTypes = {
  subTer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    troops: PropTypes.number.isRequired,
    damaged: PropTypes.bool.isRequired,
  }).isRequired,
  onDeploy: PropTypes.func.isRequired,
};

export default DeployTroopsModal;

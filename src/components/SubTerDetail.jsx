import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const SubTerDetail = ({ subTers, setSubTers }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [troopsInput, setTroopsInput] = useState('');
  const [subTer, setSubTer] = useState(null);

  useEffect(() => {
    if (subTers) {
      const foundSubTer = subTers.find((s) => s.id === parseInt(id, 10));
      if (foundSubTer) {
        setSubTer(foundSubTer);
        setTroopsInput(foundSubTer.troops.toString());
      } else {
        alert('Sub Territory not found.');
        navigate('/');
      }
    }
  }, [subTers, id, navigate]);

  const handleDeploy = () => {
    const troops = parseInt(troopsInput, 10);
    if (!isNaN(troops) && troops >= 0) {
      setSubTers((prevSubTers) =>
        prevSubTers.map((s) =>
          s.id === subTer.id ? { ...s, troops } : s
        )
      );
      alert(`Successfully deployed ${troops} troops to Sub-Ter ${subTer.id}.`);
      navigate('/');
    } else {
      alert('Please enter a valid number of troops (0 or greater).');
    }
  };

  if (!subTer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-lg font-bold mb-2">Sub-Ter {subTer.id}</h2>
        <input
          type="number"
          className="border p-2 w-full mb-2"
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
        <div className="flex justify-end">
          <button
            className="mr-2 p-2 bg-blue-500 text-white rounded"
            onClick={handleDeploy}
            aria-label="Deploy troops"
          >
            Deploy
          </button>
          <button
            className="p-2 bg-red-500 text-white rounded"
            onClick={() => navigate('/')}
            aria-label="Cancel deployment"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

SubTerDetail.propTypes = {
  subTers: PropTypes.array.isRequired,
  setSubTers: PropTypes.func.isRequired,
};

export default SubTerDetail;

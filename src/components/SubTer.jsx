import React from 'react';
import PropTypes from 'prop-types';
import subter1Image from '../assets/subter1.webm';
import subter1ImageDamaged from '../assets/subter1-damaged.webm';
import subter2Image from '../assets/subter2.webm';
import subter2ImageDamaged from '../assets/subter2-damaged.webm';

const SubTer = ({ subTer, onEnemyAttack, onClick }) => {
  const getSubTerImage = (subTerType, damaged) => {
    if (!subTerType) {
      return subter1Image; // return a fallback image
    }
    switch (subTerType) {
      case 'subter1':
        return damaged ? subter1ImageDamaged : subter1Image;
      case 'subter2':
        return damaged ? subter2ImageDamaged : subter2Image;
      default:
        throw new Error(`Unknown sub-ter type: ${subTerType}`);
    }
  };

  const getSubTerClass = (subTerType, id) => {
    switch (subTerType) {
      case 'subter1':
        return `subter1 subter1-${id}`;
      case 'subter2':
        return `subter2 subter2-${id}`;
      default:
        return '';
    }
  };

  const handleClick = () => {
    onClick(subTer);
  };

  return (
    <img
      src={getSubTerImage(subTer.type, subTer.damaged)}
      alt={`Sub-Ter ${subTer.id}`}
      className={`subter ${getSubTerClass(subTer.type, subTer.id)} cursor-pointer transition-transform duration-300`}
      onClick={handleClick}
      onContextMenu={(e) => {
        e.preventDefault();
        onEnemyAttack(subTer);
      }}
      role="button"
      aria-label={`Sub-Ter ${subTer.id}`}
    />
  );
};

SubTer.propTypes = {
  subTer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['subter1', 'subter2']).isRequired,
    troops: PropTypes.number.isRequired,
    damaged: PropTypes.bool.isRequired,
  }).isRequired,
  onEnemyAttack: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SubTer;

import React from 'react';

const ServiceCard = ({ icon, title, points }) => {
  return (
    <div className='single-service-one'>
      <div className='hover-block'></div>
      <img src={icon} alt='icon' />
      <h3>{title}</h3>
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </div>
  );
};

export default ServiceCard;

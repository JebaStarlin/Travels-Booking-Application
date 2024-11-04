import PropTypes from 'prop-types';

function PackageEntry({image}) {
  return (
    <div>
      <div className="">
      <img  className=' h-[550px] w-[340px] object-left object-cover ' src={image} alt=""/>
      </div>
    </div>
  )
}

PackageEntry.propTypes ={
  image: PropTypes.string.isrequired,
}

export default PackageEntry

/*
import React from 'react';
import PropTypes from 'prop-types';

function Card({ image }) {
  return (
    <div className="card">
      <img src={image} alt="Card" />
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Card;

 */
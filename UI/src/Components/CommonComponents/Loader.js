import React from 'react';
import loading from '../../Images/loading.gif'

const  Loader = () => {
  return (
    <div className="loader">
      <img src={loading}/>
    </div>
  );
}

export default Loader;

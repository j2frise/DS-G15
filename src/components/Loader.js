import React from 'react';
import load from '../assets/img/loader.gif'

export default (props) => {
  const { show } = props;

    return (
          <>
            {
              show && 
              <div className="loader">
                <img alt="loading" src={load} />
              </div>
            }
          </>
    );
  }
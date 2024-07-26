// import React from 'react'
import './IceBucket.css';
import { useParams } from 'react-router-dom';
import IceBucketHeader from '../IceBucketHeader';
import { useState } from 'react';

import Icecone from '../../assets/img/Icream/cone.svg?react';
import Icecone1 from '../../assets/img/Icream/cone1.svg?react';

const IceBucket = () => {
  const [isClick, setIsClick] = useState(false);
  const params = useParams();

  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <div className="IceContainer">
      <div className="bucket-container">
        <div className="bucket-header">
          <button className="header-logout-button">로그아웃</button>
          <IceBucketHeader userInfo={params.name} />
        </div>
        <div className="bucket-content-container">
          <button onClick={handleClick}>!</button>
          {isClick ? (
            <img className="cone" src={Icecone} alt="cone" />
          ) : (
            <img className="cone1" src={Icecone1} alt="cone1" />
          )}
        </div>
      </div>
    </div>
  );
};

export default IceBucket;

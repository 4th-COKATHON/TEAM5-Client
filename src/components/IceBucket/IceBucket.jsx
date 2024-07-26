// import React from 'react'
import './IceBucket.css';
import { useParams } from 'react-router-dom';
import IceBucketHeader from '../IceBucketHeader';
import { useState } from 'react';

import Icecone from '../../assets/img/Icream/cone.svg?react';

const IceBucket = () => {
  const params = useParams();

  return (
    <div className="IceContainer">
      <div className="bucket-container">
        <div className="bucket-header">
          <button className="header-logout-button">로그아웃</button>
          <IceBucketHeader userInfo={params.name} />
        </div>
        <div className="bucket-content-container">
          <img className='cone' src={Icecone} alt="cone" />
        </div>
      </div>
    </div>
  );
};

export default IceBucket;

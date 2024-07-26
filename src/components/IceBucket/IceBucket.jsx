// import React from 'react'
import "./IceBucket.css";
import { useParams } from "react-router-dom";

import IceBucketHeader from "./IceBucketHeader";

const IceBucket = () => {
  const params = useParams();

  return (
    <div className="IceContainer">
      <div className="bucket-container">
        <div className="bucket-header">
          <button className="header-logout-button">로그아웃</button>
          <IceBucketHeader userInfo={params.name}/>
        </div>
        <div className="bucket-content-container">
          <div>스쿱</div>
        </div>
      </div>
    </div>
  )
}

export default IceBucket
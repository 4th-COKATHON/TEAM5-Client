// import React from 'react'

import './Bucket.css'
import FriendList from "../components/FriendList";
import IceBucket from '../components/IceBucket';

const bucket = () => {
  return (
    <div className='bucketContainer'>
        <FriendList />
        <IceBucket />
    </div>
  )
}

export default bucket
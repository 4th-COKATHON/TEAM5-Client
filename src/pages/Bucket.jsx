// import React from 'react'

import './Bucket.css'
import FriendList from "../components/FriendList/FriendList";
import IceBucket from '../components/IceBucket/IceBucket';

const bucket = () => {
  return (
    <div className='bucketContainer'>
        <FriendList />
        <IceBucket />
    </div>
  )
}

export default bucket
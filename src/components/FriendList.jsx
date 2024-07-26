import React from 'react';
import { useNavigate } from 'react-router-dom';

import { IoMdPerson } from 'react-icons/io';
import { CiFaceSmile } from 'react-icons/ci';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { HiOutlineUsers } from 'react-icons/hi2';

import './FriendList.css';
import Icecream from '../assets/img/icecream.svg?react';
import Arrow from '../assets/img/arrow.svg?react';

const FriendList = () => {
  const nav = useNavigate();

  const friends = ['김나연', '감자감자', '포테이토', '눈을감자', '감자에싹이나서', '자감', '5조', '최고'];
  const colors = ['#03c75a', '#c73203', '#0375c7', '#c7039c', '#e1d800'];
  return (
    <div className="container">
      <div className="friendContainer">
        <div className="friContainer">
          <div className="listTitle">
            <img src={Icecream} alt="Icecream" />
            <h3>스쿱리스트</h3>
          </div>
          <div className="listScroll">
            {friends.map((friend, index) => (
              <div key={index} className="friList" onClick={()=>nav(`${friend}`)}>
                <div className="profile" style={{ backgroundColor: colors[index % 5] }}>
                  <IoMdPerson size={18} />
                </div>
                <p>{friend}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', bottom: '0' }}>
            <img src={Arrow} alt="arrow" />
          </div>
        </div>
      </div>
      <div className="settingContainer">
        <div className="settingColumn">
          <p>
            <CiFaceSmile style={{ marginRight: '3px' }} /> 친구 검색
          </p>
          <p>
            <IoIosNotificationsOutline style={{ marginRight: '3px' }} />
            알림
          </p>
          <p>
            <HiOutlineUsers style={{ marginRight: '3px' }} />
            그룹 만들기
          </p>
        </div>
      </div>
    </div>
  );
};

export default FriendList;

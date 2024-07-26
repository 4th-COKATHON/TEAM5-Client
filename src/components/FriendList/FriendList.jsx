import { useState } from 'react';

import { IoMdPerson } from 'react-icons/io';
import { CiFaceSmile } from 'react-icons/ci';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { HiOutlineUsers } from 'react-icons/hi2';

import './FriendList.css';
import Modal from '../Modal/Modal';
import Icecream from '../../assets/img/icecream.svg?react';
import Arrow from '../../assets/img/arrow.svg?react';

const FriendList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const friends = ['김나연', '감자감자', '포테이토', '눈을감자', '감자에싹이나서', '자감', '5조', '최고'];
  const colors = ['#03c75a', '#c73203', '#0375c7', '#c7039c', '#e1d800'];

  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

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
              <div key={index} className="friList">
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
          <p onClick={() => handleOpenModal('친구검색')}>
            <CiFaceSmile /> 친구 검색
          </p>
          <p onClick={() => handleOpenModal('알림')}>
            <IoIosNotificationsOutline style={{ marginRight: '3px' }} />
            알림
          </p>
          <p onClick={() => handleOpenModal('그룹 만들기')}>
            <HiOutlineUsers style={{ marginRight: '5px' }} />
            그룹 만들기
          </p>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} content={modalContent} />
    </div>
  );
};

export default FriendList;

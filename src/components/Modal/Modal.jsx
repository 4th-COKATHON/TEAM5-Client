// import React from 'react';

import './Modal.css';
import { IoMdPerson } from 'react-icons/io';

const modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;
  console.log(content);

  const friends = ['김나연', '감자감자', '포테이토', '눈을감자', '감자에싹이나서', '자감', '5조', '최고'];
  const colors = ['#03c75a', '#c73203', '#0375c7', '#c7039c', '#e1d800'];

  return (
    <div className="modalOverlay">
      <div className="modalContainer">
        <button className="modalClose" onClick={onClose}>
          x
        </button>
        <div className="modalContent">
          <h3>{content}</h3>
          {content === '친구검색' && (
            <div className="addUser">
              <input type="text" className="modalInput" placeholder="추가할 친구의 닉네임을 입력하세요" />
              <div className="listScroll">
                {friends.map((friend, index) => (
                  <div key={index} className="friList">
                    <div className="profile" style={{ backgroundColor: colors[index % 5] }}>
                      <IoMdPerson size={18} />
                    </div>
                    <p>{friend}</p>
                    <button type="button" className="addBtn" style={{ right: '0' }}>
                      <span>친구 요청</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          {content === '알림' && (
            <div className="alarm">
              <div className="listScroll">
                {friends.map((friend, index) => (
                  <div key={index} className="friList">
                    <div className="profile" style={{ backgroundColor: colors[index % 5] }}>
                      <IoMdPerson size={18} />
                    </div>
                    <p>{friend}</p>
                    <button type="button" className="addBtn" style={{ right: '0' }}>
                      <span>친구 수락</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          {content === '그룹 만들기' && (
            <div className="addGrop">
              <p style={{ fontSize: '16px' }}>친구들과 함께 같은 목표를 향해 달려가볼까요?</p>
              <p style={{ fontSize: '14px', color: '#999999' }}>
                스쿱 그룹을 만들어 친구들과 같은 버킷리스트를 공유해보세요.
                <br />같이 바다 가기, 단체 공모전 참여, 밤새고
                술마시기, 독서 모임 참여 등과 같은 일들을 스쿱 그룹에서 할 수 있겠죠?
                <br />
                아래에서 목표를 함께할 친구들을 담아주세요!
              </p>
              <div className="listScroll">
                {friends.map((friend, index) => (
                  <div key={index} className="friList">
                    <div className="profile" style={{ backgroundColor: colors[index % 5] }}>
                      <IoMdPerson size={18} />
                    </div>
                    <p>{friend}</p>
                    <button type="button" className="addBtn" style={{ right: '0' }}>
                      <span>추가</span>
                    </button>
                  </div>
                ))}
                {/* <button className="groupBtn">그룹 생성 완료</button> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default modal;

// import React from 'react';

import './ScoopModal.css';
import Banner from '../../assets/img/MaskGroup.svg';
import { useState } from 'react';

const ScoopModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const handleClick = () => {
    onClose();
  };

  return (
    <div className="modalOverlay">
      <div className="modalContainer">
        <button className="modalClose" onClick={onClose}>
          x
        </button>
        <div className="modalContent">
          <p>빛나는 나의 청춘, 내가 해보고 싶은 것들</p>
          <h3>스쿱 만들기</h3>
          <img src={Banner} alt="배너디자인" style={{ width: '100%', margin: '10px auto' }} />
          <p style={{ fontSize: '14px' }}>
            당신이 해보고 싶은 일은 무엇인가요?
            <br />
            <br />
            IT 공모전 참여, 밤새고 술마시기, 책 20권 넘게 읽기, 18시간 넘게 자기... 이 시기가 지나면 못할 수도 있는,
            청춘만이 할 수 있는 일들을 마음껏 즐기세요!
            <br /> <br />
            “스쿱”은 당신의 청춘의 순간을 담아내는 특별한 기록입니다. 표를 추가할 때마다 아이스크림 스쿱이 하나씩
            쌓이고, 목표를 달성할 때마다 스쿱이 사라지면서, 당신의 도전과 성취가 시각적으로 표현됩니다. 스쿱을 통해
            청춘의 꿈과 도전을 기록하고, 달성하는 그 순간의 기쁨을 마음껏 누리세요.
          </p>
          <div className="scrooplistScroll">
            <textarea
              row="5"
              cols="30"
              className="todo"
              placeholder="당신의 청춘, 무엇이든 하고 싶은 일을 입력하세요"
            />
            <button type="button" className="addScoop" onClick={handleClick}>
              스쿱 생성
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoopModal;

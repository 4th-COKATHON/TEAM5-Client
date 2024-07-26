// import React from 'react';

import './Modal.css';

const modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;
  return (
    <div className="modalOverlay">
      <div className="modalContainer">
        <button className="modalClose" onClick={onClose}>
          ×
        </button>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default modal;

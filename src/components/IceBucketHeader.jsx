import { BsPlusCircle } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";

const IceBucketHeader = ({userInfo}) => {
  return (
    <div className="header-informaiton-container">
      <div className="header-information">
        <div className="left-button-container">
          <div className="left-button plus-button">
            <BsPlusCircle className="button-image" />
            <p>스쿱추가</p>
          </div>
          <div className="left-button trash-button">
            <FaRegTrashAlt className="button-image" />
            <p>스쿱삭제</p>
          </div>
        </div>
        <div className="user-name">{userInfo}</div>
        <div className="right-button-container">
          <div className="right-button">
            <FaRegPenToSquare className="button-image" />
            <p>스쿱일기</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IceBucketHeader;
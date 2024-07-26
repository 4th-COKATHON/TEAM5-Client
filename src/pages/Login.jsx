import './Login.css';
import { useNavigate } from 'react-router-dom';
import LoginHeader from '../components/LoginHeader';
import kakaoLogin from '../assets/img/kakao_login_medium_wide.png';

const Login = () => {
  const nav = useNavigate();

  const KAKAO_REST_API = import.meta.env.VITE_APP_KAKAO_REST_API;
  const KAKAO_REDIRECT_URI = `http://localhost:5173/oauth`;
  // const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    window.location.href = `http://ec2-43-203-201-112.ap-northeast-2.compute.amazonaws.com:8001/auth/kakao`; //kakaoURL로 이동
  }

  return (
    <div className='login-page'>
      <div className='login-header-container'>
        <LoginHeader />
      </div>
      <div className='login-container-wrap'>
        <div className='login-container'>
          <div className='login-left-container'>
            <div className='login-title'>
              <p className='login-title-p'>땀흘리는 나의 청춘, 우리가 이루어내는 결실</p>
              <h1 className='login-title-h1'>함께하는 버킷리스트,</h1>
              <h1 className='login-title-h1'>서비스명</h1>
            </div>
            <div className='login-content-container'>
              <div className='login-content'>
                <input className='login-input' placeholder='이메일(example@gmail.com' ></input>
                <input className='login-input' placeholder='비밀번호' ></input>
                <button className='login-button' onClick={() => nav('/bucket')} >로그인</button>
                <div className='login-kakao-text'>또는 카카오로 로그인</div>
                <div className='kakao-login-container'>
                  <img alt="kakaoLogin" className='kakaoLogin-image' src={kakaoLogin} onClick={handleKakaoLogin} />
                </div>
              </div>
            </div>
          </div>
          <div className='login-right-container'>
            <div className='login-scoop-circle login-scoop-circle-red'>
              <div className='red-circle-dots'></div>
            </div>
            <div className='login-scoop-circle login-scoop-circle-orange'></div>
            <div className='login-scoop-circle login-scoop-circle-green'></div>
            <div className='login-scoop-circle login-scoop-circle-yellow'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
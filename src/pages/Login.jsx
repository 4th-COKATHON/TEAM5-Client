import './Login.css';
import LoginHeader from '../components/LoginHeader';

import kakaoLogin from '../../dist/assets/images/kakao_login_medium_wide.png';

const Login = () => {
  return (
    <div className='login-page'>
      <div className='login-header-container'>
        <LoginHeader />
      </div>
      <div className='login-container'>
        <div className='login-left-container'>
          <div className='login-title'>
            <p className='login-title-p'>땀흘리는 나의 청춘, 우리가 이루어내는 결실</p>
            <h1 className='login-title-h1'>함께하는 버킷리스트,</h1>
            <h1 className='login-title-h1'>"서비스명"</h1>
          </div>
          <div className='login-content-container'>
            <div className='login-content'>
              <input className='login-input' placeholder='이메일(example@gmail.com'></input>
              <input className='login-input' placeholder='비밀번호'></input>
              <button className='login-button'>로그인</button>
              <div className='login-kakao-text'>또는 카카오로 로그인</div>
              <div className='kakao-login-container'>
                <img alt="kakaoLogin" className='kakaoLogin-image' src={kakaoLogin} />
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
  );
}

export default Login;
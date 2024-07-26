import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginHandler = () => {
  const navigate = useNavigate();

  window.location.href = `http://ec2-43-203-201-112.ap-northeast-2.compute.amazonaws.com:8001/auth/kakao/callback`;
  const code = new URL(window.location.href).searchParams.get("code");

   //인가코드 백으로 보내는 코드
  useEffect(() => {
    const kakaoLogin = async () => {
      await axios({
        method: "GET",
        url: `${window.location.href}/?code=${code}`,
        headers: {
          "Content-Type": "application/json;charset=utf-8", //json형태로 데이터를 보내겠다는뜻
          "Access-Control-Allow-Origin": "*", //이건 cors 에러때문에 넣어둔것. 당신의 프로젝트에 맞게 지워도됨
        },
      }).then((res) => {
        //백에서 완료후 우리사이트 전용 토큰 넘겨주는게 성공했다면
        console.log(res);
        //계속 쓸 정보들( ex: 이름) 등은 localStorage에 저장해두자
        localStorage.setItem("name", res.data.account.kakaoName);
        //로그인이 성공하면 이동할 페이지
        navigate("/bucket");
      }).catch((error)=>{
        console.log(error);
      })
    };
    kakaoLogin();
  });

  // useEffect(() => {
  //   const fetchAccessToken = async () => {
  //     try {
  //       // const response = await axios.get("/auth/kakao", { withCredentials: true });
  //       const access_token = headers.get('accessToken');

  //       if (access_token) {
  //         localStorage.setItem("access_token", access_token);
  //         navigate("/bucket");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching access token:", error);
  //       // 에러 처리
  //     }
  //   };

  //   fetchAccessToken();
  // });


  // let params = new URL(window.location.href).searchParams;
  // let access_token = params.get("accessToken");

  return (
    <div className="LoginHandeler">
      <div className="notice">
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
      </div>
    </div>
  );
};

export default LoginHandler;
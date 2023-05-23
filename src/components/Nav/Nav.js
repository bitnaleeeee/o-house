import React from "react";
import "./Nav.scss";

function Nav() {
  return (
    <div>
      <div className="navBar">
        첫 구매라면 누구나 최대 2만원 할인받기
        <button type="button" className="buttonWrap">
          X
        </button>
      </div>
      <div className="navMenuLeft">
        <ul>
          <li>오늘의집</li>
          <li>커뮤니티</li>
          <li>쇼핑</li>
          <li>이사/시공/수리</li>
        </ul>
      </div>

      <input type="text" placeholder="통합검색"></input>

      <div className="navMenuRight">
        <ul>
          <li>오늘의집</li>
          <li>로그인</li>
          <li>회원가입</li>
          <li>고객센터</li>
          <li>글쓰기</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;

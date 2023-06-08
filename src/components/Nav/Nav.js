import React from "react";
import "./Nav.scss";

function Nav() {
  return (
    <div className="header">
      <div className="header_inner">
        <div className="logo_daum">
          <div className="header_start">
            <a href="#">다음을 시작페이지로</a>
          </div>
          <div className="header_logo">
            <a href="#">
              <img
                src="https://t1.daumcdn.net/daumtop_chanel/op/20200723055344399.png"
                alt="다음로고"
              />
            </a>
          </div>
        </div>

        <div className="search_wrap">
          <div className="input_wrap">
            <input type="text" />
            <div className="text_buttons">
              <button type="button" className="keyboard"></button>
              <button type="submit" className="search_bar"></button>
            </div>
          </div>
        </div>
        <div className="header_banner">
          <a href="#">
            <img
              src="https://t1.daumcdn.net/daumtop_chanel/op/20230607014023915.png"
              alt="해양의날"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nav;

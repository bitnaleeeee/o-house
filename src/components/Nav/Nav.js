import React from "react";
import "./Nav.scss";

function Nav() {
  return (
    <div className="header">
      <div className="header_bottom">
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
            <ul className="search_keyword">
              <a href="#">
                <li>동방신기</li>
              </a>
              <a href="#">
                <li>시아준수</li>
              </a>
              <a href="#">
                <li>영웅재중</li>
              </a>
              <a href="#">
                <li>최강창민</li>
              </a>
              <a href="#">
                <li>카시오페아</li>
              </a>
            </ul>
            <div className="button_icon">
              <button className="button1" type="button"></button>
              <button className="button2" type="button"></button>
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
    </div>
  );
}

export default Nav;

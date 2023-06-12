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
      <div className="daum_service">
        <div className="inner_service">
          <div className="menu_service">
            <ul>
              <a href="#">
                <li className="cafe">카페</li>
              </a>
              <a href="#">
                <li className="email">메일</li>
              </a>
              <a href="#">
                <li className="news">뉴스</li>
              </a>
              <a href="#">
                <li className="map">지도</li>
              </a>
              <a href="#">
                <li className="insurance">증권</li>
              </a>
              <a href="#">
                <li className="shopping">쇼핑</li>
              </a>
              <a href="#">
                <li className="kakaotv">카카오TV</li>
              </a>
              <a href="#">
                <li className="webtoon">웹툰</li>
              </a>
              <a href="#">
                <li className="calender">캘린더</li>
              </a>
              <a href="#">
                <li className="story">스토리</li>
              </a>
              <a href="#">
                <li className="dictionary">사전</li>
              </a>
              <a href="#">
                <li className="game">게임</li>
              </a>
              <a href="#">
                <li className="together">같이가치</li>
              </a>
            </ul>
            <a href="#" className="link_more">
              더보기
            </a>
            <div className="today_inform">
              <span className="todaydue">06. 12. (월)</span>
              <span className="todaylocation">서울시</span>
              <span className="todaytemper">22</span>
            </div>
          </div>
          <div className="daum_today"></div>
        </div>
      </div>
    </div>
  );
}

export default Nav;

import React, { Component } from "react";
import "./UploadImg.scss";

class UploadImg extends Component {
  render() {
    return (
      <div>
        <div className="UploadImgAllPage">
          <div className="UploadImgNav">
            <img
              className="UploadImgTitleImg"
              src="/images/login/todayhome.png"
              alt="#"
            />
          </div>
          <div className="UploadImgContainer">
            <div className="innerContainer">
              <div className="UploadImgTitle">사진 올리기</div>
              <div className="UploadImgInputContainer">
                <select className="areaSize">
                  <option>평수</option>
                  <option>10평대 미만</option>
                  <option>10평대</option>
                  <option>20평대</option>
                  <option>30평대</option>
                  <option>40평대</option>
                  <option>50평 이상</option>
                </select>
                <select className="typeOfLife">
                  <option>주거</option>
                  <option>원룸&오피스텔</option>
                  <option>아파트</option>
                  <option>빌라&연립</option>
                  <option>단독주택</option>
                  <option>사무공간</option>
                  <option>상업공간</option>
                  <option>기타</option>
                </select>
                <select className="pickStyle">
                  <option>스타일</option>
                  <option>모던</option>
                  <option>북유럽</option>
                  <option>빈티지</option>
                  <option>내추럴</option>
                  <option>프로방스&로맨틱</option>
                  <option>클래식&앤틱</option>
                  <option>한국&아시아</option>
                  <option>유니크</option>
                </select>
              </div>
              <div className="contentBox">
                <div className="dropImg">
                  <img
                    className="dropImgSpace"
                    src="/images/navigation/drop.png"
                    alt="#"
                    widtt="100"
                    height="100"
                  />
                </div>
                <div className="twoInput">
                  <div className="inputSpace">
                    <select className="spaceEssential">
                      <option>공간 (필수)</option>
                      <option>원룸</option>
                      <option>거실</option>
                      <option>침실</option>
                      <option>주방</option>
                      <option>욕실</option>
                      <option>아이방</option>
                      <option>드레스룸</option>
                      <option>서재&작업실</option>
                      <option>베란다</option>
                      <option>사무공간</option>
                      <option>상업공간</option>
                      <option>가구&소품</option>
                      <option>현관</option>
                      <option>외관&기타</option>
                      <option>제품리뷰</option>
                    </select>
                  </div>
                  <div className="imgExplain">
                    <input
                      className="explainArea"
                      type="textarea"
                      placeholder="사진에 대해서 설명해주세요."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <button className="footBtn">올리기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadImg;

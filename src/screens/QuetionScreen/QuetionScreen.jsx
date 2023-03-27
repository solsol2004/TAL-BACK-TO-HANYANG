import React from "react";
import "./style.css";

export const QuetionScreen = () => {
  return (
    <div className={"quetion-screen-quetion"}>
      <div className={"quetion-screen-column-wrapper"}>
        <div className={"quetion-screen-column"}>
          <div className={"quetion-screen-content"}>
            <div className={"quetion-screen-text-wrapper"}>문양은 어떤 의미인가요?</div>
            <p className={"quetion-screen-p"}>
              입장권에 포함된 각 문양은 아래 의미를 뜻합니다!
              <br />
              <br />학 - 언제나 기품있는 우아함의 상징
              <br />
              구름 - 어딘가에&nbsp;&nbsp;구속되지 않은 자유로움의 상징
              <br />
              대나무 - 꺽이지는 않는 불굴의 의지를 상징
              <br />
              소나무 - 항상 자리를 지키는 움직함의 상징
            </p>
          </div>
          <div
            className={"quetion-screen-add"}
            style={{
              backgroundImage: "url(/img/vuesax-linear-add.svg)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

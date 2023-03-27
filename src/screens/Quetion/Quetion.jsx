import React from "react";
import "./style.css";

export const Quetion = () => {
  return (
    <div className={"quetion-quetion"}>
      <div className={"quetion-column-wrapper"}>
        <div className={"quetion-column"}>
          <div className={"quetion-content"}>
            <div className={"quetion-text-wrapper"}>땅은 어떠한 곳인가요?</div>
            <p className={"quetion-p"}>
              땅은 나의 이야기를 기록할 수 있는 공간입니다.
              <br />
              양반, 각시, 초랭이, 사자에 따라 다른 구역에서 임의로 자신의 땅을 배정받으며, 배정받은 땅에 자신의 이야기를
              기록할 수 있습니다.
              <br />
              <br />
              ‘땅’에는 최대 XX글자까지 본인의 이야기를 기록할 수 있습니다.
            </p>
          </div>
          <img className={"quetion-add"} src={"/img/add.svg"} />
        </div>
      </div>
    </div>
  );
};

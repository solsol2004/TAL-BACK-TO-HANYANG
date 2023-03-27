import React from "react";
import "./style.css";

export const Quetion2 = () => {
  return (
    <div className={"quetion-2-quetion"}>
      <div className={"quetion-2-column-wrapper"}>
        <div className={"quetion-2-column"}>
          <div className={"quetion-2-content"}>
            <div className={"quetion-2-text-wrapper"}>TAL은 무엇을 의미하나요?</div>
            <p className={"quetion-2-p"}>
              HANYANG 마을에서 TAL은 나의 신분을 숨기고, 오직 나의 이야기에만 집중할 수 있도록 도와주는 도구입니다.
              <br />
              <br />
              또한, 각 TAL마다 고유한 상징을 가지고 있어, 더 공감할 수 있는 멤버(?)를 만날 수 있도록 도와줍니다!
            </p>
          </div>
          <img className={"quetion-2-add"} src={"/img/vuesax-linear-add.svg"} />
        </div>
      </div>
    </div>
  );
};

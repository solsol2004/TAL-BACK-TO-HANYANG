import React from "react";
import "./style.css";

export const Quetion4 = () => {
  return (
    <div className={"quetion-4-quetion"}>
      <div className={"quetion-4-column-wrapper"}>
        <div className={"quetion-4-column"}>
          <div className={"quetion-4-content"}>
            <div className={"quetion-4-text-wrapper"}>HANYANG은 어떤 공간인가요?</div>
            <p className={"quetion-4-p"}>
              HANYANG은 양반, 각시, 초랭이, 사자 4개의 TAL 공동체가 모인 커뮤니티입니다.
              <br />
              <br />
              HANYANG에는 NFT 입장권 소유한 사람만입장할 수 있으며, 익명성이 보장된 상황에서 자신의 이야기를 기록할 수
              있습니다.
              <br />
              <br />
              *이야기 기록과정에서 개인의 정보를 노출시킬 경우, 정체를 들킬 수 있으니 주의해주세요.
            </p>
          </div>
          <img className={"quetion-4-add"} src={"/img/vuesax-linear-add.svg"} />
        </div>
      </div>
    </div>
  );
};

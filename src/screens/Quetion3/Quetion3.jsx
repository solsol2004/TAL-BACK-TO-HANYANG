import React from "react";
import "./style.css";

export const Quetion3 = () => {
  return (
    <div className={"quetion-3-quetion"}>
      <div className={"quetion-3-column-wrapper"}>
        <div className={"quetion-3-column"}>
          <div className={"quetion-3-content"}>
            <div className={"quetion-3-text-wrapper"}>HANYANG은 언제 오픈되냐요?</div>
            <p className={"quetion-3-HANYANG-NFT-NFT-HANYANG-HANYANG"}>
              HANYANG은 NFT입장권&nbsp;&nbsp;100개가 소유된 후, 60일 이내에 오픈될 예정입니다. <br />
              <br />
              NFT 입장권 소유자가 HANYANG에 입장하는 경우, 추후 추가될 커뮤니티 규칙의 동의하는 것으로 간주됩니다.
              <br />
              <br />
              만약, 2023년 06월 01일까지 100개의 입장권이 소유되지 않을 경우, HANYANG의 오픈은 잠정 연기되며, 예상
              안내일보다 지연될 수 있습니다.
            </p>
          </div>
          <img className={"quetion-3-add"} src={"/img/add.svg"} />
        </div>
      </div>
    </div>
  );
};

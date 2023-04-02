import React from "react";
import { useRef } from 'react';
import { Twitter } from "../../components/Twitter";
import { Discord } from "../../components/Discord";
import "./style.css";

import num4 from "../../../static/img/ticket2.png"
import num6 from "../../../static/img/ticket3.png";
import num8 from "../../../static/img/ticket4.png";
import num2 from "../../../static/img/num1.png";
import CardPopuler from "../../components/CardPopuler";



export const Ver = () => {
  const home = useRef(null);
  const firstTab = useRef(null);
  const secondTab = useRef(null);
  const thirdTab = useRef(null);
  const fourthTab = useRef(null);
  

  const goToRef = (ref) => {
    setTimeout(() => {
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };
  
  const buyNow = () => {
    window.location.href = "https://opensea.io/";
  };

  const propsData = {
    cardPopuler: {
      num043Eth: "0.980ETH",
      num: num2,
      buyTicket: "Buy Now",
      monkey: "SAJA",
    },
    cardPopuler1: {
      num043Eth: "0.980ETH",
      num: num4,
      monkey: "YANGBAN",
      buyTicket: "Buy Now",
    },
    cardPopuler2: {
      buyTicket: "Buy Now",
      num043Eth: "0.343ETH",
      monkey: "GAKSI",
      num: num6,
    },
    cardPopuler3: {
      monkey: "CHORANGI",
      buyTicket: "Buy Now",
      num: num8,
      num043Eth: "0.43ETH",
    },
  };


  return (
    <div className={"ver-ver"}>
      <header ref = {home} className={"ver-header"}>
        <div className={"ver-overlap"}>
          <div className={"ver-background"}>
            <img className={"ver-element"} src={"/img/1.png"} />
          </div>
          <div className={"ver-content"}>
            <div className={"ver-ttittle"}>
              <div className={"ver-overlap-group"}>
                <div className={"ver-intermezo"}>
                  <div className={"ver-tittle-and-subtittle"}>
                    <div className={"ver-TAL-BACK-TO-HANYANG"}>
                      TAL:
                      <br />
                      BACK TO
                      <br />
                      HANYANG
                    </div>
                    <p className={"ver-text-wrapper"}>
                      Own a piece of Korean tradition masks (TAL) with our NFT and claim your portion of history
                      today!
                    </p>
                  </div>
                  <div className={"ver-list-button"}>
                    <a href="www.opensea.com" target="_blank">
                      <div className={"ver-frame"}>
                        <div className={"ver-div"} onClick={buyNow}>BUY NOW</div>
                      </div>
                    </a>
                    <a href="www.naver.com" target="_blank">
                      <div className={"ver-frame-6"}>
                        <div className={"ver-text-wrapper-2"}>EXPLORE HANYANG</div>
                      </div>
                    </a>
                  </div>
                </div>
                <img className={"ver-line"} src={"/img/line.svg"} />
                <img className={"ver-img"} src={"/img/line-1.svg"} />
              </div>
            </div>
            <img className={"ver-vector"} src={"/img/vector-13.svg"} />
          </div>
          <img className={"ver-element-1-1"} src={"/img/image.png"} />
          <img className={"ver-asset"} src={"/img/asset-7-4x-8-1.png"} />
        </div>
        <div className={"ver-navbar"}>
          <div className={"ver-navbar-2"}>
            <div onClick={() => goToRef(firstTab)} className={"ver-text-wrapper-3"}>TAL : HANYANG</div>
            <div onClick={() => goToRef(secondTab)} className={"ver-text-wrapper-3"}>TAL COLLECTION</div>
            <div onClick={() => goToRef(thirdTab)} className={"ver-text-wrapper-3"}>TAL SYMBOL</div>
            <div onClick={() => goToRef(fourthTab)} className={"ver-text-wrapper-3"}>FAQ</div>
          </div>
          <div className={"ver-community"}>
          <div className={"ver-community-2"}>
              <Twitter
                mdiInstagram="/img/mdi-instagram.svg"
                mdiInstagramStyle={{
                  cursor: "pointer",
                  height: "21px",
                  left: "2px",
                  top: "2px",
                  width: "21px",
                }}
                style={{
                  height: "17.32px",
                  marginBottom: "unset",
                  minWidth: "17.32px",
                  width: "unset",
                }}
              />
              <Discord
                simpleIconsOpensea="/img/simple-icons-opensea.svg"
                simpleIconsOpenseaStyle={{
                  cursor: "pointer",
                  height: "20px",
                  left: "2px",
                  top: "2px",
                  width: "20px",
                }}
                style={{
                  height: "17.32px",
                  marginBottom: "unset",
                  marginRight: "unset",
                  minWidth: "17.32px",
                  width: "unset",
                }}
              />
            </div>
          </div>
          <div className={"ver-logo"}>
            <div className={"ver-text-wrapper-5"} onClick={() => goToRef(home)}>TAL: HANYANG</div>
          </div>
          <img className={"ver-element-1"} src={"/img/2x.png"} />
        </div>
      </header>
      <div className={"ver-what-is-TAL-HANYANG"}>
        <div
        ref = {firstTab}
          className={"ver-overlap-group2"}
          style={{
            backgroundImage: "url(/img/background.png)",
          }}
        >
          <div className={"ver-content-left"}>
            <div className={"ver-tittle"}>
              <div className={"ver-div-2"}>
                <div className={"ver-text-wrapper-6"}>What is</div>
                <div className={"ver-text-wrapper-7"}>TAL: HANYANG?</div>
              </div>
              <p className={"ver-p"}>
                Step into the mysterious world of HANYANG with your exclusive NFT, granting you access to a village
                where anonymity is ensured, allowing you to communicate freely like a masquerade ball. Here, take the
                chance to share your untold stories and secrets, unveiling the truest version of yourself.
              </p>
            </div>
            <div className={"ver-NFT-collection"}>
              <h1 className={"ver-title"}>1000</h1>
              <p className={"ver-text-wrapper-8"}>
                Ready to own a piece of history? <br />
                Grab your NFT collection today, only 1000 NFT available!
              </p>
            </div>
            <div className={"ver-customers"}>
              <div className={"ver-title"}>100</div>
              <p className={"ver-text-wrapper-8"}>
                Unlock the door to HANYANG and reveal the secret! <br />
                Once *100 NFTs have been claimed, the gate to the village will open.
                <br />A world of wonder and adventure awaits you on the other side. <br />
                Are you ready to step through?
              </p>
            </div>
          </div>
          <div className={"ver-feature"}>
            <div className={"ver-overlap-group-2"}>
              <img className={"ver-background-2"} src={"/img/background-1.png"} />
              <div className={"ver-list-feature"}>
                <div className={"ver-info"}>
                  <div
                    className={"ver-icon"}
                    style={{
                      backgroundImage: "url(/img/oval.svg)",
                    }}
                  >
                    <div
                      className={"ver-vuesax-linear-shapes"}
                      style={{
                        backgroundImage: "url(/img/vuesax-linear-shapes.svg)",
                      }}
                    />
                  </div>
                  <div className={"ver-div-2"}>
                    <div className={"ver-reservasi-mudah"}>A limited NFT Collection</div>
                    <p className={"ver-proses-pemesanan-rua"}>
                      Experience the ultimate level of exclusivity with our limited edition NFT collection! Be
                      one of the privileged few to enter HANYANG&nbsp;&nbsp;Only 1000 available. Get yours now!
                    </p>
                  </div>
                </div>
                <div className={"ver-info-2"}>
                  <div
                    className={"ver-vuesax-linear-people-wrapper"}
                    style={{
                      backgroundImage: "url(/img/oval-1.svg)",
                    }}
                  >
                    <div
                      className={"ver-vuesax-linear-people"}
                      style={{
                        backgroundImage: "url(/img/vuesax-linear-people.svg)",
                      }}
                    />
                  </div>
                  <div className={"ver-div-2"}>
                    <div className={"ver-waktu-yang-fleksibel"}>Privileges for NFT holders</div>
                    <p className={"ver-proses-pemesanan-rua-2"}>
                      Our limited edition NFT offers an exclusive privilege - land ownership. This allows you to
                      share your story and become a part of the community. <br />
                      <br />
                      *Please note that land ownership is only available after 100 NFT collections are in
                      circulation.
                    </p>
                  </div>
                </div>
                <div className={"ver-info"}>
                  <div
                    className={"ver-vuesax-linear-like-wrapper"}
                    style={{
                      backgroundImage: "url(/img/oval-2.svg)",
                    }}
                  >
                    <div
                      className={"ver-vuesax-linear-like"}
                      style={{
                        backgroundImage: "url(/img/vuesax-linear-like.svg)",
                      }}
                    />
                  </div>
                  <div className={"ver-div-2"}>
                    <div className={"ver-kustomisasi-ruang"}>TAL Spirit</div>
                    <p className={"ver-proses-pemesanan-rua-3"}>
                      Long time ago in Korea, TAL was a tool for people to express their honest stories without fear of
                      judgment. Record your own story on your personal and anonymous land, with a focus solely on your
                      own experiences, without belittling others.
                    </p>
                  </div>
                </div>
              </div>
              <img className={"ver-vector-22"} src={"/img/vector-22.svg"} />
            </div>
            <img className={"ver-vector-20"} src={"/img/vector-20.svg"} />
          </div>
        </div>
      </div>
      <div className={"ver-group"}>
        <div ref={secondTab} className={"ver-TAL-TICKET"}>
          <div
            className={"ver-overlap-group-3"}
            style={{
              backgroundImage: "url(/img/background-2.png)",
            }}
          >
            <div className={"ver-tittle-2"}>
              <div ref={secondTab} className={"ver-text-wrapper-7"}>TAL Collection</div>
              <div className={"ver-subtittle-and-btn"}>
                <p
                  className={
                    "ver-four-unique-tals-are-waiting-for-you-to-tell-your-story-and-showcase-your-identity-choose-from-a-variety-of-tals-and-find-the-perfect-match-to-represent-you"
                  }
                >
                  Four unique TALs are waiting for you to tell your story and showcase your identity! <br />
                  Choose from a variety of TALs and find the perfect match to represent you.
                </p>
                <div className={"ver-text-wrapper-9"} onClick = {buyNow}>EXPLORE NOW</div>
              </div>
            </div>
            <div className="ver-list-card">
              <CardPopuler {...propsData.cardPopuler} />
              <CardPopuler {...propsData.cardPopuler1} />
              <CardPopuler {...propsData.cardPopuler2} />
             <CardPopuler {...propsData.cardPopuler3} />
          </div>
          </div>
        </div>
      </div> 
      <div ref={thirdTab} className={"ver-TAL-SYMBOL"}>
        <div className={"ver-overlap-group4"}>
          <img className={"ver-background-3"} src={"/img/background-3.png"} />
          <div className={"ver-view"}>
            <div className={"ver-tittle-wrapper"}>
              <div className={"ver-div-wrapper"}>
                <div className={"ver-tittle-3"}>
                  <div className={"ver-text-wrapper-10"}>양반탈(YANGBAN_TAL)</div>
                  <div className={"ver-text-wrapper-11"}>Symbol - Money</div>
                  <p className={"ver-text-wrapper-12"}>
                    Yangban represents wealth and affluence, share your experiences and worries related to money, work,
                    and business. <br />
                    Join the Yangban class and document your journey to financial success on the exclusive land of the
                    nobles!
                  </p>
                </div>
              </div>
            </div>
            <img className={"ver-pxart"} src={"/img/pxart-1-1.png"} />
          </div>
          <div className={"ver-view-2"}>
            <div className={"ver-overlap-group1"}>
              <div className={"ver-tittle-4"}>
                <div className={"ver-tittle-5"}>
                  <div className={"ver-text-wrapper-10"}>각시탈(GAKSI_TAL)</div>
                  <div className={"ver-text-wrapper-11"}>Symbol - Love</div>
                  <p
                    className={
                      "ver-embark-on-a-journey-of-love-and-romance-with-gaksi-a-bride-who-has-just-arrived-in-HANYANG-document-your-unique-experiences-and-heartaches-related-to-love-on-the-exclusive-gaksi-land-whether-it-s-the-excitement-of-a-new-relationship-or-the-struggles-of-heartbreak-gaksi-TAL-is-the-perfect-place-to-express-your-emotions-and-record-your-journey"
                    }
                  >
                    Embark on a journey of love and romance with Gaksi, a bride who has just arrived in HANYANG.
                    Document your unique experiences and heartaches related to love on the exclusive Gaksi land. Whether
                    it&#39;s the excitement of a new relationship or the struggles of heartbreak, Gaksi TAL is the
                    perfect place to express your emotions and record your journey.
                  </p>
                </div>
              </div>
            </div>
            <img className={"ver-element-3-1"} src={"/img/1-2.png"} />
          </div>
          <div className={"ver-view-3"}>
            <div className={"ver-overlap-2"}>
              <div className={"ver-tittle-6"}>
                <div className={"ver-tittle-7"}>
                  <div className={"ver-text-wrapper-10"}>초랭이탈(CHORANGI_TAL)</div>
                  <div className={"ver-text-wrapper-11"}>Symbol- Future</div>
                  <p
                    className={
                      "ver-live-your-dream-of-a-bright-future-like-chorangi-in-HANYANG-share-your-struggles-aspirations-and-accomplishments-on-chorangi-land-and-receive-recognition-for-your-efforts-to-build-a-better-tomorrow"
                    }
                  >
                    {" "}
                    Live your dream of a bright future like Chorangi in HANYANG! Share your struggles, aspirations, and
                    accomplishments on Chorangi land and receive recognition for your efforts to build a better
                    tomorrow!
                  </p>
                </div>
              </div>
            </div>
            <img className={"ver-element-2"} src={"/img/choo.png"}/>
          </div>
          <div className={"ver-view-4"}>
            <div className={"ver-overlap-group3"}>
              <div className={"ver-div-wrapper"}>
                <div className={"ver-tittle-8"}>
                  <div className={"ver-text-wrapper-10"}>사자탈(SAJA_TAL)</div>
                  <div className={"ver-text-wrapper-11"}>Symbol - Present</div>
                  <p className={"ver-text-wrapper-12"}>
                    {" "}
                    Saja is living a splendid life in HANYANG, enjoying the present to the fullest! <br />
                    Why not record your happy current self on the Saja’s land and savor the moment?
                  </p>
                </div>
              </div>
            </div>
            <img className={"ver-element-2-1"} src={"/img/1-3.png"}/>
          </div>
          <div className={"ver-tittle-9"}>
            <div className={"ver-text-wrapper-13"}>TAL SYMBOL</div>
          </div>
        </div>
      </div>
      <div ref={fourthTab} className={"ver-FAQ"}>
        <div
          className={"ver-overlap-group5"}
          style={{
            backgroundImage: "url(/img/background-4.png)",
          }}
        >
          <div className={"ver-content-2"}>
            <div className={"ver-tittle-10"}>
              <div className={"ver-text-wrapper-6"}>Frequently Asked&nbsp;&nbsp;Quetions</div>
              <p className={"ver-text-wrapper-14"}>Some of the frequently asked questions</p>
            </div>
            <div className={"ver-frame-28"}>
              <div className={"ver-list-quetion"}>
                <div className={"ver-quetion"}>
                  <div className={"ver-content-3"}>
                    <div className={"ver-text-wrapper-15"}>What is the meaning of the pattern on the background of the NFT?</div>
                    <img
                      className={"ver-material-symbols-keyboard-arrow-down"}
                      src={"/img/material-symbols-keyboard-arrow-down.svg"}
                    />
                  </div>
                </div>
                <div className={"ver-quetion"}>
                  <div className={"ver-content-3"}>
                    <div className={"ver-text-wrapper-15"}>What does TAL mean?</div>
                    <img
                      className={"ver-material-symbols-keyboard-arrow-down"}
                      src={"/img/material-symbols-keyboard-arrow-down-1.svg"}
                    />
                  </div>
                </div>
                <div className={"ver-quetion"}>
                  <div className={"ver-content-3"}>
                    <div className={"ver-text-wrapper-15"}>When will HANYANG be open?</div>
                    <img
                      className={"ver-material-symbols-keyboard-arrow-down"}
                      src={"/img/material-symbols-keyboard-arrow-down-2.svg"}
                    />
                  </div>
                </div>
                <div className={"ver-quetion"}>
                  <div className={"ver-content-3"}>
                    <div className={"ver-text-wrapper-15"}>Could you tell me more about HANYANG and what it is exactly?</div>
                    <img
                      className={"ver-material-symbols-keyboard-arrow-down"}
                      src={"/img/material-symbols-keyboard-arrow-down-3.svg"}
                    />
                  </div>
                </div>
                <div className={"ver-quetion"}>
                  <div className={"ver-content-3"}>
                    <div className={"ver-text-wrapper-15"}>What kind of place is the Land in HANYANG?</div>
                    <img
                      className={"ver-material-symbols-keyboard-arrow-down"}
                      src={"/img/material-symbols-keyboard-arrow-down-4.svg"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className={"ver-image"} src={"/img/image-2.png"} />
        </div>
      </div>
      <footer className={"ver-footer"}>
        <img className={"ver-vector-23"} src={"/img/vector-23.svg"} />
        <div className={"ver-content-4"}>
          <div className={"ver-content-02"}>
            <div className={"ver-logo-2"}>
              <div className={"ver-logo-3"}>
                <div className={"ver-text-wrapper-5"} onClick={() => goToRef(home)}>TAL: HANYANG</div>
              </div>
              <img className={"ver-element-3"} src={"/img/1-2x.png"} />
            </div>
            <div className={"ver-community-2"}>
              <Twitter
                mdiInstagram="/img/mdi-instagram.svg"
                mdiInstagramStyle={{
                  cursor: "pointer",
                  height: "20px",
                  left: "2px",
                  top: "2px",
                  width: "20px",
                }}
                style={{
                  height: "17.32px",
                  marginBottom: "unset",
                  minWidth: "17.32px",
                  width: "unset",
                }}
              />
              <Discord
                simpleIconsOpensea="/img/simple-icons-opensea.svg"
                simpleIconsOpenseaStyle={{
                  cursor: "pointer",
                  height: "20px",
                  left: "2px",
                  top: "2px",
                  width: "20px",
                }}
                style={{
                  height: "17.32px",
                  marginBottom: "unset",
                  marginRight: "unset",
                  minWidth: "17.32px",
                  width: "unset",
                }}
              />
            </div>
          </div>
          <div className={"ver-content-01"}>
            <div className={"ver-list-navbar"}>
              <div onClick={() => goToRef(firstTab)} className={"ver-text-wrapper-3"}>TAL:HANYNAG</div>
              <div onClick={() => goToRef(secondTab)} className={"ver-text-wrapper-3"}>TAL COLLECTION</div>
              <div onClick={() => goToRef(thirdTab)} className={"ver-text-wrapper-3"}>TAL SYMBOL</div>
              <div onClick={() => goToRef(fourthTab)} className={"ver-text-wrapper-3"}>FAQ</div>
            </div>
            <p className={"ver-credit"}>TAL 2023©, All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

import React from "react";

const Top = (props) => {
  let dataLayer = (window.dataLayer = window.dataLayer || []);
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-MS1DY33PDX");
  gtag("config", "UA-151346291-2");

  return (
    <>
      <div className="root">
        <div className="mainTitle">Portfolio</div>
        <div className="top">
          <h2>プロフィール</h2>
          <p>おおむらりな</p>
          <p>
            <span>所属</span>医学部保健学科 放射線技術科学専攻
          </p>
          <p>
            <span>団体</span>
            HUIT(北大IT研究会)/LOCAL学生部/千歳科学技術大学LTサークル(cistLT)/Hello
          </p>
          <p>
            <span>好きなこと</span>
            海を見ること、美味しいものを食べること
          </p>
          <h2>スキル</h2>
          <p>
            <span className="ai"></span>HTML:★★★★☆
          </p>
          <p>
            <span className="ai"></span>CSS(SCSS):★★★★☆
          </p>
          <p>
            <span className="ai"></span>Java Script(React):★★★☆☆
          </p>
          <p>
            <span className="ai"></span>Adobe XD:★★★★☆
          </p>
          <p>
            <span className="ai"></span>Adobe Illustrator:★★★★☆
          </p>
          <p>
            <span className="ai"></span>Adobe Photoshop:★★☆☆☆
          </p>
          <h2>できること</h2>
          <p>マークアップ / フロントエンド少し / デザイン</p>
          <h2>やりたいこと</h2>
          <p>ユーザーがワクワクするサービスを自分も楽しみながら作ること</p>
        </div>
      </div>
    </>
  );
};

export default Top;

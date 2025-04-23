import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          {/* 手機版展開選單按鈕 */}
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">切換選單</span>
            <i className="fa fa-bars"></i>
          </button>

          {/* 品牌 LOGO 與名稱 */}
          <a className="navbar-brand page-scroll" href="#page-top">
            <img
              src="/img/logo.png"
              alt="TextSence"
              style={{ height: "28px", marginRight: "8px", display: "inline-block", verticalAlign: "middle" }}
            />
            <span style={{ verticalAlign: "middle" }}>TextSence 接案系統</span>
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#features" className="page-scroll">功能特色</a></li>
            <li><a href="#about" className="page-scroll">關於我們</a></li>
            <li><a href="#services" className="page-scroll">服務內容</a></li>
            <li><a href="#portfolio" className="page-scroll">作品展示</a></li>
            <li><a href="#testimonials" className="page-scroll">使用心得</a></li>
            <li><a href="#team" className="page-scroll">團隊介紹</a></li>
            <li><a href="#contact" className="page-scroll">聯絡我們</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

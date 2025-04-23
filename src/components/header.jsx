import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "TextSence，讓接案更簡單"}
                  <span></span>
                </h1>
                <p>
                  {props.data
                    ? props.data.paragraph
                    : "我們結合 AI 與自動化工具，幫助行銷人、創作者與顧問打造高效獲客流程。"}
                </p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  了解我們的服務
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

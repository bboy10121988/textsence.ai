import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="About TextSence" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>關於 TextSence</h2>
              <p>{props.data ? props.data.paragraph : "載入中..."}</p>
              <h3>為什麼選擇我們？</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                      : "載入中..."}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                      : "載入中..."}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

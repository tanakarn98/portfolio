import React from "react";

const WorksCard = (props) => {
  return (
    <div className="worksCard">
      <img
        src="https://www.jalan.net/news/img/2018/02/1803_kansai_eria5_009.jpg"
        alt=""
      />
      <div>
        <p className="title">{props.title}</p>
        <p className="date">2020 . 8</p>
        <p className="category">
          <span>Design</span>
          <span>Coding</span>
        </p>
        <p className="text">
          ここに文章が入ります
          <br />
          ここに文章が入ります
          <br />
          ここに文章が入ります
          <br />
          ここに文章が入ります
          <br />
          ここに文章が入ります
          <br />
          ここに文章が入ります
        </p>
      </div>
    </div>
  );
};

export default WorksCard;

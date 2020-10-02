import React from "react";
import ReactMarkdown from "react-markdown/with-html";

const WorksCard = (props) => {
  return (
    <div className="worksCard">
      <img
        src={`${props.data.fields.img.fields.file.url}?w=800&h=500`}
        alt=""
      />
      <div>
        <p className="title">{props.data.fields.title}</p>
        <p className="date">{props.data.fields.date}</p>
        <p className="category">
          {props.data.fields.tags.map((item, i) => (
            <span>{item.fields.tag}</span>
          ))}
        </p>
        <p className="text">
          <ReactMarkdown source={props.data.fields.text} escapeHtml={false} />
        </p>
      </div>
    </div>
  );
};

export default WorksCard;

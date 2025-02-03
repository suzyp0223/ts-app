import React from "react";

interface Types {
  avatarUrl: string;
  name: string;
  text: string;
  date: Date;
}

const Extraction = (props: Types): React.ReactElement => {
  function formatDate(date: Date) {
    return date.toLocaleDateString();
  }

  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar" src={props.avatarUrl} alt={props.avatarUrl} />
        <div className="UserInfo-name">{props.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
};

export default Extraction;

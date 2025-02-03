import React from "react";

interface Types {
  avatarUrl: string;
  name: string;
  text: string;
  date: Date;
}

const UserInfo = (props: Types) => {
  return (
    <div className="UserInfo">
      <img className="Avatar" src={props.avatarUrl} alt={props.avatarUrl} />
      <div className="UserInfo-name">{props.name}</div>
    </div>
  );
};

export default function Composition(props: Types): React.ReactElement {
  function formatDate(date: Date) {
    return date.toLocaleDateString();
  }

  return (
    <div className="Comment">
      <UserInfo />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

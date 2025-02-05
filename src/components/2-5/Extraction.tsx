import React from "react";
import Image from "next/image";

interface Types {
  avatarUrl: string;
  name: string;
  text?: string;
  date?: Date;
}

const UserInfo = (props: Types) => {
  return (
    <div className="UserInfo">
      <Image className="Avatar" src={props.avatarUrl} alt={props.name} />
      <div className="UserInfo-name">{props.name}</div>
    </div>
  );
};

const Extraction = (props: Types): React.ReactElement => {
  function formatDate(date: Date) {
    return date.toLocaleDateString();
  }

  return (
    <div className="Comment">
      <UserInfo avatarUrl={props.avatarUrl} name={props.name} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{formatDate(props.date as Date)}</div>
    </div>
  );
};

export default Extraction;

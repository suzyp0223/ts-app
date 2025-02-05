/* eslint-disable prettier/prettier */
import React from "react";

interface Types {
  name?: string;
  count?: number;
}

// 유저 그리팅 컴포넌트
const UserGreeting = (props: Types) => {
  return (
    <h1>
      {/* props.name && - name이 있을때, count가 있을때 변수와 함께 넣어줌.  */}
      {/* 컴포넌트 렌더링시 유의 - !!이나 Boolean()은 0이라는 값이 falsy가 아니라 false일때만 표시  */}
      {props.name && props.name + ","} Welcome {Boolean(props.count) && `It&apos;s ${props.count} times`}
    </h1>
  );
};

// 게스트 그리팅 컴포넌트
const GuestGreeting = (props: Types) => {
  return <h1>Please {props.name} Sign up.</h1>;
};

// 그리팅 컴포넌트
export default function Greeting(): React.ReactElement {
  const isLoggedIn = true;

  return <>{isLoggedIn ? <UserGreeting name="ABigail" count={0} /> : <GuestGreeting />}</>;
}

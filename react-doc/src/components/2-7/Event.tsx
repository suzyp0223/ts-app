/* eslint-disable prettier/prettier */
import React from "react";

export default function Event(): React.ReactElement {
  const handleClickButton = () => {
    console.log("handleClickButton 버블링단계에서 실행됨");
  };

  const handleClickCapture = () => {
    console.log("handleClickCapture");
  };

  const handleClickCapture2 = () => {
    console.log("handleClickCapture2222");
  };

  const handleClickBubble = () => {
    console.log("handleClickBubble");
  };

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClick={handleClickCapture2} onClickCapture={handleClickBubble}>
        <button onClick={handleClickButton}>Button</button>
      </div>
    </div>
  );
}

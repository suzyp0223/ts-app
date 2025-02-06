import React from 'react'
import { css } from "@emotion/css";
import styled from "@emotion/styled"

const color = "white";

const style = css`
color: hotpink;`

const Component = ({ children }) => {
  <div css={style}>Some hotpink text {children}</div>;
};

const anotherStyle= css({
textDecoration:"underline",
})

const AnotherComponent = () => {
  <div css={[anotherStyle, style]}>
  Some text with underline.
  </div>
}

export default function Emotion() {
  return (
   <>
      <div className={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color}
        }
      `}
      >
        Hover to change color.
      </div>
        <Button />
        <Component />
        <another/ >
   </>
  );
}


const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: white;
  }
`;

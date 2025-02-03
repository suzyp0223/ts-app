import React from "react";

// import Clock from './2-4/Clock';
import Composition from "./2-5/Composition";
import Extraction from "./2-5/Extraction";

function BasePage() {
  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello kitty",
      avatarUrl:
        "https://tse3.mm.bing.net/th?id=OIP.VJeZQ5lpvbUymYbNBOkjCwHaLH&w=200&h=300&c=7"
    }
  };

  return (
    <>
      <div>Hello React</div>
      {/* <Clock /> */}
      {/* <Composition name="Abigail" /> */}
      <Extraction
        avatarUrl={comment.author.avatarUrl}
        name={comment.author.name}
        text={comment.text}
        date={comment.date}
      />
    </>
  );
}

export default BasePage;

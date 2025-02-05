import React from "react";

// import Controlled from "./2-10/Controlled";
// import Clock from "./2-4/Clock";
// import Composition from "./2-5/Composition";
// import Extraction from "./2-5/Extraction";
// import ClassClock from "./2-6/ClassClock";
// import Event from "./2-7/Event";
// import Greeting from "./2-8/Greeting";
// import List from "./2-9/List";
import Controlled from "./2-10/Controlled";
import UnControlled from "./2-10/UnControlled";

function BasePage() {
  // const comment = {
  //   date: new Date(),
  //   text: "I hope you enjoy learning React!",
  //   author: {
  //     name: "Hello kitty",
  //     avatarUrl:
  //       "https://tse3.mm.bing.net/th?id=OIP.VJeZQ5lpvbUymYbNBOkjCwHaLH&w=200&h=300&c=7"
  //   }
  // };

  return (
    <>
      <div>Hello React</div>
      {/* <Clock /> */}
      {/* <Composition name="Abigail" avatarUrl={""} />
      <Extraction
        avatarUrl={comment.author.avatarUrl}
        name={comment.author.name}
        text={comment.text}
        date={comment.date}
      /> */}

      {/* <ClassClock /> */}
      {/* <Event /> */}
      {/* <Greeting /> */}
      {/* <List /> */}
      <Controlled />
      <UnControlled />
    </>
  );
}

export default BasePage;

import React from "react";

interface ItemType {
  id: number;
  text: string;
}

export default function List(): React.ReactElement {
  // const numbers = [1, 2, 3, 4, 5];

  const List = [
    { id: 0, text: "Hello" },
    { id: 1, text: "Hello World" },
    { id: 2, text: "Hello There!!" },
  ];

  const ListItem = (props: ItemType) => {
    return <li>{props.id + props.text}</li>;
  };

  return (
    <>
      {/* item에 id가 없는 경우 두번째 인자로 index를 넘겨주면 map이 index를 자동으로 반환 */}
      {List.map((item: ItemType) => (
        <ListItem key={item.id} {...item} />
      ))}
    </>
  );
}

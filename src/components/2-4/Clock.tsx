import React from "react";

function Clock(): React.ReactElement {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());

  const tick = () => {
    setTime(new Date().toLocaleTimeString());
  };

  React.useEffect(() => {
    setInterval(tick, 1000);
  }, []);

  return (
    <>
      <div>
        <h1>Hello, World!</h1>
        <h2>It is {time}.</h2>
      </div>
    </>
  );
}

export default Clock;

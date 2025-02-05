import React, { useState } from "react";

import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

export default function Calculator(): React.ReactElement {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [temp, setTemp] = useState({ temperature: 0, scale: "" });

  function toCelsius(fahrenheit: number) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  function toFahrenheit(celsius: number) {
    return (celsius * 9) / 5 + 32;
  }

  // 온도 컴버트 작업
  const tryConvert = (temp: number) => {
    const rounded = Math.round(temp * 1000) / 1000;
    return rounded;
  };

  // 값이 바뀔때마다 동작.
  const handleChangeTemp = (scale: string, temp: number) => {
    setTemp({ temperature: temp, scale: scale });
  };

  // temp 변할때마다
  React.useEffect(() => {
    if (temp.scale === "c") {
      setCelsius(temp.temperature);
      setFahrenheit(toFahrenheit(tryConvert(temp.temperature)));
    } else {
      setFahrenheit(temp.temperature);
      setCelsius(toCelsius(tryConvert(temp.temperature)));
    }
  }, [temp]);

  return (
    <div>
      <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleChangeTemp} />
      <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleChangeTemp} />
      <BoilingVerdict celsius={celsius} />
    </div>
  );
}

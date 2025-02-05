import React, { useState } from "react";

export default function Controlled(): React.ReactElement {
  const [name, setName] = useState("");
  const [essay, setEssay] = useState("");
  const [flavor, setFlavor] = useState("");
  const flavorOptions = [
    { key: 0, value: "grapefruit" },
    { key: 1, value: "lime" },
    { key: 2, value: "coconut" },
    { key: 3, value: "mango" },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleChangeEssay = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEssay(event.target.value);
  };
  const handleChangeFlavor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFlavor(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    alert(`name: ${name}, essay: ${essay}, flavor: ${flavor}`);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
        {/* <input type="submit" value="Submit" /> */}
      </label>
      <br />
      <br />
      <label>
        Essay:
        <textarea value={essay} onChange={handleChangeEssay} />
      </label>
      <br />
      <br />
      <label>
        Pick your favorite flavor:
        <select value={flavor} onChange={handleChangeFlavor}>
          {flavorOptions.map(option => (
            <option key={option.key} value={option.value}>
              {option.value}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

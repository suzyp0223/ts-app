import React, { useRef } from "react";

export default function UnControlled(): React.ReactElement {
  const fileInputRef = useRef(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`selected file : ${fileInputRef.current.files[0].name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload file:
        <input type="file" ref={fileInputRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

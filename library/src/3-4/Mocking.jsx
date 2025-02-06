import React from 'react'


const Item = ({name, email}) => {
  return (<li>name: {name} email: {email}</li>)
};

const url = "https://jsonplaceholder.typicode.com/posts/1/comments";

export default function Mocking() {
  const [data, setData] = React.useState(null);
  const [err, setErr] = React.useState(null);

  const handleOnClickButton =() => {
    fetch(url)
    .then((res) => res.json())
    .then((json) => setData(json))
    .catch((err) => {
      setErr(`오류가 발생했습니다 : ${err}`);
    });
  };

  const handleOnClickButton2 = () => {
    fetch('/login')
      .then(res => {
        return res.json()
      })
      .then(json => {
        // console.log("response22222", json)
      setData((json))

      })
  };

  if ((err)) {
    return <p>{err}</p>
  }

  return (
    <div>
      <button onClick={handleOnClickButton}>Get Data</button>
      <button onClick={handleOnClickButton2}>Get Data2</button>
      {data && (
        <ul>
          {data.map((user) => (
            <Item key={user.id} name={user.name} email={user.email} />
          ))}
        </ul>
      )}
    </div>
  );
};

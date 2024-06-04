import "./App.css";

function App() {
  const postData = () => {
    fetch("http://localhost:3001/", {
      method: "POST",
      body: "8659c132-d4ae-4ddb-8a57-b38c0fc25c8a",
      headers: {
        "Content-type": "text/plain",
      },
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => console.log(data));
  };
  return <button onClick={postData}>post</button>;
}

export default App;

import "./App.css";

function App() {
  // Make sure to replace the URL with your actual backend URL if different
  const backendUrl = "https://ariabackend.onrender.com";

  const fetchData = () =>
    fetch(backendUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.text();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  const postData = () => {
    fetch(backendUrl, {
      method: "POST",
      body: JSON.stringify({
        Key: "Value",
      }),
      headers: {
        "Content-type": "text/plain",
      },
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => console.log(data));
  };
  return (
    <>
      <div onClick={fetchData}>get</div>
      <div onClick={postData}>post</div>
    </>
  );
}

export default App;

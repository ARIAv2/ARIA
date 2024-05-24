import "./App.css";

function App() {
  // Make sure to replace the URL with your actual backend URL if different
  const backendUrl = "https://ariabackend.onrender.com/";

  const fetchData = () =>
    fetch(backendUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.text(); // or response.json() if the backend sends JSON
      })
      .then((data) => {
        console.log(data); // Handle the response data
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  return <div onClick={fetchData}>blah</div>;
}

export default App;

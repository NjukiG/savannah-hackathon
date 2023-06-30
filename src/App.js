import "./App.css";
import "bootswatch/dist/cyborg/bootstrap.min.css"; // Added this :boom:
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Team from "./Pages/Team";
import { useEffect } from "react";

const CLIENT_ID = "bFrxaipzwQkKZgolvUuntBUHvRhw5G4hkju5OVHr";
const SECRET_KEY =
  "WQqHwb09lDd5emNMTAKWbvDpQlJp6QmYMU2CWP8FwcopIorjYD8rKeNL1hHEUU37tJX6jOzgkSA7GaBLNUg7jZKuyq5r9JDlGUE6R7h4HI7Lb4QJgZj9sXS7VTeexTmk";

function App() {
  const URL = "https://accounts.multitenant.slade360.co.ke/oauth2/token/";

  // const data = {
  //   grant_type: "password",
  //   client_id: "bFrxaipzwQkKZgolvUuntBUHvRhw5G4hkju5OVHr",
  //   client_secret:
  //     "WQqHwb09lDd5emNMTAKWbvDpQlJp6QmYMU2CWP8FwcopIorjYD8rKeNL1hHEUU37tJX6jOzgkSA7GaBLNUg7jZKuyq5r9JDlGUE6R7h4HI7Lb4QJgZj9sXS7VTeexTmk",
  //   username: "gnjuki19@gmail.com",
  //   password: "Moringa@2022",
  // };
  const clientData = `grant_type=password&client_id=${CLIENT_ID}&client_secret=${SECRET_KEY}&username=gnjuki19@gmail.com&password=Moringa@2022`;

  const getAuthToken = () => {
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: clientData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAuthToken();
  }, []);

  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <h1>Hello React</h1>
    </div>
  );
}

export default App;

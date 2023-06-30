import "./App.css";
import "bootswatch/dist/cyborg/bootstrap.min.css"; // Added this :boom:
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Team from "./Pages/Team";
import { useEffect, useState } from "react";

const CLIENT_ID = "bFrxaipzwQkKZgolvUuntBUHvRhw5G4hkju5OVHr";
const SECRET_KEY =
  "WQqHwb09lDd5emNMTAKWbvDpQlJp6QmYMU2CWP8FwcopIorjYD8rKeNL1hHEUU37tJX6jOzgkSA7GaBLNUg7jZKuyq5r9JDlGUE6R7h4HI7Lb4QJgZj9sXS7VTeexTmk";

function App() {
  const [memberNumber, setMemberNumber] = useState("");
  const [payerSladeCode, setPayerSladeCode] = useState("");
  const URL = "https://accounts.multitenant.slade360.co.ke/oauth2/token/";

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

  const headers = {
    Accept: "*/*",
    Authorization: "Bearer Zp0jznPLNQtF8t6wsw0beHqp75DUxv",
    "Content-Type": "application/json",
  };
  const url2 =
    `https://provider-edi-api.multitenant.slade360.co.ke/v1/beneficiaries/member_eligibility/?member_number=${memberNumber}&payer_slade_code=${payerSladeCode}`;

  const getMemberEligibility = () => {
    fetch(url2, { method: "GET", headers })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              memberNumber={memberNumber}
              setMemberNumber={setMemberNumber}
              payerSladeCode={payerSladeCode}
              setPayerSladeCode={setPayerSladeCode}
              getMemberEligibility={getMemberEligibility}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;

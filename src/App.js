import "./App.css";
import "bootswatch/dist/cyborg/bootstrap.min.css"; // Added this :boom:
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Team from "./Pages/Team";
import { useEffect, useState } from "react";
import GetOTP from "./components/GetOTP";
import MemberDetails from "./components/MemberDetails";

const CLIENT_ID = "bFrxaipzwQkKZgolvUuntBUHvRhw5G4hkju5OVHr";
const SECRET_KEY =
  "WQqHwb09lDd5emNMTAKWbvDpQlJp6QmYMU2CWP8FwcopIorjYD8rKeNL1hHEUU37tJX6jOzgkSA7GaBLNUg7jZKuyq5r9JDlGUE6R7h4HI7Lb4QJgZj9sXS7VTeexTmk";

function App() {
  const [clientToken, setClientToken] = useState("");
  const [memberNumber, setMemberNumber] = useState("");
  const [payerSladeCode, setPayerSladeCode] = useState("");
  const [user, setUser] = useState("");
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
      .then((data) => {
        console.log(data.access_token);
        setClientToken(data.access_token);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAuthToken();
  }, []);

  const headers = {
    Accept: "*/*",
    Authorization: `Bearer ${clientToken}`,
    "Content-Type": "application/json",
  };
  const url2 = `https://provider-edi-api.multitenant.slade360.co.ke/v1/beneficiaries/member_eligibility/?member_number=${memberNumber}&payer_slade_code=${payerSladeCode}`;

  const getMemberEligibility = () => {
    fetch(url2, { method: "GET", headers })
      .then((response) => response.json())
      .then((data) => {
        if (memberNumber && payerSladeCode) {
          console.log(data);
          setUser(data);
          setMemberNumber("");
          setPayerSladeCode("");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getOTP = (contact_id) => {
    const url3 = `https://provider-edi-api.multitenant.slade360.co.ke/v1/beneficiaries/beneficiary_contacts/${contact_id}/send_otp/`;

    fetch(url3, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${clientToken}`,
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });
  };

  // getOTP();

  return (
    <div className="App container">
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
        <Route
          path="/memberDetails"
          element={<MemberDetails user={user} setUser={setUser} />}
        />
        <Route path="/getOtp" element={<GetOTP getOTP={getOTP} />} />
      </Routes>
    </div>
  );
}

export default App;

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
import StartVisit from "./components/StartVisit";
import VerifyStartVisitToken from "./components/VerifyStartVisitToken";

function App() {
  const [clientToken, setClientToken] = useState("");
  const [memberNumber, setMemberNumber] = useState("");
  const [payerSladeCode, setPayerSladeCode] = useState("");
  const [user, setUser] = useState("");
  const [OTP, setOTP] = useState("");
  const URL = "https://accounts.multitenant.slade360.co.ke/oauth2/token/";

  // Took out the client keys and the headers for the fetching the token which is the {clientData} param in body.
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
      .then((data) => {
        console.log("THE DATA FROM OTP IS ", data);
        setOTP(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Start visit details

  const [startVisitToken, setStartVisitToken] = useState("");

  const getToken = () => {
    // console.log("NImekua clicked")
    console.log(OTP);
    const url =
      "https://is-api.multitenant.slade360.co.ke/v1/authorizations/start_visit/";

    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${clientToken}`,
      "Content-Type": "application/json",
    };
    const body1 = {
      beneficiary_id: 636561,
      factors: ["OTP"],
      benefit_type: "OUTPATIENT",
      benefit_code: "BEN/001",
      policy_number: "POL/001",
      policy_effective_date: "2023-01-01T00:00:00+03:00",
      otp: "681671",
      beneficiary_contact: 5531,
      scheme_name: "Muungano Scheme",
      scheme_code: "POL/001",
    };

    fetch(url, { method: "POST", headers, body: JSON.stringify(body1) })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStartVisitToken(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [startVisitData, setStartVisitData] = useState("");
  const validateStartVisitToken = () => {
    const url5 =
      "https://is-api.multitenant.slade360.co.ke/v1/authorizations/validate_authorization_token/";
    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${clientToken}`,
      "Content-Type": "application/json",
    };
    const body2 = {
      first_name: `${startVisitToken.first_name}`,
      last_name: `${startVisitToken.last_name}`,
      auth_token: `${startVisitToken.auth_token}`,
    };

    fetch(url5, { method: "POST", headers, body: JSON.stringify(body2) })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setStartVisitData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [reservedFromAuthorization, setReservedFromAuthoization] = useState("");

  const reserveFromAuthorization = () => {
    const url =
      "https://provider-edi-api.multitenant.slade360.co.ke/v1/balances/reservations/reserve_from_authorization/";
    const headers = {
      Accept: "application/json",
      Authorization: `Bearer ${clientToken}`,
      "Content-Type": "application/json",
    };
    const body3 = {
      authorization: `${startVisitData.authorization_guid}`,
      invoice_number: "INV/001/TEST",
      amount: "10000",
    };

    fetch(url, { method: "POST", headers, body: JSON.stringify(body3) })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReservedFromAuthoization(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App container">
      <Navbar />
      <br />
      <br />
      <br />
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
          element={
            <MemberDetails
              user={user}
              setUser={setUser}
              clientToken={clientToken}
            />
          }
        />
        {/* <Route
          path="/getOtp"
          element={<GetOTP getOTP={getOTP} OTP={OTP} setOTP={setOTP} />}
        /> */}

        <Route
          path="/startVisit"
          element={
            <StartVisit
              OTP={OTP}
              clientToken={clientToken}
              startVisitToken={startVisitToken}
              getToken={getToken}
              validateStartVisitToken={validateStartVisitToken}
              startVisitData={startVisitData}
              reservedFromAuthorization={reservedFromAuthorization}
              reserveFromAuthorization={reserveFromAuthorization}
            />
          }
        />

        {/* <Route
          path="/verifyStartVisitToken"
          element={
            <VerifyStartVisitToken
              clientToken={clientToken}
              startVisitToken={startVisitToken}
            />
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;

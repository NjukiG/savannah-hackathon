// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const StartVisit = ({
//   OTP,
//   clientToken,
//   startVisitToken,
//   getToken,
//   validateStartVisitToken,
//   startVisitData,
//   reservedFromAuthorization,
//   reserveFromAuthorization,
// }) => {
//   console.log(startVisitData);

//   return (
//     <div>
//       <h3>Get Start visit token?</h3>
//       <button onClick={getToken} className="btn btn-outline-primary">
//         Get Token
//       </button>
//       {startVisitToken && (
//         <div>
//           <h2>{startVisitToken.detail}.</h2>

//           <h3>THe start visit token details are:</h3>
//           <h4>
//             Names:
//             {startVisitToken.first_name} {startVisitToken.last_name}
//           </h4>
//           <br />
//           <h4>
//             Start Visit Toke. Copy to proceed: {startVisitToken.auth_token}
//           </h4>
//           <button
//             onClick={validateStartVisitToken}
//             className="btn btn-outline-success"
//           >
//             Verify Token
//           </button>
//           {startVisitData && (
//             <div>
//               <p>{startVisitData.member_name}</p>
//               <p>{startVisitData.message}</p>
//               <p>{startVisitData.auth_status}</p>
//               <p>{startVisitData.benefit_balance}</p>
//               <p>{startVisitData.reserved_amount}</p>
//               <p>{startVisitData.service_type}</p>
//             </div>
//           )}
//         </div>
//       )}

//       {startVisitData && (
//         <button
//           className="btn btn-outline-warning"
//           onClick={reserveFromAuthorization}
//         >
//           Reserved From Authorization
//         </button>
//       )}

//       {/* <div>
//         <h3>Provider NAme: {reservedFromAuthorization.providerName}</h3>
//       </div> */}

//       {/* {reservedFromAuthorization && <div>
//           <h3>Provider NAme: {reservedFromAuthorization.providerName}</h3></div>} */}
//     </div>
//   );
// };

import React, { useState } from "react";
import { Link } from "react-router-dom";

const StartVisit = ({
  OTP,
  clientToken,
  startVisitToken,
  getToken,
  validateStartVisitToken,
  startVisitData,
  reservedFromAuthorization,
  reserveFromAuthorization,
}) => {
  //   console.log("Sir Kevo");
  //   console.log(reserveFromAuthorization.providerName)

  return (
    <div className="container">
      <div className="mt-4">
        <h3>Get Start visit token?</h3>
        <button onClick={getToken} className="btn btn-outline-primary">
          Get Token
        </button>
        {startVisitToken && (
          <div>
            <h2>{startVisitToken.detail}.</h2>

            <h3>The start visit token details are:</h3>
            <h4>
              Names: {startVisitToken.first_name} {startVisitToken.last_name}
            </h4>
            <br />
            <h4>
              Start Visit Token. Copy to proceed: {startVisitToken.auth_token}
            </h4>
            <button
              onClick={validateStartVisitToken}
              className="btn btn-outline-success"
            >
              Verify Token
            </button>
            <br />
            {startVisitData && (
              <div>
                <h5>{startVisitData.member_name}</h5>
                <h5>{startVisitData.message}</h5>
                <h5>{startVisitData.auth_status}</h5>
                <h5>{startVisitData.benefit_balance}</h5>
                <h5>{startVisitData.reserved_amount}</h5>
                <h5>{startVisitData.service_type}</h5>
              </div>
            )}
          </div>
        )}
        <br />

        {startVisitData && (
          <button
            className="btn btn-outline-warning"
            onClick={reserveFromAuthorization}
          >
            Reserved From Authorization
          </button>
        )}
        <br />

        {startVisitData && reservedFromAuthorization && (
          <div>
            <h3>Provider Name: {reservedFromAuthorization.providerName}</h3>
            <h3>Invoice NUm: {reservedFromAuthorization.invoiceNumber}</h3>
            <h3>Amount: {reservedFromAuthorization.amount}</h3>
            <h3>Reserved Via: {reservedFromAuthorization.reservedVia}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartVisit;

//   const [startVisitToken, setStartVisitToken] = useState("");

//   const getToken = () => {
//     // console.log("NImekua clicked")
//     console.log(OTP);
//     const url =
//       "https://is-api.multitenant.slade360.co.ke/v1/authorizations/start_visit/";

//     const headers = {
//       Accept: "application/json",
//       Authorization: `Bearer ${clientToken}`,
//       "Content-Type": "application/json",
//     };
//     const body1 = {
//       beneficiary_id: 636561,
//       factors: ["OTP"],
//       benefit_type: "OUTPATIENT",
//       benefit_code: "BEN/001",
//       policy_number: "POL/001",
//       policy_effective_date: "2023-01-01T00:00:00+03:00",
//       otp: "681671",
//       beneficiary_contact: 5531,
//       scheme_name: "Muungano Scheme",
//       scheme_code: "POL/001",
//     };

//     fetch(url, { method: "POST", headers, body: JSON.stringify(body1) })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setStartVisitToken(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

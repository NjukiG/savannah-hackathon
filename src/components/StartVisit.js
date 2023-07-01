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

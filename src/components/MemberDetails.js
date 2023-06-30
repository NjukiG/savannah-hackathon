import React, { useState } from "react";
import { Link } from "react-router-dom";

const MemberDetails = ({ user, setUser, clientToken }) => {
  const [OTP, setOTP] = useState("");
  const [verifyOTP, setVerifyOTP] = useState("");
  const getOTP = (contact_id) => {
    const url3 = `https://provider-edi-api.multitenant.slade360.co.ke/v1/beneficiaries/beneficiary_contacts/${contact_id}/send_otp/`;
    const regex = /is (\d+)/;
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
        setOTP(data.success.match(regex)[1]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   console.log(user);
  return (
    <div className="container">
      {user && (
        <div className="card" style={{ width: "20rem" }}>
          <img
            src={
              user.member.gender === "M"
                ? "https://w7.pngwing.com/pngs/955/499/png-transparent-inside-out-anger-anger-pixar-emotion-sadness-feeling-inside-out-miscellaneous-textile-fictional-character-thumbnail.png"
                : "https://www.pngkit.com/png/detail/69-696131_at-the-movies-sadness-inside-out-characters.png"
            }
            className="card-img-top"
            alt="User pic"
          />
          <h4 className="card-title mt-2">
            <strong>
              {user.member.title}. {user.member.names}
            </strong>
          </h4>
          <div className="card-body">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Member Details:
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      <strong>Gender:</strong> {user.member.gender}
                    </p>
                    <p>
                      <strong>Status:</strong> {user.cover.status}
                    </p>
                    <p>
                      <strong>DOB:</strong> {user.member.dateOfBirth}
                    </p>
                    <p>
                      <strong>Contacts:</strong>
                      {user.member.contacts[0].contactValue}
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Cover Details:
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      <strong>Scheme Name:</strong> {user.cover.schemeName}
                    </p>
                    <p>
                      <strong>Policy Number:</strong> {user.cover.policyNumber}
                    </p>
                    <p>
                      <strong>Validity:</strong> {user.cover.validFrom} to
                      {user.cover.validTo}
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Benefits Details:
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <h3>Inpatient Benefits:</h3>
                    <p>
                      <strong>Limit:</strong> {user.benefits[0].benefitLimit}
                    </p>
                    <p>
                      <strong>Status:</strong> {user.benefits[0].status}
                    </p>
                    <p>
                      <strong>Visit Limit:</strong>
                      {user.benefits[0].visitLimit}
                    </p>
                    <p>
                      <strong>Reserved Amount:</strong>
                      {user.benefits[0].reservedAmount}
                    </p>

                    <h3>Outpatient Benefits:</h3>
                    <p>
                      <strong>Limit:</strong> {user.benefits[1].benefitLimit}
                    </p>
                    <p>
                      <strong>Status:</strong> {user.benefits[1].status}
                    </p>
                    <p>
                      <strong>Visit Limit:</strong>
                      {user.benefits[1].visitLimit}
                    </p>
                    <p>
                      <strong>Reserved Amount:</strong>
                      {user.benefits[1].reservedAmount}
                    </p>
                    <p>
                      <strong>Copay Amount:</strong>
                      {user.benefits[1].copayValue}
                    </p>
                    <p>
                      <strong>Copay Applies To:</strong>
                      {user.benefits[1].copayAppliesTo[0]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* <button
              type="submit"
              className="btn btn-outline-primary"
              onClick={getOTP(user.member.contacts[0].id)}
            >
              Send OTP
            </button> */}
            <h1>The patient's OTP is:{OTP}</h1>

            <form>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  OTP Number:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="OTP"
                  placeholder="Enter otp number here..."
                  value={verifyOTP}
                  onChange={(e) => setVerifyOTP(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-outline-primary"
                onClick={getOTP(user.member.contacts[0].id)}
              >
                Send OTP
              </button>

              {/* <button type="submit" className="btn btn-outline-primary">
                Verify OTP
              </button> */}
            </form>
          </div>
          {OTP === verifyOTP ? (
            <Link to="/startVisit" className="btn btn-info">
              Proceed to Start Visit
            </Link>
          ) : (
            <p>OTP does not match</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MemberDetails;

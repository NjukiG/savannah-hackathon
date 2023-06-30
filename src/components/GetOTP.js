import React from "react";

const GetOTP = ({ getOTP, contact_id, OTP, setOTP }) => {
  console.log(OTP);

  return (
    <div>
      {/* onSubmit={searchUser} */}
      <form onSubmit={getOTP}>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            OTP NNumber:
          </label>
          <input
            type="text"
            className="form-control"
            id="OTP"
            placeholder="Enter otp number here..."
            value={OTP}
            onChange={(e) => setOTP(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-outline-primary">
          GET OTP
        </button>
      </form>
    </div>
  );
};

export default GetOTP;

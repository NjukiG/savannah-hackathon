import React from "react";

const Home = ({
  memberNumber,
  payerSladeCode,
  setMemberNumber,
  setPayerSladeCode,
  getMemberEligibility,
}) => {
  const searchUser = (e) => {
    e.preventDefault();
    getMemberEligibility();
  };
  return (
    <div>
      <form onSubmit={searchUser}>
        <div className="mb-3">
          <label htmlFor="memberNumber" className="form-label">
            Member Number:
          </label>
          <input
            type="text"
            className="form-control"
            id="memberNumber"
            placeholder="Enter member number here..."
            value={memberNumber}
            onChange={(e) => setMemberNumber(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="payerSladeCode" className="form-label">
            Slade Code:
          </label>
          <input
            type="text"
            className="form-control"
            id="payerSladeCode"
            placeholder="Enter slade code here..."
            value={payerSladeCode}
            onChange={(e) => setPayerSladeCode(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default Home;

{
  /* <Link to="/membershipCard" className="btn btn-outline-info m-2">
            View Deatils
          </Link> */
}

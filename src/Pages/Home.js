import React from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

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
    <div className="container">
      <img
        src="https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/WORKPLACEV9CMS/2bgqjhmw_0iifqf_p8twtq.jpg"
        className="image"
      />
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
        <Link className="btn btn-outline-info m-2" to="/memberDetails">
          To Member details
        </Link>
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

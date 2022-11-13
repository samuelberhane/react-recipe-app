import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error">
      <h1 className="notfound">Opps... Page Not Found</h1>
      <Link to="/" className="btn err-btn">
        Back to Homepage
      </Link>
    </section>
  );
};

export default Error;

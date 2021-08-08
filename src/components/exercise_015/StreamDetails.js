import React from "react";
import { Link } from "./react-router-dom";

const StreamDetails = () => {
  return (
    <div className="stream-details">
      <h3>StreamDetails</h3>
      <Link to="/">Got to Stream List</Link>
    </div>
  );
};

export { StreamDetails };

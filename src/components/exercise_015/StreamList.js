import React from "react";
import { Link } from "./react-router-dom";

const StreamList = () => {
  return (
    <div className="stream-list">
      <h3>StreamList</h3>
      <Link to="/streams/details">Got to Stream Details</Link>
    </div>
  );
};

export { StreamList };

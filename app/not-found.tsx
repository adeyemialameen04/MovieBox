import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div
      className="center"
      style={{
        color: "red",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p>This page was not found try going to a valid page</p>
      <Link href="/">Back to homepage</Link>
    </div>
  );
};

export default NotFound;

import React from "react";

function Loader() {
  return (
    <div>
      {" "}
      <div className="noo-spinner">
        <div className="spinner">
          <div className="child double-bounce1" />
          <div className="child double-bounce2" />
        </div>
      </div>
    </div>
  );
}

export default Loader;

import React from "react";

const Alert = (props) => {
  return (
    props.alert !== null && (
      <div className="container my-2">
        <div className={`alert alert-${props.alert.type}`}>
          <i className="fas fa-info-circle"></i> {props.alert.message}
        </div>
      </div>
    )
  );
};

export default Alert;

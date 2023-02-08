import React, { Fragment } from "react";
import loading from "../img/loading.gif";

const Loading = () => {
  return (
    <Fragment>
      <img src={loading} alt="Loading..." style={{ width: "200", display: "block", margin: "auto" }} />
    </Fragment>
  );
};

export default Loading;

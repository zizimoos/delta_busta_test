import React from "react";
import Loader from "react-loader-spinner";

export default () => {
  return (
    <Loader
      type="Grid"
      color="#00BFFF"
      height={250}
      width={250}
      timeout={2000} //3 secs
    />
  );
};

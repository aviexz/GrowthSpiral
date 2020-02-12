import React from "react";
import Radium from "radium";

const card = props => {
  const style = {
    width: "165px",
    height: "220px",
    borderRadius: "3%",
    margin: "4px",
    float: "left",
    ":hover": {
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.40)"
    }
  };

  const test = props.imgId;

  return (
    <div>
      <img
        style={style}
        onClick={props.click}
        src={require("./Pictures/" + test + ".jpg")}
        alt="Magic Card."
      />
    </div>
  );
};

export default Radium(card);

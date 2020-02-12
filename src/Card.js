import React from "react";

const card = props => {
  const style = {
    width: "160px",
    height: "220px",
    borderRadius: "3%",
    margin: "4px",
    float: "left"
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

export default card;

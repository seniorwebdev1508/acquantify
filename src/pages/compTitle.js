import React from "react";
import "@fontsource/poppins";
import "@fontsource/space-grotesk";

const CompTitle = (props) => {
  return (
    <div className="text-white font-space-grotesk font-bold text-center" style={{fontSize:`${48*props.scaleFactor}px`}}>
      {props.title}
    </div>
  );
};

export default CompTitle;

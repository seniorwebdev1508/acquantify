import React from "react";
import "@fontsource/poppins";
import "@fontsource/space-grotesk";

const CompTitle = (props) => {
  return (
    <div className="text-white font-space-grotesk text-[48px] font-bold text-center">
      {props.title}
    </div>
  );
};

export default CompTitle;

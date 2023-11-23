import React from "react";
import "@fontsource/poppins";
import "@fontsource/space-grotesk";

const CompInput = (props) => {
  return (
    <div className={props.className}>
      <span className="font-poppins text-[15px] text-[#FFFFFF80] flex font-normal">
        {props.label}
      </span>
      <input
        type={props.type}
        className={`mt-[14px] block rounded-full w-full h-[80px] text-[25px] font-poppins py-1.5 pl-12 pr-20 font-normal text-white placeholder:text-gray-400 sm:leading-6 bg-[#ffffff1c] focus:border-white focus:shadow-[0_4px_10px_0px_rgba(73, 204, 250, 0.25)] backdrop-blur-[50px]`}
      />
    </div>
  );
};

export default CompInput;

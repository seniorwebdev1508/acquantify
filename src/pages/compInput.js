import React from "react";
import "@fontsource/poppins";
import "@fontsource/space-grotesk";

const CompInput = (props) => {
  return (
    <div className={props.className} style={props.style}>
      <span
        className="font-poppins text-[#FFFFFF80] flex font-normal"
        style={{ fontSize: `${15 * props.scaleFactor}px` }}
      >
        {props.label}
      </span>
      <input
        type={props.type}
        style={{
          marginTop: `${14 * props.scaleFactor}px`,
          height: `${80 * props.scaleFactor}px`,
          fontSize: `${25 * props.scaleFactor}px`,
          paddingLeft: `${12 * props.scaleFactor}px`,
          paddingRight: `${20 * props.scaleFactor}px`,
          paddingTop: `${6 * props.scaleFactor}px`,
          paddingBottom: `${6 * props.scaleFactor}px`,
          // boxShadow: `0px 4px 10px 0px rgba(73, 204, 250, 0.25)`,
        }}
        onChange={props.onChange}
        className={`block rounded-full w-full font-poppins font-normal text-white placeholder:text-gray-400 sm:leading-6 bg-[#ffffff1c] focus:border-white focus:shadow-[0_4px_10px_0px_rgba(73, 204, 250, 0.25)] focus:backdrop-blur-[50px]`}
      />
    </div>
  );
};

export default CompInput;

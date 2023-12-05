import React from "react";

const Footer = (props) => {
  const scaleFactor = props.scaleFactor;
  return <div style={{ height: `${193 * scaleFactor}px` }}></div>;
};

export default Footer;

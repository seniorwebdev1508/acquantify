import React from "react";

const CompButton = (props) => {
  return (
    <div className={props.className} style={props.style}>
      <button
        style={{width:`${props.width*props.scaleFactor}px`, height:`${props.height*props.scaleFactor}px`, fontSize:`${props.size*props.scaleFactor}px`}}
        className={`bg-[linear-gradient(104deg,_#49CCFA_3.83%,_#FD71AE_41.68%,_#7C68EE_87.05%)] rounded-full flex items-center justify-center text-white uppercase font-space-grotesk font-bold tracking-[1.5px]`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26 25"
          fill="none"
          style={{width:`${26*props.scaleFactor}px`,height:`${25*props.scaleFactor}px`,marginRight:`${10*props.scaleFactor}px`}}
        >
          <circle
            cx="12.5"
            cy="12.5"
            r="12"
            transform="matrix(-1 0 0 1 25.5 0)"
            stroke="white"
            strokeOpacity="0.8"
          />
          <path
            d="M7.5 12.5C7.22386 12.5 7 12.7239 7 13C7 13.2761 7.22386 13.5 7.5 13.5V12.5ZM17.8536 13.3536C18.0488 13.1583 18.0488 12.8417 17.8536 12.6464L14.6716 9.46447C14.4763 9.2692 14.1597 9.2692 13.9645 9.46447C13.7692 9.65973 13.7692 9.97631 13.9645 10.1716L16.7929 13L13.9645 15.8284C13.7692 16.0237 13.7692 16.3403 13.9645 16.5355C14.1597 16.7308 14.4763 16.7308 14.6716 16.5355L17.8536 13.3536ZM7.5 13.5H17.5V12.5H7.5V13.5Z"
            fill="white"
            fillOpacity="0.8"
          />
        </svg>
        {props.title}
      </button>
    </div>
  );
};

export default CompButton;

import React from "react";
import Header from "./header";
import "@fontsource/poppins";
import "@fontsource/space-grotesk";
import CompButton from "./compButton";
import CompInput from "./compInput";
import CompTitle from "./compTitle";

const BuyCredits = (props) => {
  const scaleFactor = props.scaleFactor;
  return (
    <div className="bg-[url('/public/svg/buy_credits.svg')] w-full h-screen bg-cover bg-no-repeat">
      <Header scaleFactor={scaleFactor}/>
      <div className="px-[150px] text-white mt-[77px] text-center font-bold">
        <div className=" font-space-grotesk text-[48px]">Buy Credits</div>
        <div className="mt-[100px] font-space-grotesk flex text-center justify-center items-center">
          <span className="text-[24px] font-bold mr-[10px] tracking-[1.5px]">
            $400
          </span>
          <span className="text-[15px] font-bold text-[#FFFFFF80] uppercase tracking-[1.5px]">
            Credits/mo
          </span>
        </div>
        <div className="mt-[60px] flex justify-center">
          <div className="w-[700px] bg-[#FFFFFF0D] rounded-full h-[15px] dark:bg-gray-700">
            <div
              className="bg-white h-[15px] rounded-full flex items-center relative"
              style={{ width: "45%" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                className=" absolute -right-[28px]"
              >
                <circle
                  cx="28"
                  cy="28"
                  r="23"
                  fill="white"
                  fill-opacity="0.15"
                />
                <g filter="url(#filter0_d_618_1046)">
                  <circle cx="28" cy="28" r="18" fill="white" />
                </g>
                <circle
                  cx="28"
                  cy="28"
                  r="9"
                  fill="url(#paint0_linear_618_1046)"
                />
                <defs>
                  <filter
                    id="filter0_d_618_1046"
                    x="0"
                    y="0"
                    width="56"
                    height="56"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0288043 0 0 0 0 0.025625 0 0 0 0 0.05 0 0 0 1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_618_1046"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_618_1046"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_618_1046"
                    x1="14.5"
                    y1="13.75"
                    x2="39.25"
                    y2="39.625"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#49CCFA" />
                    <stop offset="1" stop-color="#FD71AE" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-[60px] text-[#64FF8D] font-space-grotesk text-[64px] font-bold">
          $400/mo
        </div>
        <div className="mt-[60px] text-white text-[22px] font-poppins uppercase">
          or
        </div>
        <div className="mt-[60px] flex justify-center">
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[278px] h-[85px] rounded-full mt-[50px] flex items-center justify-center text-[15px] text-white uppercase font-space-grotesk font-bold tracking-[1.5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
              className="mr-[10px]"
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
            pay as you go
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyCredits;

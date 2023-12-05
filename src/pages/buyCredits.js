import React from "react";
import Header from "./header";
import Footer from "./footer";
import "@fontsource/poppins";
import "@fontsource/space-grotesk";
import CompButton from "./compButton";

const BuyCredits = (props) => {
  const scaleFactor = props.scaleFactor;
  return (
    <div className="bg-[url('/public/svg/buy_credits.svg')] w-full h-full bg-cover bg-no-repeat">
      <Header scaleFactor={scaleFactor} />
      <div
        className="text-white text-center font-bold"
        style={{
          paddingLeft: `${150 * scaleFactor}px`,
          paddingRight: `${150 * scaleFactor}px`,
          marginTop: `${77 * scaleFactor}px`,
        }}
      >
        <div
          className="font-space-grotesk"
          style={{ fontSize: `${48 * scaleFactor}px` }}
        >
          Buy Credits
        </div>
        <div
          className="font-space-grotesk flex text-center justify-center items-center"
          style={{ marginTop: `${100 * scaleFactor}px` }}
        >
          <span
            className="font-bold tracking-[1.5px]"
            style={{
              fontSize: `${24 * scaleFactor}px`,
              marginRight: `${10 * scaleFactor}px`,
            }}
          >
            $400
          </span>
          <span
            className="font-bold text-[#FFFFFF80] uppercase tracking-[1.5px]"
            style={{ fontSize: `${15 * scaleFactor}px` }}
          >
            Credits/mo
          </span>
        </div>
        <div
          className="flex justify-center"
          style={{ marginTop: `${60 * scaleFactor}px` }}
        >
          <div
            className="bg-[#FFFFFF0D] rounded-full dark:bg-gray-700"
            style={{
              width: `${700 * scaleFactor}px`,
              height: `${15 * scaleFactor}px`,
            }}
          >
            <div
              className="bg-white rounded-full flex items-center relative"
              style={{ width: "45%", height: `${15 * scaleFactor}px` }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={56 * scaleFactor}
                height={56 * scaleFactor}
                viewBox="0 0 56 56"
                fill="none"
                className=" absolute -right-[28px]"
              >
                <circle
                  cx="28"
                  cy="28"
                  r="23"
                  fill="white"
                  fillOpacity="0.15"
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
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                    <stop stopColor="#49CCFA" />
                    <stop offset="1" stopColor="#FD71AE" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <div
          className="text-[#64FF8D] font-space-grotesk font-bold"
          style={{
            marginTop: `${60 * scaleFactor}px`,
            fontSize: `${64 * scaleFactor}px`,
          }}
        >
          $400/mo
        </div>
        <div
          className="text-white font-poppins uppercase"
          style={{
            marginTop: `${60 * scaleFactor}px`,
            fontSize: `${22 * scaleFactor}px`,
          }}
        >
          or
        </div>
        <div
          className="flex justify-center"
          style={{
            marginTop: `${60 * scaleFactor}px`,
          }}
        >
          <CompButton
            title="pay as you go"
            scaleFactor={scaleFactor}
            width="278"
            height="85"
            size="15"
          ></CompButton>
        </div>
      </div>
      <Footer scaleFactor={scaleFactor}/>
    </div>
  );
};

export default BuyCredits;

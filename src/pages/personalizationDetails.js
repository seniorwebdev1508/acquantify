import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import "@fontsource/poppins";
import "@fontsource/space-grotesk";
import CompTitle from "./compTitle";
import CompButton from "./compButton";

const PersonalizationDetails = (props) => {
  const scaleFactor = props.scaleFactor;
  const [leads, setLeads] = useState(0);
  const [ea, setEa] = useState(0);
  const onPlusButtonClicked = () => {
    setEa(ea + 1);
  };
  const onMinusButtonClicked = () => {
    setEa(ea - 1);
  };
  return (
    <div className="bg-[url('/public/svg/personalization_details.svg')] w-full h-screen bg-cover bg-no-repeat">
      <Header scaleFactor={scaleFactor} />
      <div
        className="px-[150px] text-white"
        style={{
          paddingTop: `${40 * scaleFactor}px`,
          marginTop: `${40 * scaleFactor}px`,
          paddingLeft: `${150 * scaleFactor}px`,
          paddingRight: `${150 * scaleFactor}px`,
        }}
      >
        <CompTitle
          title="Personalization Details"
          scaleFactor={scaleFactor}
        ></CompTitle>

        <div
          className="text-center flex items-center justify-center"
          style={{
            marginTop: `${100 * scaleFactor}px`,
            gap: `${52 * scaleFactor}px`,
          }}
        >
          <div className="text-center">
            <div
              className="font-space-grotesk bg-[#FFFFFF1A] justify-center items-center flex font-bold"
              style={{
                fontSize: `${48 * scaleFactor}px`,
                width: `${200 * scaleFactor}px`,
                height: `${150 * scaleFactor}px`,
                borderRadius: `${25 * scaleFactor}px`,
                letterSpacing: `${4.8 * scaleFactor}px`,
              }}
            >
              3,232
            </div>
            <div
              className="font-poppins"
              style={{
                marginTop: `${40 * scaleFactor}px`,
                fontSize: `${22 * scaleFactor}px`,
              }}
            >
              Leads
            </div>
          </div>

          <div className="items-center flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={60 * scaleFactor}
              height={61 * scaleFactor}
              viewBox="0 0 60 61"
              fill="none"
            >
              <g filter="url(#filter0_b_405_949)">
                <rect
                  x="0.271484"
                  y="30.5"
                  width="41.88"
                  height="41.88"
                  rx="20.94"
                  transform="rotate(-45 0.271484 30.5)"
                  fill="white"
                  fillOpacity="0.1"
                />
                <path
                  d="M24.9493 35.4356L34.8205 25.5644M24.9493 25.5644L34.8205 35.4356"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_405_949"
                  x="-99.7285"
                  y="-99.1136"
                  width="259.228"
                  height="259.227"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_405_949"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_405_949"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          <div className="text-center">
            <div
              className="font-space-grotesk bg-[#FFFFFF1A] justify-center items-center flex font-bold border-white"
              style={{
                fontSize: `${48 * scaleFactor}px`,
                width: `${200 * scaleFactor}px`,
                height: `${150 * scaleFactor}px`,
                borderRadius: `${25 * scaleFactor}px`,
                letterSpacing: `${4.8 * scaleFactor}px`,
                borderWidth: `${1 * scaleFactor}px`,
              }}
            >
              <button onClick={onMinusButtonClicked}>
                <div style={{ marginRight: `${15 * scaleFactor}px` }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={26 * scaleFactor}
                    height={26 * scaleFactor}
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <g filter="url(#filter0_b_405_970)">
                      <rect
                        width="26"
                        height="26"
                        rx="13"
                        fill="white"
                        fillOpacity="0.1"
                      />
                      <path
                        d="M8.66699 13H17.3337"
                        stroke="white"
                        strokerinecap="round"
                        strokerinejoin="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_b_405_970"
                        x="-100"
                        y="-100"
                        width="226"
                        height="226"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="50"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_405_970"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_405_970"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </button>
              {ea < 10 ? "0" + ea : ea}
              <button onClick={onPlusButtonClicked}>
                <div style={{ marginLeft: `${15 * scaleFactor}px` }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={26 * scaleFactor}
                    height={26 * scaleFactor}
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <g filter="url(#filter0_b_405_965)">
                      <rect
                        width="26"
                        height="26"
                        rx="13"
                        fill="white"
                        fillOpacity="0.1"
                      />
                      <path
                        d="M8.66699 13H17.3337M13.0003 8.66663V17.3333"
                        stroke="white"
                        strokerinecap="round"
                        strokerinejoin="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_b_405_965"
                        x="-100"
                        y="-100"
                        width="226"
                        height="226"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur
                          in="BackgroundImageFix"
                          stdDeviation="50"
                        />
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_405_965"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_405_965"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </button>
            </div>
            <div
              className="font-poppins"
              style={{
                marginTop: `${40 * scaleFactor}px`,
                fontSize: `${22 * scaleFactor}px`,
              }}
            >
              Personalization/ea
            </div>
          </div>

          <div className="items-center flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={60 * scaleFactor}
              height={61 * scaleFactor}
              viewBox="0 0 60 61"
              fill="none"
            >
              <g filter="url(#filter0_b_405_957)">
                <rect
                  x="0.499023"
                  y="30.5"
                  width="41.8823"
                  height="41.8823"
                  rx="20.9411"
                  transform="rotate(-45 0.499023 30.5)"
                  fill="white"
                  fillOpacity="0.1"
                />
                <path
                  d="M21.8115 28.0837H37.9201"
                  stroke="white"
                  strokerinecap="round"
                  strokerinejoin="round"
                />
                <path
                  d="M21.8115 34.5271H37.9201"
                  stroke="white"
                  strokerinecap="round"
                  strokerinejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_b_405_957"
                  x="-99.501"
                  y="-99.1152"
                  width="259.23"
                  height="259.23"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="50" />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_405_957"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_405_957"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>

          <div className="text-center items-center">
            <div
              className="font-space-grotesk text-[#64FF8D] font-bold"
              style={{
                fontSize: `${64 * scaleFactor}px`,
                letterSpacing: `${6.4 * scaleFactor}px`,
              }}
            >
              6,464
            </div>
            <div
              className="font-poppins"
              style={{
                marginTop: `${25 * scaleFactor}px`,
                fontSize: `${22 * scaleFactor}px`,
              }}
            >
              Credits
            </div>
          </div>
        </div>

        <div style={{ marginTop: `${70 * scaleFactor}px` }}>
          <div
            className="flex flex-col justify-center"
            style={{ paddingTop: `${50 * scaleFactor}px` }}
          >
            <div
              className="text-start text-[#FFFFFF80]"
              style={{
                fontSize: `${15 * scaleFactor}px`,
                paddingLeft: `${100 * scaleFactor}px`,
              }}
            >
              Enter URL
            </div>
            <div
              className="relative mt-4 rounded-md shadow-sm mx-auto"
              style={{ marginTop: `${16 * scaleFactor}px` }}
            >
              <input
                type="text"
                name="url"
                id="url"
                style={{
                  border: `${1 * scaleFactor}px`,
                  height: `${80 * scaleFactor}px`,
                  paddingLeft: `${48 * scaleFactor}px`,
                  paddingRight: `${80 * scaleFactor}px`,
                  paddingTop: `${6 * scaleFactor}px`,
                  paddingBottom: `${6 * scaleFactor}px`,
                  fontSize: `${35 * scaleFactor}px`,
                  lineHeight: `${36 * scaleFactor}px`,
                  width: `${943 * scaleFactor}px`,
                }}
                className="block rounded-full w-full border-solid border-white text-white placeholder:text-gray-400 sm:leading-6 bg-[#ffffff1c]"
              />
              <div
                className="absolute inset-y-0 flex items-center cursor-pointer"
                style={{ right: `${1.75 * scaleFactor}rem` }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25 * scaleFactor}
                  height={21 * scaleFactor}
                  viewBox="0 0 25 21"
                  fill="none"
                >
                  <path
                    d="M14.6652 9.25001C16.4601 12.3589 15.4918 16.2783 12.5025 18.0042L10.3375 19.2542C7.34814 20.9801 3.46971 19.8589 1.6748 16.75C-0.120118 13.6411 0.848139 9.72174 3.83746 7.99585L4.37873 7.68335M10.3351 11.75C8.54014 8.64112 9.50841 4.72172 12.4977 2.99585L14.6628 1.74585C17.6521 0.0199746 21.5305 1.14112 23.3254 4.25001C25.1203 7.35889 24.1521 11.2783 21.1628 13.0042L20.6215 13.3167"
                    stroke="#49CCFA"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div
          className="text-center flex justify-center"
          style={{ marginTop: `${100 * scaleFactor}` }}
        >
          <CompButton
            title="acquantify"
            width="218"
            height="85"
            size="15"
            scaleFactor={scaleFactor}
            style={{ marginTop: `${25 * scaleFactor}px` }}
          ></CompButton>
        </div>
      </div>
      <Footer scaleFactor={scaleFactor}/>
    </div>
  );
};

export default PersonalizationDetails;

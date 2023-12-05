import React from "react";
import Header from "./header";
import Footer from "./footer";
import "@fontsource/poppins";
import "@fontsource/space-grotesk";
import CompButton from "./compButton";
import CompTitle from "./compTitle";

const AcquantifyCustom = (props) => {
  const scaleFactor = props.scaleFactor;
  return (
    <div className="bg-[url('/public/svg/acquantify_custom.svg')] w-full h-screen bg-cover bg-no-repeat">
      <Header scaleFactor={scaleFactor} />
      <div
        className="text-white"
        style={{
          paddingTop: `${10 * scaleFactor}px`,
          paddingLeft: `${150 * scaleFactor}px`,
          paddingRight: `${150 * scaleFactor}px`,
        }}
      >
        <CompTitle
          title="Acquantify Custom"
          scaleFactor={scaleFactor}
        ></CompTitle>

        <div
          className="font-poppins text-center"
          style={{
            fontSize: `${18 * scaleFactor}px`,
            marginTop: `${60 * scaleFactor}px`,
          }}
        >
          Looking for a custom hyper-personalization to help you better Acquaint
          yourself with a cold lead?
        </div>

        <div
          className="justify-center text-center relative"
          style={{ marginTop: `${60 * scaleFactor}px` }}
        >
          <input
            type="text"
            style={{
              width: `${900 * scaleFactor}px`,
              height: `${200 * scaleFactor}px`,
              fontSize: `${32 * scaleFactor}px`,
              borderRadius: `${25 * scaleFactor}px`,
              borderWidth: `${1 * scaleFactor}px`,
              paddingLeft: `${3 * scaleFactor}rem`,
              paddingRight: `${5 * scaleFactor}rem`,
              paddingTop: `${0.375 * scaleFactor}rem`,
              paddingBottom: `${0.375 * scaleFactor}rem`,
            }}
            className="border-solid border-white text-white sm:leading-6 bg-[#ffffff1c] font-poppins placeholder:text-white"
            placeholder="Describe the type of entity/URL you are trying to utilize as a reference point."
          />
          <div
            className="absolute flex items-center cursor-pointer"
            style={{
              bottom: `${1 * scaleFactor}rem`,
              right: `${10 * scaleFactor}rem`,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={13 * scaleFactor}
              height={14 * scaleFactor}
              viewBox="0 0 13 14"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.2223 1.02455C11.3991 0.812489 11.3706 0.497193 11.1586 0.320313C10.9465 0.143434 10.6312 0.171951 10.4543 0.384008L0.320269 12.5335C0.143389 12.7456 0.171906 13.0609 0.383963 13.2377C0.59602 13.4146 0.911316 13.3861 1.0882 13.1741L11.2223 1.02455ZM12.6145 6.69294C12.7914 6.48088 12.7629 6.16558 12.5508 5.9887C12.3387 5.81182 12.0235 5.84034 11.8466 6.0524L6.14616 12.8865C5.96928 13.0986 5.9978 13.4139 6.20986 13.5907C6.42191 13.7676 6.73721 13.7391 6.91409 13.527L12.6145 6.69294Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <div
          className="font-poppins text-center text-[#D0D0D0] mx-auto"
          style={{
            fontSize: `${15 * scaleFactor}px`,
            marginTop: `${60 * scaleFactor}px`,
            width: `${875 * scaleFactor}px`,
          }}
        >
          Please note, we will not work with social URLs. We will do our best to
          analyze and see if our hyper-personalization will work with your use
          case. If not, you can always GO BACK and use one of our standard
          personalization angles.
        </div>

        <div className="flex justify-center mt-30">
          <CompButton
            style={{ marginTop: `${50 * scaleFactor}px` }}
            width="218"
            height="85"
            title="submit"
            size="15"
            scaleFactor={scaleFactor}
          />
        </div>

        <div
          className="font-poppins text-center"
          style={{
            marginTop: `${30 * scaleFactor}px`,
            fontSize: `${18 * scaleFactor}px`,
          }}
        >
          Go Back
        </div>
      </div>
      <Footer scaleFactor={scaleFactor}/>
    </div>
  );
};

export default AcquantifyCustom;

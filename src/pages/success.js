import React from "react";
import Header from "./header";
import "@fontsource/poppins";
import "@fontsource/space-grotesk";
import CompTitle from "./compTitle";
import CompButton from "./compButton";

const Success = (props) => {
  const scaleFactor = props.scaleFactor;
  return (
    <div
      className="bg-[url('/public/svg/success.svg')] w-full h-screen bg-cover bg-no-repeat"
      style={{
        paddingLeft: `${150 * scaleFactor}px`,
        paddingRight: `${150 * scaleFactor}px`,
      }}
    >
      <Header scaleFactor={props.scaleFactor} />
      <div
        className="justify-center items-center content-center"
        style={{ marginTop: `${126 * scaleFactor}px` }}
      >
        <CompTitle title="Success!" scaleFactor={scaleFactor} />

        <div
          className="bg-[#FFFFFF1A] border-[#64FF8D] border-[1px] mx-auto"
          style={{
            marginTop: `${100 * scaleFactor}px`,
            borderRadius: `${25 * scaleFactor}px`,
            width: `${200 * scaleFactor}px`,
            height: `${200 * scaleFactor}px`,
            paddingTop: `${48 * scaleFactor}px`,
            paddingBottom: `${48 * scaleFactor}px`,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={64 * scaleFactor}
            height={64 * scaleFactor}
            viewBox="0 0 64 64"
            fill="none"
            className="mx-auto"
          >
            <path
              d="M33.8165 46.7892C33.3502 47.2993 32.6911 47.5897 31.9999 47.5897C31.3087 47.5897 30.6497 47.2993 30.1833 46.7892L17.055 32.4303C16.1377 31.427 16.2074 29.8699 17.2107 28.9526C18.2141 28.0353 19.7711 28.1049 20.6884 29.1082L29.5384 38.7879V2.46154C29.5384 1.10208 30.6405 0 31.9999 0C33.3593 0 34.4615 1.10208 34.4615 2.46154V38.7879L43.3115 29.1082C44.2288 28.1049 45.7858 28.0353 46.7892 28.9526C47.7925 29.8699 47.8621 31.427 46.9447 32.4303L33.8165 46.7892Z"
              fill="#64FF8D"
            />
            <path
              d="M4.92308 41.8462C4.92308 40.4868 3.82103 39.3846 2.46154 39.3846C1.10208 39.3846 1.71964e-06 40.4868 1.71964e-06 41.8462V42.0264C-6.39214e-05 46.5149 -0.000129798 50.1327 0.382426 52.9782C0.77962 55.9324 1.62931 58.4196 3.60484 60.395C5.58038 62.3708 8.06774 63.2205 11.022 63.6177C13.8674 64 17.4853 64 21.9738 64H42.0263C46.5149 64 50.1327 64 52.9782 63.6177C55.9324 63.2205 58.4195 62.3708 60.3953 60.395C62.3708 58.4196 63.2205 55.9324 63.6176 52.9782C64 50.1327 64 46.5149 64 42.0264V41.8462C64 40.4868 62.8979 39.3846 61.5385 39.3846C60.179 39.3846 59.0769 40.4868 59.0769 41.8462C59.0769 46.5572 59.0717 49.8429 58.7385 52.3222C58.4146 54.7305 57.8225 56.0056 56.9141 56.9141C56.0056 57.8225 54.7305 58.4146 52.3221 58.7386C49.8429 59.0717 46.5572 59.077 41.8462 59.077H22.1538C17.4428 59.077 14.157 59.0717 11.6779 58.7386C9.26966 58.4146 7.99432 57.8225 7.08598 56.9141C6.17764 56.0056 5.5854 54.7305 5.26162 52.3222C4.9283 49.8429 4.92308 46.5572 4.92308 41.8462Z"
              fill="#64FF8D"
            />
          </svg>
          <div
            className="text-white uppercase font-space-grotesk font-bold tracking-[1.5px] text-center"
            style={{ fontSize: `${15 * scaleFactor}px` }}
          >
            download
          </div>
        </div>
        <div style={{ marginTop: `${100 * scaleFactor}px` }}>
          <div
            className="flex justify-center"
            style={{ marginTop: `${30 * scaleFactor}px` }}
          >
            <CompButton
              title="start a new batch!"
              width="328"
              height="85"
              scaleFactor={scaleFactor}
            ></CompButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;

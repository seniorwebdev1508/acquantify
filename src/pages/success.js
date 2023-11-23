import React from "react";
import Header from "./header";
import "@fontsource/poppins";
import "@fontsource/space-grotesk";

const Success = () => {
  return (
    <div className="bg-[url('/public/svg/success.svg')] w-full h-screen bg-cover bg-no-repeat">
      <Header />
      <div className="mt-[126px] justify-center items-center content-center">
        <div className="font-space-grotesk text-[48px] font-bold text-white text-center">
          Success!
        </div>

        <div className="mt-[100px] rounded-[25px] w-[200px] h-[200px] bg-[#FFFFFF1A] border-[#64FF8D] border-[1px] mx-auto py-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
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
          <div className="text-white uppercase font-space-grotesk text-[15px] font-bold tracking-[1.5px] text-center">
            download
          </div>
        </div>
        <div className="mt-[100px]">
          <div className="flex justify-center mt-30">
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[328px] h-[85px] rounded-full mt-[50px] flex items-center justify-center text-[15px] uppercase font-space-grotesk font-bold tracking-[1.5px] text-white">
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
              start a new batch!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;

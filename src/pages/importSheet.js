import React from "react";
import Header from "./header";
import CompButton from "./compButton";
import CompTitle from "./compTitle";

const ImportSheet = () => {
  return (
    <div className="bg-[url('/public/svg/import_page.svg')] w-full h-screen bg-cover bg-no-repeat">
      <Header />
      <div className="pt-10 text-white w-[900px] mx-auto">
        <CompTitle title="Import Sheet" />
        <span className="pt-[50px] font-poppins text-[15px] text-[#FFFFFF80] flex font-normal">
          Google Sheet URL
        </span>
        <div className="flex flex-col items-center">
          <div className="relative mt-[15px] rounded-md shadow-sm w-full text-center">
            <input
              type="text"
              name="url"
              id="url"
              className="block rounded-full w-full border-solid border-[1px] h-[80px] text-[35px] border-white py-1.5 pl-12 pr-20 bg-transparent text-white placeholder:text-gray-400 sm:leading-6 focus:bg-[#ffffff1c]"
            />
            <div className="absolute inset-y-0 right-7 flex items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="21"
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

        <div className="flex justify-center">
          <CompButton
            className="mt-[50px]"
            title="continue"
            width="237"
            height="85"
            size="15"
          />
        </div>

        <div className="flex justify-center mt-[38px] text-[18px] font-poppins">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            className="mr-[10px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26 13C26 20.1796 20.1796 26 13 26C5.82029 26 0 20.1796 0 13C0 5.82029 5.82029 0 13 0C20.1796 0 26 5.82029 26 13ZM18.2394 9.06057C18.6202 9.44133 18.6202 10.0587 18.2394 10.4394L11.7394 16.9394C11.3586 17.3202 10.7414 17.3202 10.3606 16.9394L7.76057 14.3394C7.37981 13.9586 7.37981 13.3414 7.76057 12.9606C8.14133 12.5798 8.75867 12.5798 9.13943 12.9606L11.05 14.8711L13.9552 11.9658L16.8606 9.06057C17.2414 8.67981 17.8586 8.67981 18.2394 9.06057Z"
              fill="#34A853"
            />
          </svg>
          Import Successful!
        </div>
      </div>
    </div>
  );
};

export default ImportSheet;

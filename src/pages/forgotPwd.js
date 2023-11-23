import React from "react";
import Header from "./header";
import "@fontsource/poppins";
import "@fontsource/space-grotesk";

const ForgotPwd = () => {
  return (
    <div className="bg-[url('/public/svg/forgot_pwd.svg')] w-full h-screen bg-cover bg-no-repeat">
      <Header />
      <div className="px-[150px] text-white mt-[77px] text-center font-bold">
        <div className="flex justify-center">
          <div className="mr-[120px]">
            <img src="img/main.png"></img>
          </div>
          <div className="w-[426px] text-center">
            <div className="text-white font-space-grotesk text-[48px] font-bold">
              Forgot Password?
            </div>
            <div className="mt-[50px] font-poppins text-white font-normal">
              No worries! Happens to the best of us? Go ahead and enter your
              email and we will send you instructions to log back in!
            </div>

            <div className="mt-[50px]">
              <span className="font-poppins text-[15px] text-[#FFFFFF80] flex font-normal">
                Email
              </span>
              <input
                type="email"
                className="mt-[14px] block rounded-full w-full h-[80px] text-[25px] font-poppins py-1.5 pl-12 pr-20 text-white placeholder:text-gray-400 sm:leading-6 bg-[#ffffff1c] focus:border-white focus:shadow-[0_4px_10px_0px_rgba(73, 204, 250, 0.25)] backdrop-blur-[50px]"
              />
            </div>
            <div className="mt-[50px] flex justify-center">
              <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-[266px] h-[71px] rounded-full mt-[50px] flex items-center justify-center text-[15px] text-white uppercase font-space-grotesk font-bold tracking-[1.5px]">
                reset password
              </button>
            </div>
            <div className="mt-[50px] flex justify-center font-poppins text-[18px] font-normal">
              Don't have an account?
              <span className="text-[#3BA8CE]">&nbsp;Sign up Now!</span>
            </div>
            <div className="mt-[50px] flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
              >
                <circle
                  cx="16.5"
                  cy="16.5"
                  r="16"
                  stroke="white"
                  strokeOpacity="0.8"
                />
                <path
                  d="M23.1 17.66C23.3761 17.66 23.6 17.4362 23.6 17.16C23.6 16.8839 23.3761 16.66 23.1 16.66L23.1 17.66ZM10.8664 16.8065C10.6712 17.0017 10.6712 17.3183 10.8664 17.5136L14.0484 20.6956C14.2437 20.8908 14.5602 20.8908 14.7555 20.6956C14.9508 20.5003 14.9508 20.1837 14.7555 19.9885L11.9271 17.16L14.7555 14.3316C14.9508 14.1363 14.9508 13.8198 14.7555 13.6245C14.5602 13.4292 14.2437 13.4292 14.0484 13.6245L10.8664 16.8065ZM23.1 16.66L11.22 16.66L11.22 17.66L23.1 17.66L23.1 16.66Z"
                  fill="white"
                  fillOpacity="0.8"
                />
              </svg>
              <span className="ml-[15px] font-poppins text-[18px] font-normal text-[#FFFFFF80]">Return to sign-in</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPwd;

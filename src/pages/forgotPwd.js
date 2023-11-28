import React, { useState } from "react";
import Header from "./header";
import "@fontsource/poppins";
import "@fontsource/space-grotesk";
import CompButton from "./compButton";
import CompInput from "./compInput";
import CompTitle from "./compTitle";

import { sendPasswordReset } from "../config/firebase";

const ForgotPwd = (props) => {
  const scaleFactor = props.scaleFactor;
  const [email, setEmail] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onResetPw = async () => {
    await sendPasswordReset(email);
  };

  return (
    <div className="bg-[url('/public/svg/forgot_pwd.svg')] w-full h-screen bg-cover bg-no-repeat">
      <Header scaleFactor={scaleFactor} />
      <div
        className="text-white text-center font-bold"
        style={{
          paddingLeft: `${150 * scaleFactor}px`,
          paddingRight: `${150 * scaleFactor}px`,
          marginTop: `${150 * scaleFactor}px`,
        }}
      >
        <div className="flex justify-center">
          <div
            className="mr-[120px]"
            style={{ marginRight: `${120 * scaleFactor}px` }}
          >
            <img
              src="img/main.png"
              style={{
                width: `${545 * scaleFactor}px`,
                height: `${750 * scaleFactor}px`,
              }}
              alt="main"
            ></img>
          </div>
          <div
            className="text-center"
            style={{ width: `${426 * scaleFactor}px` }}
          >
            <CompTitle title="Forgot Password?" scaleFactor={scaleFactor} />
            <div
              className="font-poppins text-white font-normal"
              style={{ marginTop: `${50 * scaleFactor}px` }}
            >
              No worries! Happens to the best of us? Go ahead and enter your
              email and we will send you instructions to log back in!
            </div>

            <div style={{ marginTop: `${50 * scaleFactor}px` }}>
              <CompInput
                style={{ marginTop: `${14 * scaleFactor}px` }}
                type="email"
                label="Email"
                scaleFactor={scaleFactor}
                value={email}
                onChange={onChangeEmail}
              ></CompInput>
            </div>
            <div
              className="flex justify-center"
              style={{ marginTop: `${50 * scaleFactor}px` }}
            >
              <CompButton
                size="15"
                width="266"
                height="71"
                title="reset password"
                scaleFactor={scaleFactor}
                onClick={onResetPw}
              />
            </div>
            <div
              className="flex justify-center font-poppins font-normal"
              style={{
                marginTop: `${50 * scaleFactor}px`,
                fontSize: `${18 * scaleFactor}px`,
              }}
            >
              Don't have an account?
              <span className="text-[#3BA8CE]">&nbsp;Sign up Now!</span>
            </div>
            <div
              className="flex justify-center"
              style={{ marginTop: `${50 * scaleFactor}px` }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={33 * scaleFactor}
                height={33 * scaleFactor}
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
              <span
                className="font-poppins font-normal text-[#FFFFFF80]"
                style={{
                  marginLeft: `${15 * scaleFactor}px`,
                  fontSize: `${18 * scaleFactor}px`,
                }}
              >
                Return to sign-in
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPwd;

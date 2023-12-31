import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import "@fontsource/poppins";
import "@fontsource/space-grotesk";
import { useNavigate, Link } from "react-router-dom";
import CompButton from "./compButton";
import CompInput from "./compInput";
import CompTitle from "./compTitle";

import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../config/firebase";

const SignUp = (props) => {
  const scaleFactor = props.scaleFactor;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const onSignUp = async (e) => {
    // e.preventDefault();
    const result = await registerWithEmailAndPassword(name, email, password);
    console.log(result);
    if (result === "success") {
      navigate("/");
    } else {
      alert(result);
    }
  };
  const onSignUpWithGoogle = async (e) => {
    const result = await signInWithGoogle();
    if (result === "success") {
      navigate("/is");
    } else {
      alert(result);
    }
  };
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  return (
    <div className="bg-[url('/public/svg/sign_up.svg')] w-full h-full bg-cover bg-no-repeat">
      <Header scaleFactor={scaleFactor} />
      <div
        className="text-white text-center font-bold"
        style={{ marginTop: `${77 * scaleFactor}px` }}
      >
        <div className="flex justify-center">
          <div style={{ marginRight: `${120 * scaleFactor}px` }}>
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
            <CompTitle title="Sign Up" scaleFactor={scaleFactor} />
            <button
              className="flex justify-center mx-auto"
              style={{ marginTop: `${50 * scaleFactor}px` }}
              onClick={onSignUpWithGoogle}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={29 * scaleFactor}
                  height={28 * scaleFactor}
                  viewBox="0 0 29 28"
                  fill="none"
                >
                  <path
                    d="M26.82 14.2916C26.82 13.3816 26.7383 12.5066 26.5867 11.6666H14.5V16.6366H21.4067C21.1033 18.235 20.1933 19.5883 18.8283 20.4983V23.73H22.9933C25.42 21.49 26.82 18.2 26.82 14.2916Z"
                    fill="#4285F4"
                  />
                  <path
                    d="M14.4999 26.8333C17.9649 26.8333 20.8699 25.69 22.9932 23.73L18.8282 20.4983C17.6849 21.2683 16.2265 21.7349 14.4999 21.7349C11.1632 21.7349 8.32821 19.4833 7.31321 16.45H3.04321V19.7633C5.15488 23.9516 9.48321 26.8333 14.4999 26.8333Z"
                    fill="#34A853"
                  />
                  <path
                    d="M7.31341 16.4383C7.05675 15.6683 6.90508 14.8516 6.90508 14C6.90508 13.1483 7.05675 12.3316 7.31341 11.5616V8.24829H3.04341C2.16841 9.97496 1.66675 11.9233 1.66675 14C1.66675 16.0766 2.16841 18.025 3.04341 19.7516L6.36841 17.1616L7.31341 16.4383Z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M14.4999 6.27663C16.3899 6.27663 18.0699 6.92996 19.4115 8.18996L23.0865 4.51496C20.8582 2.43829 17.9649 1.16663 14.4999 1.16663C9.48321 1.16663 5.15488 4.04829 3.04321 8.24829L7.31321 11.5616C8.32821 8.52829 11.1632 6.27663 14.4999 6.27663Z"
                    fill="#EA4335"
                  />
                </svg>
              </div>
              <div
                className="text-white font-poppins font-normal"
                style={{
                  fontSize: `${18 * scaleFactor}px`,
                  marginLeft: `${23 * scaleFactor}px`,
                }}
              >
                Continue with Google
              </div>
            </button>
            <div
              className="flex text-center items-center justify-center"
              style={{ marginTop: `${35 * scaleFactor}px` }}
            >
              <div
                className="bg-[#FFFFFF0D]"
                style={{
                  height: `${1 * scaleFactor}px`,
                  width: `${128.5 * scaleFactor}px`,
                  marginRight: `${15 * scaleFactor}px`,
                }}
              ></div>
              <div className="uppercase font-poppins text-[18px] text-[#FFFFFFCC] font-normal">
                or
              </div>
              <div
                className="bg-[#FFFFFF0D]"
                style={{
                  height: `${1 * scaleFactor}px`,
                  width: `${128.5 * scaleFactor}px`,
                  marginLeft: `${15 * scaleFactor}px`,
                }}
              ></div>
            </div>
            <div style={{ marginTop: `${50 * scaleFactor}px` }}>
              <CompInput
                type="text"
                label="Name"
                value={name}
                onChange={onChangeName}
                scaleFactor={scaleFactor}
              ></CompInput>
              <CompInput
                type="email"
                label="Email"
                value={email}
                onChange={onChangeEmail}
                scaleFactor={scaleFactor}
                style={{ marginTop: `${25 * scaleFactor}px` }}
              ></CompInput>
              <CompInput
                style={{ marginTop: `${25 * scaleFactor}px` }}
                type="password"
                label="Password"
                onChange={onChangePassword}
                value={password}
                scaleFactor={scaleFactor}
              ></CompInput>
            </div>
            <div
              className="flex justify-center"
              style={{ marginTop: `${50 * scaleFactor}px` }}
            >
              <CompButton
                width="218"
                height="85"
                size="15"
                title="register"
                onClick={onSignUp}
                scaleFactor={scaleFactor}
              ></CompButton>
            </div>
            <div
              className="flex justify-center font-poppins font-normal"
              style={{
                marginTop: `${50 * scaleFactor}px`,
                fontSize: `${18 * scaleFactor}px`,
              }}
            >
              Have an account?
              <Link to="/">
                <span className="text-[#3BA8CE]">&nbsp;Sign in now!</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer scaleFactor={scaleFactor}/>
    </div>
  );
};

export default SignUp;

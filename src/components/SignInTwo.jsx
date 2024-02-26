import React, { useState, useEffect } from "react";
import whiteLogo from "../assets/black.png";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { validateInput } from "../form-validation/validation"; // Import validation function
import LogoPage from "./LogoPage";
import { useSelector, useDispatch } from "react-redux";
import {
  setEmail,
  setPassword,
  selectEmail,
  selectPassword,
} from "../store/authSlice";
import { setGoogleAuthData, selectGoogleAuth } from "../store/googleAuthSlice"; // Importing actions and selectors from the new slice
import { useNavigate } from "react-router-dom";
import { PiEyeClosedDuotone } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";

const SignInTwo = () => {
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const googleAuth = useSelector(selectGoogleAuth); // Google Auth state
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showLogo, setShowLogo] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleEmailChange = (event) => {
    const { value } = event.target;
    dispatch(setEmail(value));
    setEmailError(validateInput("email", value).errorMessage); // Validate email and set error message
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    dispatch(setPassword(value));
    setPasswordError(validateInput("password", value).errorMessage); // Validate password and set error message
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isEmailPasswordLoginSuccessful =
      email && password && !emailError && !passwordError;
    const isGoogleLoginSuccessful =
      googleAuth.email && googleAuth.name && googleAuth.imageUrl;

    if (isEmailPasswordLoginSuccessful || isGoogleLoginSuccessful) {
      console.log("Login successful! Redirecting to home page...");
      navigate("/home");
    } else {
      console.log("Login failed. Please try again.");
    }
  };

  return (
    <GoogleOAuthProvider clientId="777852050140-u30fcetaufed00k03pua3n5ot45au2aq.apps.googleusercontent.com">
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-slate-950 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-16 w-auto"
            src={whiteLogo}
            alt="Your Company"
          />
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm  ">
          <h2 className="mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-white"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleEmailChange}
                  className={`block w-full rounded-md border-0 bg-white/5 py-1.5 px-2 text-white shadow-sm sm:text-sm sm:leading-6 ${
                    emailError ? "border-red-500" : ""
                  }`}
                />
                {emailError && (
                  <p className="text-red-500 text-sm mt-1">{emailError}</p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-white"
                >
                  Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                  className={`block w-full rounded-md border-0 bg-white/5 py-1.5 px-2 text-white shadow-sm  sm:text-sm sm:leading-6 ${
                    passwordError ? "border-red-500" : ""
                  }`}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaRegEye className="text-gray-300 text-xl" />
                  ) : (
                    <PiEyeClosedDuotone className="text-gray-300 text-xl" />
                  )}
                </button>
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">{passwordError}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-400">
            or continue with{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
            >
              Google Login
            </a>
          </p>

          <div className="flex mt-4 items-center justify-center ">
            <GoogleLogin
              theme="filled_black"
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse.credential);
                console.log(decoded);
                // Dispatch action to store Google login data
                dispatch(
                  setGoogleAuthData({
                    email: decoded.email,
                    name: decoded.name,
                    imageUrl: decoded.picture,
                  })
                );
                navigate("/home");
              }}
              size="large"
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </div>
        <p className="mt-10 text-center text-sm text-gray-500">
          Made with love by{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Abhishek
          </a>
        </p>
      </div>
    </GoogleOAuthProvider>
  );
};

export default SignInTwo;

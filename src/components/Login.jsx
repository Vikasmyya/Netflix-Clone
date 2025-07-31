import { useRef, useState } from "react";
import Header from "./Header";
import valiFormdData from "../utils/vaildFormData";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  //To toggle signin to signup
  const toggleSignInForm = () => {
    return setIsSignIn(!isSignIn);
  };

  //validation check
  const handdelvalidation = () => {
    const result = !isSignIn
      ? valiFormdData(
          email.current.value,
          password.current.value,
          name.current.value
        )
      : valiFormdData(email.current.value, password.current.value);
    setErrorMessage(result);
  };

  return (
    <div>
      <div className="absolute z-10">
        <Header />
      </div>

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg"
          alt="logo-background"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="absolute bg-black opacity-70 w-3/12 px-10 py-20 my-40 mx-auto left-0 right-0">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-white font-bold text-2xl mb-5">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-2 my-2 bg-black w-full border-white border-2 opacity-70 text-white rounded-sm"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email or mobile number"
            className="p-2 my-2 bg-black w-full border-white border-2 opacity-70 text-white rounded-sm"
          />

          <input
            ref={password}
            type="Password"
            placeholder="Password"
            className="p-2 my-2 bg-black w-full border-white border-2 opacity-70 text-white rounded-sm"
          />
          <span className="text-red-700">{errorMessage}</span>
          <button
            className="bg-red-500 w-full py-2 my-4 rounded-sm "
            onClick={handdelvalidation}
          >
            {isSignIn ? "Sign in" : "Sign up"}
          </button>
        </form>
        <p
          className="text-white py-2 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignIn
            ? "New to Netflix? Sign Up now..."
            : "Alredy Registed? Sign In now..."}
        </p>
      </div>
    </div>
  );
};

export default Login;

import { useRef, useState } from "react";
import Header from "./Header";
import valiFormdData from "../utils/vaildFormData";
import { auth } from "../utils/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND_LOGO } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

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

    if (result !== null) return;

    //Signup and Signin from firebase
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          //Updating the name
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser; //getting the current use after the update
              dispatch(addUser({ uid: uid, email: email, name: displayName }));
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <div className="absolute z-10">
        <Header />
      </div>

      <div className="absolute w-full h-screen">
        <img
          src={BACKGROUND_LOGO}
          alt="logo-background"
          className="w-full h-full object-cover"
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

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";
import { useState } from "react";
import { changeSearch } from "../utils/searchGptSlice";

const Header = () => {
  const [authChecked, setAuthChecked] = useState(false);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Signout function
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleToggleSearch = () => {
    dispatch(changeSearch());
  };

  //Set data in store using firebase function
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthChecked(true);
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, name: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [authChecked]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-between bg-gradient-to-b from-black to-transparent">
      <div className="w-64 mx-10 p-4">
        <img src={NETFLIX_LOGO} alt="logo-header" />
      </div>
      {user?.uid && (
        <div className="flex items-center">
          <h3 className="p-2 m-5 text-lg text-white">Welcome {user?.name}</h3>
          <button
            className="p-2 m-2 bg-green-800 rounded-lg"
            onClick={handleToggleSearch}
          >
            Serch Gpt
          </button>

          <button
            className="bg-red-500 p-2 m-4 text-white rounded-lg hover:bg-red-600 cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

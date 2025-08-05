import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
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

  //Set data in store using firebase function
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, name: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }

      return () => unsubscribe();
    });
  }, []);

  return (
    <div className="flex justify-between">
      <div className="w-64 mx-10 p-4">
        <img src={NETFLIX_LOGO} alt="logo-header" />
      </div>
      {user && (
        <div className="flex">
          <h3 className="p-2 m-5 text-lg">Welcome {user?.name}</h3>
          <button
            className="bg-red-400 p-2 m-4 w-20 h-12 text-white rounded-lg"
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

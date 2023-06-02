import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo.svg";
import bell from "../../assets/bell.svg";
import searchicon from "../../assets/searchicon.svg";
import { Link } from "react-router-dom";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import gravatarUrl from "gravatar-url";
import { userLoggedOut } from "../../feature/auth/authSlice";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const [loggedIn, setLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [email, setEmail] = useState(undefined);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.email && user?.name) {
      setLoggedIn(true);
      setEmail(email);
    }
    if (user?.email === "admin@gmail.com" && user?.name === "Admin") {
      setAdmin(true);
    }
  }, [user, email]);

  const handLogOut = () => {
    dispatch(userLoggedOut());
    localStorage.clear();
    setLoggedIn(false);
  };

  return (
    <section className="flex justify-around justify-items-center items-center text-slate-200 bg-[#2ED89B] h-20">
      <h2 className="text-2xl font-bold text-[#D7FFC9] md:text-xl">
        <Link to="/">
        <img src={logo} alt="logo" className="logo" />
        </Link>
      </h2>

      <nav className="flex gap-x-16 justify-items-center items-center md:gap-x-8">
        <div>
          <ul className="flex lg:gap-x-6 md:gap-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            {admin && (
              <li>
                <Link to="/admin">DashBoard</Link>
              </li>
            )}
            <li>
              <Link to="">Packages</Link>
            </li>
            <li>
              <Link to="blogs">Blog</Link>
            </li>
            <li>
              <Link to="">About Us</Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-x-6 justify-center items-center md:gap-x-3">
          {loggedIn ? (
            <div className="flex items-center ">
              <div className="rounded-full overflow-hidden w-8 h-8">
                <img src={gravatarUrl(user.email, { size: 80 })} alt="User" className="object-cover w-full h-full" />
              </div>
              <button className="ml-4 px-2 py-2 bg-teal-800 on rounded" onClick={handLogOut}>
                Logout
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 justify-between gap-2">
              <button className="rounded-sm px-4 bg-green-600 pb-1">
                <Link to="login">Log In</Link>
              </button>
              <button className="border border-green-800 rounded-sm px-2">
                <Link to="registration" className="text-green-800">
                  Sign UP
                </Link>
              </button>
            </div>
          )}
        </div>

        <div>
          <img src={bell} alt="bell-icon" className="bell" />
        </div>
      </nav>
    </section>
  );
};

export default Header;

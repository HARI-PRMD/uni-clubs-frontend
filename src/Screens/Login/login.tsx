import LoginNavbar from "../../Components/loginNavBar";
import pfp from "../../Assets/pfp.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-screen h-screen overflow-x-hidden bg-WhiteBG dark:bg-BlackBG ">
        <LoginNavbar />
        <div className="flex items-center justify-center mx-4 mt-12 h-3/4 md:mx-auto md:mt-0 bg-WhiteBG dark:bg-BlackBG">
          <div className="px-8 py-6 text-left text-black rounded-lg shadow-lg bg-BlueGrey dark:bg-BlueBlack dark:text-WhiteBG">
            <div className="flex justify-center drop-shadow-md">
              <img
                className="object-cover w-24 h-24 mx-auto mt-4 mb-4 rounded-lg"
                src={pfp}
                alt="club logo"
              />
            </div>
            <h3 className="text-2xl font-bold text-center">
              Login to your Club Account
            </h3>
            <form action="">
              <div className="mt-4">
                <div>
                  <label className="block" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="w-full px-4 py-2 mt-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-Green"
                  />
                  <span className="text-xs tracking-wide text-red-600">
                    Email field is required
                  </span>
                </div>
                <div className="mt-4 mb-4">
                  <label className="block">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 mt-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-Green"
                  />
                </div>
                <div className="flex items-baseline justify-between">
                  <NavLink
                    to="/dashboard"
                    className="px-6 py-2 mt-4 text-white rounded-lg bg-Blue hover:bg-Green"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/404"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </NavLink>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

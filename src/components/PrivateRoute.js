import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? (
    children
  ) : (
    <Navigate
      to="/login"
      replace={true}
      state={{ errorMsg: "You must login to access this page" }}
    />
  );
};

export default PrivateRoute;

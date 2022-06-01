import { React } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "./contex";
const commonStyle = {
  backgroundColor: "grey",
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
function Home() {
  const { isLoggedIn, setisLoggedIn } = useAuthContext();

  const onClick = () => {
    setisLoggedIn(false);
  };
  return (
    <div style={commonStyle}>
      <button onClick={onClick}>log out</button>
    </div>
  );
}
function Login() {
  const navigate = useNavigate();
  const { isLoggedIn, setisLoggedIn } = useAuthContext();
  const onClick = () => {
    setisLoggedIn(true);
    navigate("/home");
  };
  return (
    <div style={commonStyle}>
      <button onClick={onClick}>login</button>
    </div>
  );
}

function Profile() {
  return <div style={commonStyle}>Profile</div>;
}

function Error() {
  return <div style={commonStyle}>Error</div>;
}

function Layout() {
  return <Outlet />;
}

export { Home, Login, Profile, Error, Layout };

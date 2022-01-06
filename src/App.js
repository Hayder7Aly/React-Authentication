import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginButton from "./components/LoginButton";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading ...</div>;
  return (
    <>
      <h1>Hello, Auth0</h1>
      <LoginButton />
      <Logout />
      <Profile />
    </>
  );
};

export default App;

import { React, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const currUser = authService.currentUser;
  console.log(currUser);

  const [isLoggedIn, setIsLoggedIn] = useState(currUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Fwitter</footer>
    </>
  );
}

export default App;

import React, { useState } from "react";

const LoginContext = React.createContext({
  loginState: false,
  changeLoginState: () => {},
});

export const LoginProvider = ({ children }) => {
  const [loginState, setLoginState] = useState(false);

  const changeLoginState = () => {
    setLoginState((prev) => !prev);
  };

  return (
    <LoginContext.Provider value={{ loginState, changeLoginState }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;

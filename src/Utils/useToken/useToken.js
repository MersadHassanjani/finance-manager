import { useState } from "react";
// import { atom, useRecoilState } from "recoil";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("fm-token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };
  const [token, setToken] = useState(getToken() || "");

  // const [hasToken, setHasToken] = useState(token.length() ? true : false);

  const saveToken = (userToken) => {
    localStorage.setItem("fm-token", JSON.stringify(userToken));
    setToken(userToken);
    // localStorage.setItem("fm-token", JSON.stringify(userToken));
    // setToken(userToken.token);
    // console.log(
    //   "useToken_ setting token to:",
    //   userToken,
    //   "\nhastoken:",
    //   hasToken
    // );
    // setHasToken(token.length ? true : false);
    // console.log(
    //   "useToken_ setting hasToken to:",
    //   token.length ? true : false,
    //   Boolean(token),
    //   "hasToken:",
    //   hasToken
    // );
  };
  // const emptyToken = () => {
  //     return !(token === "")
  // }

  return {
    setToken: saveToken,
    token,
    // hasToken,
  };
}

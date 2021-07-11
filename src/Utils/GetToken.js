const getToken = () => {
  const tokenStr = localStorage.getItem("fm-token");
  const token = JSON.parse(tokenStr);
  return token;
};
export default getToken;

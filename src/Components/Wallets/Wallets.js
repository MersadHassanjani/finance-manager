// import "./Wallets.css";

const Wallets = () => {
  const lis = [
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    11,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
  ];
  return (
    <div className="Wallet">
      {lis.map((item) => (
        <h2>List of wallets</h2>
      ))}
    </div>
  );
};

export default Wallets;

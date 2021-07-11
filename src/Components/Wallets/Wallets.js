// import "./Wallets.css";
import TransactionListItem from "../TransactionList/TransactionListItem";
import TransactionList from "../TransactionList/TransactionList";
import WalletListItem from "../WalletList/WalletListItem";
import WalletList from "../WalletList/WalletList";

const Wallets = () => {
  const lis = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1,
  ];
  return (
    <div className="Wallet">
      {/* <TransactionListItem
        itemKey="11"
        itemType="-"
        itemAmount="1000"
        itemDate="7/10/2021"
        itemDescription="dadam be mammad"
        itemCategoryList={[
          { title: "newtag", color: "white", background_color: "#36a832" },
          { title: "ag", color: "white", background_color: "red" },
          { title: "nil", background_color: "yellow" },
        ]}
      /> */}
      {/* <WalletListItem itemKey="11" itemName="yoyowallet" itemColor="red" /> */}
      {<h1 className="WalletList-H1 farsiestb">مدیریت کیف پول</h1>}

      <WalletList
        items={[
          {
            itemKey: "1",
            itemName: "کیف صادرات",
            itemColor: "lightblue",
            itemDate: "7/10/2021",
          },
          {
            itemKey: "2",
            itemName: "کیف تجارت",
            itemColor: "yellow",
            itemDate: "7/10/2021",
          },
          {
            itemKey: "3",
            itemName: "کیف ثامن",
            itemColor: "blueviolet",
            itemDate: "7/10/2021",
          },
          {
            itemKey: "4",
            itemName: "کیف ملت",
            itemColor: "crimson",
            itemDate: "7/10/2021",
          },
        ]}
      />
      <div className="pt-5"> </div>
      {/* <TransactionList
        items={[
          {
            itemKey: "11",
            itemType: "-",
            itemAmount: "1000",
            itemDate: "7/10/2021",
            itemDescription: "dadam be mammad",
            itemCategoryList: [
              { title: "newtag", color: "white", background_color: "#36a832" },
              { title: "ag", color: "white", background_color: "red" },
              { title: "nil", background_color: "yellow" },
            ],
          },
          {
            itemKey: "11",
            itemType: "-",
            itemAmount: "1000",
            itemDate: "7/10/2021",
            itemDescription: "dadam be mammad",
            itemCategoryList: [
              { title: "newtag", color: "white", background_color: "#36a832" },
              { title: "ag", color: "white", background_color: "red" },
              { title: "nil", background_color: "yellow" },
            ],
          },
          {
            itemKey: "11",
            itemType: "-",
            itemAmount: "1000",
            itemDate: "7/10/2021",
            itemDescription: "dadam be mammad",
            itemCategoryList: [
              { title: "newtag", color: "white", background_color: "#36a832" },
              { title: "ag", color: "white", background_color: "red" },
              { title: "nil", background_color: "yellow" },
            ],
          },
          {
            itemKey: "11",
            itemType: "-",
            itemAmount: "1000",
            itemDate: "7/10/2021",
            itemDescription: "dadam be mammad",
            itemCategoryList: [
              { title: "newtag", color: "white", background_color: "#36a832" },
              { title: "ag", color: "white", background_color: "red" },
              { title: "nil", background_color: "yellow" },
            ],
          },
          {
            itemKey: "11",
            itemType: "-",
            itemAmount: "1000",
            itemDate: "7/10/2021",
            itemDescription: "dadam be mammad",
            itemCategoryList: [
              { title: "newtag", color: "white", background_color: "#36a832" },
              { title: "ag", color: "white", background_color: "red" },
              { title: "nil", background_color: "yellow" },
            ],
          },
          {
            itemKey: "11",
            itemType: "-",
            itemAmount: "1000",
            itemDate: "7/10/2021",
            itemDescription: "dadam be mammad",
            itemCategoryList: [
              { title: "newtag", color: "white", background_color: "#36a832" },
              { title: "ag", color: "white", background_color: "red" },
              { title: "nil", background_color: "yellow" },
            ],
          },
        ]}
      /> */}
      {/* {lis.map((item) => (
        <h2>List of wallets</h2>
      ))} */}
    </div>
  );
};

export default Wallets;

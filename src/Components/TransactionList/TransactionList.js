import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useToken from "../../Utils/useToken/useToken";
import "./TransactionList.css";
import TransactionListItem from "./TransactionListItem";
const axios = require("axios");

const TransactionList = () => {
  const { id: walletId } = useParams();
  const { token, setToken } = useToken();
  const [items, setItems] = useState([]);

  const fetchTransactions = async (token) => {
    // try {
    //   const result = await axios.post(`localhost:3333/wallet/${walletId}`, {
    //     AUTH_TOKEN: token,
    //   });
    //   console.log("_fetchTransactions result: \t" + result);
    //   return result.data.json()["transactions"];
    // } catch (err) {
    //   return [];
    // }

    return [
      {
        itemKey: "11",
        itemType: "-",
        itemAmount: "1000",
        itemDate: "7/10/2021",
        itemDescription: "dadam be mammad",
        itemCategoryList: [
          {
            title: "newtag",
            color: "white",
            background_color: "#36a832",
          },
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
          {
            title: "newtag",
            color: "white",
            background_color: "#36a832",
          },
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
          {
            title: "newtag",
            color: "white",
            background_color: "#36a832",
          },
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
          {
            title: "newtag",
            color: "white",
            background_color: "#36a832",
          },
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
          {
            title: "newtag",
            color: "white",
            background_color: "#36a832",
          },
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
          {
            title: "newtag",
            color: "white",
            background_color: "#36a832",
          },
          { title: "ag", color: "white", background_color: "red" },
          { title: "nil", background_color: "yellow" },
        ],
      },
    ];
  };

  useEffect(async () => {
    fetchTransactions().then((res) => setItems(res));
  }, []);

  return (
    <div
      id="TransactionList"
      className="list-group mt-3 mb-5 TransactionList-container borderless px-2 py-2"
    >
      <h1>{walletId}</h1>
      {items &&
        items.map((item) => (
          <TransactionListItem
            itemKey={item.itemKey}
            itemType={item.itemType}
            itemAmount={item.itemAmount}
            itemDate={item.itemDate}
            itemDescription={item.itemDescription}
            itemCategoryList={item.itemCategoryList}
          />
        ))}
    </div>
  );
};

export default TransactionList;

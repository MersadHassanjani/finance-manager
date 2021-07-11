import { useEffect } from "react";
import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useCallback } from "react";
import { useParams } from "react-router-dom";
import useToken from "../../Utils/useToken/useToken";
import "./TransactionList.css";
import TransactionListItem from "./TransactionListItem";
import getToken from "../../Utils/GetToken";
const axios = require("axios");

const TransactionList = () => {
  const { id: walletId } = useParams();
  const [items, setItems] = useState([]);
  const [rer, setRer] = useState(true);
  const forcerer = () => setRer(!rer);

  const fetchTransactions = async () => {
    const token = getToken();
    // walletId already hast az params
    let ret = [];
    try {
      const result = await axios.post(`localhost:3333/transactions/gettrx`, {
        AUTH_TOKEN: token,
        walletId: walletId,
      });
      console.log("_fetchTransactions result: \t" + result);
      ret = result.data.json()["transactions"];
    } catch (err) {
      console.log(`Error Fetching transactions: ${err}`);
    }

    ret = ret.map((trx) => {
      let newTrx = { ...trx };
      const dt = newTrx["itemDate"].split("T");
      newTrx["itemDate"] = dt[0];
      newTrx["itemTime"] = dt[1];
      return newTrx;
    });

    return [
      {
        itemKey: "11",
        itemType: "-",
        itemAmount: "1000",
        itemDate: "7/10/2021",
        itemTime: "10:48",
        itemDescription:
          "dadam be mammad dadam be mammad dadam be mammad dadam be mammad dadam be mammad dadam be mammad dadam be mammad dadam be mammad dadam be mammad ",
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
        itemAmount: "900",
        itemDate: "7/10/2021",
        itemTime: "10:48",
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
        itemType: "+",
        itemAmount: "1250",
        itemDate: "7/10/2021",
        itemTime: "10:48",
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
        itemAmount: "850",
        itemDate: "7/10/2021",
        itemTime: "10:48",
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
        itemType: "+",
        itemAmount: "5000",
        itemDate: "7/10/2021",
        itemTime: "10:48",
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
        itemAmount: "1300",
        itemDate: "7/10/2021",
        itemTime: "10:48",
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
    console.log("renderrrrr");
  }, []);

  const history = useHistory();
  const handleNewTrx = useCallback(
    () => history.push(`/txe/${walletId}/new`),
    [history]
  );

  return (
    <div
      id="TransactionList"
      className="list-group mt-3 mb-5 TransactionList-container borderless px-2 py-2"
    >
      {/* <h1>{walletId}</h1> */}
      <div className="container-fluid ">
        <div className="row justify-content-around mb-3">
          <div
            className="btn btn-dark farsiest col-4"
            onClick={() => {
              forcerer();
            }}
          >
            به روز رسانی
          </div>
          <div
            className="btn farsiest col-4 TransactionList-newBtn"
            onClick={() => {
              handleNewTrx();
              forcerer();
            }}
          >
            افزودن تراکنش جدید
          </div>
        </div>
      </div>
      {items &&
        items.map((item) => (
          <TransactionListItem
            parentrerender={forcerer}
            itemKey={item.itemKey}
            itemType={item.itemType}
            itemAmount={item.itemAmount}
            itemDate={item.itemDate}
            itemTime={item.itemTime}
            itemDescription={item.itemDescription}
            itemCategoryList={item.itemCategoryList}
            itemWalletId={walletId}
          />
        ))}
    </div>
  );
};

export default TransactionList;

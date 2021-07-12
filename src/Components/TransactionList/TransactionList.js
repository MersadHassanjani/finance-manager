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
  const [sum, setSum] = useState(0);
  const [plus, setPlus] = useState(0);
  const [minus, setMinus] = useState(0);
  const [value, setValue] = useState(0);
  const forceUpdate = () => {
    setValue(value + 1);
  };
  const forcerer = () => {
    console.log(rer + "rrrrrrrrrrrrrrrrrrrrrr");
    setRer(!rer);
    console.log(rer + "rrrrrrrrrrrrrrrrrrrrrr");
    console.log(`walletid ${walletId}`);
    forceUpdate();
    console.log(`keys: [${items.forEach((value) => value.itemKey)}]`);
  };
  const token = getToken();
  const handleDeleteOperation = (itemKeyToDelete) => {
    try {
      axios.post("http://localhost:5000/transactions/deletetrx", {
        token,
        trxid: itemKeyToDelete,
      });
      setItems(items.filter((item) => item.itemKey != itemKeyToDelete));
    } catch (err) {
      console.log(`TrxDelete error:\n${err}`);
    }
  };

  const fetchTransactions = async () => {
    const token = getToken();
    // walletId already hast az params
    let ret = [];
    try {
      const msgBody = {
        token,
        walletid: walletId,
      };
      console.log(`Reqed with ${JSON.stringify(msgBody)}`);
      const result = await axios.post(
        `http://localhost:5000/transactions/gettrx`,
        msgBody
      );
      console.log("_fetchTransactions result: \t" + result);
      ret = result.data["transactions"];
      console.log("_fetchTransactions rettt: \t" + ret);
    } catch (err) {
      console.log(`Error Fetching transactions: ${err}`);
    }
    /*
format
newtrx {"trxid":1,"amount":"999","trxtype":"+","walletid":1,"description":"desc001","trxdate":"7/12/2021T00:48"}
*/
    // return ret;
    if (ret)
      ret = ret.map(
        ({ trxid, amount, trxtype, walletid, description, trxdate }) => {
          let newTrx = {
            itemKey: trxid,
            itemAmount: amount,
            itemType: trxtype,
            itemDescription: description,
            itemCategoryList: [],
          };
          console.log(`newtrx ${JSON.stringify(newTrx)}`);
          const dt = trxdate.split("T");
          newTrx["itemDate"] = dt[0];
          newTrx["itemTime"] = dt[1];
          newTrx["itemCategoryList"] = [];
          return newTrx;
        }
      );
    return ret;
  };

  useEffect(() => {
    fetchTransactions().then((res) => setItems(res));
    console.log("TrxList render");
  }, []);
  useEffect(() => {
    // setTimeout(() => {

    // }, 500);
    let s = 0;
    let p = 0;
    let m = 0;
    for (const item of items) {
      if (item.itemType === "+") {
        s += parseInt(item.itemAmount);
        p += 1;
      }
      if (item.itemType === "-") {
        s -= parseInt(item.itemAmount);
        m += 1;
      }
      // console.log(`fhhhh ${item.itemType} ${item.itemAmount}`);
    }
    setSum(s);
    setPlus(p);
    setMinus(m);
  }, [items]);

  const history = useHistory();
  const handleNewTrx = useCallback(
    () => history.push(`/txa/${walletId}`),
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
          <div className="btn btn-dark farsiest col-4" onClick={forcerer}>
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
        <div className="row justify-content-around mb-3">
          <h3 className="TransactionList-H1 farsi">{`موجودی: ${sum}`}</h3>
          <h3 className="TransactionList-H1 farsi">{`واریزی: ${plus}`}</h3>
          <h3 className="TransactionList-H1 farsi">{`برداشتی: ${minus}`}</h3>
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
            itemDeleteFunction={() => handleDeleteOperation(item.itemKey)}
          />
        ))}
      <h6 style={{ visibility: "hidden" }}>{value}</h6>
    </div>
  );
};

export default TransactionList;

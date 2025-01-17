import "./TransactionEditor.css";
import { Redirect, useHistory } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import getToken from "../../Utils/GetToken";
import { useCallback } from "react";
import { BiFastForwardCircle } from "react-icons/bi";
const TransactionEditor = () => {
  const { trxid: trxId, wallid: wallId } = useParams();
  const history = useHistory();

  const axios = require("axios");
  const [filled, setFilled] = useState(false);
  const getTrxData = async () => {
    const token = getToken();
    // walletId already hast az params
    let ret = [];
    try {
      const msgBody = {
        token,
        walletid: wallId,
      };
      console.log(`Reqed with ${JSON.stringify(msgBody)}`);
      const result = await axios.post(
        `http://localhost:5000/transactions/gettrx`,
        msgBody
      );
      console.log("_fetchTransactions result: \t" + JSON.stringify(result));
      ret = result.data["transactions"];
      console.log("_fetchTransactions rettt: \t" + JSON.stringify(ret));
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
            itemWalletId: walletid,
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
    console.log("_fetchTransactions end rettt1: \t" + JSON.stringify(ret));
    ret = ret.filter(
      (element) => element.itemKey == trxId && element.itemWalletId == wallId
    );
    console.log("_fetchTransactions end rettt2: \t" + JSON.stringify(ret));
    return ret[0];
  };

  const handleGoBack = useCallback(
    () => history.push(`/wallets/${wallId}`),
    [history]
  );

  console.log(`tttttttt`);
  let trxData;

  getTrxData().then((res) => {
    trxData = { ...res };
    trxData = Object.assign(res);
    console.log(`\n\n\nresres ${JSON.stringify(res)}`);
    console.log(`\n\n\n trxData innn ${JSON.stringify(trxData)}`);
  });
  console.log(
    `\n\n\n\ntrxData: ${JSON.stringify(trxData)} \n type: ${typeof trxData}`
  );

  const [trxType, setTrxType] = useState("+");
  const [amount, setAmount] = useState(0);
  const [desc, setDesc] = useState("");
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(-1);
  const [minute, setMinute] = useState(-1);

  setTimeout(() => {
    if (!filled) {
      console.log("ggffg");
      const trxD = trxData["itemDate"].split("/");
      const trxT = trxData["itemTime"].split(":");
      setTrxType(trxData.itemType);
      setAmount(trxData.itemAmount);
      setDesc(trxData.itemDescription);
      setYear(trxD[2]);
      setMonth(trxD[0]);
      setDay(trxD[1]);
      setHour(trxT[0]);
      setMinute(trxT[1]);
      setFilled(true);
    }
  }, 1000);

  const handleSubmit = () => {
    let lis = [];
    let err = false;
    if (year < 1) {
      lis.push("Year must be positive. \n");
      err = true;
    }
    if (month > 12 || month < 1) {
      lis.push("Month must be between 1 and 12. \n");
      err = true;
    }
    if (day > 31 || day < 1) {
      lis.push("Day must be between 1 and 31. \n");
      err = true;
    }
    if (hour > 23 || hour < 0) {
      lis.push("Hour must be between 0 and 23. \n");
      err = true;
    }
    if (minute > 59 || minute < 0) {
      lis.push("Minute must be between 0 and 59. \n");
      err = true;
    }
    if (!desc) {
      lis.push("Description cannot be empty. \n");
      err = true;
    }
    if (err) {
      alert(`Bad input! \n ${lis}`);
      return false;
    }

    // If valid inputs

    const axios = require("axios");
    const token = getToken();

    try {
      axios.post("http://localhost:5000/transactions/edittrx", {
        token,
        trxid: trxId,
        trxdate: `${month}/${day}/${year}T${hour}:${minute}`,
        trxtype: trxType,
        amount: amount > 0 ? amount : amount * -1,
        description: desc,
        walletid: wallId,
        catlist: [],
      });
    } catch (err) {
      console.log(`TrxEdit error:\n${err}`);
    }
    return true;
  };
  return (
    <div
      id="TransactionEditor"
      className="container-fluid justify-content-center "
    >
      <div className="TransactionEditor-container mx-auto">
        <h1 className="TransactionEditor-H3 farsiestb">اطلاعات تراکنش</h1>
        <form className="TransactionEditor-form">
          {/* <h3 className="TransactionEditor-H3 farsiest ">title</h3> */}

          <div className="form-group TransactionEditor-formInputGroup">
            <label className="TransactionEditor-Label farsiest">مبلغ</label>
            <input
              type="text"
              className="form-control farsiest ltr tc"
              onChange={(e) => {
                setTrxType(parseInt(e.target.value) > 0 ? "+" : "-");
                console.log(parseInt(e.target.value));
                setTimeout(() => {
                  console.log(trxType);
                }, 500);
                setAmount(parseInt(e.target.value));
              }}
              value={amount}
              placeholder="مبلغ تراکنش را وارد کنید"
            />
          </div>
          {false && (
            <select
              className="form-select farsiest"
              name="TransactionEditor-typeSelectorName"
              id="TransactionEditor-typeSelectorId"
              aria-label="Default select trx type"
              onChange={(e) => {
                console.log(e);
                console.log(trxType);
                setTrxType(e.target.value);
                console.log(trxType);
              }}
            >
              <option className="farsiest" value="-">
                {/*Should be minus */}
                واریزی
              </option>
              <option className="farsiest" value="+">
                {/*Should be pluse */}
                برداشتی
              </option>
            </select>
          )}

          <div className="form-group TransactionEditor-formInputGroup">
            <label className="TransactionEditor-Label farsiest">توضیحات</label>
            <textarea
              onChange={(e) => setDesc(e.target.value)}
              className="form-control farsiest tc"
              value={desc}
              placeholder="توضیحات را وارد کنید"
            />
          </div>

          <div className="container-fluid">
            <div className="row">
              <label className="TransactionEditor-Label farsiest">
                تاریخ تراکنش
              </label>
              <div className=" col-4  form-group TransactionEditor-formInputGroup ">
                <input
                  type="number"
                  className=" form-control farsiest tc"
                  min="1"
                  max="31"
                  value={day}
                  onChange={(e) => setDay(parseInt(e.target.value))}
                  placeholder="روز"
                />
              </div>
              <div className=" col-4  form-group TransactionEditor-formInputGroup ">
                <input
                  type="number"
                  min="1"
                  max="12"
                  value={month}
                  onChange={(e) => setMonth(parseInt(e.target.value))}
                  className=" form-control farsiest tc"
                  placeholder="ماه"
                />
              </div>
              <div className=" col-4  form-group TransactionEditor-formInputGroup ">
                <input
                  type="number"
                  min="1970"
                  value={year}
                  onChange={(e) => setYear(parseInt(e.target.value))}
                  className=" form-control farsiest tc"
                  placeholder="سال"
                />
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row ju">
              <label className="TransactionEditor-Label farsiest">
                ساعت تراکنش
              </label>
              <div className=" col-6  form-group TransactionEditor-formInputGroup ">
                <input
                  type="number"
                  min="0"
                  max="59"
                  value={minute}
                  onChange={(e) => setMinute(parseInt(e.target.value))}
                  className=" form-control farsiest tc"
                  placeholder="دقیقه"
                />
              </div>
              <div className=" col-6  form-group TransactionEditor-formInputGroup ">
                <input
                  type="number"
                  min="0"
                  max="23"
                  value={hour}
                  onChange={(e) => setHour(parseInt(e.target.value))}
                  className=" form-control farsiest tc"
                  placeholder="ساعت"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block farsiest TransactionEditor-Btn
          animate__animated animate__pulse animate__infinite animate__slower
          mx-3 "
            onClick={(e) => {
              e.preventDefault();
              // if (handleSubmit()) history.goBack();
              if (handleSubmit()) handleGoBack();
            }}
          >
            ثبت
          </button>
          <button
            type="submit"
            className="btn  btn-lg btn-block farsiest TransactionEditor-Btn
          animate__animated animate__pulse animate__infinite animate__slower
          mx-3"
            onClick={(e) => {
              e.preventDefault();
              // handleSubmit();
              history.goBack();
            }}
          >
            انصراف
          </button>
        </form>
      </div>
      <div style={{ height: "0.2rem" }}></div>
    </div>
  );
};

export default TransactionEditor;

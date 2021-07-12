import "./TransactionAdder.css";
import { Redirect, useHistory } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import getToken from "../../Utils/GetToken";
import { BiFastForwardCircle } from "react-icons/bi";
const TransactionEditor = () => {
  const { wallid: wallId } = useParams();
  const history = useHistory();
  const axios = require("axios");
  const [filled, setFilled] = useState(false);

  const [trxType, setTrxType] = useState("+");
  const [amount, setAmount] = useState(0);
  const [desc, setDesc] = useState("");
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(-1);
  const [minute, setMinute] = useState(-1);

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
      axios.post("http://localhost:5000/transactions/addtrx", {
        token,
        trxdate: `${month}/${day}/${year}T${hour}:${minute}`,
        trxtype: trxType,
        amount: amount > 0 ? amount : amount * -1,
        description: desc,
        walletid: wallId,
        catlist: [],
      });
      return true;
    } catch (err) {
      console.log(`TrxAdd error:\n${err}`);
    }
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
                  onChange={(e) => setDay(parseInt(e.target.value))}
                  placeholder="روز"
                />
              </div>
              <div className=" col-4  form-group TransactionEditor-formInputGroup ">
                <input
                  type="number"
                  min="1"
                  max="12"
                  onChange={(e) => setMonth(parseInt(e.target.value))}
                  className=" form-control farsiest tc"
                  placeholder="ماه"
                />
              </div>
              <div className=" col-4  form-group TransactionEditor-formInputGroup ">
                <input
                  type="number"
                  min="1970"
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
              if (handleSubmit()) history.goBack();
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

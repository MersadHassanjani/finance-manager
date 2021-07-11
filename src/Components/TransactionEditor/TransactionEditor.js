import "./TransactionEditor.css";
import { useState } from "react";
const TransactionEditor = () => {
  const [trxType, setTrxType] = useState("");
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
                  placeholder="روز"
                />
              </div>
              <div className=" col-4  form-group TransactionEditor-formInputGroup ">
                <input
                  type="number"
                  min="1"
                  max="12"
                  className=" form-control farsiest tc"
                  placeholder="ماه"
                />
              </div>
              <div className=" col-4  form-group TransactionEditor-formInputGroup ">
                <input
                  type="number"
                  min="1970"
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
                  className=" form-control farsiest tc"
                  placeholder="دقیقه"
                />
              </div>
              <div className=" col-6  form-group TransactionEditor-formInputGroup ">
                <input
                  type="number"
                  min="0"
                  max="23"
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

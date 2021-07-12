import { Redirect, useHistory } from "react-router-dom";
import { useCallback } from "react";
import "./TransactionListItem.css";
import CategoryBadge from "../Category/CategoryBadge/CategoryBadge";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { IconContext } from "react-icons";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
// import useToken from "../../Utils/useToken/useToken";
import getToken from "../../Utils/GetToken";

// import TransactionEditor from "../TransactionEditor/TransactionEditor";
const TransactionListItem = ({
  itemKey,
  itemType,
  itemAmount,
  itemDate,
  itemTime,
  itemDescription,
  itemCategoryList,
  itemWalletId,
  parentrerender: forcerer,
  itemDeleteFunction,
}) => {
  const axios = require("axios");
  const history = useHistory();

  const handleEditClick = useCallback(
    () => history.push(`/txe/${itemWalletId}/${itemKey}`),
    [history]
  );

  const token = getToken();
  // const handleDeleteOperation = () => {
  //   try {
  //     axios.post("http://localhost:5000/transactions/deletetrx", {
  //       token,
  //       trxid: itemKey,
  //     });
  //   } catch (err) {
  //     console.log(`TrxDelete error:\n${err}`);
  //   }
  // };
  const handleDeleteClick = () => {
    // console.log("fffffffffffffffff");
    confirmAlert({
      title: "Confirm Transaction Deletion",
      message: "Are you sure to delete this transaction?",
      buttons: [
        {
          label: "Yes",
          onClick: () => alert("Click Yes"),
        },
        {
          label: "No",
          onClick: () => alert("Click No"),
        },
      ],
      customUI: ({ onClose }) => {
        return (
          <div className="TransactionListItem-confirm-custom-ui">
            <h1 className="farsiest">حذف تراکنش</h1>
            <p className="farsiest">تراکنش حذف شود؟</p>
            <button className="farsiest btn" onClick={onClose}>
              انصراف
            </button>
            <button
              className="farsiest btn btn-danger"
              onClick={() => {
                itemDeleteFunction();
                setTimeout(() => forcerer(), 200);
                onClose();
              }}
            >
              حذف تراکنش
            </button>
          </div>
        );
      },
    });
  };
  return (
    <li key={itemKey} id="TransactionListItem-id" className="ltr my-2">
      {/* <div className="WalletListItem-container">
        <div className="ltr row">
          <span className="col-1">
            {itemType}
            {itemAmount}
          </span>
          <span className="col-1 float-right">{itemDate}</span>
        </div>
        <div className="ltr">
          {itemType} {itemAmount} {itemDate}
        </div>
      </div> */}

      <div className="list-group-item list-group-item-action flex-column align-items-start TransactionListItem-container">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-1 h-100 justify-content-between TransactionListItem-txBtnGroup">
              <IconContext.Provider
                value={{ color: "blue", size: "30px" }}
                className="TransactionListItem-txBtn"
              >
                <div
                  className="TransactionListItem-txBtn"
                  onClick={handleEditClick}
                >
                  <BiEdit />
                </div>
                <div
                  className="TransactionListItem-txBtn"
                  onClick={handleDeleteClick}
                >
                  <MdDelete />
                </div>
              </IconContext.Provider>
            </div>

            <div className="col-1"></div>

            <div className="col-2 h-100 TransactionListItem-midColumn">
              <h2
                className={`mb-1 ${
                  itemType === "+" ? "itemAmountGreen" : "itemAmountRed"
                }`}
              >
                {itemType}
                {itemAmount}
              </h2>
              <h5 className=" px-2 py-2 mx-auto my-auto TransactionListItem-datetime">
                {itemDate}
              </h5>
              <h5 className=" px-2 py-2 mx-auto my-auto TransactionListItem-datetime">
                {itemTime}
              </h5>
            </div>

            <div className="col-8">
              {" "}
              <h4 className="mb-4 farsi">{itemDescription}</h4>
              <div className="mt-4">
                {itemCategoryList.map((cat) => (
                  <CategoryBadge
                    className="mx-2"
                    title={cat.title}
                    color={cat.color}
                    background_color={cat.background_color}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default TransactionListItem;

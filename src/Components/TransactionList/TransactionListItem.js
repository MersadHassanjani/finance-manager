import "./TransactionListItem.css";
import CategoryBadge from "../Category/CategoryBadge/CategoryBadge";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { IconContext } from "react-icons";
const TransactionListItem = ({
  itemKey,
  itemType,
  itemAmount,
  itemDate,
  itemTime,
  itemDescription,
  itemCategoryList,
}) => {
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
            <div className="col-1 h-100 justify-content-between ">
              <IconContext.Provider
                value={{ color: "blue", size: "30px" }}
                className="TransactionListItem-txBtn"
              >
                <div className="TransactionListItem-txBtn">
                  <BiEdit />
                </div>
                <div className="TransactionListItem-txBtn">
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
              <h4 className="mb-4">{itemDescription}</h4>
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

import "./TransactionListItem.css";
import CategoryBadge from "../Category/CategoryBadge/CategoryBadge";
const TransactionListItem = ({
  itemKey,
  itemType,
  itemAmount,
  itemDate,
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
        <div className="container">
          <div className="row">
            <div className="col-1">
              <div className="column justify-items-between">
                <div>Edit</div>
                <div>Remove</div>
              </div>
            </div>
            <div className="col-11">
              <div className="d-flex w-100 justify-content-between ">
                <h2
                  className={`mb-1 ${
                    itemType === "+" ? "itemAmountGreen" : "itemAmountRed"
                  }`}
                >
                  {itemType}
                  {itemAmount}
                </h2>
                {/* <small className="text-muted">{itemDate}</small> */}
                <h4 className="px-2 py-2 TransactionListItem-date">
                  {itemDate}
                </h4>
              </div>
              <h4 className="mb-4">{itemDescription}</h4>
              {/* <small className="text-muted">{}</small> */}
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

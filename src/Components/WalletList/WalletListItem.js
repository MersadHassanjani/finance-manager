import "./WalletListItem.css";
import { Redirect, useHistory } from "react-router-dom";
import { useCallback } from "react";
const WalletListItem = ({ itemKey, itemName, itemColor, itemDate }) => {
  const history = useHistory();
  const handleOnClick = useCallback(
    () => history.push(`/wallets/${itemKey}`),
    [history]
  );
  return (
    <li key={itemKey} id="WalletListItem-id" className="ltr my-2">
      <div
        className="list-group-item list-group-item-action flex-column align-items-start WalletListItem-container"
        style={{
          background: `linear-gradient(45deg, ${itemColor} 0%, rgba(0, 0, 0, 0.02) 40%)`,
        }}
      >
        <div className="row">
          <h4 className="col-2 ms-auto px-2 mb-0 WalletListItem-date">
            {itemDate}
          </h4>
        </div>
        <div className="d-flex w-100 justify-content-center">
          <h1
            className={`mb-3 farsiestb WalletListItem-Name px-5`}
            onClick={handleOnClick}
          >
            {itemName}
          </h1>
          {/* <h4 className="px-2 py-2 WalletListItem-date">{itemDate}</h4> */}
        </div>
        {/* <h4 className="mb-4">{itemDescription}</h4> */}
        {/* <small className="text-muted">{}</small> */}
      </div>
    </li>
  );
};

export default WalletListItem;

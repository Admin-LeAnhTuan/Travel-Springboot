import React from "react";
import PaymentItem from "./PaymentItem.tsx";

const PaymentsList = ({ payments }) => {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              id="transaction_id"
              placeholder="Transaction ID..."
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              id="buyer"
              placeholder="Buyer..."
            />
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              id="tour"
              placeholder="Tour Name..."
            />
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Transaction ID</th>
              <th scope="col">Amount</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              {/* <th scope="col">Buyer</th> */}
              <th scope="col">Tour</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {payments.map((payment: any, index: number) => (
              <PaymentItem payment={payment}></PaymentItem>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PaymentsList;

import React, { useState } from "react";

const PaymentItem = ({ payment }) => {
  const [confirmPayment, setConfirmPayment] = useState(false);
  const [confirmCancelPayment, setConfirmCancelPayment] = useState(false);

  let statusText = "";
  let statusClass = "";
  if (payment.status == "1") {
    statusText = "Canceled";
    statusClass = "table-danger";
  } else if (payment.status == "0") {
    statusText = "Deposit";
    statusClass = "table-primary";
  } else if (payment.status == "2") {
    statusText = "Success";
    statusClass = "table-success";
  }

  const handlePaid = (id: any) => {
    window.location.reload();
    // dispatch(paidPayment(id) as unknown as AnyAction);
  };
  const handleCancel = (id: any) => {
    window.location.reload();

    // dispatch(cancelPayment(id) as unknown as AnyAction);
  };
  return (
    <>
      <tr>
        <th scope="row">{payment.transactionId} </th>
        <td>{payment.amount}K </td>
        <td>{payment.description}</td>
        <td>{payment.quantity}</td>
        {/* <td>{payment.userId}</td> */}
        <td>{payment.tour.title}</td>
        <td className="d-flex gap-3 justify-content-center">
          <button
            type="button"
            onClick={() => setConfirmPayment(true)}
            className="btn btn-success"
            disabled={payment.status != "0"}
          >
            Paid
          </button>

          <div
            className={
              "position-fixed top-0 bottom-0 animation-popup background-popup index-top" +
              (confirmPayment ? " active" : "")
            }
            tabIndex={-1}
            style={{ left: "0", right: "0" }}
          >
            <div
              className={
                "modal-dialog mt-5 animation-popup background-popup index-top" +
                (confirmPayment ? " active" : "")
              }
              style={{ backgroundColor: "#fff", maxWidth: "480px" }}
            >
              <div className="modal-content">
                <div className="modal-header p-4">
                  <h5 className="modal-title text-default">
                    Are your received enough money ?
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setConfirmPayment(false)}
                  ></button>
                </div>
                <div className="modal-body p-4 border-top text-default text-initial">
                  {`Have you received enough money? Total is: `}
                  {/* <strong>{needPay}</strong> */}
                </div>
                <div className="modal-footer p-4 border-top d-flex justify-content-evenly">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={(e) => setConfirmPayment(false)}
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      handlePaid(payment._id);
                    }}
                    type="button"
                    className="btn btn-success"
                  >
                    Paid
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              setConfirmCancelPayment(true);
            }}
            type="button"
            className="btn btn-danger"
            disabled={payment.status != "0"}
          >
            Cancel
          </button>
          <div
            className={
              "position-fixed top-0 bottom-0 animation-popup background-popup index-top" +
              (confirmCancelPayment ? " active" : "")
            }
            tabIndex={-1}
            style={{ left: "0", right: "0" }}
          >
            <div
              className={
                "modal-dialog mt-5 animation-popup background-popup index-top" +
                (confirmCancelPayment ? " active" : "")
              }
              style={{ backgroundColor: "#fff", maxWidth: "480px" }}
            >
              <div className="modal-content">
                <div className="modal-header p-4">
                  <h5 className="modal-title text-default">
                    Are you sure cancel this payment ?
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setConfirmCancelPayment(false)}
                  ></button>
                </div>
                <div className="modal-body p-4 border-top text-default text-start">
                  {`This tour will be cancel and can't revert`}
                </div>
                <div className="modal-footer p-4 border-top d-flex justify-content-evenly">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={(e) => setConfirmCancelPayment(false)}
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      handleCancel(payment._id);
                    }}
                    type="button"
                    className="btn btn-danger"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default PaymentItem;

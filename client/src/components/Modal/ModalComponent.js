import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { format } from "date-fns";

const TransactionModal = ({
  showModal,
  handleCloseModal,
  transactionsData,
}) => {
  console.log(transactionsData);
  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      id="customModal"
      tabIndex="-1"
      aria-labelledby="customModalLabel"
      aria-hidden="true"
      dialogClassName="custom-modal-dialog modal-dialog modal-xl"
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="customModalLabel"
          className="fs-5 fst-italic p-1 text-pink"
          style={{ fontWeight: "600" }}
        >
          Transaction Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        {transactionsData.map((transaction, index) => (
          <>
            <div className="row">
              <div className="col-md-6">
                <h6 className="py-1">
                  Account Id:-
                  <span className="text-secondary ps-2">
                    {transaction.account_id}
                  </span>
                </h6>
              </div>
              <div className="col-md-6">
                <h6 className="py-1">
                  Total Transactions:-
                  <span className="text-secondary ps-2">
                    {transaction.transaction_count}
                  </span>
                </h6>
              </div>
              <div className="col-md-6">
                <h6 className="py-1">
                  Start Date:-
                  <span className="text-secondary ps-2">
                    {format(
                      new Date(transaction.bucket_start_date),
                      "dd-MM-yyyy"
                    )}
                  </span>
                </h6>
              </div>
              <div className="col-md-6">
                <h6 className="py-1">
                  End Date:-
                  <span className="text-secondary ps-2">
                    {format(
                      new Date(transaction.bucket_end_date),
                      "dd-MM-yyyy"
                    )}
                  </span>
                </h6>
              </div>
              
            </div>

            <div className="table-responsive mt-4 shadow">
              <table className="table table-hover table-bordered">
                <thead className="table-head">
                  <tr>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Transaction Code</th>
                    <th>Symbol</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {transaction.transactions.map((t, index) => (
                    <tr key={index}>
                      <td style={{ minWidth: "100px" }}>
                        {format(new Date(t.date), "dd-MM-yyyy")}
                      </td>
                      <td>{t.amount}</td>
                      <td>{t.transaction_code}</td>
                      <td>{t.symbol}</td>
                      <td>{t.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          className="bg-pink border-0 px-5 mx-auto"
          onClick={handleCloseModal}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TransactionModal;

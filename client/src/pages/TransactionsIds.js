import React, { useState, useEffect } from "react";
import axios from "axios";
import TopNavbar from "../components/NavBar/Navbar";

const TransactionsIds = () => {
  const [TransactionsIds, setTransactionsIds] = useState([]);

  const getTransactionsIds = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:9090/transactions/get-transactions"
      );
      if (data) {
        setTransactionsIds(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(TransactionsIds);

  useEffect(() => {
    getTransactionsIds();
  }, []);

  return (
    <>
      <div>
        <TopNavbar />

        <div className=" m-5">
          <div className="table-responsive custom-shadow ">
            <table className="table table-hover table-bordered">
              <thead className="table-head">
                <tr className="my-3">
                  <th>#</th>
                  <th>Id</th>
                  <th>
                    All Account Ids which has made at least one transaction
                    below the amount 5000
                  </th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {TransactionsIds.map((l, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{l._id}</td>
                    <td>{l.account_id}</td>
                    <td>{l.transaction_count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionsIds;

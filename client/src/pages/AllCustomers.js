import React, { useState, useEffect } from "react";
import axios from "axios";
import TransactionModal from "../components/Modal/ModalComponent";
import TopNavbar from "../components/NavBar/Navbar";

const AllCustomers = () => {
  const [allCustomers, setAllCustomers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [transactionsInfo, setTransactionsInfo] = useState([]);

  const getAllCustomers = async () => {
    try {
      const { data } = await axios.get("http://localhost:9090/customers/get-customers");
      if (data) {
        setAllCustomers(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getTransactionsInfo = async (account) => {
    try {
      const { data } = await axios.get(`http://localhost:9090/transactions/get-transactionInfo/${account}`);
      if (data) {
        setTransactionsInfo(data.data);
        setShowModal(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    getAllCustomers();
  }, []);

  return (
    <>
      <div>
        <TopNavbar />
        <div className="customer-page">
          <div className="table-responsive custom-shadow">
            <table className="table table-hover table-bordered">
              <thead className="table-head">
                <tr className="my-3">
                  <th>#</th>
                  <th>Customers Name</th>
                  <th>Address</th>
                  <th>Accounts</th>
                </tr>
              </thead>
              <tbody>
                {allCustomers.map((customer, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td style={{minWidth:"150px"}}>{customer.name}</td>
                    <td style={{minWidth:"350px"}}>{customer.address}</td>
                    <td style={{minWidth:"100px"}}>
                      <select
                        className="border-0 w-100"
                        onChange={(event) => {
                          getTransactionsInfo(event.target.value);
                        }}
                      >
                        {customer.accounts.map((account, j) => (
                          <option key={j} value={account}>
                            {account}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <TransactionModal
            showModal={showModal}
            handleCloseModal={handleCloseModal}
            transactionsData={transactionsInfo}
          />
        </div>
      </div>
    </>
  );
};

export default AllCustomers;
import React, { useState, useEffect } from "react";
import axios from "axios";
import TopNavbar from "../components/NavBar/Navbar";

const AccountsProducts = () => {
  const [AccountsProducts, setAccountsProducts] = useState([]);

  const getAccountsProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:9090/accounts/get-accounts-products"
      );
      if (data) {
        setAccountsProducts(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(AccountsProducts);

  useEffect(() => {
    getAccountsProducts();
  }, []);

  return (
    <>
      <div>
        <TopNavbar />
        <div className=" m-5">
          <div className="table-responsive custom-shadow ">
            <table className="table table-hover table-bordered mb-0">
              <thead className="table-head">
                <tr className="my-3">
                  <th>All Products List: </th>  
                </tr>
              </thead>
              <tbody>
                {AccountsProducts.map((l, i) => (
                  <tr key={i}>
                    
                    <td>{l}</td>
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

export default AccountsProducts;

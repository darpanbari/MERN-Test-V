import accountsModel from "../models/accountsModel.js";

export const getAccountsProducts = async (req, res) => {
    try {
    const data = await accountsModel.distinct("products");
      console.log(data)
      if (data) {
        res.status(200).json({
          success: true,
          data: data,
          message: "Accounts Get Successfully",
        });
      }
    } catch (err) {
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  };
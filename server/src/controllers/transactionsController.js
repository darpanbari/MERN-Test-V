import transactionsModel from "../models/transactionsModel.js";

export const getTransactions = async (req, res) => {
  try {
    const data = await transactionsModel.aggregate([
      {
        $unwind: "$transactions",
      },
      {
        $match: {
          "transactions.amount": { $lt: 5000 },
        },
      },
      {
        $group: {
          _id: "$_id",
          account_id: { $first: "$account_id" },
          transaction_count: { $sum: 1 },
        },
      },
    ]);

    // console.log(data);

    if (data) {
      res.status(200).json({
        success: true,
        data: data,
        message: "Location Get Successfully",
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

export const getTransactionDetails = async (req, res) => {
  try {
    const accountID = req.params.account_id;

    const data = await transactionsModel.find({ account_id: accountID });

    if (data.length > 0) {
      res.status(200).json({
        success: true,
        data: data,
        message: "Transaction details fetched successfully",
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No data found for the given account id",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


// export const getTransactionDetails = async (req, res) => {
//   try {
//     const accountId = new mongoose.Types.ObjectId(req.params.account_id);
//     console.log(accountId)
//     const accountDetails = await accountsModel.aggregate([
//       {
//         $match: {
//           _id: accountId, // Match against the MongoDB _id field
//         },
//       },
//       {
//         $lookup: {
//           from: 'transactions',
//           localField: 'account_id', // Match against the MongoDB _id field
//           foreignField: 'account_id',
//           as: 'transactionDetails',
//         },
//       },
//     ]);

//     console.log("Account Details with Transactions:", accountDetails);
//     console.log(accountId);

//     if (accountDetails.length > 0) {
//       res.status(200).json({
//         success: true,
//         data: accountDetails,
//         message: "Transaction Get Successfully",
//       });
//     } else {
//       res.status(404).json({
//         success: false,
//         message: "No data found",
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// };

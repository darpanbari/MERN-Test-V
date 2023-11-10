import customersModel from "../models/customersModel.js";
import JWT from "jsonwebtoken";

export const getActiveCustomers = async (req, res) => {
  try {
    const data = await customersModel.aggregate([
      {
        $lookup: {
          from: "accounts",
          localField: "accounts",
          foreignField: "_id",
          as: "accountsData",
        },
      },
    ]);

    if (data) {
      res.status(200).json({
        success: true,
        data: data,
        message: "Get Customers Successfully",
      });
    }
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

export const loginCustomer = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(404).send({
        success: false,
        message: "Invalid email",
      });
    }

    const user = await customersModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    // const match = await bcryptjs.compare(password, user.password);
    // if (!match) {
    //   return res.status(200).send({
    //     success: false,
    //     message: "Invalid Password",
    //   });
    // }
    //token
    const token = await JWT.sign({ _id: user._id }, "ggdfhyuygf", {
      expiresIn: "7d",
    });

    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

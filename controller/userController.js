const User = require("../model/userModel");

const addUser = async (req, res) => {
  try {
    let { firstname, lastname, email, password, mobile, country } = req.body;
    const userExist = await User.findOne({
      $or: [{ email: email.toLowerCase() }, { firstname }],
    });
    if (userExist) {
      return res
        .status(200)
        .send({ error: "Email or user name is already exists" });
    }
    const user = new User({
      firstname,
      lastname,
      email,
      password,
      mobile,
      country,
    });
    const savedUser = await user.save();
    res.status(200).send({
      savedUser,
      message: "Confirm link sent successfully",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  addUser,
};

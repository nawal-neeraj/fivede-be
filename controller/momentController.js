const Moment = require("../model/momentModel");

const addMoment = async (req, res) => {
  try {
    let { title, tag, image, comment, userId } = req.body;

    const moment = new Moment({
      title,
      tag,
      image,
      comment,
      userId,
    });
    const savedMoment = await moment.save();
    res.status(200).send({
      moment: savedMoment,
      message: "Saved successfully",
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  addMoment,
};

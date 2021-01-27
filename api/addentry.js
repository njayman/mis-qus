const Entry = require("../config");

module.exports = async (req, res) => {
  try {
    const entry = new Entry(req.body);
    await entry.save();
    res.json({
      success: true,
      message: "Your response was recorded. Thanks again!",
    });
  } catch (error) {
    res.json({
      success: false,
      message: `${error.message} \n Contact the developer!`,
    });
  }
};

const Entry = require("../config");

module.exports = async (req, res) => {
  try {
    const entries = await Entry.find();
    let stats = {
      gender: {
        male: entries.filter((entry) => {
          return entry.gender === "male";
        }).length,
        female: entries.filter((entry) => {
          return entry.gender === "female";
        }).length,
      },
      parents: {
        parent: entries.filter((entry) => {
          return entry.parent === "parent";
        }).length,
        notparent: entries.filter((entry) => {
          return entry.parent === "not-parent";
        }).length,
      },
      question: {
        one: {
          yes: entries.filter((entry) => {
            return entry.qtwo.choice === "yes";
          }).length,
          no: entries.filter((entry) => {
            return entry.qtwo.choice === "no";
          }).length,
        },
        two: {
          yes: entries.filter((entry) => {
            return entry.qthree.choice === "yes";
          }).length,
          no: entries.filter((entry) => {
            return entry.qthree.choice === "no";
          }).length,
        },
        three: {
          yes: entries.filter((entry) => {
            return entry.qfour.choice === "yes";
          }).length,
          no: entries.filter((entry) => {
            return entry.qfour.choice === "no";
          }).length,
        },
        four: {
          yes: entries.filter((entry) => {
            return entry.qfive.choice === "yes";
          }).length,
          no: entries.filter((entry) => {
            return entry.qfive.choice === "no";
          }).length,
        },
        five: {
          yes: entries.filter((entry) => {
            return entry.qsix.choice === "yes";
          }).length,
          no: entries.filter((entry) => {
            return entry.qsix.choice === "no";
          }).length,
        },
        six: {
          yes: entries.filter((entry) => {
            return entry.qseven.choice === "yes";
          }).length,
          no: entries.filter((entry) => {
            return entry.qseven.choice === "no";
          }).length,
        },
      },
    };
    res.json({
      success: true,
      entries,
      stats,
    });
  } catch (error) {
    res.json({
      success: false,
      message: `${error.message} \n Contact the developer!`,
    });
  }
};

var express = require("express");
var router = express.Router();
const axios = require("axios");

/* GET home page. */
router.get("/cat-fact", function (req, res, next) {
  axios({
    method: "GET",
    url: "https://catfact.ninja/fact",
  })
    .then((results) => {
      console.log("Results", results.data);
      res.json(results.data.fact);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/random-activity", (req, res) => {
  axios
    .get("https://www.boredapi.com/api/activity")
    .then((results) => {
      if (results.data.type === "education") {
        res.json({
          message: "Here is something educational!",
          activity: results.data.activity,
        });
      } else {
        res.json({
          message: "This may not be a productive use of your time",
          activity: results.data.activity,
        });
      }
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;

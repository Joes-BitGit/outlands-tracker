const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

//route gets called first
router.get("/:platform/:gamertag", async (req, res) => {
  // console.log(req.params.platform, req.params.gamertag);
  // res.send("Hello");
  try {
    const headers = {
      "TRN-Api-Key": process.env.TRACKER_API_KEY,
    };

    const { platform, gamertag } = req.params;
    // node fetch to mnake a request to the 3rd party api
    const response = await fetch(
      `${process.env.TRACKER_API_URL}/${platform}/${gamertag}`,
      {
        // include 3rd party requirements for the header
        headers,
      }
    );
    const data = await response.json();

    // check for errors from the api
    if (data.errors && data.errors.length > 0) {
      return res.status(404).json({
        message: "profile not found",
      });
    }

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;

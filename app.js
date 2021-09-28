const express = require("express");
const cors = require("cors");
const app = express();
const config1 = {
  name: "BluHawk Trips",
  services: [0, 1, 2],
  appId: "1",
};
const config2 = {
  name: "Paul Travels",
  services: [0, 2],
  appId: "2",
};
app.use(cors());
app.get("/", (req, res) => {
  const origin = req.headers.origin;
  console.log(req.headers);
  setTimeout(() => {
    if (origin === "https://travel-portal-rohitsingh71.vercel.app/") {
      res.json(config2);
    } else if (origin === "https://travel-portal.vercel.app") {
      res.json(config1);
    } else {
      res.json(config2);
    }
  }, 3000);
});
app.listen(3005, () => {
  console.log("listening on 3005");
});

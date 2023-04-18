const express = require("express");
const path = require("path");
const logger = require("morgan");
require("dotenv").config();
const database = require("./config/database");
// database.connect();

const userRouter = require("./routes/usersRouter");
//! add other routers here

const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 3000;

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));

// app.get("/api", (req, res) => {
//   res.json({ msg: "Hi" });
// });

const isLoggedIn = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (decode) {
      res.locals.user = decode.user;
      next();
    } else {
      res.status(403).json({ message: "Sorry" });
    }
  } catch (error) {
    res.status(403).json({ error });
  }
};

app.use("/api/users", userRouter);
//! add other routes here

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

setTimeout(() => {
  app.listen(port, () => {
    console.log(`Express listening on port ${port}`);
  });
}, 1000); // add a delay of 3 seconds before starting the server

module.exports = app;

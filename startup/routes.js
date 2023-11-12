const comicsRouter = require("../routes/comics");
const commentsRouter = require("../routes/comments");
const { json } = require("express");
const morgan = require("morgan");
module.exports = function (app) {
  app.use(json());

  app.use(morgan("dev"));

  app.use("/api/users", require("../routes/users"));

  app.use("/api/comics", comicsRouter);
  app.use("/api/comments", commentsRouter);

  app.get("/ping", (req, res) => {
    res.send({ success: true });
  });
};

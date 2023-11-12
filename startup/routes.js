const comicsRouter = require("../routes/comics");
const commentsRouter = require("../routes/comments");
const { json } = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");
module.exports = function (app) {
  app.use(helmet());
  app.use(compression());
  app.use(json());

  app.use(morgan("dev"));

  app.use("/api/users", require("../routes/users"));

  app.use("/api/comics", comicsRouter);
  app.use("/api/comments", commentsRouter);

  app.get("/ping", (req, res) => {
    res.send({ success: true });
  });
};

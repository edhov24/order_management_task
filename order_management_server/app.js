import createError from "http-errors";
import express from "express";
import indexRouter from "./routes/index";
import headers from "./middlewares/headers";
import path from "path";
import cookieParser from "cookie-parser";
const bodyParser = require("body-parser");

const logger = require("morgan");

const app = express();

app.use(headers);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use("/", indexRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  // render the error page
  res.status(err.status || 500);
  res.json({
    status: "error",
    message: err.message,
    stack: err.stack,
    errors: err.errors,
  });
});

export default app;

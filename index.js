const express = require("express");
const colors = require("colors");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const homeRoutes = require("./routes/home-routes");

const app = express();
app.set("view engine", "ejs");

app.use(expressLayouts);

app.use(express.static(path.join(__dirname, "public")));
app.use("/docs", express.static(path.join(__dirname, "docs")));

app.use(homeRoutes.routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`SERVER RUNNING AT PORT ${PORT}`.cyan.bold.underline)
);

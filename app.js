import express from "express";
import userRouter from "./rounts/userRoutes.js";
import path, { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import indexRouter from "./rounts/indexRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const assetsPath = path.join(__dirname, "public");

const app = express();

// parses form payloads and sets it to the `req.body`
app.use(express.urlencoded({ extended: false }));

app.use(express.static(assetsPath));

// base mount path is `/users` and will always execute on that specific mount path, and yes including `/users/a/b/c`
app.use("/users", userRouter);

app.use("/", indexRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`My first Express app - listening on port ${PORT}!`),
);

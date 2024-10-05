import { Router } from "express";
import {
  getIndex,
  getNewForm,
  postNewForm,
} from "../controllers/indexController.js";

const indexRouter = Router();

// GET request for getting all the users
indexRouter.get("/", getIndex);

// GET request for the new message form
indexRouter.get("/new", getNewForm);

// POST request with the form data
indexRouter.post("/new", postNewForm);

export default indexRouter;

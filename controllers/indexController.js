import asyncHandler from "express-async-handler";

const links = [
  { href: "/", text: "Home" },
  { href: "new", text: "New" },
];

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hey",
    user: "Charles",
    added: new Date(),
  },
];

const getIndex = asyncHandler(async (req, res) => {
  res.render("index", { links, links, messages: messages });
});

const getNewForm = asyncHandler(async (req, res) => {
  res.render("form");
});

const postNewForm = asyncHandler(async (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});

export { getIndex, getNewForm, postNewForm };

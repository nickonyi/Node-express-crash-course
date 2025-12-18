import { Router } from "express";

const router = Router();

let posts = [
  {
    id: 1,
    title: "Post One",
  },
  {
    id: 2,
    title: "Post Two",
  },
  {
    id: 3,
    title: "Post Three",
  },
];

//get all posts
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

//get a single post
router.get("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (post) {
    res.status(200).json(post);
  } else {
    const error = new Error("User not found");
    return next(error);
  }
});

//create new posts
router.post("/", (req, res, next) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!req.body.title) {
    const error = new Error("Please insert the title");
    return next(error);
  }
  posts.push(newPost);
  res.status(201).json(posts);
});

//update posts
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (post) {
    post.title = req.body.title;
    return res.status(200).json(posts);
  }
  res.status(404).json({ msg: "That user was not found" });
});

//delete posts
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (post) {
    posts = posts.filter((post) => post.id !== id);
    return res.status(200).json(posts);
  }
  res.status(404).json({ msg: "That user was not found" });
});

export default router;

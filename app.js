import express from "express";
import url from "url";
import path from "path";
import { title } from "process";
const PORT = 3000;

const app = express();

const __fileName = url.fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

//setup static folder
//app.use(express.static(path.join(__dirName, "public")));
const posts = [
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
app.get("/api/posts", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

//get a single post
app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ msg: "User not found" });
  }
});

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});

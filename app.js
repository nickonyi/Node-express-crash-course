import express from "express";
import url from "url";
import path from "path";
const PORT = 3000;

const app = express();

const __fileName = url.fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

//setup static folder
//app.use(express.static(path.join(__dirName, "public")));
const posts = [
  {
    id: 1,
    name: "Johnte",
  },
  {
    id: 2,
    nam: "collo",
  },
];

app.get("/api/users", (req, res) => {
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});

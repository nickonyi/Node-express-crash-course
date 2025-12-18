import express from "express";
import url from "url";
import path from "path";
import posts from "./routes/post.js";
const PORT = 3000;

const app = express();

//const __fileName = url.fileURLToPath(import.meta.url);
//const __dirName = path.dirname(__fileName);

//setup static folder
//app.use(express.static(path.join(__dirName, "public")));

//Border parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/posts", posts);

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});

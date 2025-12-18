import { Router } from "express";
import { getPosts } from "../controllers/postController.js";
import { getPostById } from "../controllers/postController.js";
import { createPost } from "../controllers/postController.js";
import { updatePost } from "../controllers/postController.js";
import { deletePost } from "../controllers/postController.js";

const router = Router();

//get all posts
router.get("/", getPosts);

//get a single post
router.get("/:id", getPostById);

//create new posts
router.post("/", createPost);

//update posts
router.put("/:id", updatePost);

//delete posts
router.delete("/:id", deletePost);

export default router;

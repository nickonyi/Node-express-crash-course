const output = document.querySelector("#output");
const button = document.querySelector("#get-posts-btn");
const form = document.querySelector("#add-post-form");

const showPosts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/posts/");

    if (!res.ok) {
      throw new Error("Problem fetching data");
    }

    const posts = await res.json();
    console.log(posts);

    output.innerHTML = "";

    posts.forEach((post) => {
      const postEl = document.createElement("p");
      postEl.textContent = post.title;
      output.appendChild(postEl);
    });
  } catch (error) {
    console.log("Erro fetching posts:", error);
  }
};

//submit new post
async function addPost(e) {
  e.preventDefault();
  const formData = new FormData(this);
  const title = formData.get("title");
  console.log(title);

  try {
    const res = await fetch("http://localhost:3000/api/posts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    if (!res.ok) {
      throw new Error("failed to add new post");
    }

    const newPost = await res.json();
    console.log(newPost);

    const postEl = document.createElement("div");
    postEl.textContent = newPost.title;
    output.appendChild(postEl);
    showPosts();
  } catch (error) {
    console.log("error failed to add new post", error);
  }
}

button.addEventListener("click", showPosts);
form.addEventListener("submit", addPost);

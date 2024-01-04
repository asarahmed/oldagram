const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

const sectionEl = document.getElementById("section-el");

for (let i = 0; i < posts.length; i++) {
  createPost(posts[i]);
}

function createPost(data) {
  //   Create div container
  let postContainerEl = document.createElement("div");
  postContainerEl.classList = "post-container bg-white";

  //   Create Post header

  let postHeaderEl = document.createElement("div");
  postHeaderEl.classList = "post-header space-around";

  //  Header Image
  let headerImage = document.createElement("img");
  headerImage.src = data.avatar;
  headerImage.alt = "user profile";
  headerImage.classList = "profile-img";

  //   Header user detail

  let headerDetailContainer = document.createElement("div");

  //   Header user detail h2
  let headerDetailName = document.createElement("h2");
  headerDetailName.textContent = data.name;

  //   Header user detail p
  let headerDetailLocation = document.createElement("p");
  headerDetailLocation.textContent = data.location;

  //   Header user detail append Child
  headerDetailContainer.appendChild(headerDetailName);
  headerDetailContainer.appendChild(headerDetailLocation);

  //   header append Child
  postHeaderEl.appendChild(headerImage);
  postHeaderEl.appendChild(headerDetailContainer);

  //   Post Image
  let postImage = document.createElement("img");
  postImage.src = data.post;
  postImage.alt = "posted image";
  postImage.classList = "post-image";

  //   Post btn Container
  let postBtnConEl = document.createElement("div");
  postBtnConEl.classList = "post-btn-container";

  //   Post btn Container images
  let likeBtn = document.createElement("img");
  likeBtn.src = "./images/icon-heart.png";
  likeBtn.alt = "Like Button";
  likeBtn.classList = "icon-btn";

  let commentBtn = document.createElement("img");
  commentBtn.src = "./images/icon-comment.png";
  commentBtn.alt = "comment Button";
  commentBtn.classList = "icon-btn";

  let dmBtn = document.createElement("img");
  dmBtn.src = "./images/icon-dm.png";
  dmBtn.alt = "dm Button";
  dmBtn.classList = "icon-btn";

  //   Post btn Container append Child

  postBtnConEl.appendChild(likeBtn);
  postBtnConEl.appendChild(commentBtn);
  postBtnConEl.appendChild(dmBtn);

  //   Post like count
  let postLikesCount = document.createElement("p");
  postLikesCount.classList = "post-like-count bold-txt";
  postLikesCount.textContent = data.likes;

  let likesCountText = document.createElement("span");
  likesCountText.textContent = "likes";

  //   Post like count append
  postLikesCount.appendChild(likesCountText);

  //   Post Desc
  let boldTxt = document.createElement("p");
  boldTxt.classList = "bold-txt";
  boldTxt.textContent = data.username;

  let postDesc = document.createElement("span");
  postDesc.classList = "normal-txt";
  postDesc.textContent = data.comment;

  boldTxt.appendChild(postDesc);

  //  append Child (Main)
  postContainerEl.appendChild(postHeaderEl);
  postContainerEl.appendChild(postImage);
  postContainerEl.appendChild(postBtnConEl);
  postContainerEl.appendChild(postLikesCount);
  postContainerEl.appendChild(boldTxt);
  sectionEl.append(postContainerEl);

  // Like  Function
  function increaseLike() {
    likesCount = data.likes += 1;
    postLikesCount.textContent = `${likesCount} likes`;
  }

  likeBtn.addEventListener("click", increaseLike);
  postImage.addEventListener("dblclick", increaseLike);
}

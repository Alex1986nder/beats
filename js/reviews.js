const commentAvatars = document.querySelector("#reviewsList");

const findReview = (reviewName) => {
  const activeReview = document.querySelector(".review.active");
  activeReview.classList.remove("active");
  let currentItem = document.querySelector(
    `.review[data-item="${reviewName}"]`
  );
  currentItem.classList.add("active");
};

commentAvatars.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target;
  if (target.classList.contains("reviews__icon")) {
    const activeListItem = document.querySelector(".reviews__avatar.active");
    if (activeListItem) {
      activeListItem.classList.remove("active");
    }
    const button = target.parentElement;
    const listElement = button.parentElement;
    const reviewId = button.getAttribute("data-open");
    listElement.classList.add("active");
    findReview(reviewId);
  }
});

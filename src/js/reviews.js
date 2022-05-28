;(function () {
  const commentAvatars = document.querySelector("#reviewsList");

  const findReview = (reviewName) => {
    const activeReview = document.querySelector(".review.review--active");
    activeReview.classList.remove("review--active");
    let currentItem = document.querySelector(
      `.review[data-item="${reviewName}"]`
    );
    currentItem.classList.add("review--active");
  };

  commentAvatars.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;
    if (target.classList.contains("reviews__icon")) {
      const activeListItem = document.querySelector(
        ".reviews__avatar.review--active"
      );
      if (activeListItem) {
        activeListItem.classList.remove("review--active");
      }
      const button = target.parentElement;
      const listElement = button.parentElement;
      const reviewId = button.getAttribute("data-open");
      listElement.classList.add("review--active");
      findReview(reviewId);
    }
  });
})()

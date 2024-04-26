// SCROLL TO REVIEWS BUTTON
function scrollToReviews() {
  const articleElement = document.getElementById("review-article");
  const articlePos = articleElement.offsetTop;
  window.scrollTo({
    top: articlePos,
    behavior: "smooth",
  });
}



document.addEventListener('DOMContentLoaded', function () {
  const commentForm = document.getElementById('commentForm');

  if (commentForm) {
    commentForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Your logic for handling the comment submission
      console.log('Comment submitted!');
    });
  }

  // Add more event listeners or functionality as needed
});
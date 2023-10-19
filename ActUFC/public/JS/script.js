document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-comment-form");

    toggleButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const commentForm = this.nextElementSibling;

            if (commentForm.style.display === "none" || commentForm.style.display === "") {
                commentForm.style.display = "block";
            } else {
                commentForm.style.display = "none";
            }
        });
    });
});

function submitComment(event) {
    event.preventDefault();
  
    const articleID = document.getElementById('articleID').value;
    const commenterNickname = document.getElementById('commenterNickname').value;
    const commentDate = document.getElementById('commentDate').value;
    const commentText = document.getElementById('commentText').value;
  
    const commentInfo = {
      ArticleID: articleID,
      CommenterNickname: commenterNickname,
      CommentDate: commentDate,
      CommentText: commentText
    };
  
    fillBoxes(commentInfo);
  }

function fillBoxes(commentInfo) {
    fetch('/addComment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentInfo),
    })
      .then(response => response.json())
      .then(newComment => {
        document.getElementById('filledInfo').innerHTML = JSON.stringify(newComment, null, 2);
      })
      .catch(error => {
        console.error('Error inserting comment:', error);
        alert('Failed to insert comment. Please try again.');
      });
  }
  
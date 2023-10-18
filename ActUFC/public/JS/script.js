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



/*commentNumber = 2;
function fillBoxes() {
    commentNumber++;
    const commentID = commentNumber;
    const articleID = document.getElementById('articleID').value;
    const commenterNickname = document.getElementById('commenterNickname').value;
    const commentDate = document.getElementById('commentDate').value;
    const commentText = document.getElementById('commentText').value;

    const commentInfo = {
        CommentID: commentID,
        ArticleID: articleID,
        CommenterNickname: commenterNickname,
        CommentDate: commentDate,
        CommentText: commentText
    };
    document.getElementById('filledInfo').innerHTML = JSON.stringify(commentInfo, null, 2);

    fetch('/createComment', {
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
*/
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

const getUFC = () => {
    fetch('/getUFC', { method: 'GET' })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch data from the server.');
            }
        })
        .then(data => {
            console.log('The fighters are:');
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    getUFC();
});
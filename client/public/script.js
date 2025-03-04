document.addEventListener("DOMContentLoaded", function() {
    const posts = document.querySelectorAll(".post");

    posts.forEach(post => {
        let count = 0;
        const likeButton = post.querySelector(".likeButton");
        const countLabel = post.querySelector(".countLabel");

        likeButton.addEventListener("click", function() {
            count++;
            countLabel.innerText = count;
        });
    });
});


const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

const profilePic = document.getElementById("profilePic");
const uploadPic = document.getElementById("uploadPic");

profilePic.addEventListener("click", function() {
    uploadPic.click();
});

uploadPic.addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profilePic.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

const reviews = [
    {
        name: "Trump Hecktor",
        feedback: "The best coffee in town! Amazing ambiance and great service."
    },
    {
        name: "Greg Smith",
        feedback: "The pastries are absolutely delicious, and the coffee is always fresh!"
    },
    {
        name: "Alex Johnson",
        feedback: "A cozy spot to relax and enjoy a cup of coffee. Highly recommended!"
    }
];

let currentIndex = 0;

function updateReview() {
    const reviewCard = document.querySelector('.review-card');
    const { name, feedback } = reviews[currentIndex];
    reviewCard.querySelector('.customer-name').innerText = name;
    reviewCard.querySelector('.customer-feedback').innerText = `"${feedback}"`;
}

function showNextReview() {
    currentIndex = (currentIndex + 1) % reviews.length;
    updateReview();
}


function showPrevReview() {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    updateReview();
}

function showPopup() {
    document.getElementById('review-popup').style.display = 'block';
    updateReview();
}


function closePopup() {
    document.getElementById('review-popup').style.display = 'none';
}


function openReviewForm() {
    document.getElementById('review-form').style.display = 'block';
}


function submitReview() {
    const reviewText = document.getElementById('review-textbox').value;
    if (reviewText) {
        alert("Thank you for your review: " + reviewText);
        document.getElementById('review-textbox').value = ''; // Clear the textbox
    } else {
        alert("Please write a review before submitting.");
    }
}


document.getElementById('next-review').addEventListener('click', showNextReview);
document.getElementById('prev-review').addEventListener('click', showPrevReview);
document.getElementById('close-popup').addEventListener('click', closePopup);
document.getElementById('send-review').addEventListener('click', openReviewForm);
document.getElementById('submit-review').addEventListener('click', submitReview);


setTimeout(showPopup, 5000);

setInterval(showNextReview, 5000);

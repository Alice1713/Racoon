
//Для отзывов
const reviews = document.querySelectorAll('.review');
let currentIndex = 0;

function showReview(index) {
    reviews.forEach((review, i) => {
        if (i === index) {
            review.classList.add('active-review');
        } else {
            review.classList.remove('active-review');
        }
    });
}

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    showReview(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    showReview(currentIndex);
});

// Инициализация первого отзыва
showReview(currentIndex);

//Для ответов на вопросы
document.querySelectorAll('.faqToggle').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        var answer = this.parentElement.nextElementSibling;
        answer.classList.toggle('active'); // Переключение класса для ответа
        this.textContent = answer.classList.contains('active') ? '−' : '+'; // Смена текста кнопки
    });
});
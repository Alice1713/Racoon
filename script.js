
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

showReview(currentIndex);

//Для ответов на вопросы
document.querySelectorAll('.faqToggle').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
        var answer = this.parentElement.nextElementSibling;
        answer.classList.toggle('active'); // Переключение класса для ответа
        this.textContent = answer.classList.contains('active') ? '−' : '+'; // Смена текста кнопки
    });
});

//Анимация картинки
document.addEventListener('DOMContentLoaded', (event) => {
    const raccoonImg = document.querySelector('.welcomeImg img');

    raccoonImg.addEventListener('click', () => {
        raccoonImg.style.animation = 'none'; // Сброс анимации
        void raccoonImg.offsetWidth; // Триггер перерисовки для сброса анимации
        raccoonImg.style.animation = 'rotateRaccoon 2s linear';
    });
});

//Валидация
function checkFullName() {
    let fullName = document.getElementById("fullName").value;
    let regex = /^[А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+ [А-ЯЁ][а-яё]+$/; 

    if (regex.test(fullName)) {
        document.getElementById("fullName_Check").style.color = "#400101";
        document.getElementById("fullName_Check").innerHTML = "✔";
        return true;
    } else {
        document.getElementById("fullName_Check").style.color = "#400101";
        document.getElementById("fullName_Check").innerHTML = "✘";
        return false;
    }
}

function checkPhone() {
    let phone = document.getElementById("phone").value;
    let regex = /^\+7\d{10}$/;

    if (regex.test(phone)) {
        document.getElementById("phone_Check").style.color = "#400101";
        document.getElementById("phone_Check").innerHTML = "✔";
        return true;
    } else {
        document.getElementById("phone_Check").style.color = "#400101";
        document.getElementById("phone_Check").innerHTML = "✘";
        return false;
    }
}

function checkBirthdate() {
    let birthdate = document.getElementById("birthdate").value;

    if (birthdate) {
        document.getElementById("birthdate_Check").style.color = "#400101";
        document.getElementById("birthdate_Check").innerHTML = "✔";
        return true;
    } else {
        document.getElementById("birthdate_Check").style.color = "#400101";
        document.getElementById("birthdate_Check").innerHTML = "✘";
        return false;
    }
}

function checkRaccoonName() {
    let raccoonName = document.getElementById("raccoonName").value;

    if (raccoonName) {
        document.getElementById("raccoonName_Check").style.color = "#400101";
        document.getElementById("raccoonName_Check").innerHTML = "✔";
        return true;
    } else {
        document.getElementById("raccoonName_Check").style.color = "#400101";
        document.getElementById("raccoonName_Check").innerHTML = "✘";
        return false;
    }
}

function checkAbout() {
    let about = document.getElementById("about").value;
    let regex = /^^[а-яА-Я\s]{5,500}$/;
    if (regex.test(about)) {
        document.getElementById("about_Check").style.color = "#400101";
        document.getElementById("about_Check").innerHTML = "✔";
        return true;
    } else {
        document.getElementById("about_Check").style.color = "#400101";
        document.getElementById("about_Check").innerHTML = "✘";
        return false;
    }
}
function validateForm() {
    if (checkFullName() && checkPhone() && checkBirthdate() && checkRaccoonName() && checkAbout()) {
        let raccoonSelect = document.getElementById("raccoonName");
        let raccoonName = raccoonSelect.options[raccoonSelect.selectedIndex].text;

        alert("Проверьте, пожалуйста, свои данные!\n" +
            "Ваше ФИО: " + document.getElementById("fullName").value + "\n" +
            "Ваш номер телефона: " + document.getElementById("phone").value + "\n" +
            "Ваша дата рождения: " + document.getElementById("birthdate").value + "\n" +
            "Имя подопечного енота: " + raccoonName + "\n" +
            "О себе: " + document.getElementById("about").value);
    } else {
        alert("Пожалуйста, заполните корректно все поля.");
    }
}




function checkName() {
    let name = document.getElementById("name").value;
    let nameCheck = document.getElementById("name_Check");
    let regex = /^[А-ЯЁ][а-яё]+$/; 
    if (regex.test(name)) {
        nameCheck.style.color = "#400101";
        nameCheck.innerHTML = "✔";
        nameCheck.removeAttribute("title");
        return true;
    } else {
        nameCheck.style.color = "#400101";
        nameCheck.innerHTML = "✘";
        nameCheck.setAttribute("title", "Пожалуйста, введите ваше имя.");
        return false;
    }
}


function checkEmail() {
    let email = document.getElementById("email").value;
    let emailCheck = document.getElementById("email_Check");
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        emailCheck.style.color = "#400101";
        emailCheck.innerHTML = "✔";
        emailCheck.removeAttribute("title");
        return true;
    } else {
        emailCheck.style.color = "#400101";
        emailCheck.innerHTML = "✘";
        emailCheck.setAttribute("title", "Пожалуйста, введите корректный email.");
        return false;
    }
}

function checkDate() {
    let date = document.getElementById("date").value;
    let dateCheck = document.getElementById("date_Check");
    if (date) {
        dateCheck.style.color = "#400101";
        dateCheck.innerHTML = "✔";
        dateCheck.removeAttribute("title");
        return true;
    } else {
        dateCheck.style.color = "#400101";
        dateCheck.innerHTML = "✘";
        dateCheck.setAttribute("title", "Пожалуйста, введите дату посещения.");
        return false;
    }
}


function checkComment() {
    let comment = document.getElementById("comment").value;
    let commentCheck = document.getElementById("comment_Check");
    let regex = /^^[а-яА-Я\s]{5,500}$/;
    if (regex.test(comment)) {
        commentCheck.style.color = "#400101";
        commentCheck.innerHTML = "✔";
        commentCheck.removeAttribute("title");
        return true;
    } else {
        commentCheck.style.color = "#400101";
        commentCheck.innerHTML = "✘";
        commentCheck.setAttribute("title", "Пожалуйста, введите подробный комментарий.");
        return false;
    }
}

function displaySubmittedData() {
    if (checkName() && checkEmail() && checkDate() && checkComment()) {
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let date = document.getElementById("date").value;
        let ratings = document.getElementsByName("rating");
        let selectedRating;

        for (let rating of ratings) {
            if (rating.checked) {
                selectedRating = rating.value;
                break;
            }
        }

        let comment = document.getElementById("comment").value;

        document.getElementById("submittedName").textContent = name;
        document.getElementById("submittedEmail").textContent = email;
        document.getElementById("submittedDate").textContent = date;
        document.getElementById("submittedRating").textContent = selectedRating;
        document.getElementById("submittedComment").textContent = comment;

        document.getElementById("submittedData").style.display = "block";
    } else {
        alert("Пожалуйста, заполните корректно все поля.");
    }
}

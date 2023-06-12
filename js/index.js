function openHelp(event, itemName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(itemName).style.display = "block";
    event.currentTarget.className += " active";
}

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    speed: 2000,
    breakpoints: {
        788: {
            slidesPerView: 3,
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3000,
    },

});

// Выбираем кнопку
const btn = document.querySelector('.slider');
// Отслеживаем щелчок по кнопке
btn.addEventListener('click', function () {
    // Затем переключаем (добавляем/удаляем) класс .dark-theme для body
    document.body.classList.toggle('dark-theme');
})
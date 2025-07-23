const toggleBtn = document.getElementById("about-me__toggle");/*находим кнопку по ID about-me__toggle  и сохраняем ее в переменную toggleBtn*/
const fullText = document.querySelector(".about-me__details");/*находим элемент, в котором находится длинный текст, по классу .about-me__details*/

toggleBtn.addEventListener("click", () => { /*добавляем обработчик события: когда пользователь нажимает на кнопку, запускается функция*/
    fullText.classList.toggle("hidden"); /* включаем и выключаем видимость текста*/
    toggleBtn.textContent = fullText.classList.contains("hidden") ? "Read more" : "Hide"; /*меняем текст на кнопке. Если длинный текст сейчас скрыт (contains("hidden")) пишем "read more", иначе "hide"*/
});
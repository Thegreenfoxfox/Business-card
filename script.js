const toggleBtn = document.getElementById("toggle-about");/*находим кнопку по ID toggle-about и сохраняем ее в переменную toggleBtn*/
const fullText = document.querySelector(".full-text");/*находим элемент, в котором находится длинный текст, по классу .full-text*/

toggleBtn.addEventListener("click", () => { /*добавляем обработчик события: когда пользователь нажимает на кнопку, запускается функция*/
    fullText.classList.toggle("hidden"); /* включаем и выключаем видимость текста*/
    toggleBtn.textContent = fullText.classList.contains("hidden") ? "Read more" : "Hide"; /*меняем текст на кнопке. Если длинный текст сейчас скрыт (contains("hidden")) пишем "read more", иначе "hide"*/
});
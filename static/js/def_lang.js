$(document).ready(function() {
    // Определение языка браузера
    const userLanguage = navigator.language || navigator.userLanguage;

    // Отправка запроса на сервер для получения словаря
    $.ajax({
        url: `/def_lang?lang=${userLanguage}`,
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            // Обработка полученных данных (словаря)
            console.log(data);
            // Здесь вы можете использовать словарь для локализации вашего контента
        },
        error: function(error) {
            console.error('Произошла ошибка:', error);
        }
    });
});

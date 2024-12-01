if (window.Telegram?.WebApp) {
  const tg = window.Telegram.WebApp;

  // Уведомляем Telegram, что WebApp готов
  tg.ready();

  // Проверяем, есть ли данные о пользователе
  const user = tg.initDataUnsafe?.user;

  if (user) {
    // Если данные есть, отображаем имя пользователя
    const username = user.username || `${user.first_name || ""} ${user.last_name || ""}`.trim() || "Гость";
    document.getElementById("greeting").textContent = `Привет, ${username}!`;
  } else {
    // Данных нет, показываем сообщение
    document.getElementById("greeting").textContent = "Привет, Гость!";
  }

  // Настраиваем главную кнопку Telegram
  tg.MainButton.text = "Открыть отзывы";
  tg.MainButton.show();
} else {
  // Если WebApp API недоступен
  console.error("Telegram WebApp API не работает.");
  document.getElementById("greeting").textContent = "Ошибка: откройте приложение через Telegram.";
}

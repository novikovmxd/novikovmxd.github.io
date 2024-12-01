// Проверяем поддержку WebApp API
if (window.Telegram?.WebApp) {
  const tg = window.Telegram.WebApp;

  // Инициализация WebApp
  tg.ready(); // Уведомляем Telegram, что WebApp готов

  // Получаем данные пользователя
  const user = tg.initDataUnsafe?.user;

  if (user) {
    // Если пользователь авторизован, показываем его имя
    const username = user.username || `${user.first_name} ${user.last_name}` || "Гость";
    document.getElementById("greeting").textContent = `Привет, ${username}!`;
  } else {
    // Если данных нет
    document.getElementById("greeting").textContent = "Привет, Гость!";
  }

  // Настраиваем главную кнопку
  tg.MainButton.text = "Открыть отзывы";
  tg.MainButton.show();
} else {
  console.error("WebApp не поддерживается. Проверьте запуск через Telegram.");
  document.getElementById("greeting").textContent = "Ошибка: откройте приложение через Telegram.";
}

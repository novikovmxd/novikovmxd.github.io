// Проверяем, что Telegram WebApp доступен
if (window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
  
    // Получаем имя пользователя
    const username = tg.initDataUnsafe?.user?.username || "Гость";
  
    // Меняем текст на странице
    document.getElementById("greeting").textContent = `Привет, ${username}!`;
    
    // Показываем главную кнопку Telegram (при желании)
    tg.MainButton.text = "Открыть отзывы";
    tg.MainButton.show();
  } else {
    console.log("WebApp не поддерживается в этом браузере.");
  }

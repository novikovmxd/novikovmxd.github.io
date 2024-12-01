// Получаем кнопки фильтра и все отзывы
const filterButtons = document.querySelectorAll('.filter-btn');
const reviews = document.querySelectorAll('.review');

// Добавляем обработчик клика на кнопки
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Убираем "active" со всех кнопок
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Добавляем "active" на выбранную кнопку
    button.classList.add('active');

    // Получаем тип фильтра из атрибута data-filter
    const filterType = button.getAttribute('data-filter');

    // Показываем/скрываем отзывы в зависимости от типа
    reviews.forEach(review => {
      const reviewType = review.getAttribute('data-type');
      if (filterType === 'all' || filterType === reviewType) {
        review.style.display = 'flex';
      } else {
        review.style.display = 'none';
      }
    });
  });
});

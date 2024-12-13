// Получаем элементы
const loginBtn = document.getElementById('loginBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

// Открытие модального окна
loginBtn.addEventListener('click', () => {
  modal.classList.add('active');
});

// Закрытие модального окна
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

// Закрытие при клике вне окна
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.remove('active');
  }
});
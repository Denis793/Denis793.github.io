const apiUrl = 'https://storage.blazingcdn.net/v3';

// Функція для відображення повідомлення на 5 секунд
function showMessage(message, isError = false) {
	const messagesSection = document.querySelector('.messages');
	const messageElement = document.createElement('div');
	messageElement.className = isError ? 'error-message' : 'success-message';
	messageElement.textContent = message;
	messagesSection.appendChild(messageElement);

	setTimeout(() => {
		messagesSection.removeChild(messageElement);
	}, 5000);
}

// Функція для авторизації
function authorize(token) {
	const authForm = document.getElementById('authForm');
	authForm.addEventListener('submit', async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(apiUrl, {
				method: 'GET',
				headers: {
					'Authorization': `Bearer ${token}`,
					'accept': 'application/json'
				}
			});

			if (response.ok) {
				showMessage('Авторизація успішна!', false);
			} else {
				showMessage('Помилка авторизації!', true);
			}
		} catch (error) {
			showMessage('Під час авторизації сталася помилка!', true);
		}
	});
}

// Отримання поля вводу токену
const tokenInput = document.getElementById('token');

// Виклик функції авторизації при введенні токену
tokenInput.addEventListener('input', (e) => {
	const token = e.target.value;
	authorize(token);
});

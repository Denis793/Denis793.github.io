// Функція для відображення повідомлень
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
async function authorize(token) {
	const apiUrl = 'https://storage.blazingcdn.net/v3';
	const authHeaders = {
		'Authorization': `Bearer ${token}`,
		'accept': 'application/json'
	};

	try {
		const response = await fetch(apiUrl, { headers: authHeaders });
		if (response.ok) {
			showMessage('Авторизація успішна!', false);
		} else {
			showMessage('Помилка авторизації!', true);
		}
	} catch (error) {
		showMessage('Виникла помилка!', true);
	}
}

// Отримання елементів з DOM
const authForm = document.getElementById('authForm');
const tokenInput = document.getElementById('token');

// Обробка подання форми для авторизації
authForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const token = tokenInput.value;
	if (token) {
		authorize(token);
	} else {
		showMessage('Будь ласка, введіть Token!', true);
	}
});

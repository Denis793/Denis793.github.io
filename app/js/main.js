// Функція для відображення повідомлень
function showMessage(message, isSuccess) {
	const messagesContainer = document.querySelector('.messages');
	const messageElement = document.createElement('div');
	messageElement.classList.add('message', isSuccess ? 'message--success' : 'message--error');
	messageElement.textContent = message;
	messagesContainer.appendChild(messageElement);

	// Видалення повідомлення через 5 секунд
	setTimeout(() => {
		messageElement.remove();
	}, 5000);
}

// Функція авторизації
function authorize(token) {
	const apiUrl = 'https://storage.blazingcdn.net/v3';

	// Виклик API для авторизації
	fetch(apiUrl, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
		.then(response => {
			if (response.ok) {
				showMessage('Authorization successful', true);
			} else {
				showMessage('Authorization failed', false);
			}
		})
		.catch(error => {
			showMessage('An error occurred during authorization', false);
		});
}

// Отримання елемента input для token
const tokenInput = document.getElementById('token');

// Відправка форми авторизації
document.getElementById('authForm').addEventListener('submit', function(event) {
	event.preventDefault();
	const token = tokenInput.value;
	if (token) {
		authorize(token);
	} else {
		showMessage('Please enter a token', false);
	}
});

// Ваші інші функції та код тут

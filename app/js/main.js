// Функція для відображення повідомлення
function showMessage(message, isError = false) {
	const messagesContainer = document.querySelector('.messages');
	const messageElement = document.createElement('div');
	messageElement.textContent = message;
	messageElement.classList.add('message', isError ? 'message--error' : 'message--success');
	messagesContainer.appendChild(messageElement);
	setTimeout(() => {
		messagesContainer.removeChild(messageElement);
	}, 5000);
}

// Функція для авторизації
async function authorize(token) {
	try {
		const response = await fetch('https://storage.blazingcdn.net/v3/auth', {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${token}`
			}
		});

		if (response.ok) {
			showMessage('Authorization successful', false);
		} else {
			showMessage('Authorization failed', true);
		}
	} catch (error) {
		showMessage('An error occurred during authorization', true);
	}
}

// Отримуємо поле для вводу токену
const tokenInput = document.getElementById('token');

// Додаємо обробник події на форму авторизації
document.getElementById('authForm').addEventListener('submit', (event) => {
	event.preventDefault();
	const tokenValue = tokenInput.value.trim();
	if (tokenValue !== '') {
		authorize(tokenValue);
	} else {
		showMessage('Please enter a token', true);
	}
});

// Додайте решту функціоналу тут, наприклад, створення CDN зони, список CDN зон та інше.

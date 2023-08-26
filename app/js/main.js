// Функція для відправки запиту та обробки результату
async function sendRequest(url, method, data = null, headers = {}) {
	try {
		const response = await fetch(url, {
			method: method,
			headers: {
				'Content-Type': 'application/json',
				...headers
			},
			body: JSON.stringify(data)
		});

		const responseData = await response.json();

		if (!response.ok) {
			throw new Error(responseData.message || 'Something went wrong.');
		}

		return responseData;
	} catch (error) {
		throw error;
	}
}

// Функція для відображення повідомлення
function showMessage(message, isSuccess) {
	const messagesContainer = document.querySelector('.messages');
	const messageElement = document.createElement('div');
	messageElement.textContent = message;
	messageElement.classList.add('message', isSuccess ? 'message--success' : 'message--error');
	messagesContainer.appendChild(messageElement);

	setTimeout(() => {
		messageElement.remove();
	}, 5000);
}

// Функція авторизації
async function authorize(token) {
	const authForm = document.querySelector('#authForm');

	try {
		const responseData = await sendRequest('https://storage.blazingcdn.net/v3', 'POST', {
			token: token
		});

		showMessage('Authorization successful', true);
		authForm.reset();
	} catch (error) {
		showMessage('Authorization failed', false);
		console.error(error);
	}
}

// Отримуємо та обробляємо форму авторизації
const authForm = document.querySelector('#authForm');
authForm.addEventListener('submit', function (event) {
	event.preventDefault();

	const tokenInput = document.querySelector('#token');
	const token = tokenInput.value.trim();

	if (token !== '') {
		authorize(token);
	} else {
		showMessage('Token field is required', false);
	}
});

// Запускаємо функцію після завантаження сторінки
window.addEventListener('DOMContentLoaded', () => {
	// Додатковий код для ініціалізації
});

document.addEventListener('DOMContentLoaded', () => {
	// Функція для виводу повідомлення на певний проміжок часу
	const showMessage = (message, color = 'black') => {
		const messagesSection = document.querySelector('.messages');
		const messageElement = document.createElement('p');
		messageElement.textContent = message;
		messageElement.style.color = color;
		messagesSection.appendChild(messageElement);
		setTimeout(() => {
			messageElement.remove();
		}, 7000);
	};

	// Підключення до серверу blazingcdn.com
	fetch('https://storage.blazingcdn.net/v3')
		.then(response => {
			if (response.ok) {
				showMessage('Під\'єднання до серверу успішне', 'green');
			} else {
				showMessage('Помилка під\'єднання до серверу', 'red');
			}
		})
		.catch(error => {
			showMessage('Помилка під\'єднання до серверу', 'red');
		});

	// Перевірка токену
	const checkToken = token => {
		if (!token) {
			showMessage('Відсутній токен', 'red');
			return;
		}

		// Виконайте перевірку токену тут і виведіть повідомлення відповідно
	};

	// Авторизація
	const authForm = document.getElementById('authForm');
	authForm.addEventListener('submit', event => {
		event.preventDefault();
		const token = document.getElementById('token').value;

		// Виконайте авторизацію тут і виведіть повідомлення відповідно
		const headers = new Headers({
			'Authorization': `Bearer ${token}`,
			'accept': 'application/json'
		});

		fetch('https://storage.blazingcdn.net/v3', { method: 'GET', headers })
			.then(response => {
				if (response.ok) {
					showMessage('Успішна авторизація', 'green');
				} else {
					showMessage('Помилка авторизації', 'red');
				}
			})
			.catch(error => {
				showMessage('Помилка авторизації', 'red');
			});
	});
});

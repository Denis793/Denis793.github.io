import showMessage from './message.js'; // Імпортуємо функцію showMessage з файлу message.js

// Функція для авторизації з використанням токена
function authorize() {
	const authButton = document.getElementById('authButton'); // Отримуємо кнопку авторизації
	const tokenInput = document.getElementById('tokenInput'); // Отримуємо поле для вводу токена

	authButton.addEventListener('click', async () => {
		const token = tokenInput.value; // Отримуємо введений токен

		try {
			const response = await fetch('https://storage.blazingcdn.net/v3', {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			});

			if (response.ok) {
				showMessage('Authorization successful', true); // Виводимо повідомлення про успішну авторизацію
			} else {
				showMessage('Authorization failed', false); // Виводимо повідомлення про помилку авторизації
			}
		} catch (error) {
			showMessage('An error occurred', false); // Виводимо повідомлення про помилку
		}
	});
}

// Експортуємо функцію authorize для використання в main.js
export default authorize;

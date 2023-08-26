// Функція авторизації
function authorize() {
	const authButton = document.getElementById('authButton');
	const tokenInput = document.getElementById('tokenInput');

	authButton.addEventListener('click', async () => {
		const token = tokenInput.value;

		try {
			const response = await fetch('https://storage.blazingcdn.net/v3', {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			});

			if (response.ok) {
				showMessage('Authorization successful', true);
			} else {
				showMessage('Authorization failed', false);
			}
		} catch (error) {
			showMessage('An error occurred', false);
		}
	});
}

// Функція відображення списку CDN зон
function listZone() {
	const cdnZoneList = document.getElementById('cdnZoneList');

	const zones = ['Zone 1', 'Zone 2', 'Zone 3'];

	zones.forEach(zone => {
		const zoneItem = document.createElement('li');
		zoneItem.innerHTML = `${zone} <button class="delete-button button">Delete</button>`;

		const deleteButton = zoneItem.querySelector('.delete-button');
		deleteButton.addEventListener('click', () => {
			deleteZone(zone);
		});

		cdnZoneList.appendChild(zoneItem);
	});
}

// Функція відображення повідомлення
function showMessage(message, isSuccess) {
	const messagesSection = document.querySelector('.messages');
	const messageElement = document.createElement('div');
	const messageClass = isSuccess ? 'success' : 'error';

	messageElement.classList.add('message', messageClass);
	messageElement.textContent = message;

	messagesSection.appendChild(messageElement);

	setTimeout(() => {
		messagesSection.removeChild(messageElement);
	}, 5000);
}

// Функція видалення CDN зони (потребує реалізації з використанням API)
function deleteZone(zone) {
	// Реалізація видалення зони
	showMessage(`Zone "${zone}" deleted successfully`, true);
}

// Виклики функцій
authorize();
listZone();

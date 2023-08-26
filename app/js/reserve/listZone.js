import showMessage from './message.js'; // Імпортуємо функцію showMessage з файлу message.js

// Функція для відображення списку CDN зон
function listZone() {
	const cdnZoneList = document.getElementById('cdnZoneList'); // Отримуємо список CDN зон

	// Масив з вже створеними зонами (для прикладу)
	const zones = ['Zone 1', 'Zone 2', 'Zone 3'];

	zones.forEach(zone => {
		const zoneItem = document.createElement('li'); // Створюємо елемент списку

		// Створюємо текст для елемента списку та кнопку видалення
		zoneItem.innerHTML = `${zone} <button class="delete-button">Delete</button>`;

		// Додаємо обробник для кнопки видалення
		const deleteButton = zoneItem.querySelector('.delete-button');
		deleteButton.addEventListener('click', () => {
			deleteZone(zone);
		});

		cdnZoneList.appendChild(zoneItem); // Додаємо елемент до списку CDN зон
	});
}

// Функція для видалення CDN зони
function deleteZone(zone) {
	// Здійснити видалення зони за допомогою API (необхідно реалізувати)
	// Після видалення викликати showMessage з відповідним повідомленням
	showMessage(`Zone "${zone}" deleted successfully`, true);
}

// Експортуємо функцію listZone для використання в main.js
export default listZone;

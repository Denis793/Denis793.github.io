// main.js

// Функція відображення повідомлень певним кольором
function showMessage(message, color) {
	const messageContainer = document.getElementById('messageContainer');
	const messageElement = document.createElement('div');
	messageElement.textContent = message;
	messageElement.style.color = color;
	messageContainer.appendChild(messageElement);
}

// Функція авторизації за допомогою наданого токена
async function authorize(token) {
	try {
		const response = await fetch('https://storage.blazingcdn.net/v3', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${token}`
			}
		});

		if (response.ok) {
			showMessage('Authorization successful', 'green');
		} else {
			showMessage('Authorization failed', 'red');
		}
	} catch (error) {
		showMessage('Error during authorization', 'red');
	}
}

// Функція для переліку зон CDN
function listZones(zones) {
	const cdnList = document.getElementById('cdnList');
	cdnList.innerHTML = ''; // Clear the existing list

	zones.forEach(zone => {
		const zoneItem = document.createElement('li');
		zoneItem.textContent = zone.name;

		const deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.classList.add('delete-cdn');

		zoneItem.appendChild(deleteButton);
		cdnList.appendChild(zoneItem);
	});
}

// Слухач подій для форми авторизації
document.getElementById('authForm').addEventListener('submit', function(event) {
	event.preventDefault();
	const token = document.getElementById('token').value;
	authorize(token);
});

// Слухач подій для створення зони CDN
document.getElementById('createCdnBtn').addEventListener('click', function() {
	const cdnName = document.getElementById('cdnName').value;
	// Logic to create a CDN zone using cdnName
	// ...
	showMessage(`CDN zone "${cdnName}" created`, 'green');
});

// Прослуховувач подій для видалення зони CDN (делеговано)
document.getElementById('cdnList').addEventListener('click', function(event) {
	if (event.target.classList.contains('delete-cdn')) {
		const cdnItem = event.target.parentElement;
		const cdnName = cdnItem.textContent;
		// Logic to delete the CDN zone using cdnName
		// ...
		showMessage(`CDN zone "${cdnName}" deleted`, 'green');
		cdnItem.remove();
	}
});

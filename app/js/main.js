// Функція авторизації
function authorize() {
	const tokenInput = document.getElementById("token");
	const messageContainer = document.getElementById("messageContainer");

	// Запит до Back-End для авторизації
	fetch("https://storage.blazingcdn.net/v3/authorize", {
		method: "POST",
		headers: {
			"Authorization": `Bearer ${tokenInput.value}`
		}
	})
		.then(response => {
			if (response.ok) {
				showMessage("Authorization successful", "green");
			} else {
				showMessage("Authorization failed", "red");
			}
		})
		.catch(error => {
			showMessage("Authorization failed", "red");
		});
}

// Функція показу повідомлення
function showMessage(message, color) {
	const messageContainer = document.getElementById("messageContainer");
	const messageElement = document.createElement("div");
	messageElement.textContent = message;
	messageElement.style.color = color;
	messageContainer.appendChild(messageElement);
}

// Функція видалення повідомлень
function clearMessages() {
	const messageContainer = document.getElementById("messageContainer");
	messageContainer.innerHTML = "";
}

// Обробник події для форми авторизації
document.getElementById("authForm").addEventListener("submit", function (e) {
	e.preventDefault();
	clearMessages();
	authorize();
});

// Ініціалізація
clearMessages();


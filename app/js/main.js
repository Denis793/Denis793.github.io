document.addEventListener("DOMContentLoaded", () => {
	const authForm = document.getElementById("authForm");
	const tokenInput = document.getElementById("token");
	const messagesSection = document.querySelector(".messages");

	const showMessage = (message, color) => {
		const messageElement = document.createElement("p");
		messageElement.style.color = color;
		messageElement.textContent = message;
		messagesSection.appendChild(messageElement);
		setTimeout(() => {
			messageElement.remove();
		}, 7000);
	};

	const connectToServer = async () => {
		try {
			await fetch("https://storage.blazingcdn.net/v3", {
				method: "GET",
			});
			showMessage("Під'єднання до серверу успішне", "green");
		} catch (error) {
			showMessage("Помилка під'єднання до серверу", "red");
		}
	};

	const checkTokenValidity = async (token) => {
		if (!token) {
			showMessage("Відсутній токен", "red");
			return;
		}

		try {
			const response = await fetch("https://storage.blazingcdn.net/v3", {
				headers: {
					Authorization: `Bearer ${token}`,
					accept: "application/json",
				},
				method: "GET",
			});

			if (response.ok) {
				showMessage("Токен дійсний", "green");
			} else {
				showMessage("Токен недійсний", "red");
			}
		} catch (error) {
			showMessage("Токен недійсний", "red");
		}
	};

	const authorize = async (token) => {
		try {
			const response = await fetch("https://storage.blazingcdn.net/v3", {
				headers: {
					Authorization: `Bearer ${token}`,
					accept: "application/json",
				},
				method: "GET",
			});

			if (response.ok) {
				showMessage("Успішна авторизація", "green");
			} else {
				showMessage("Помилка авторизації", "red");
			}
		} catch (error) {
			showMessage("Помилка авторизації", "red");
		}
	};

	authForm.addEventListener("submit", (event) => {
		event.preventDefault();
		const token = tokenInput.value;
		connectToServer();
		checkTokenValidity(token);
		authorize(token);
	});
});

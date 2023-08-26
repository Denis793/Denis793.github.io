// Функція для відображення повідомлення
function showMessage(message, isSuccess) {
	const messagesSection = document.querySelector('.messages');
	const messageElement = document.createElement('div');

	// Вибір класу залежно від успішності операції
	const messageClass = isSuccess ? 'success' : 'error';

	messageElement.classList.add('message', messageClass);
	messageElement.textContent = message;

	messagesSection.appendChild(messageElement);

	// Автоматичне видалення повідомлення після деякого часу
	setTimeout(() => {
		messagesSection.removeChild(messageElement);
	}, 5000);
}

// Експортуємо функцію showMessage для використання в інших модулях
export default showMessage;

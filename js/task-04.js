//Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

 const decrementButton = document.querySelector('[data-action="decrement"]');
 const incrementButton = document.querySelector('[data-action="increment"]');
 const valueSpan = document.getElementById('value');
    let counterValue = 0;
    decrementButton.addEventListener('click', () => {
        counterValue -= 1;
        updateCounterValue();
    });
    incrementButton.addEventListener('click', () => {
        counterValue += 1;
        updateCounterValue();
    });
    function updateCounterValue() {
        valueSpan.textContent = counterValue;
    }

// Калькулятор скорости, времени и расстояния
function calculateMissingValue() {
    const speed = parseFloat(document.getElementById('speed').value);
    const time = parseFloat(document.getElementById('time').value);
    const distance = parseFloat(document.getElementById('distance').value);
    const resultElement = document.getElementById('calculationResult');
    
    // Подсчет заполненных полей
    const filledFields = [speed, time, distance].filter(value => !isNaN(value)).length;
    
    if (filledFields !== 2) {
        resultElement.innerHTML = '<p style="color: red;">Пожалуйста, заполните ровно ДВА поля</p>';
        return;
    }
    
    let calculation = '';
    
    // Если не заполнена скорость
    if (isNaN(speed) && !isNaN(time) && !isNaN(distance)) {
        const calculatedSpeed = distance / time;
        document.getElementById('speed').value = calculatedSpeed.toFixed(2);
        calculation = `Скорость = Расстояние / Время = ${distance} / ${time} = ${calculatedSpeed.toFixed(2)} км/ч`;
    }
    // Если не заполнено время
    else if (!isNaN(speed) && isNaN(time) && !isNaN(distance)) {
        const calculatedTime = distance / speed;
        document.getElementById('time').value = calculatedTime.toFixed(2);
        calculation = `Время = Расстояние / Скорость = ${distance} / ${speed} = ${calculatedTime.toFixed(2)} часов`;
    }
    // Если не заполнено расстояние
    else if (!isNaN(speed) && !isNaN(time) && isNaN(distance)) {
        const calculatedDistance = speed * time;
        document.getElementById('distance').value = calculatedDistance.toFixed(2);
        calculation = `Расстояние = Скорость × Время = ${speed} × ${time} = ${calculatedDistance.toFixed(2)} км`;
    }
    
    resultElement.innerHTML = `
        <h3>Результат расчета:</h3>
        <p>${calculation}</p>
        <p><strong>Проверка:</strong></p>
        <ul>
            <li>Скорость: ${!isNaN(speed) ? speed : document.getElementById('speed').value} км/ч</li>
            <li>Время: ${!isNaN(time) ? time : document.getElementById('time').value} часов</li>
            <li>Расстояние: ${!isNaN(distance) ? distance : document.getElementById('distance').value} км</li>
        </ul>
    `;
}

function clearCalculator() {
    document.getElementById('speed').value = '';
    document.getElementById('time').value = '';
    document.getElementById('distance').value = '';
    document.getElementById('calculationResult').innerHTML = '';
}
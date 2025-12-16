// Конвертер температуры
function convertTemperature() {
    const input = parseFloat(document.getElementById('tempInput').value);
    const from = document.getElementById('tempFrom').value;
    const to = document.getElementById('tempTo').value;
    const resultElement = document.getElementById('tempResult');
    
    if (isNaN(input)) {
        resultElement.textContent = 'Пожалуйста, введите число';
        return;
    }
    
    let celsius;
    
    // Конвертация в Цельсии
    switch(from) {
        case 'celsius':
            celsius = input;
            break;
        case 'fahrenheit':
            celsius = (input - 32) * 5/9;
            break;
        case 'kelvin':
            celsius = input - 273.15;
            break;
        default:
            celsius = input;
    }
    
    // Конвертация из Цельсиев
    let result;
    switch(to) {
        case 'celsius':
            result = celsius;
            break;
        case 'fahrenheit':
            result = (celsius * 9/5) + 32;
            break;
        case 'kelvin':
            result = celsius + 273.15;
            break;
        default:
            result = celsius;
    }
    
    resultElement.textContent = `${input} ${getTempUnit(from)} = ${result.toFixed(2)} ${getTempUnit(to)}`;
}

function getTempUnit(unit) {
    switch(unit) {
        case 'celsius': return '°C';
        case 'fahrenheit': return '°F';
        case 'kelvin': return 'K';
        default: return '';
    }
}

// Конвертер длины
function convertLength() {
    const input = parseFloat(document.getElementById('lengthInput').value);
    const from = document.getElementById('lengthFrom').value;
    const to = document.getElementById('lengthTo').value;
    const resultElement = document.getElementById('lengthResult');
    
    if (isNaN(input)) {
        resultElement.textContent = 'Пожалуйста, введите число';
        return;
    }
    
    // Конвертация в метры
    let meters;
    switch(from) {
        case 'meter':
            meters = input;
            break;
        case 'kilometer':
            meters = input * 1000;
            break;
        case 'centimeter':
            meters = input / 100;
            break;
        case 'inch':
            meters = input * 0.0254;
            break;
        case 'foot':
            meters = input * 0.3048;
            break;
        default:
            meters = input;
    }
    
    // Конвертация из метров
    let result;
    switch(to) {
        case 'meter':
            result = meters;
            break;
        case 'kilometer':
            result = meters / 1000;
            break;
        case 'centimeter':
            result = meters * 100;
            break;
        case 'inch':
            result = meters / 0.0254;
            break;
        case 'foot':
            result = meters / 0.3048;
            break;
        default:
            result = meters;
    }
    
    resultElement.textContent = `${input} ${getLengthUnit(from)} = ${result.toFixed(4)} ${getLengthUnit(to)}`;
}

function getLengthUnit(unit) {
    const units = {
        'meter': 'м',
        'kilometer': 'км',
        'centimeter': 'см',
        'inch': 'in',
        'foot': 'ft'
    };
    return units[unit] || '';
}

// Конвертер массы
function convertMass() {
    const input = parseFloat(document.getElementById('massInput').value);
    const from = document.getElementById('massFrom').value;
    const to = document.getElementById('massTo').value;
    const resultElement = document.getElementById('massResult');
    
    if (isNaN(input)) {
        resultElement.textContent = 'Пожалуйста, введите число';
        return;
    }
    
    // Конвертация в килограммы
    let kilograms;
    switch(from) {
        case 'kilogram':
            kilograms = input;
            break;
        case 'gram':
            kilograms = input / 1000;
            break;
        case 'ton':
            kilograms = input * 1000;
            break;
        case 'pound':
            kilograms = input * 0.453592;
            break;
        default:
            kilograms = input;
    }
    
    // Конвертация из килограммов
    let result;
    switch(to) {
        case 'kilogram':
            result = kilograms;
            break;
        case 'gram':
            result = kilograms * 1000;
            break;
        case 'ton':
            result = kilograms / 1000;
            break;
        case 'pound':
            result = kilograms / 0.453592;
            break;
        default:
            result = kilograms;
    }
    
    resultElement.textContent = `${input} ${getMassUnit(from)} = ${result.toFixed(4)} ${getMassUnit(to)}`;
}

function getMassUnit(unit) {
    const units = {
        'kilogram': 'кг',
        'gram': 'г',
        'ton': 'т',
        'pound': 'lb'
    };
    return units[unit] || '';
}

// Конвертер скорости
function convertSpeed() {
    const input = parseFloat(document.getElementById('speedInput').value);
    const from = document.getElementById('speedFrom').value;
    const to = document.getElementById('speedTo').value;
    const resultElement = document.getElementById('speedResult');
    
    if (isNaN(input)) {
        resultElement.textContent = 'Пожалуйста, введите число';
        return;
    }
    
    // Конвертация в м/с
    let metersPerSecond;
    switch(from) {
        case 'kmh':
            metersPerSecond = input * 1000 / 3600;
            break;
        case 'ms':
            metersPerSecond = input;
            break;
        case 'mph':
            metersPerSecond = input * 1609.34 / 3600;
            break;
        case 'knot':
            metersPerSecond = input * 1852 / 3600;
            break;
        default:
            metersPerSecond = input;
    }
    
    // Конвертация из м/с
    let result;
    switch(to) {
        case 'kmh':
            result = metersPerSecond * 3600 / 1000;
            break;
        case 'ms':
            result = metersPerSecond;
            break;
        case 'mph':
            result = metersPerSecond * 3600 / 1609.34;
            break;
        case 'knot':
            result = metersPerSecond * 3600 / 1852;
            break;
        default:
            result = metersPerSecond;
    }
    
    resultElement.textContent = `${input} ${getSpeedUnit(from)} = ${result.toFixed(4)} ${getSpeedUnit(to)}`;
}

function getSpeedUnit(unit) {
    const units = {
        'kmh': 'км/ч',
        'ms': 'м/с',
        'mph': 'mph',
        'knot': 'узлы'
    };
    return units[unit] || '';
}
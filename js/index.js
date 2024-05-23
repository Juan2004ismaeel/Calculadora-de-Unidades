const lengthUnits = {
    kilómetros: 1000,
    metros: 1,
    centímetros: 0.01,
    milímetros: 0.001,
    millas: 1609.34,
    yardas: 0.9144,
    pies: 0.3048,
    pulgadas: 0.0254
};

const massUnits = {
    toneladas: 1000000,
    kilogramos: 1000,
    gramos: 1,
    miligramos: 0.001,
    libras: 453.592,
    onzas: 28.3495
};

const speedUnits = {
    'millas por hora': 0.44704,
    'millas por segundo': 1609.34,
    'kilómetros por hora': 0.277778,
    'kilómetros por segundo': 1000,
    nudos: 0.514444,
    'metros por hora': 1/3600,
    'metros por segundo': 1
};

const units = {
    length: lengthUnits,
    mass: massUnits,
    speed: speedUnits
};

function updateUnits() {
    const measurementType = document.getElementById('measurementType').value;
    const inputUnitSelect = document.getElementById('inputUnit');
    const outputUnitSelect = document.getElementById('outputUnit');

    const selectedUnits = units[measurementType];

    inputUnitSelect.innerHTML = '';
    outputUnitSelect.innerHTML = '';

    for (const unit in selectedUnits) {
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');
        option1.value = unit;
        option2.value = unit;
        option1.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
        option2.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
        inputUnitSelect.appendChild(option1);
        outputUnitSelect.appendChild(option2);
    }
}

function convert() {
    const measurementType = document.getElementById('measurementType').value;
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(inputValue)) {
        document.getElementById('result').textContent = "Por favor, ingrese un número válido.";
        return;
    }

    const baseValue = inputValue * units[measurementType][inputUnit];
    const outputValue = baseValue / units[measurementType][outputUnit];

    // Determinar el número de decimales necesarios
    const decimalPlaces = Math.max(2, (inputValue.toString().split('.')[1] || '').length, (outputValue.toString().split('.')[1] || '').length);

    document.getElementById('result').textContent = `${inputValue} ${inputUnit} son ${outputValue.toFixed(decimalPlaces)} ${outputUnit}`;
}

document.getElementById('measurementType').addEventListener('change', updateUnits);
document.getElementById('convertButton').addEventListener('click', convert);
document.addEventListener('DOMContentLoaded', updateUnits);

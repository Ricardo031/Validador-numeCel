const btnVerificar = document.getElementById('check-btn');
const btnlimpiar = document.getElementById('clear-btn');
const inputField = document.getElementById('user-input'); // Aquí capturamos el elemento, no su valor.
const list = document.getElementById('list')
const result = document.getElementById('results-div');

btnVerificar.addEventListener('click', (e) => {
    e.preventDefault();

    const numero = inputField.value; // Obtener el valor del campo de entrada
    //*Verificar campo vacio
    if (numero === '') {
        result.textContent = 'Por favor, ingrese un número';
        return;
    }

    //*Verificador del numero
    let patron =  /^(?:\+57|57)?\s*(3[0-9]{2})\s*([0-9]{7})$/;
    //* ?:indica que no queremos capturar este grupo
    // \+57|57 puede comenzar con +57 o 57 
    // [0-9]{2} los siguientes dos caracteres deben ser dígitos del 0 al 9.
    //o mejor dicho "el numero empieza en 3, luego coger 2 numero de entre 0 a 9"
    if (patron.test(numero)) {
        result.style.color = 'green';
        result.textContent = `valido: ${numero}`;
    } else {
        result.style.color = 'red';
        result.textContent = `invalido: ${numero}`;
    }

    //* Limpiar el campo de entrada
    inputField.value = '';

});

btnlimpiar.addEventListener('click', (e) => {
    e.preventDefault();

    // Limpiar el campo de entrada
    inputField.value = '';

    // Limpiar el contenido del resultado
    result.textContent = '';
});
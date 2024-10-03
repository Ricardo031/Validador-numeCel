let telefonos = [
    '+57 983 432 6911', //*
    '132131',
    '+57 234 1234567',
    '+57 123 123 12 12',
    '+571 123 123 1234',
    '12-12-12#123',
    '++5712345667891',
    '12r12y42',
    '131241p123',
    '57 123 123 1234', //*
    '+571234567891'
]

validarTelefono(telefonos)

function validarTelefono(num) {
    let patron = /^\+?\d{2}(\s\d{3}){2}\s\d{4}$/;

    //^ Inicio de linea
    // \+? que tenga o no caracter de +
    // \d{2} seguido de 2 digitos
    // (\s\d{3}){2} repetir el patron 2 veces de un espacio en blanco seguido de 3 digitos
    // \s un espacio en blanco
    // \d{4} seguido de 4 digitos
    // $ fin de la linea
 
    telefonos.forEach( item => {
        if(patron.test(item)) {
            console.log(`el Telefono es valido ${item} `);
        }else {
            console.error(`El ${item} no es valido `);
        }
    })
}
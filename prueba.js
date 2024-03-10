//Unit Testing

function probarValidarForm(){
    console.assert(
        validarForm('') === 'Este campo debe tener al menos un caracter',
        'Validar Form no validó que el campo no sea vacío' 
    );
    console.assert(
        validarForm('1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') 
        === 'Este campo debe tener menos de 50 caracteres',
        'Validar Form no validó que el campo no tenga más de 50 caracteres'
    );

    console.assert(
        validarForm('hola') === '',
        'Validar Form falló con un nombre valido'
    );
    };

    probarValidarForm();
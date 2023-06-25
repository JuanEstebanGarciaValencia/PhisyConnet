document.getElementById('user-selection-button').addEventListener('click', function () {
    var userType = document.getElementById('user-type').value;
    if (userType === 'paciente') {
        // Mostrar formulario de paciente y ocultar formulario de terapeuta
        document.getElementById('paciente-form').style.display = 'block';
        document.getElementById('terapeuta-form').style.display = 'none';
    } else if (userType === 'terapeuta') {
        // Mostrar formulario de terapeuta y ocultar formulario de paciente
        document.getElementById('paciente-form').style.display = 'none';
        document.getElementById('terapeuta-form').style.display = 'block';
    }
    // Ocultar selección de tipo de usuario
    document.getElementById('user-selection').style.display = 'none';
});


// Agregar el evento de clic al botón de inicio de sesión de paciente
document.getElementById('section-user').addEventListener('click', function () {
    
    var username = document.getElementById('username-paciente').value;
    var password = document.getElementById('password-paciente').value;

    // Validar el usuario y la contraseña del paciente
    if (username === 'j' && password === '123') {
        window.location.href = '/perfil-paciente.html';
    } else {
        // Mostrar mensaje de error
        alert('Usuario o contraseña incorrectos para el paciente');
    }
});

// Agregar el evento de clic al botón de inicio de sesión de terapeuta
document.getElementById('section-doctor').addEventListener('click', function () {
   
    var username = document.getElementById('username-terapeuta').value;
    var password = document.getElementById('password-terapeuta').value;

    // Validar el usuario y la contraseña del terapeuta
    if (username === 'yesica' && password === 'martes') {
        window.location.href = 'perfil-terapeuta.html';
    } else {
        // Mostrar mensaje de error
        alert('Usuario o contraseña incorrectos para el terapeuta');
    }
});

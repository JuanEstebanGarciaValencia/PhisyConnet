document.getElementById('guardar-cita-button').addEventListener('click', function() {
    // Obtener los valores de los campos de entrada
    const paciente = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const lujar = document.getElementById('lugar').value;
    const motivo = document.getElementById('motivo').value;
    const terapeuta = document.getElementById('terapeuta').value;
    
    // Realizar las acciones para guardar los datos de la cita
    // Por ejemplo, puedes enviar los datos a un servidor o almacenarlos en una base de datos
    
    // Mostrar un mensaje de éxito o realizar otras acciones necesarias
    
    alert('La cita se ha guardado correctamente.');
  });
document.getElementById('edit-button').addEventListener('click', function() {
    document.getElementById('nombre').contentEditable = true;
    document.getElementById('edad').contentEditable = true;
    document.getElementById('genero').contentEditable = true;
    document.getElementById('correo').contentEditable = true;
    document.getElementById('telefono').contentEditable = true;
    document.getElementById('enfermedad').contentEditable = true;
    document.getElementById('lesiones').contentEditable = true;
    document.getElementById('peso').contentEditable = true;
    document.getElementById('altura').contentEditable = true;
    document.getElementById('objetivo').contentEditable = true;
    document.getElementById('fecha-inicio').contentEditable = true;
    document.getElementById('fecha-final').contentEditable = true;
  
    // Aplicar clase de estilo 'editable' a los elementos
    document.getElementById('nombre').classList.add('editable');
    document.getElementById('edad').classList.add('editable');
    document.getElementById('genero').classList.add('editable');
    document.getElementById('correo').classList.add('editable');
    document.getElementById('telefono').classList.add('editable');
    document.getElementById('enfermedad').classList.add('editable');
    document.getElementById('lesiones').classList.add('editable');
    document.getElementById('peso').classList.add('editable');
    document.getElementById('altura').classList.add('editable');
    document.getElementById('objetivo').classList.add('editable');
    document.getElementById('fecha-inicio').classList.add('editable');
    document.getElementById('fecha-final').classList.add('editable');
  });
  
  document.getElementById('save-button').addEventListener('click', function() {
    document.getElementById('nombre').contentEditable = false;
    document.getElementById('edad').contentEditable = false;
    document.getElementById('genero').contentEditable = false;
    document.getElementById('correo').contentEditable = false;
    document.getElementById('telefono').contentEditable = false;
    document.getElementById('enfermedad').contentEditable = false;
    document.getElementById('lesiones').contentEditable = false;
    document.getElementById('peso').contentEditable = false;
    document.getElementById('altura').contentEditable = false;
    document.getElementById('objetivo').contentEditable = false;
    document.getElementById('fecha-inicio').contentEditable = false;
    document.getElementById('fecha-final').contentEditable = false;
  
    // Remover clase de estilo 'editable' de los elementos
    document.getElementById('nombre').classList.remove('editable');
    document.getElementById('edad').classList.remove('editable');
    document.getElementById('genero').classList.remove('editable');
    document.getElementById('correo').classList.remove('editable');
    document.getElementById('telefono').classList.remove('editable');
    document.getElementById('enfermedad').classList.remove('editable');
    document.getElementById('lesiones').classList.remove('editable');
    document.getElementById('peso').classList.remove('editable');
    document.getElementById('altura').classList.remove('editable');
    document.getElementById('objetivo').classList.remove('editable');
    document.getElementById('fecha-inicio').classList.remove('editable');
    document.getElementById('fecha-final').classList.remove('editable');
  });


  // Obtener referencias a los elementos del DOM
const profileImage = document.getElementById('profile-image');
const chooseImageButton = document.getElementById('choose-image-button');
const imageInput = document.getElementById('image-input');

// Agregar un evento de clic al botón para abrir el diálogo de selección de archivo
chooseImageButton.addEventListener('click', function() {
  imageInput.click();
});

// Agregar un evento de cambio al input de archivo
imageInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  
  // Verificar que se haya seleccionado un archivo
  if (file) {
    // Crear un objeto URL para la imagen seleccionada
    const imageURL = URL.createObjectURL(file);
    
    // Mostrar la imagen en el elemento de imagen de perfil
    profileImage.src = imageURL;
  }
});

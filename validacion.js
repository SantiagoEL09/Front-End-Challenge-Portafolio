//Haz tú validación en javascript acá

// Paso 1: Obtener referencias a elementos importantes de nuestra página web
// Imagina que estos son como los nombres de tus amigos, para poder llamarlos cuando los necesites
const form = document.querySelector('.formcontato__form'); 
// "form" es el nombre que le damos al formulario completo en nuestro sitio web

const nombreInput = document.querySelector('input[name="nombre"]');
// "nombreInput" es el nombre que le damos al espacio donde la gente escribe su nombre

const emailInput = document.querySelector('input[name="email"]');
// "emailInput" es para el espacio donde escriben su correo electrónico

const telefonoInput = document.querySelector('input[name="telefono"]'); 
// "telefonoInput" es para el espacio donde escriben su número de teléfono

// Paso 2: Creamos una caja vacía para guardar la información que nos den
let datosFormulario = []; 
// Imagina que "datosFormulario" es una caja donde vamos a guardar papelitos con los datos

// Paso 3: Reglas para verificar si los datos son correctos (como un juego)
function validarNombre(nombre) {
  const regex = /^[A-Za-z\s]+$/; // Esta línea es como una fórmula secreta que solo entiende la computadora, pero significa: "Solo se permiten letras (de la A a la Z, mayúsculas o minúsculas) y espacios en el nombre"
  return regex.test(nombre); // Esto es como preguntar: "¿El nombre cumple la fórmula secreta?" Si sí, devuelve "verdadero", si no, devuelve "falso"
}

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Otra fórmula secreta, esta vez para verificar si el correo electrónico tiene el formato correcto (con un "@" y un punto)
  return regex.test(email); // Pregunta: "¿El correo electrónico cumple la fórmula secreta?"
}

function validarTelefono(telefono) {
  const regex = /^\d+$/; // Fórmula secreta para verificar si el teléfono solo tiene números
  return regex.test(telefono); // Pregunta: "¿El teléfono cumple la fórmula secreta?"
}

// Paso 4: Esperar a que alguien envíe el formulario (como esperar a que toquen el timbre)
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Esto es como decir: "Espera, no envíes el formulario todavía, primero vamos a revisarlo"

  // Paso 5: Revisar cada dato que nos dieron (como revisar si los papelitos están bien escritos)
  const nombreValido = validarNombre(nombreInput.value); // Tomamos el valor del espacio del nombre y lo revisamos con la fórmula secreta
  const emailValido = validarEmail(emailInput.value); // Lo mismo para el correo electrónico
  const telefonoValido = validarTelefono(telefonoInput.value); // Y para el teléfono

  // Paso 6: Si algo está mal, avisar a la persona (como si le dijeras: "Oye, te equivocaste en algo")
  if (!nombreValido) {
    alert('Por favor, ingresa un nombre válido (solo letras y espacios).'); // Mostramos un mensaje de alerta
    nombreInput.focus(); // Ponemos el cursor en el espacio del nombre para que lo corrijan
    return; // Salimos de la función, no seguimos
  }

  if (!emailValido) {
    alert('Por favor, ingresa un correo electrónico válido.'); // Mensaje para el correo electrónico
    emailInput.focus(); 
    return;
  }

  if (!telefonoValido) {
    alert('Por favor, ingresa un número de teléfono válido (solo números).'); // Mensaje para el teléfono
    telefonoInput.focus();
    return;
  }

  // Paso 7: Si todo está bien, guardar los datos en nuestra caja (como guardar los papelitos)
  if (nombreValido && emailValido && telefonoValido) {
    datosFormulario.push({
      nombre: nombreInput.value, // Guardamos el nombre
      email: emailInput.value,   // Guardamos el correo electrónico
      telefono: telefonoInput.value // Guardamos el teléfono
    });

    // Paso 8 (opcional): Mostrar los datos en la consola del navegador (esto es para los programadores)
    console.log(datosFormulario); 

    // Paso 9 (opcional): Borrar los espacios del formulario para que la persona pueda escribir nuevos datos
    form.reset();
  }
});
/* NIVELL 1 */


function showOnConsole() {
  var form = {
    email: document.getElementById("email").value,
    firstname: document.getElementById("name").value,
    surname: document.getElementById("surname").value,
}
  if(form.email !== "") {
    console.log('Este es el mail: ' + form.email);
  }
  if(form.firstname !== "") {
    console.log('Este es el nombre: ' + form.firstname);
  }
  if(form.surname !== "") {
    console.log('Este es el apellido: ' + form.surname);
  }
    
    
}
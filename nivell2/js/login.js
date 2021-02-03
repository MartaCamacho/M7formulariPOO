

/* NIVELL 2 */

class User {
  constructor (email, firstname, surname) {
    this.email = email;
    this.firstname = firstname;
    this.surname = surname;
  }
}

function addItem(){
  var form = {
    email: document.getElementById("email").value,
    firstname: document.getElementById("name").value,
    surname: document.getElementById("surname").value,
}
	var container = document.getElementById("theInfo");
  var user = new User(form.email, form.firstname, form.surname);
  var text = document.createElement("div");
  var deleteButton = document.createElement("button");
  text.setAttribute('id',user.email);
  text.appendChild(document.createTextNode('Este es el mail: ' + `${user.email}` + ' Este es el nombre: ' + `${user.firstname}` + ' Este es el apellido: ' + `${user.surname}`));
  deleteButton.appendChild(document.createTextNode('Borrar'))
  deleteButton.id = "deleteButton"
  container.appendChild(text);
  container.appendChild(deleteButton);
  deleteButton.setAttribute("onclick","removeItem()") ;
}

function removeItem(){
  var form = {
    email: document.getElementById("email").value,
    firstname: document.getElementById("name").value,
    surname: document.getElementById("surname").value,
}
var user = new User(form.email, form.firstname, form.surname);
  var n = user.email
	var container = document.getElementById("theInfo");
  var user = document.getElementById(n);
  var deleteButton = document.getElementById('deleteButton');
  container.removeChild(user);
  container.removeChild(deleteButton);
}
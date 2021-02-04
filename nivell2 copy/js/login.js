

/* NIVELL 2 */


class User {
  constructor (email, firstname, surname) {
    this.email = email;
    this.firstname = firstname;
    this.surname = surname;
  }
}

class Notification {
  constructor (item) {
    this.item = item;
  }

  addItem(){
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
    text.appendChild(document.createTextNode('mail: ' + `${user.email},` + ' nombre: ' + `${user.firstname},` + ' apellido: ' + `${user.surname}.`));
    deleteButton.appendChild(document.createTextNode('Borrar'))
    deleteButton.id = "deleteButton"
    container.appendChild(text);
    text.appendChild(deleteButton);
    text.className="alert alert-info mb-1 mt-1";
    deleteButton.setAttribute("onclick","this.parentElement.remove()");
    deleteButton.className=`btn btn-danger ${user.email}`;
  }
  
  removeItem(){
    var form = {
      email: document.getElementById("email").value,
      firstname: document.getElementById("name").value,
      surname: document.getElementById("surname").value,
  }
    var n = form.email
    var user = document.getElementById(n);
    console.log(user, 'el user')
    user.remove();
  }

}

const notify = new Notification(form)

function addTheItem() {
  return notify.addItem()
}

function deteleTheItem() {
  console.log(element.parentNode, 'el papa')
  return notify.removeItem()
}
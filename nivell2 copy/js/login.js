/* NIVELL 3 */

class User {
  constructor(email, firstname, surname) {
    this.email = email;
    this.firstname = firstname;
    this.surname = surname;
  }
}

class Notification {
  constructor(item) {
    this.item = item;
  }

  addItem() {
    var form = {
      email: document.getElementById("email").value,
      firstname: document.getElementById("name").value,
      surname: document.getElementById("surname").value,
    };
    console.log(form.email, "la form");
    if (form.email === "" || form.firstname === "" || form.surname === "") {
      var topNotification = document.getElementById(
        "top-notification-container"
      );
      var notificationContainer = document.createElement("div");
      topNotification.appendChild(notificationContainer);
      notificationContainer.className =
        "alert alert-danger alert-dismissible fade show";
      notificationContainer.appendChild(
        document.createTextNode("Por favor, rellena todos los campos")
      );
      notificationContainer.setAttribute("role", "alert");
      var dismissButton = document.createElement("button");
      dismissButton.className = "btn-close";
      dismissButton.setAttribute("data-bs-dismiss", "alert");
      notificationContainer.appendChild(dismissButton);
    } else {
      var container = document.getElementById("theInfo");
      var user = new User(form.email, form.firstname, form.surname);
      var text = document.createElement("div");
      var deleteButton = document.createElement("button");
      text.setAttribute("id", user.email);
      text.appendChild(
        document.createTextNode(
          "mail: " +
            `${user.email},` +
            " nombre: " +
            `${user.firstname},` +
            " apellido: " +
            `${user.surname}.`
        )
      );
      deleteButton.appendChild(document.createTextNode("Borrar"));
      deleteButton.id = "deleteButton";
      container.appendChild(text);
      text.appendChild(deleteButton);
      text.className = "alert alert-info mb-1 mt-1";
      deleteButton.setAttribute("onclick", "this.parentElement.remove()");
      deleteButton.className = `btn btn-danger ${user.email}`;

      var topNotification = document.getElementById(
        "top-notification-container"
      );
      var notificationContainer = document.createElement("div");
      topNotification.appendChild(notificationContainer);
      notificationContainer.className =
        "alert alert-success alert-dismissible fade show";
      notificationContainer.appendChild(
        document.createTextNode("Usuario creado correctamente")
      );
      notificationContainer.setAttribute("role", "alert");
      var dismissButton = document.createElement("button");
      dismissButton.className = "btn-close";
      dismissButton.setAttribute("data-bs-dismiss", "alert");
      notificationContainer.appendChild(dismissButton);
    }
  }

  removeItem() {
    var form = {
      email: document.getElementById("email").value,
      firstname: document.getElementById("name").value,
      surname: document.getElementById("surname").value,
    };
    var n = form.email;
    var user = document.getElementById(n);
    console.log(user, "el user");
    user.remove();
  }
}

const notify = new Notification(form);

function addTheItem() {
  return notify.addItem();
}

function deteleTheItem() {
  console.log(element.parentNode, "el papa");
  return notify.removeItem();
}

/* NIVELL 3 */

class User {
  constructor(email, firstname, surname) {
    this.email = email;
    this.firstname = firstname;
    this.surname = surname;
  }
}

var arr = [];

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
    
    function checkDuplicate() {
      let map = {};
      let result = false;
      for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
          result = true;
          break;
        }
        map[arr[i]] = true;
      }
      if (result) {
        var topNotification = document.getElementById(
          "top-notification-container"
        );
        var notificationContainer = document.createElement("div");
        topNotification.appendChild(notificationContainer);
        notificationContainer.className =
          "alert alert-danger alert-dismissible fade show";
        notificationContainer.appendChild(
          document.createTextNode("El email no puede estar repetido")
        );
        notificationContainer.setAttribute("role", "alert");
        var dismissButton = document.createElement("button");
        dismissButton.className = "btn-close";
        dismissButton.setAttribute("data-bs-dismiss", "alert");
        notificationContainer.appendChild(dismissButton);
      } else {
        arr.push(form.email);
        function validateEmail(x) {
          const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(x);
        }
        const validate = validateEmail(form.email);

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
        } else if (validate === false){
          var topNotification = document.getElementById(
            "top-notification-container"
          );
          var notificationContainer = document.createElement("div");
          topNotification.appendChild(notificationContainer);
          notificationContainer.className =
            "alert alert-danger alert-dismissible fade show";
          notificationContainer.appendChild(
            document.createTextNode("El email no es válido")
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
          text.className =
            "alert alert-info mb-1 mt-1 d-flex justify-content-between";
          deleteButton.setAttribute(
            "onclick",
            "this.parentElement.remove(); deteleTheItem()"
          );
          deleteButton.className = `btn btn-danger ${user.email}`;

          var topNotification = document.getElementById(
            "top-notification-container"
          );
          var notificationContainer = document.createElement("div");
          topNotification.appendChild(notificationContainer);
          notificationContainer.className =
            "alert alert-success alert-dismissible fade show  d-flex justify-content-between";
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
    }
    checkDuplicate()
  }

  removeItem() {
    var topNotification = document.getElementById("top-notification-container");
    var notificationContainer = document.createElement("div");
    topNotification.appendChild(notificationContainer);
    notificationContainer.className =
      "alert alert-danger alert-dismissible fade show";
    notificationContainer.appendChild(
      document.createTextNode("Eliminado con éxito")
    );
    notificationContainer.setAttribute("role", "alert");
    var dismissButton = document.createElement("button");
    dismissButton.className = "btn-close";
    dismissButton.setAttribute("data-bs-dismiss", "alert");
    notificationContainer.appendChild(dismissButton);
  }
}

const notify = new Notification(form);

function addTheItem() {
  function myFunction() {
    var myVar;
    myVar = setTimeout(alertFunc, 2500);
  }
  var topNotification = document.getElementById("top-notification-container");
  function alertFunc() {
    topNotification.removeChild(topNotification.firstChild);
  }
  myFunction();
  return notify.addItem();
}

function deteleTheItem() {
  function myFunction() {
    var myVar;
    myVar = setTimeout(alertFunc, 2500);
  }
  var topNotification = document.getElementById("top-notification-container");
  function alertFunc() {
    topNotification.removeChild(topNotification.firstChild);
  }
  myFunction();
  return notify.removeItem();
}

function resetform() {
  var reseteo = document.getElementById("form").reset();
  return reseteo;
}

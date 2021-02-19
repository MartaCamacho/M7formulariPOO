/* NIVELL 3 */

class User {
  constructor(email, firstname, surname) {
    this.email = email;
    this.firstname = firstname;
    this.surname = surname;
  }
}

var items = [];
let result = false;

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

    function add(item) {
      if(result === false){
        if(items.indexOf(item) === -1) {
          items.push(item);
        } else if(items.indexOf(item) !== -1) {
          result = true;
        }
      } else {
        console.log('error')
      }
    }


      var notificationContainer = document.createElement("div");
      var topNotification = document.getElementById(
        "top-notification-container"
      );
      var dismissButton = document.createElement("button");

      function textNodeAlertClass(nodeClass, text) {
        topNotification.appendChild(notificationContainer);
        notificationContainer.className =
          `alert alert-dismissible fade show ${nodeClass}`;
        notificationContainer.appendChild(
          document.createTextNode(`${text}`)
        );
        notificationContainer.setAttribute("role", "alert");
      }

      function dismissButtonClass() {
        dismissButton.className = "btn-close";
        dismissButton.setAttribute("data-bs-dismiss", "alert");
        notificationContainer.appendChild(dismissButton);
      }

      if (result === true) {
        textNodeAlertClass("alert-danger", "El email no puede estar repetido")
        dismissButtonClass();
      } else {
        add(form.email)
        items.push(form.email);
        function validateEmail(x) {
          const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(x);
        }
        const validate = validateEmail(form.email);

        if (form.email === "" || form.firstname === "" || form.surname === "") {
          textNodeAlertClass("alert-danger", "Por favor, rellena todos los campos");
          dismissButtonClass();
        } else if (validate === false){
          textNodeAlertClass("alert-danger", "El email no es válido")
          dismissButtonClass()
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
          textNodeAlertClass(" alert-success d-flex justify-content-between", "Usuario creado correctamente")
          dismissButtonClass()
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
var topNotification = document.getElementById("top-notification-container");
function myFunction() {
  var myVar;
  myVar = setTimeout(alertFunc, 2500);
}

function alertFunc() {
  topNotification.removeChild(topNotification.firstChild);
}

function addTheItem() {
  myFunction();
  return notify.addItem();
}

function deteleTheItem() {
  myFunction();
  return notify.removeItem();
}

function resetform() {
  var reseteo = document.getElementById("form").reset();
  return reseteo;
}

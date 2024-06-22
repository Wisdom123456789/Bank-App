let email = document.getElementById("email");
let password = document.getElementById("password");
let visible = document.getElementById("visible");
let novisible = document.getElementById("novisible");
let incorrect = document.getElementById("incorrect");

const firebaseConfig = {
  apiKey: "AIzaSyBNkhr44oceUahafL_OjyZXj_5L7DJemxI",
  authDomain: "bank-app-85d39.firebaseapp.com",
  projectId: "bank-app-85d39",
  storageBucket: "bank-app-85d39.appspot.com",
  messagingSenderId: "214908019440",
  appId: "1:214908019440:web:c486695186d9c5151d9835",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

function showToast(message) {
  Toastify({
    text: message,
    duration: 1000,
    close: true,
    gravity: "top", // top or bottom
    position: "right", // left, center, or right
    backgroundColor: "#4caf50",
    stopOnFocus: true, // Prevents dismissing of toast on hover
  }).showToast();
}

function showPassword() {
  if (password.type == "password") {
    password.type = "text";
    visible.style.display = "none";
    novisible.style.display = "block";
  } else {
    password.type = "password";
    visible.style.display = "block";
    novisible.style.display = "none";
  }
}

function loginpage() {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      userPerson = user.email;
      console.log("hello");
      showToast("Login Successful");
      setTimeout(function () {
        window.location.href = "../html/dashboard.html";
      }, 2000);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      showToast("Incorrect Password Or fill in the information provider")
    });
}

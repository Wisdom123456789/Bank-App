let pageOne = document.getElementById("page1");
let pageTwo = document.getElementById("page2");
let email = document.getElementById("email");
let gender = document.getElementById("gender");
let marital = document.getElementById("marital");
let username = document.getElementById("username");
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let country = document.getElementById("Country");
let phoneNumber = document.getElementById("phoneNumber");
let birthDate = document.getElementById("birthDate");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let paragraphOne = document.getElementById("para1");
let paragraphTwo = document.getElementById("para2");
let paragraphThree = document.getElementById("para3");
let paragraphFour = document.getElementById("para4");
let visible = document.getElementById("visible");
let novisible = document.getElementById("novisible");
let pageTwoPartOne = document.getElementById("page2Part1");
let pageTwoPartTwo = document.getElementById("page2Part2");
let inputone = document.getElementById("inputone");
let inputtwo = document.getElementById("inputtwo");
let inputthree = document.getElementById("inputthree");
let inputfour = document.getElementById("inputfour");
let accountNumber;
let incorrect = document.getElementById("incorrect");
let incorrectPassword = document.getElementById("incorrectPassword");
let incorrectPasswordLong = document.getElementById("incorrectPasswordLong");
let incorrectEmail = document.getElementById("incorrectEmail");
let incorrectPin = document.getElementById("incorrectPin");

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
// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

function showToast(message) {
  Toastify({
    text: message,
    duration: 3000,
    close: true,
    gravity: "top", // top or bottom
    position: "right", // left, center, or right
    backgroundColor: "#4caf50",
    stopOnFocus: true, // Prevents dismissing of toast on hover
  }).showToast();
}

function confirmPass() {
  if (confirmPassword.type == "password") {
    confirmPassword.type = "text";
    visible.style.display = "none";
    novisible.style.display = "block";
  } else {
    confirmPassword.type = "password";
    novisible.style.display = "none";
    visible.style.display = "block";
  }
}
function showPassword() {
  if (password.type == "password") {
    password.type = "text";
    visibleone.style.display = "none";
    novisibleone.style.display = "block";
  } else {
    password.type = "password";
    novisibleone.style.display = "none";
    visibleone.style.display = "block";
  }
}
function nextPage() {
  pageOne.style.left = "-110%";
  pageTwo.style.left = "0";
  pageTwoPartOne.style.left = "100%";
  pageTwoPartTwo.style.left = "200%";
}
function nextPageone() {
  pageOne.style.left = "-210%";
  pageTwo.style.left = "-110%";
  pageTwoPartOne.style.left = "0";
  pageTwoPartTwo.style.left = "100%";
}
function nextPagetwo() {
  pageOne.style.left = "-310%";
  pageTwo.style.left = "-210%";
  pageTwoPartOne.style.left = "-110%";
  pageTwoPartTwo.style.left = "0";
}
function prevPage() {
  pageOne.style.left = "-210%";
  pageTwo.style.left = "-110%";
  pageTwoPartOne.style.left = "0";
  pageTwoPartTwo.style.left = "100%";
}
function prevPageone() {
  pageOne.style.left = "0";
  pageTwo.style.left = "100%";
  pageTwoPartOne.style.left = "200%";
  pageTwoPartTwo.style.left = "300%";
}
function prevPagetwo() {
  pageOne.style.left = "-110%";
  pageTwo.style.left = "0";
  pageTwoPartOne.style.left = "100%";
  pageTwoPartTwo.style.left = "200%";
}
function movetonext() {
  if (inputone.value.length == 1) {
    inputtwo.focus();
  }
  if (inputtwo.value.length == 1) {
    inputthree.focus();
  }
  if (inputthree.value.length == 1) {
    inputfour.focus();
  }
}
let inputTwoOne = document.getElementById("input2one");
let inputTwoTwo = document.getElementById("input2two");
let inputTwoThree = document.getElementById("input2three");
let inputTwoFour = document.getElementById("input2four");

function movetonextone() {
  if (inputTwoOne.value.length == 1) {
    inputTwoTwo.focus();
  }
  if (inputTwoTwo.value.length == 1) {
    inputTwoThree.focus();
  }
  if (inputTwoThree.value.length == 1) {
    inputTwoFour.focus();
  }
}

function submit() {
  if (
    email.value == "" ||
    password.value == "" ||
    confirmPassword.value == "" ||
    firstName.value == "" ||
    lastName.value == "" ||
    country.value == "" ||
    phoneNumber.value == "" ||
    birthDate.value == ""
  ) {
    showToast("Fill in the info");
  } else if (confirmPassword.value != password.value) {
    showToast("Password aren't the same");
  } else if (password.value.length < 6) {
    showToast("Password cannot be less than 6 ");
  } else if (!email.value.includes("@") || !email.value.includes(".com")) {
    showToast("Invalid Email Address");
  } else if (
    inputone.value != inputTwoOne.value ||
    inputtwo.value != inputTwoTwo.value ||
    inputthree.value != inputTwoThree.value ||
    inputfour.value != inputTwoFour.value
  ) {
    showToast("Pin not match");
  } else {
    postingUser();
  }
}

function postingUser() {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      for (let index = 0; index < 16; index++) {
        accountNumber = Math.floor(Math.random() * 10000000000000000);
      }
      // Add a new document in collection "cities"
      db.collection("User")
        .doc(email.value)
        .set({
          Firstname: firstName.value,
          Lastname: lastName.value,
          Phone: phoneNumber.value,
          Birthdate: birthDate.value,
          Email: email.value,
          Password: password.value,
          Marital: marital.value,
          Username: username.value,
          Gender: gender.value,
          PIN:
            inputone.value +
            inputtwo.value +
            inputthree.value +
            inputfour.value,
          Amount: 2000,
          ProfilePicture: "",
          Account: accountNumber,
        })
        .then(() => {
          showToast("SignUp Successful");
          setTimeout(function () {
            window.location.href = "../html/login.html";
          }, 2000);
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
}

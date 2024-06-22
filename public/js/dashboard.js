// This dashboard is for navigating from one page to the other
const home_page = document.getElementById("home_page");
const send_page = document.getElementById("send_page");
const pay_page = document.getElementById("pay_page");
const card_page = document.getElementById("card_page");
const account_page = document.getElementById("account-page");
const home = document.getElementById("home");
const send = document.getElementById("send");
const receipt = document.getElementById("receipt");
const budget = document.getElementById("budget");
const card = document.getElementById("card");
const budget_page = document.getElementById("budget_page");
const account = document.getElementById("account");
const accountText = document.getElementById("account-text");
const mobileViewProfile = document.getElementById("mobile-view-profile");
const mobileHeader = document.getElementById("mobileHeader");
const generalHeader = document.getElementById("general-header");

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

function showToast(param) {
  Toastify({
    text: param,
    duration: 3000, // Duration in milliseconds
    close: true, // Show close button
    gravity: "top", // Position: top or bottom
    position: "right", // Position: left, center or right
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Background color
  }).showToast();
}

function sendpage() {
  home_page.style.display = "none";
  send_page.style.display = "block";
  mobileHeader.style.display = "none";
  card_page.style.display = "none";
  account_page.style.display = "none";
  pay_page.style.display = "none";
  budget_page.style.display = "none";
  send.style.color = "rgb(0,25,102)";
  send.style.borderBottom = "3px solid rgb(0, 25, 102)";
  home.style.color = "rgb(192, 175, 175)";
  home.style.borderBottom = "none";
  card.style.color = "rgb(192, 175, 175)";
  card.style.borderBottom = "none";
  budget.style.color = "rgb(192, 175, 175)";
  budget.style.borderBottom = "none";
  receipt.style.color = "rgb(192, 175, 175)";
  receipt.style.borderBottom = "none";
  accountText.style.color = "rgb(192, 175, 175)";
  accountText.style.borderBottom = "none";
}
function cardpage() {
  home_page.style.display = "none";
  mobileHeader.style.display = "none";
  send_page.style.display = "none";
  card_page.style.display = "block";
  pay_page.style.display = "none";
  budget_page.style.display = "none";
  account_page.style.display = "none";
  send.style.color = "rgb(192, 175, 175)";
  send.style.borderBottom = "none";
  home.style.color = "rgb(192, 175, 175)";
  home.style.borderBottom = "none";
  budget.style.color = "rgb(192, 175, 175)";
  budget.style.borderBottom = "none";
  receipt.style.color = "rgb(192, 175, 175)";
  receipt.style.borderBottom = "none";
  card.style.color = "rgb(0,25,102)";
  card.style.borderBottom = "3px solid rgb(0, 25, 102)";
  accountText.style.color = "rgb(192, 175, 175)";
  accountText.style.borderBottom = "none";
}
function homepage() {
  home_page.style.display = "block";
  send_page.style.display = "none";
  card_page.style.display = "none";
  pay_page.style.display = "none";
  budget_page.style.display = "none";
  account_page.style.display = "none";
  send.style.color = "rgb(192, 175, 175)";
  send.style.borderBottom = "none";
  budget.style.color = "rgb(192, 175, 175)";
  budget.style.borderBottom = "none";
  receipt.style.color = "rgb(192, 175, 175)";
  receipt.style.borderBottom = "none";
  home.style.color = "rgb(0, 25, 102)";
  home.style.borderBottom = "3px solid rgb(0, 25, 102)";
  card.style.color = "rgb(192, 175, 175)";
  card.style.borderBottom = "none";
  accountText.style.color = "rgb(192, 175, 175)";
  accountText.style.borderBottom = "none";
  let mobileMedia = window.matchMedia("(max-width: 700px)");
  if (mobileMedia.matches) {
    mobileHeader.style.display = "block";
  } else {
    mobileHeader.style.display = "none";
  }
}
function accountpage() {
  home_page.style.display = "none";
  send_page.style.display = "none";
  pay_page.style.display = "none";
  mobileHeader.style.display = "none";
  card_page.style.display = "none";
  budget_page.style.display = "none";
  account_page.style.display = "block";
  accountText.style.color = "rgb(0, 25, 102)";
  accountText.style.borderBottom = "3px solid rgb(0, 25, 102)";
  send.style.color = "rgb(192, 175, 175)";
  send.style.borderBottom = "none";
  budget.style.color = "rgb(192, 175, 175)";
  budget.style.borderBottom = "none";
  receipt.style.color = "rgb(192, 175, 175)";
  receipt.style.borderBottom = "none";
  home.style.color = "rgb(192, 175, 175)";
  home.style.borderBottom = "none";
  card.style.color = "rgb(192, 175, 175)";
  card.style.borderBottom = "none";
}
function goBackFromMobile() {
  mobileHeader.style.display = "block";
  mobileViewProfile.style.display = "none";
  home_page.style.display = "block";
  generalHeader.style.display = "block";
}
function showprofileMobile() {
  mobileHeader.style.display = "none";
  mobileViewProfile.style.display = "block";
  home_page.style.display = "none";
  generalHeader.style.display = "none";
}
function paypage() {
  home_page.style.display = "none";
  send_page.style.display = "none";
  pay_page.style.display = "block";
  card_page.style.display = "none";
  budget_page.style.display = "none";
  mobileHeader.style.display = "none";
  account_page.style.display = "none";
  send.style.color = "rgb(192, 175, 175)";
  send.style.borderBottom = "none";
  budget.style.color = "rgb(192, 175, 175)";
  budget.style.borderBottom = "none";
  receipt.style.color = "rgb(0, 25, 102)";
  receipt.style.borderBottom = "3px solid rgb(0, 25, 102)";
  home.style.color = "rgb(192, 175, 175)";
  home.style.borderBottom = "none";
  card.style.color = "rgb(192, 175, 175)";
  card.style.borderBottom = "none";
  accountText.style.color = "rgb(192, 175, 175)";
  accountText.style.borderBottom = "none";
}
function budgetpage() {
  home_page.style.display = "none";
  send_page.style.display = "none";
  pay_page.style.display = "none";
  card_page.style.display = "none";
  budget_page.style.display = "block";
  mobileHeader.style.display = "none";
  account_page.style.display = "none";
  send.style.color = "rgb(192, 175, 175)";
  send.style.borderBottom = "none";
  budget.style.color = "rgb(0, 25, 102)";
  budget.style.borderBottom = "3px solid rgb(0, 25, 102)";
  receipt.style.color = "rgb(192, 175, 175)";
  receipt.style.borderBottom = "none";
  home.style.color = "rgb(192, 175, 175)";
  home.style.borderBottom = "none";
  card.style.color = "rgb(192, 175, 175)";
  card.style.borderBottom = "none";
  accountText.style.color = "rgb(192, 175, 175)";
  accountText.style.borderBottom = "none";
}
// This is home page

let userFullName = document.getElementById("username");
let moneyToDisplay = document.getElementById("money");
let UsernameMobileFormat = document.getElementById("UsernameMobileFormat");
let showAccountNumber = document.getElementById("showAccountNumber");
let timeToDisplay = document.getElementById("updateTime");
let toDisplayProfileImage = document.getElementById("toDisplayProfileImage");
let profilepic = document.getElementById("profilepic");
let profilePicTwo = document.getElementById("profilePicTwo");
let profilePicThree = document.getElementById("profilepicThree");
let iconForProfilePicture = document.getElementById("icon-for-profile-picture");
let iconForProfilePictureOne = document.getElementById(
  "icon-for-profile-picture-one"
);
let iconForProfilePictureTwo = document.getElementById(
  "icon-for-profile-picture-two"
);
let iconForProfilePictureThree = document.getElementById(
  "icon-for-profile-picture-three"
);
const save_div = document.getElementById("save_div");
const invest_div = document.getElementById("invest_div");
const borrow_div = document.getElementById("borrow_div");
const div_one = document.getElementById("div_one");
let div_two = document.getElementById("div_two");
let div_three = document.getElementById("div_three");
const addMoneyContainer = document.getElementById("addMoneyDiv");
const intro = document.getElementById("intro");
const nigeriaAmount = document.getElementById("nigeria-amount");
const buttonBelow = document.getElementById("button-below");
const bankTransferDiv = document.getElementById("banktransferdiv");
const cashDepositDiv = document.getElementById("cash-deposit");
const addCardMoney = document.getElementById("add-card-money");
const addCardMoneySecond = document.getElementById("add-card-money-second");
const amountToEnter = document.getElementById("amountToEnter");
const modalForAddMoney = document.getElementById("modalForAddMoney");
const amountToShowOnAddMoneyModal = document.getElementById(
  "amountToShowOnAddMoneyModal"
);

function updatingUser() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var docRef = db.collection("User").doc(user.email);

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            userFullName.innerHTML =
              doc.data().Firstname + " " + doc.data().Lastname;
            UsernameMobileFormat.innerHTML = doc.data().Firstname;
            moneyToDisplay.innerHTML = doc.data().Amount;
            timeToDisplay.innerHTML = new Date().toLocaleDateString();
            showAccountNumber.innerHTML = doc.data().Account;
            if (doc.data().ProfilePicture == "") {
              profilepic.style.display = "none";
              profilePicTwo.style.display = "none";
              profilePicThree.style.display = "none";
              iconForProfilePicture.style.display = "block";
              toDisplayProfileImage.style.display = "none";
              iconForProfilePictureOne.style.display = "block";
              iconForProfilePictureTwo.style.display = "block";
              iconForProfilePictureThree.style.display = "block";
            } else {
              profilepic.style.display = "block";
              toDisplayProfileImage.style.display = "block";
              toDisplayProfileImage.src = doc.data().ProfilePicture;
              profilepic.src = doc.data().ProfilePicture;
              profilePicTwo.src = doc.data().ProfilePicture;
              profilePicThree.src = doc.data().ProfilePicture;
              iconForProfilePictureOne.style.display = "none";
              iconForProfilePictureTwo.style.display = "none";
              iconForProfilePictureThree.style.display = "none";
              iconForProfilePicture.style.display = "none";
            }
            console.log("Document data:", doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}

updatingUser();

function spend() {
  save_div.style.display = "none";
  invest_div.style.display = "none";
  div_one.style.display = "block";
  div_two.style.display = "block";
  borrow_div.style.display = "none";
}
function saveinfo() {
  save_div.style.display = "block";
  invest_div.style.display = "none";
  div_one.style.display = "none";
  div_two.style.display = "none";
  div_three.style.display = "none";
  borrow_div.style.display = "none";
}
function borrow() {
  save_div.style.display = "none";
  invest_div.style.display = "none";
  borrow_div.style.display = "block";
  div_one.style.display = "none";
  div_two.style.display = "none";
  div_three.style.display = "none";
}
function invest() {
  save_div.style.display = "none";
  invest_div.style.display = "block";
  borrow_div.style.display = "none";
  div_one.style.display = "none";
  div_two.style.display = "none";
  div_three.style.display = "none";
}
function itdisappears() {
  if (moneyToDisplay.style.filter == "blur(0px)") {
    moneyToDisplay.style.filter = "blur(6px)";
  } else {
    moneyToDisplay.style.filter = "blur(0px)";
  }
}
function addMoneyDiv() {
  addMoneyContainer.style.display = "block";
  intro.style.display = "none";
  nigeriaAmount.style.display = "none";
  buttonBelow.style.display = "none";
  save_div.style.display = "none";
  invest_div.style.display = "none";
  borrow_div.style.display = "none";
  div_one.style.display = "none";
  div_two.style.display = "none";
  div_three.style.display = "none";
}
function addMoneyBack() {
  addMoneyContainer.style.display = "none";
  intro.style.display = "block";
  nigeriaAmount.style.display = "block";
  buttonBelow.style.display = "block";
  save_div.style.display = "none";
  invest_div.style.display = "none";
  borrow_div.style.display = "none";
  div_one.style.display = "block";
  div_two.style.display = "block";
  div_three.style.display = "none";
}
function bankTransfer() {
  bankTransferDiv.style.display = "block";
  addMoneyContainer.style.display = "none";
}
function exitBankTransferDiv() {
  bankTransferDiv.style.display = "none";
  addMoneyContainer.style.display = "block";
}
function cashDeposit() {
  addMoneyContainer.style.display = "none";
  cashDepositDiv.style.display = "block";
}
function exitCashDeposit() {
  addMoneyContainer.style.display = "block";
  cashDepositDiv.style.display = "none";
}
function addCard() {
  addCardMoney.style.display = "block";
  addMoneyContainer.style.display = "none";
}
function exitAddMouney() {
  addCardMoney.style.display = "none";
  addMoneyContainer.style.display = "block";
}
function nextPageAddMoneySecond() {
  addCardMoneySecond.style.display = "block";
  addCardMoney.style.display = "none";
}
function exitAddMoneySecond() {
  addCardMoneySecond.style.display = "none";
  addCardMoney.style.display = "block";
}
function toModalAddMoney() {
  if (amountToEnter.value == "" || amountToEnter.value < 100) {
    showToast(
      "Enter Your Amount Please or The Amount must be greater than ₦100"
    );
  } else {
    modalForAddMoney.style.display = "block";
    amountToShowOnAddMoneyModal.innerHTML = amountToEnter.value;
  }
}
function cancelModalForAddMoney() {
  modalForAddMoney.style.display = "none";
}

function makePayment() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var docRef = db.collection("User").doc(user.email);

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            let totalAmount =
              Number(doc.data().Amount) + Number(amountToEnter.value);
            FlutterwaveCheckout({
              public_key: "FLWPUBK_TEST-ef8e7d7e4b4c4f2471fde5b914791ab6-X",
              tx_ref: "sage48981487343MDI0NzMx",
              amount: amountToEnter.value,
              currency: "NGN",
              payment_options: "card, mobilemoneyghana, ussd",
              redirect_url:
                "file:///C:/Users/adeba/OneDrive/Desktop/level2%20project/html/dashboard.html",
              meta: {
                consumer_id: 23,
                consumer_mac: "92a3-912ba-1192a",
              },
              customer: {
                email: doc.data().Email,
                phone_number: doc.data().Phone,
                name: doc.data().Firstname + " " + doc.data().Lastname,
              },
              customizations: {
                title: "Sage Bank",
                description: "Payment add money into your account",
                logo: "../pictures/SAGE_Publishing_logo_2023.svg.png",
              },
            });
            var washingtonRef = db.collection("User").doc(user.email);

            // Set the "capital" field of the city 'DC'
            return washingtonRef
              .update({
                Amount: totalAmount,
              })
              .then(() => {
                console.log("Document successfully updated!");
              })
              .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
              });
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}

function pushingDeposit() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var docRef = db.collection("User").doc(user.email);

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            // Add a new document in collection "cities"
            db.collection("Deposit")
              .doc()
              .set({
                Name: doc.data().Firstname,
                Dateof: new Date().toLocaleDateString(),
                Time: new Date().toLocaleTimeString(),
                method: "Deposit",
                Amount: amountToEnter.value,
                description: "Deposit",
              })
              .then(() => {
                console.log("Document successfully written!");
              })
              .catch((error) => {
                console.error("Error writing document: ", error);
              });
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}

function addingDepositHistory() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      displayAllTransactions.innerHTML += `
            <tr>
                <td>${confirmUser.Name}</td>
                <td>${confirmUser.Dateof}</td>
                <td>${confirmUser.Time}</td>
                <td>${confirmUser.method}</td>
                <td>${confirmUser.Amount}</td>
                <td>${confirmUser.description}</td>
            </tr>
        `;
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}

// This is Send Page

const generalSendPage = document.getElementById("general-send-page");
const sendToSagePage = document.getElementById("send-to-sage-page");
const foundUser = document.getElementById("foundUser");
const searchForUsername = document.getElementById("searchForUsername");
const searchForUserOne = document.getElementById("search-for-user-1");
let searchForUserInput = document.getElementById("searchForUserInput");
const downSendToSage = document.getElementById("down-send-to-sage");
const sendToSagePageTwo = document.getElementById("send-to-sage-page-two");
const userAccountToSend = document.getElementById("userAccountToSend");
const showBalance = document.getElementById("showBalance");
const amountToSend = document.getElementById("amounttosend");
const modalForTransaction = document.getElementById("modalForTransaction");
const toDisplayTransactionAmountTwo = document.getElementById(
  "toDisplayTransactionAmountTwo"
);
const toDisplayTransactionAmount = document.getElementById(
  "toDisplayTransactionAmount"
);
const sendPinOne = document.getElementById("sendpin1");
const sendPinTwo = document.getElementById("sendpin2");
const sendPinThree = document.getElementById("sendpin3");
const sendPinFour = document.getElementById("sendpin4");
const message = document.getElementById("message");
const displayAllTransactionsForSend = document.getElementById(
  "displayAllTransactionsForSend"
);
const divThreeForSend = document.getElementById("div-three-for-send");
const NothingDiv = document.getElementById("NothingDiv");
let receiverId;
let searchForUserUsername;
let personSendingMoney;

function sendToSage() {
  generalSendPage.style.display = "none";
  sendToSagePage.style.display = "block";
}
function backToGeneralSendPage() {
  generalSendPage.style.display = "block";
  sendToSagePage.style.display = "none";
}

function moveToNextSend() {
  if (sendPinOne.value.length == 1) {
    sendPinTwo.focus();
  }
  if (sendPinTwo.value.length == 1) {
    sendPinThree.focus();
  }
  if (sendPinThree.value.length == 1) {
    sendPinFour.focus();
  }
}
function moveToPrevSend() {
  if (sendPinFour.value.length == 0) {
    sendPinThree.focus();
  }
}

function vanish() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      db.collection("User")
        .where("Username", "==", searchForUserInput.value)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            searchForUserOne.style.display = "block";
            foundUser.innerHTML =
              doc.data().Firstname + " " + doc.data().Lastname;
            foundUser.style.color = "green";
            searchForUsername.style.display = "block";
            downSendToSage.style.display = "none";
            userAccountToSend.innerHTML =
              doc.data().Firstname + " " + doc.data().Lastname;
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
function searchforit() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var docRef = db.collection("User").doc(user.email);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            sendToSagePage.style.display = "none";
            sendToSagePageTwo.style.display = "block";
            showBalance.innerHTML = doc.data().Amount;
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
function sendMoney() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var docRef = db.collection("User").doc(user.email);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            if (
              amountToSend.value > doc.data().Amount ||
              amountToSend.value < 0
            ) {
              showToast("Insufficient Balance");
            } else if (amountToSend.value == "" || message.value == "") {
              showToast("Fill in the details below");
            } else {
              modalForTransaction.style.display = "block";
              toDisplayTransactionAmount.innerHTML = amountToSend.value;
              toDisplayTransactionAmountTwo.innerHTML = amountToSend.value;
            }
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
function cancelModalForSend() {
  modalForTransaction.style.display = "none";
}
function toAnotherUser() {
  db.collection("User")
    .where("Username", "==", searchForUserInput.value)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        let addAmount = Number(doc.data().Amount) + Number(amountToSend.value);
        anotherPersonEmail = doc.data().Email;
        anotherPerson = doc.data().Firstname;
        var washingtonRef = db.collection("User").doc(doc.data().Email);

        // Set the "capital" field of the city 'DC'
        return washingtonRef
          .update({
            Amount: addAmount,
          })
          .then(() => {
            transactionsForRecieve();
            console.log("Document successfully updated!");
          })
          .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
          });
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}
function confirmPaymentForSend() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var docRef = db.collection("User").doc(user.email);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            let splitUserPin = doc.data().PIN.split("");
            if (
              splitUserPin[0] == sendPinOne.value &&
              splitUserPin[1] == sendPinTwo.value &&
              splitUserPin[2] == sendPinThree.value &&
              splitUserPin[3] == sendPinFour.value
            ) {
              let subAmount =
                Number(doc.data().Amount) - Number(amountToSend.value);
              personSendingMoney = doc.data().Firstname;
              toAnotherUser();
              var washingtonRef = db.collection("User").doc(user.email);
              // Set the "capital" field of the city 'DC'
              return washingtonRef
                .update({
                  Amount: subAmount,
                })
                .then(() => {
                  showToast(`You have successfully Send the money`);
                  transactionsForSend();
                  location.reload();
                })
                .catch((error) => {
                  // The document probably doesn't exist.
                  console.error("Error updating document: ", error);
                });
            } else {
              showToast("Wrong PIN");
            }
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
function transactionsForSend() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      db.collection("Send")
        .doc()
        .set({
          Name: anotherPerson,
          Method: "Sent",
          Dateof: new Date().toLocaleDateString(),
          Time: new Date().toLocaleTimeString(),
          Description: message.value,
          Amount: `- ₦${amountToSend.value}`,
          UserTransactionId: personSendingMoneyEmail,
        })
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
function transactionsForRecieve() {
  db.collection("User")
    .where("Username", "==", searchForUserInput.value)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        db.collection("Recieve")
          .doc()
          .set({
            Name: personSendingMoney,
            Method: "Receive",
            Dateof: new Date().toLocaleDateString(),
            Time: new Date().toLocaleTimeString(),
            Description: message.value,
            Amount: `+ ₦${amountToSend.value}`,
            UserTransactionId: anotherPersonEmail,
          })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}
function fetchingFromSendTransaction() {
  displayAllTransactionsForSend.innerHTML = "";
  let UserTransactionId = personSendingMoneyEmail;
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var docRef = db.collection("User").doc(user.email);

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            db.collection("Send")
              .where("UserTransactionId", "==", doc.data().Email)
              .get()
              .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                  divThreeForSend.style.display = "block";
                  NothingDiv.style.display = "none";
                  displayAllTransactionsForSend.innerHTML += `
                                <tr>
                                    <td>${doc.data().Name}</td>
                                    <td>${doc.data().Method}</td>
                                    <td>${doc.data().Dateof}</td>
                                    <td>${doc.data().Time}</td>
                                    <td>${doc.data().Description}</td>
                                    <td style="color: red">${
                                      doc.data().Amount
                                    }</td>
                                </tr>
                            `;
                });
              })
              .catch((error) => {
                console.log("Error getting documents: ", error);
              });
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });

      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      //...
    } else {
      // User is signed out
      //...
    }
  });
}

function fetchingFromRecieveTransaction() {
  displayAllTransactionsForSend.innerHTML = "";
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var docRef = db.collection("User").doc(user.email);

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            db.collection("Recieve")
              .where("UserTransactionId", "==", doc.data().Email)
              .get()
              .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                  divThreeForSend.style.display = "block";
                  NothingDiv.style.display = "none";
                  displayAllTransactionsForSend.innerHTML += `
                                    <tr>
                                        <td>${doc.data().Name}</td>
                                        <td>${doc.data().Method}</td>
                                        <td>${doc.data().Dateof}</td>
                                        <td>${doc.data().Time}</td>
                                        <td>${doc.data().Description}</td>
                                        <td style="color: Green">${
                                          doc.data().Amount
                                        }</td>
                                    </tr>
                                `;
                });
              })
              .catch((error) => {
                console.log("Error getting documents: ", error);
              });
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });

      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}

// This is the pay page

const insidePayPage = document.getElementById("inside-pay-page");
const airtelPage = document.getElementById("airtel_page");
const dataPage = document.getElementById("data_page");
const moneyForAirtime = document.getElementById("money-for-airtime");
const moneyForData = document.getElementById("money-for-Data");
const networkForAirtime = document.getElementById("network-for-airtime");
const networkForData = document.getElementById("network-for-Data");
const phoneForAirtime = document.getElementById("phone-for-airtime");
const phoneForData = document.getElementById("phone-for-Data");
const modalForAirtime = document.getElementById("modalForAirtime");
const pinI = document.getElementById("pin1");
const pinIForData = document.getElementById("pin1ForData");
const pinII = document.getElementById("pin2");
const pinIIForData = document.getElementById("pin2ForData");
const pinIII = document.getElementById("pin3");
const pinIIIForData = document.getElementById("pin3ForData");
const amountToPay = document.getElementById("amountToPay");
const amountToPayForData = document.getElementById("amountToPayForData");
const amountToPayTwo = document.getElementById("amountToPayTwo");
const amountToPayTwoForData = document.getElementById("amountToPayTwoForData");
const pinIV = document.getElementById("pin4");
const pinIVForData = document.getElementById("pin4ForData");
const displayAllTransactions = document.getElementById(
  "displayAllTransactions"
);
const Package = document.getElementById("package");
let packageContainer = document.getElementById("packageContainer");
const phoneNumberData = document.getElementById("phoneNumberData");
let userAmount = document.getElementById("userAmount");
let warning = document.getElementById("warning");
let warningTwo = document.getElementById("warningTwo");

function airtel() {
  insidePayPage.style.display = "none";
  airtelPage.style.display = "block";
  dataPage.style.display = "none";
}
function goback() {
  insidePayPage.style.display = "block";
  airtelPage.style.display = "none";
}

function payMoney() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var docRef = db.collection("User").doc(user.email);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            if (
              modalForAirtime.value == "Select Your Amount" ||
              phoneForAirtime.value == "" ||
              networkForAirtime.value == "select"
            ) {
              showToast("Please, You have to fill those below");
            } else if (phoneForAirtime.value.length != 10) {
              showToast("The number is incorrect");
            } else if (
              moneyForAirtime.value > doc.data().Amount ||
              moneyForAirtime.value < 0
            ) {
              showToast(
                "You do not have that amount, Please check you balance."
              );
            } else {
              modalForAirtime.style.display = "block";
              amountToPay.innerHTML = moneyForAirtime.value;
              amountToPayTwo.innerHTML = moneyForAirtime.value;
            }
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
function payForData() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var docRef = db.collection("User").doc(user.email);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            if (phoneForData.value == "") {
              showToast("Fill everything");
            } else if (
              userAmount.value > doc.data().Amount ||
              userAmount.value < 0
            ) {
              showToast("Insuffient Balance");
            } else {
              warning.style.display = "none";
              modalForData.style.display = "block";
            }
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
function changingNetwork() {
  if (networkForData.value != "Choose a Provider") {
    packageContainer.style.display = "block";
  } else {
    packageContainer.style.display = "none";
  }
}
function changingPackage() {
  if (Package.value != "Choose a Package") {
    phoneNumberData.style.display = "block";
    if (Package.value == "100MB for 1 Day(100)") {
      userAmount.value = "100";
    } else if (Package.value == "2GB for 2 Days(500)") {
      userAmount.value = "500";
    } else if (Package.value == "3GB for 2 Days(800)") {
      userAmount.value = "800";
    } else if (Package.value == "5GB for 2 Days(1,500)") {
      userAmount.value = "1500";
    } else if (Package.value == "11GB for 1 Month(3,500)") {
      userAmount.value = "3500";
    } else if (Package.value == "2000GB for 1 Year(450,000)") {
      userAmount.value = "450000";
    }
  } else {
    phoneNumberData.style.display = "none";
  }
}
function internet() {
  dataPage.style.display = "block";
  insidePayPage.style.display = "none";
}
function moveToNext() {
  if (pinI.value.length == 1) {
    pinII.focus();
  }
  if (pinII.value.length == 1) {
    pinIII.focus();
  }
  if (pinIII.value.length == 1) {
    pinIV.focus();
  }
}
function moveToPrev() {
  if (pinIV.value.length == 0) {
    pinIII.focus();
  } else if (pinIII.value.length == 0) {
    pinII.value = "";
    pinII.focus();
  } else if (pinII.value.length == 0) {
    pinI.value = "";
    pinI.focus();
  }
}
function moveToNextForData() {
  if (pinIForData.value.length == 1) {
    pinIIForData.focus();
  }
  if (pinIIForData.value.length == 1) {
    pinIIIForData.focus();
  }
  if (pinIIIForData.value.length == 1) {
    pinIVForData.focus();
  }
}
function moveToPrevForData() {
  if (pinIVForData.value.length == 0) {
    pinIIIForData.focus();
  } else if (pinIIIForData.value.length == 0) {
    pinIIForData.focus();
  } else if (pinII.value.length == 0) {
    pinIForData.focus();
  }
}
function confirmPaymentForAirtime() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var docRef = db.collection("User").doc(user.email);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            let userPin = doc.data().PIN;
            let splitUserPin = userPin.split("");
            if (
              pinI.value == splitUserPin[0] &&
              pinII.value == splitUserPin[1] &&
              pinIII.value == splitUserPin[2] &&
              pinIV.value == splitUserPin[3]
            ) {
              let newAmount = doc.data().Amount - moneyForAirtime.value;
              var washingtonRef = db.collection("User").doc(user.email);

              // Set the "capital" field of the city 'DC'
              return washingtonRef
                .update({
                  Amount: newAmount,
                })
                .then(() => {
                  showToast(
                    `You have successful subscribe ${moneyForAirtime.value} of ${networkForAirtime.value}`
                  );
                  transactionsForAirtime();
                })
                .catch((error) => {
                  // The document probably doesn't exist.
                  console.error("Error updating document: ", error);
                });
            } else {
              showToast("Wrong PIN");
            }
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
function confirmPaymentForData() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var docRef = db.collection("User").doc(user.email);
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            let userPin = doc.data().PIN;
            let splitUserPin = userPin.split("");
            if (
              pinIForData.value == splitUserPin[0] &&
              pinIIForData.value == splitUserPin[1] &&
              pinIIIForData.value == splitUserPin[2] &&
              pinIVForData.value == splitUserPin[3]
            ) {
              let newAmount = doc.data().Amount - userAmount.value;
              var washingtonRef = db.collection("User").doc(user.email);

              // Set the "capital" field of the city 'DC'
              return washingtonRef
                .update({
                  Amount: newAmount,
                })
                .then(() => {
                  console.log("Document successfully updated!");
                  showToast(
                    `You have successful subscribe ${userAmount.value} of ${networkForData.value}`
                  );
                  transactionsForData();
                })
                .catch((error) => {
                  // The document probably doesn't exist.
                  console.error("Error updating document: ", error);
                });
            } else {
              showToast("Wrong PIN");
            }
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}

function cancelModalForAirtime() {
  modalForAirtime.style.display = "none";
}
function cancelModalForData() {
  modalForData.style.display = "none";
}

function transactionsForAirtime() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var docRef = db.collection("User").doc(user.email);

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            db.collection("Airtime")
              .doc()
              .set({
                Name: doc.data().Firstname,
                Method: "airtime",
                Dateof: new Date().toLocaleDateString(),
                Time: new Date().toLocaleTimeString(),
                Description: networkForAirtime.value,
                Amount: moneyForAirtime.value,
              })
              .then(() => {
                console.log("Document successfully written!");
                location.reload();
              })
              .catch((error) => {
                console.error("Error writing document: ", error);
              });
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
function transactionsForData() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var docRef = db.collection("User").doc(user.email);

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            db.collection("Airtime")
              .doc()
              .set({
                Name: doc.data().Firstname,
                Method: "data",
                Dateof: new Date().toLocaleDateString(),
                Time: new Date().toLocaleTimeString(),
                Description: networkForData.value,
                Amount: userAmount.value,
              })
              .then(() => {
                console.log("Document successfully written!");
                location.reload();
              })
              .catch((error) => {
                console.error("Error writing document: ", error);
              });
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
function fetchingFromTransactionHistory() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      db.collection("Airtime")
        .where("", "==", true)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            displayAllTransactions.innerHTML += ` 
                        <tr>
                            <td>${Name}</td>
                            <td>${Dateof}</td>
                            <td>${Time}</td>
                            <td>${Method}</td>
                            <td>${Amount}</td>
                            <td>${Description}</td>
                        </tr>
                    `;
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
// fetchingFromTransactionHistory();

//This is card page

const getACard = document.getElementById("getACard");
const insideCardPage = document.getElementById("insideCardPage");
const modalForCardPage = document.getElementById("modalForCardPage");
const cardContainer = document.getElementById("cardContainer");
const pinOne = document.getElementById("pinOne");
const pinTwo = document.getElementById("pinTwo");
const showCard = document.getElementById("showCard");
const inputPinOne = document.getElementById("inputPinOne");
const inputPinTwo = document.getElementById("inputPinTwo");
const inputPinThree = document.getElementById("inputPinThree");
const inputPinFour = document.getElementById("inputPinFour");
const first = document.getElementById("first");
const cardNumber = document.getElementById("cardNumber");
const cvvNumber = document.getElementById("cvvNumber");
const cardUsername = document.getElementById("cardUsername");
const cardHolderName = document.getElementById("cardHolderName");
const fourValuesOne = document.getElementById("fourValuesOne");
const fourValuesTwo = document.getElementById("fourValuesTwo");
const fourValuesThree = document.getElementById("fourValuesThree");
const fourValuesFour = document.getElementById("fourValuesFour");

function sageCard() {
  insideCardPage.style.display = "none";
  getACard.style.display = "block";
}
function goBackToCardPage() {
  insideCardPage.style.display = "block";
  getACard.style.display = "none";
}
function getVirtualCard() {
  cardContainer.style.display = "block";
  getACard.style.display = "none";
}
function goBackToGetACard() {
  cardContainer.style.display = "none";
  getACard.style.display = "block";
}
function paymentForCard() {
  if (pinOne.value != pinTwo.value) {
    showToast("Please, Your pin have to be the same");
  } else if (pinOne.value == "" || pinTwo.value == "") {
    showToast("Please, fill in the informations");
  } else if (pinOne.value.length > 4 || pinOne.value.length < 4) {
    showToast("Pin must be 4 values");
  } else {
    modalForCardPage.style.display = "block";
  }
}
function cancelModal() {
  modalForCardPage.style.display = "none";
}
function confirmModal() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var docRef = db.collection("User").doc(user.email);

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            let userpin = doc.data().PIN;
            let splituserpin = userpin.split("");
            let newAmount = doc.data().Amount - 1000;

            if (
              inputPinOne.value == splituserpin[0] &&
              inputPinTwo.value == splituserpin[1] &&
              inputPinThree.value == splituserpin[2] &&
              inputPinFour.value == splituserpin[3]
            ) {
              if (doc.data().Amount < 1000) {
                showToast("You do not have sufficient balance");
              } else {
                var washingtonRef = db.collection("User").doc(user.email);

                // Set the "capital" field of the city 'DC'
                return washingtonRef
                  .update({
                    Amount: newAmount,
                  })
                  .then(() => {
                    showToast("successful");
                    postingCardInfo();
                  })
                  .catch((error) => {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                  });
              }
            }
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
function movingToNext() {
  if (inputPinOne.value.length == 1) {
    inputPinTwo.focus();
  }
  if (inputPinTwo.value.length == 1) {
    inputPinThree.focus();
  }
  if (inputPinThree.value.length == 1) {
    inputPinFour.focus();
  }
}
function movingToPrev() {
  if (inputPinFour.value.length == 0) {
    inputPinThree.focus();
  }
}
function postingCardInfo() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var docRef = db.collection("User").doc(user.email);

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            // Add a new document in collection "cities"
            db.collection("card")
              .doc(user.email)
              .set({
                CardId: doc.data().Email,
                cardNumber: Math.floor(Math.random() * 10000000000000000),
              })
              .then(() => {
                console.log("Document successfully written!");
                location.reload();
              })
              .catch((error) => {
                console.error("Error writing document: ", error);
              });
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
function checkOnCard() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      modalForCardPage.style.display = "none";
      insideCardPage.style.display = "none";
      getACard.style.display = "none";
      cardContainer.style.display = "none";
      showCard.style.display = "block";
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
checkOnCard()
function updatingCard() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var docRef = db.collection("card").doc(user.email);

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            var docRef = db.collection("User").doc(user.email);
            let cardnumber = doc.data().cardNumber
            let stringcard = String(cardnumber)
            let splitCardNumber = stringcard.split("")

            docRef
              .get()
              .then((doc) => {
                if (doc.exists) {
                  console.log("Document data:", doc.data());
                  cardHolderName.innerHTML = doc.data().Firstname + " " + doc.data().Lastname
                    fourValuesOne.innerHTML = splitCardNumber[0] + splitCardNumber[1] + splitCardNumber[2] + splitCardNumber[3]
                    fourValuesTwo.innerHTML = splitCardNumber[4] + splitCardNumber[5] + splitCardNumber[6] + splitCardNumber[7]
                    fourValuesThree.innerHTML = splitCardNumber[8] + splitCardNumber[9] + splitCardNumber[10] + splitCardNumber[11]
                    fourValuesFour.innerHTML = splitCardNumber[12] + splitCardNumber[13] + splitCardNumber[14] + splitCardNumber[15]
                } else {
                  // doc.data() will be undefined in this case
                  console.log("No such document!");
                }
              })
              .catch((error) => {
                console.log("Error getting document:", error);
              });
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/v8/firebase.User
      var uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}
updatingCard()
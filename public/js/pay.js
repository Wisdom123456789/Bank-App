const insidePayPage = document.getElementById("inside-pay-page")
const airtelPage = document.getElementById("airtel_page")
const dataPage = document.getElementById("data_page")
const moneyForAirtime = document.getElementById("money-for-airtime")
const moneyForData = document.getElementById("money-for-Data")
const networkForAirtime = document.getElementById("network-for-airtime")
const networkForData = document.getElementById("network-for-Data")
const phoneForAirtime = document.getElementById("phone-for-airtime")
const phoneForData = document.getElementById("phone-for-Data")
const modalForAirtime = document.getElementById("modalForAirtime")
const pinI = document.getElementById("pin1")
const pinIForData = document.getElementById("pin1ForData")
const pinII = document.getElementById("pin2")
const pinIIForData = document.getElementById("pin2ForData")
const pinIII = document.getElementById("pin3")
const pinIIIForData = document.getElementById("pin3ForData")
const amountToPay = document.getElementById("amountToPay")
const amountToPayForData = document.getElementById( "amountToPayForData" )
const amountToPayTwo = document.getElementById("amountToPayTwo")
const amountToPayTwoForData = document.getElementById("amountToPayTwoForData")
const pinIV = document.getElementById("pin4")
const pinIVForData = document.getElementById("pin4ForData")
const displayAllTransactions = document.getElementById("displayAllTransactions")
const Package = document.getElementById("package")
let packageContainer = document.getElementById("packageContainer")
const phoneNumberData = document.getElementById("phoneNumberData")
let userAmount = document.getElementById("userAmount")
let warning = document.getElementById("warning")
let warningTwo = document.getElementById("warningTwo")
function airtel() {
    insidePayPage.style.display = "none"
    airtelPage.style.display = "block"
    dataPage.style.display = "none"
}
function goback() {
    insidePayPage.style.display = "block"
    airtelPage.style.display = "none"
}
function payMoney() {
    fetch("http://localhost:1234/signUp").then((res)=>res.json()).then((showData)=>{
        fetch("http://localhost:1234/logIn").then((res)=>res.json()).then((data)=>{
            for (let index = 0; index < showData.length; index++) {
                if (showData[index].id == data[0].UserId) {
                    if (modalForAirtime.value == "Select Your Amount" || phoneForAirtime.value == "" || networkForAirtime.value == "select") {
                        alert("Please, You have to fill those below")
                       break 
                    } else if(phoneForAirtime.value.length != 10) {
                        alert("The number is incorrect")
                        break
                    } else if(moneyForAirtime.value > showData[index].Amount) {
                        alert("You do not have that amount, Please check you balance.")
                        break
                    }
                    else {
                        modalForAirtime.style.display = "block"
                        amountToPay.innerHTML = moneyForAirtime.value
                        amountToPayTwo.innerHTML = moneyForAirtime.value
                        break
                    }
                }
            }
        })
    })
}
function payForData() {
    Promise.all([
        fetch("http://localhost:1234/signUp").then((res)=>res.json()),
        fetch("http://localhost:1234/logIn").then((res)=>res.json())
    ]).then(([signUpInfo, loginInfo])=>{
        let confirmUser = signUpInfo.find((el)=>el.id == loginInfo[0].UserId)
        console.log(confirmUser);
        if (confirmUser) {
            if (phoneForData.value == "") {
                warning.style.display = "block"
            } else if (userAmount.value > confirmUser.Amount || userAmount.value < 0) {
                warningTwo.style.display = "block"
            }
            else{
                warning.style.display = "none"
                modalForData.style.display = "block"
            }
        }
    })
}
function changingNetwork() {
    if (networkForData.value != "Choose a Provider") {
        packageContainer.style.display = "block"
    } else{
        packageContainer.style.display = "none"
    }
}
function changingPackage() {
    if (Package.value != "Choose a Package") {
        phoneNumberData.style.display = "block"
        if (Package.value == "100MB for 1 Day(100)") {
            userAmount.value = "100"
        } else if (Package.value == "2GB for 2 Days(500)") {
            userAmount.value = "500"
        } else if (Package.value == "3GB for 2 Days(800)") {
            userAmount.value = "800"
        } else if (Package.value == "5GB for 2 Days(1,500)") {
            userAmount.value = "1500"
        } else if (Package.value == "11GB for 1 Month(3,500)") {
            userAmount.value = "3500"
        } else if (Package.value == "2000GB for 1 Year(450,000)") {
            userAmount.value = "450000"
        }
    } else {
        phoneNumberData.style.display = "none"
    }
}
function internet() {
    dataPage.style.display = "block"
    insidePayPage.style.display = "none"
}
function moveToNext() {
    if (pinI.value.length == 1) {
        pinII.focus()
    }
    if (pinII.value.length == 1) {
        pinIII.focus()
    }
    if(pinIII.value.length == 1) {
        pinIV.focus()
    }
}
function moveToPrev() {
    if (pinIV.value.length == 0) {
        pinIII.focus()
    } else if (pinIII.value.length == 0) {
        pinII.value = ''
        pinII.focus()
    } else if (pinII.value.length == 0) {
        pinI.value = ""
        pinI.focus()
    }
}
function moveToNextForData() {
    if (pinIForData.value.length == 1) {
        pinIIForData.focus()
    }
    if (pinIIForData.value.length == 1) {
        pinIIIForData.focus()
    }
    if(pinIIIForData.value.length == 1) {
        pinIVForData.focus()
    }
}
function moveToPrevForData() {
    if (pinIVForData.value.length == 0) {
        pinIIIForData.focus()
    } else if (pinIIIForData.value.length == 0) {
        pinIIForData.focus()
    } else if (pinII.value.length == 0) {
        pinIForData.focus()
    }
}
function confirmPaymentForAirtime() {
    fetch("http://localhost:1234/signUp").then((res)=>res.json()).then((data)=>{
        fetch("http://localhost:1234/logIn").then((res)=>res.json()).then((userinfo)=>{
            for (let index = 0; index < data.length; index++) {
                let userPin = data[index].PIN
                let splitUserPin = userPin.split("")
                if (data[index].id == userinfo[0].UserId && pinI.value == splitUserPin[0] && pinII.value == splitUserPin[1] && pinIII.value == splitUserPin[2] && pinIV.value == splitUserPin[3]) {
                    let newAmount = data[index].Amount - moneyForAirtime.value
                    fetch(`http://localhost:1234/signUp/${data[index].id}`,{
                        method : "PATCH",
                        headers : {
                            "content-type" : "application/json"
                        },
                        body :  JSON.stringify({
                            Amount : newAmount
                        })
                    }).then((res)=>res.json()).then((all)=>{
                        alert(`You have successful subscribe ${moneyForAirtime.value} of ${networkForAirtime.value}`)
                        transactions()
                        updatingit()
                        modalForAirtime.style.display = "none"
                    })
                    break
                } 
                // else {
                //     alert("The pin is incorrect")
                //     break
                // }
            }
        })
    })
}
function confirmPaymentForData() {
    fetch("http://localhost:1234/signUp").then((res)=>res.json()).then((data)=>{
        fetch("http://localhost:1234/logIn").then((res)=>res.json()).then((userinfo)=>{
            for (let index = 0; index < data.length; index++) {
                let userPin = data[index].PIN
                let splitUserPin = userPin.split("")
                if (data[index].id == userinfo[0].UserId && pinIForData.value == splitUserPin[0] && pinIIForData.value == splitUserPin[1] && pinIIIForData.value == splitUserPin[2] && pinIVForData.value == splitUserPin[3]) {
                    let newAmount = data[index].Amount - userAmount.value
                    fetch(`http://localhost:1234/signUp/${data[index].id}`,{
                        method : "PATCH",
                        headers : {
                            "content-type" : "application/json"
                        },
                        body :  JSON.stringify({
                            Amount : newAmount
                        })
                    }).then((res)=>res.json()).then((all)=>{
                        alert(`You have successful subscribe ${userAmount.value} of ${networkForData.value}`)
                        transactionsForData()
                        updatingit()
                        modalForData.style.display = "none"
                    })
                    break
                } 
                // else {
                //     alert("The pin is incorrect")
                //     break
                // }
            }
        })
    })
}
function transactions(){
    fetch("http://localhost:1234/signUp").then((res)=>res.json()).then((data)=>{
        fetch("http://localhost:1234/logIn").then((res)=>res.json()).then((login)=>{
            for (let index = 0; index < data.length; index++) {
                if (data[index].id == login[0].UserId) {
                    let transactionHistory = {
                        Name : data[index].Firstname,
                        Method : "airtime",
                        Dateof : new Date().toLocaleDateString(),
                        Time : new Date().toLocaleTimeString(),
                        Description : networkForAirtime.value,
                        Amount : moneyForAirtime.value,
                        UserHistoryId : data[index].id
                    }
                    fetch("http://localhost:1234/history",{
                            headers : {
                                "content-type" : "application/json"
                            },
                            method : "POST",
                            body : JSON.stringify(transactionHistory)
                    })
                    break
                }
            }
        })
    })
}
function transactionsForData(){
    fetch("http://localhost:1234/signUp").then((res)=>res.json()).then((data)=>{
        fetch("http://localhost:1234/logIn").then((res)=>res.json()).then((login)=>{
            for (let index = 0; index < data.length; index++) {
                if (data[index].id == login[0].UserId) {
                    let transactionHistory = {
                        Name : data[index].Firstname,
                        Method : "Data",
                        Dateof : new Date().toLocaleDateString(),
                        Time : new Date().toLocaleTimeString(),
                        Description : networkForData.value,
                        Amount : userAmount.value,
                        UserHistoryId : data[index].id
                    }
                    fetch("http://localhost:1234/history",{
                            headers : {
                                "content-type" : "application/json"
                            },
                            method : "POST",
                            body : JSON.stringify(transactionHistory)
                    })
                    break
                }
            }
        })
    })
}

function fetchingFromTransactionHistory() {
    displayAllTransactions.innerHTML = ""
    fetch("http://localhost:1234/logIn").then((res)=>res.json()).then((data)=>{
        fetch("http://localhost:1234/history").then((res)=>res.json()).then((userhistory)=>{
            for (let i = 0; i < userhistory.length; i++) {
                if (data[0].UserId == userhistory[i].UserHistoryId) {
                    displayAllTransactions.innerHTML += ` 
                        <tr>
                            <td>${userhistory[i].Name}</td>
                            <td>${userhistory[i].Dateof}</td>
                            <td>${userhistory[i].Time}</td>
                            <td>${userhistory[i].Method}</td>
                            <td>${userhistory[i].Amount}</td>
                            <td>${userhistory[i].Description}</td>
                        </tr>
                    `
                }
            }
        })
    })
    
}
fetchingFromTransactionHistory()
function cancelModalForAirtime() {
    modalForAirtime.style.display = "none"
}
function cancelModalForData() {
    modalForData.style.display = "none"
}
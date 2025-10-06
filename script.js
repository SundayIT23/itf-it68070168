const text_area = document.getElementById("text_area");
const currentAcount = document.getElementById("currentAccount")
const currentCash = document.getElementById("currentCash")
let line = 0
let totalAmount = 0
let totalCash = 0

function Change() {
    total_acc = parseFloat(currentAcount.value)
    total_cash = parseFloat(currentCash.value)
    line += 1
    text_area.value += `${line}, Current account balance: ${total_acc}, Current cash balance: ${total_cash}\n`
}

const option = document.getElementById("select")
const money = document.getElementById("Deposit/Withdraw")

function Proceed() {
    if (option.value == "Deposit" && total_cash - money.value >= 0){
        total_acc += parseFloat(money.value)
        total_cash -= parseFloat(money.value)
        line += 1
        text_area.value += `${line}, Deposit : ${money.value} Current account balance: ${total_acc}, Current cash balance: ${total_cash}\n`
    }else if (option.value == "Withdraw" && total_acc - money.value >= 0){
        total_acc -= parseFloat(money.value)
        total_cash += parseFloat(money.value)
        line += 1
        text_area.value += `${line}, Withdraw : ${money.value}, Current account balance: ${total_acc}, Current cash balance: ${total_cash}\n`
    }else{
        text_area.value += `ERROR \n`
    }
}

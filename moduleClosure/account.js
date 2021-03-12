var accountList = [];
document.addEventListener('DOMContentLoaded', function(){
    var createBtn = document.getElementById("create");
    createBtn.addEventListener("click", addAccount);
}, false);

function Account(name, deposit){
    this.name = name;
    this.deposit = deposit;
}

function addAccount(){
    var name = document.getElementById("account-name").value;
    var deposit = document.getElementById("deposit").value;

    var account = new Account(name, deposit);
    accountList.push(account);
    updateTextArea();
}

function updateTextArea(){
    document.getElementById("account-list").innerHTML = "";
    accountList.forEach(element => {
        document.getElementById("account-list").innerHTML += "Account Name: " + element.name +
            "  Balance: " + element.deposit + "\n";
    });
}
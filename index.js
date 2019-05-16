// https://api.myjson.com/bins/1an95e

function scoreAdd (x) {
    var counter
    var password_e = document.getElementById("pass").value
    var password = "aditwillwin"
    
    if (password_e == password) {
        if (x == 1) {
            counter = parseInt(document.getElementById("adit_s").textContent) + 1
            document.getElementById("adit_s").innerHTML = counter
        }

        else if (x == 2) {
            counter = parseInt(document.getElementById("tj_s").textContent) + 1
            document.getElementById("tj_s").innerHTML = counter
        }

        document.getElementById("wrong").innerHTML = ""
    }

    else {
        document.getElementById("wrong").innerHTML = "WRONG PASSWORD"
    }
}
function validatepass(pass) {
    let checkp = false;
    for (let i = 0; i < pass.length; i++) {
        if (pass[i] >= "A" && pass[i] <= "Z") {
            checkp = true;
            break;
        }
    }
    return pass.length >= 6 && checkp == true;
}

function validatepasss() {
    let p = document.getElementById("signup-password");
    let pass = p.value;
    if (validatepass(pass) == false) {
        let error2 = document.getElementsByClassName("error")[1];
        error2.style.display = "block";
    }
}
let index = 0;
Hiencheck(1);

function Hiencheck(k) {
    let a = document.getElementsByClassName("check");
    a[k].style.display = "block";
}

function Ancheck(k) {
    let a = document.getElementsByClassName("check");
    a[k].style.display = "none";
}

function HienThiCheckTiepTheo() {
    Ancheck(index);
    index++;
    if (index == 4) index = 0;
    Hiencheck(index);
}

function Checkpoint(ma) {
    if (ma.length < 3 || ma.length > 3) {
        return false;
    }
    return true;
}

function Testcheckma() {
    let c = document.getElementById("security");
    let ma = c.value;
    if (Checkpoint(ma) == false) {
        let error3 = document.getElementsByClassName("error")[2];
        error3.style.display = "block";
    }
}

function Checkemail(email) {
    if (email.length < 10) {
        return false;
    }
    for (let i = 0; i < email.length; i++)
        if (email[i] == "@") {
            return true;
        }
    return false;
}

function testemail() {
    let e = document.getElementById("signup-email");
    let email = e.value;
    if (Checkemail(email) == false) {
        let error3 = document.getElementsByClassName("error")[0];
        error3.style.display = "block";
    }
}
document.getElementById("submitlogin").addEventListener("click", testemail)
document.getElementById("submitlogin").addEventListener("click", Testcheckma)
document.getElementById("submitlogin").addEventListener("click", validatepasss)
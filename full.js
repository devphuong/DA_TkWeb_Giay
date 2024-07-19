document.getElementById("Contact-b").addEventListener("click", onclickAccount);

let flag = true;

function onclickAccount() {
    if (flag == true) {
        let g = document.getElementById("Contact-giohang");
        g.style.display = "none";
        let s = document.getElementById("Contact-account");
        s.style.display = "block";
        flag = false;
    } else {
        let s = document.getElementById("Contact-account");
        s.style.display = "none";
        flag = true;
    }
}

document.getElementById("Giohang").addEventListener("click", onclickGiohang);

function onclickGiohang() {
    if (flag == true) {
        let s = document.getElementById("Contact-account");
        s.style.display = "none";
        let g = document.getElementById("Contact-giohang");
        g.style.display = "block";
        flag = false;
    } else {
        let g = document.getElementById("Contact-giohang");
        g.style.display = "none";
        flag = true;
    }
}
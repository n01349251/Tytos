function save() {
    var em = document.getElementById('email').value;
    localStorage.setItem('email', em);

    var pas = document.getElementById('password').value;
    localStorage.setItem('password', pas);

    document.getElementById('email').value = "";
    document.getElementById('password').value = "";

}
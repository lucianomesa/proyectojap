function userNavbar(){
    let usuario = document.getElementById("infoUser");
    const storedData = JSON.parse(sessionStorage.datos);
    usuario.innerHTML += 
    `<a class="nav-link" href="index.html">${storedData.email}</a>`
}
userNavbar();
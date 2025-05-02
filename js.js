const menu = () => {
    const oi = document.getElementById("menus");
    const jk = document.getElementById("close");
    if(oi.style.display == "none" || oi.style.display == ""){
         oi.style.display = "block";
         jk.src = "img/icons/close-menu.png";
    }
    else{
        oi.style.display = "none";
        jk.src = "img/icons/menu.png";
    }
}
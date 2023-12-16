function updateText() {
    var msg = document.querySelector("#msg");
    var img = document.querySelector("#imagem");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = "images/manha.jpg"
        document.body.style.background = "#e2cd9f"
    } else if (hora >= 12 && hora <= 18) {
        img.src = "images/tarde.jpg"
        document.body.style.background = "#b9846f"
    } else {
        img.src = "images/noite.jpg"
        document.body.style.background = "#515154"
    }
}
function verificarIdade() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector("#txtano")
    var res = document.querySelector("#res")

    if (fano.value.length == 0 || fano.value > ano) {
        alert("Verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - fano.value
        var gen = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsex[0].checked) {
            gen = "Homem"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "images/criançaM.png")
            } else if (idade <= 21) {
                img.setAttribute("src", "images/jovemM.png")
            } else if (idade < 60) {
                img.setAttribute("src", "images/adultoM.png")
            } else {
                img.setAttribute("src", "images/idosoM.png")
            }
        } else if (fsex[1].checked) {
            gen = "Mulher"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "images/criançaF.png")
            } else if (idade <= 21) {
                img.setAttribute("src", "images/jovemF.png")
            } else if (idade < 60) {
                img.setAttribute("src", "images/adultoF.png")
            } else {
                img.setAttribute("src", "images/idosaF.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}
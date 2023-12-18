function gerarTabuada() {
    let num = document.querySelector("#txtn")
    let tab = document.querySelector("#seltab")

    if (num.value.length == 0) {
        alert("Digite um número")
    } else {
        let n = Number(num.value)
        tab.innerHTML = ""
        for(var i = 0; i <= 10; i++) {
            let item = document.createElement("option")
            item.text = `${n} x ${i} = ${n * i} `
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}
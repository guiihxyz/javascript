function contar() {
    let ini = document.querySelector("#txti")
    let fim = document.querySelector("#txtf")
    let passo = document.querySelector("#txtp")
    let resultado = document.querySelector("#res")

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = "Impossível contar"
    } else {
        resultado.innerHTML = "Contando:<br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert("Passo inválido! Considerando passo 1")
            p = 1;
            passo.value = 1;
        }
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F449} `
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} \u{1F449} `
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}
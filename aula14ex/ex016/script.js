function contar() {
    let ini = document.querySelector("#txti")
    let fim = document.querySelector("#txtf")
    let passo = document.querySelector("#txtp")
    let resultado = document.querySelector("#res")

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert("Faltam dados")
    } else {
        resultado.innerHTML = "Contando: "
        let i = ini.value
        let f = fim.value
        let p = passo.value

        for(let c = i; c <= f; c += p) {
            resultado.innerHTML += `${c} \u{1F449}`
        }
    }
}
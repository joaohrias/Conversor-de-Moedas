let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")



async function converterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then( function(resposta){
       return resposta.json()
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high

    let inputValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")


    if (select.value === "US$ Dólar americano") {
        let valorEmDolares = inputValorEmReais / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString("en-US", { style: "currency", currency: "USD" })
    }

    if (select.value === "€ Euro") {
        let valorEmEuro = inputValorEmReais / euro
        inputMoedas.innerHTML = valorEmEuro.toLocaleString("de-DE", { style: "currency", currency: "EUR" })
    }

    textoReal.innerHTML = inputValorEmReais.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
}
function trocaDeMoedas() {
    let textoMoeda = document.getElementById("texto-moeda")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")

    if (select.value === "US$ Dólar americano") {
        textoMoeda.innerHTML = "Dólar americano"
        bandeiraMoedas.src = "./ms1.img/eua"
    }

    if (select.value === "€ Euro") {
        textoMoeda.innerHTML = "Euro"
        bandeiraMoedas.src = "./ms1.img/Euro"
    }

    converterMoedas()
}

botao.addEventListener("click", converterMoedas)
select.addEventListener("change", trocaDeMoedas)

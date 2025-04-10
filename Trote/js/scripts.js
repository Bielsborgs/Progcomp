function calcular(){
    // criar duas 2 variaveis
    // js variasveis não possuem tipo
    let mascote, homenagem, soma, leite, kit, supl, equipe, sangue
    mascote = Number(document.getElementById("mascote").value) // puxa o valor pela id no html //
    homenagem = Number(document.getElementById("homenagem").value)
    leite = Number(document.getElementById("leite").value)
    kit = Number(document.getElementById("kit").value)
    supl = Number(document.getElementById("supl").value)
    sangue = Number(document.getElementById("sangue").value)
    equipe = document.getElementById("opcoes").value

    soma = (mascote) + (homenagem) + (leite)*2

    if (equipe=="laranja") {
        if(kit >= 97 && supl >= 49){
            soma = soma + 5000 + ((kit-97)*30) + ((supl - 49)*15)
        }
        else if (kit >= 78 && supl >= 39){
            soma = soma + 4000 + ((kit-78)*30) + ((supl - 39)*15)
        }
        else if (kit >= 49 && supl >= 25){
            soma = soma + 2500 + ((kit-49)*30) + ((supl - 25)*15)
        }
        else if (kit >= 19 && supl >= 10){
            soma = soma + 1000 + ((kit-19)*30) + ((supl - 10)*15)
        }
        if(sangue >= 49){
            soma = soma + 2500 + ((sangue-49)*20)
        }
        else {
            soma = soma + (sangue*20)
        }
    }
    
    else if(equipe=="preto") {
        if(kit >= 103 && supl >= 52){
            soma = soma + 5000 + ((kit-103)*30) + ((supl - 52)*15)
        }
        else if (kit >= 78 && supl >= 39){
            soma = soma + 4000 + ((kit-82)*30) + ((supl - 42)*15)
        }
        else if (kit >= 49 && supl >= 25){
            soma = soma + 2500 + ((kit-52)*30) + ((supl - 26)*15)
        }
        else if (kit >= 19 && supl >= 10){
            soma = soma + 1000 + ((kit-21)*30) + ((supl - 10)*15)
        }
        if(sangue >= 52){
            soma = soma + 2500 + ((sangue-52)*20)
        }
        else {
            soma = soma + (sangue*20)
        }
    }

    else if(equipe=="roxo") {
        if(kit >= 102 && supl >= 51){
            soma = soma + 5000 + ((kit-102)*30) + ((supl - 51)*15)
        }
        else if (kit >= 78 && supl >= 39){
            soma = soma + 4000 + ((kit-82)*30) + ((supl - 41)*15)
        }
        else if (kit >= 49 && supl >= 25){
            soma = soma + 2500 + ((kit-51)*30) + ((supl - 26)*15)
        }
        else if (kit >= 19 && supl >= 10){
            soma = soma + 1000 + ((kit-20)*30) + ((supl - 10)*15)
        }
        if(sangue >= 51){
            soma = soma + 2500 + ((sangue-51)*20)
        }
        else {
            soma = soma + (sangue*20)
        }
    }

    else if(equipe=="verde") {
        if(kit >= 88 && supl >= 44){
            soma = soma + 5000 + ((kit-88)*30) + ((supl - 42)*15)
        }
        else if (kit >= 78 && supl >= 39){
            soma = soma + 4000 + ((kit-70)*30) + ((supl - 35)*15)
        }
        else if (kit >= 49 && supl >= 25){
            soma = soma + 2500 + ((kit-44)*30) + ((supl - 22)*15)
        }
        else if (kit >= 19 && supl >= 10){
            soma = soma + 1000 + ((kit-18)*30) + ((supl - 9)*15)
        }
        if(sangue >= 44){
            soma = soma + 2500 + ((sangue-44)*20)
        }
        else {
            soma = soma + (sangue*20)
        }
    }

    else {
        if(kit >= 93 && supl >= 47){
            soma = soma + 5000 + ((kit-93)*30) + ((supl - 47)*15)
        }
        else if (kit >= 78 && supl >= 39){
            soma = soma + 4000 + ((kit-74)*30) + ((supl - 38)*15)
        }
        else if (kit >= 49 && supl >= 25){
            soma = soma + 2500 + ((kit-47)*30) + ((supl - 24)*15)
        }
        else if (kit >= 19 && supl >= 10){
            soma = soma + 1000 + ((kit-19)*30) + ((supl - 9)*15)
        }
        if(sangue >= 47){
            soma = soma + 2500 + ((sangue-47)*20)
        }
        else {
            soma = soma + (sangue*20)
        }
    }
    document.getElementById("soma").innerHTML = `A soma é ${soma}` // devolve o valor para o html //
}

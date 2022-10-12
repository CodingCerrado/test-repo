const nosSomos = ['AMOR', "ESCALADA", "RESPEITO", "CURTIÇÃO", "NERDS", "UNIÃO", "PAZ", "CERRADO", "A TURMA DO FUNIL"]
function onClick() {
    document.getElementById("text").innerHTML = nosSomos[Math.floor(Math.random() * nosSomos.length)];
}
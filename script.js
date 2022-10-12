const arrayResposta = ['JEFF', "BIA", "JACQUE", "JOAO", "THIAGO"]
function onClick() {
    document.getElementById("text").innerHTML = arrayResposta[Math.floor(Math.random() * arrayResposta.length)];
}
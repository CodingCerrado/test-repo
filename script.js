const arrayResposta = ['GIT', "GITHUB", "JAVASCRIPT", "CSS", "HTML", "TRELLO", "SLACK"]
function onClick() {
    document.getElementById("text").innerHTML = nosSomos[Math.floor(Math.random() * arrayResposta.length)];
}
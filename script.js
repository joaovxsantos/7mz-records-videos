let video = document.getElementById("video")
let h2 = document.getElementsByTagName("h2")[0]
let content = document.getElementsByClassName("content")[0]

function play() {
    video.play()
}

function pause() {
    video.pause()
}

function stop() {
    video.pause()
    video.currentTime = 0
}

function back() {
    video.currentTime -= 15
}

function next() {

    video.currentTime += 15

}

function mouse() {

    let a = document.getElementsByClassName("btn")[0]
    let b = document.getElementsByClassName("btn")[1]
    let c = document.getElementsByClassName("btn")[2]
    let d = document.getElementsByClassName("btn")[3]
    let e = document.getElementsByClassName("btn")[4]

    a.style = "opacity: 100%"
    b.style = "opacity: 100%"
    c.style = "opacity: 100%"
    d.style = "opacity: 100%"
    e.style = "opacity: 100%"
}


function mouse2() {
    let a = document.getElementsByClassName("btn")[0]
    let b = document.getElementsByClassName("btn")[1]
    let c = document.getElementsByClassName("btn")[2]
    let d = document.getElementsByClassName("btn")[3]
    let e = document.getElementsByClassName("btn")[4]

    a.style = "opacity: 0"
    b.style = "opacity: 0"
    c.style = "opacity: 0"
    d.style = "opacity: 0"
    e.style = "opacity: 0"
}

function trade() {

    video.poster = "./images/thumb o mundo vai saber meu nome.png"
    video.src = "./videos/O MUNDO VAI SABER MEU NOME - Lucas A.R.T. e Gabriel Rodrigues (Game Over Squad Soundtrack).mp4"
    h2.innerText = "O mundo vai saber meu nome"
    content.style = "border: 13px double #bc5e00;"
    window.scrollTo(0, 0)
}

function trade2() {
    video.poster = "./images/thumb te falta odio.png"
    video.src = "./videos/TE FALTA ÓDIO - Gabriel Rodrigues e Lucas A.R.T. [Prod. bezimenimusic].mp4"
    h2.innerText = "Te falta ódio"
    content.style = "border: 13px double rgb(235, 239, 241);"
    window.scrollTo(0, 0)
}

function trade3() {
    video.poster = "./images/thumb yondaime.png"
    video.src = "./videos/YONDAIME - Lucas A.R.T. e Pablo Matheuz [Prod. Bonk Beatz].mp4"
    h2.innerText = "Yondaime"
    content.style = "border: 13px double rgb(23, 24, 24);"
    window.scrollTo(0, 0)
}

function trade4() {
    video.poster = "./images/thumb esferas do dragao.png"
    video.src = "./videos/ESFERAS DO DRAGÃO - Pedro Alvez, Lucas A.R.T. e Pablo Matheuz [Prod. Mantra & Zero Beatz].mp4"
    h2.innerText = "Esferas do dragão"
    content.style = "border: 13px double rgb(255, 153, 0);"
    window.scrollTo(0, 0)
}


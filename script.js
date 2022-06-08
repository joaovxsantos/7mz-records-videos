document.getElementById("video")

function play(){
    video.play()
}

function pause(){
  video.pause()
}

function stop(){
   video.pause()
   video.currentTime = 0
}

function back(){
   video.currentTime -=15
}

function next(){

    video.currentTime +=15

}




function mouse(){

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


function mouse2(){
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

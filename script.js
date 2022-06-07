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
   video.currentTime -=10
}

function next(){

    video.currentTime +=10

}

function button(){
    let img = document.getElementsByTagName("img")[0]
    let img1 = document.getElementsByTagName("img")[1]
    let img2 = document.getElementsByTagName("img")[2]
    let img3 = document.getElementsByTagName("img")[3]
    let img4 = document.getElementsByTagName("img")[4]

    img.style = "opacity: 100%"
    img1.style = "opacity: 100%"
    img2.style = "opacity: 100%"
    img3.style = "opacity: 100%"
    img4.style = "opacity: 100%"

    addEventListener("mouseout", clear())


}

// function clear(){
//     let img = document.getElementsByTagName("img")[0]
//     let img1 = document.getElementsByTagName("img")[1]
//     let img2 = document.getElementsByTagName("img")[2]
//     let img3 = document.getElementsByTagName("img")[3]
//     let img4 = document.getElementsByTagName("img")[4]

//     img.style = "opacity: 0"
//     img1.style = "opacity: 0"
//     img2.style = "opacity: 0"
//     img3.style = "opacity: 0"
//     img4.style = "opacity: 0"
// }


function teste(){
   let a = document.getElementsByTagName("button")[0]
    a.style = "background-color: red"

    addEventListener("mouseout", alo)
}

function alo(){
    a.style = "background-color: blue"
}

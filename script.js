

let body = document.getElementById("body")
let moon = document.getElementById("moon")
let menu = document.getElementById("menu")
let nav = document.getElementById("navbar")
let meno = document.getElementById("meno")
let foot = document.getElementById("footer")
let lordicon = document.getElementById("em")
let lordicon2 = document.getElementById("emm")
let lordicon3 = document.getElementById("emmm")


let glow = () => {

    body.style.backgroundColor = "#111827"
    moon.style.color = "white"
    body.style.color = "white"
    menu.style.color = "white"
    nav.style.backgroundColor = "#111827"
    meno.style.backgroundColor = "#111827"
    foot.style.backgroundColor = "#111827"

}
let off = () => {

    body.style.backgroundColor = ""
    moon.style.color = ""
    body.style.color = ""
    menu.style.color = ""
    nav.style.backgroundColor = ""
    meno.style.backgroundColor = ""
    foot.style.backgroundColor = ""

}
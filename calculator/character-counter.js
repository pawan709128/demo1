// BY Engineer Elhamuddin Taheri
// getting elements by DOM:
let area = document.querySelector("#area")
let characters = document.querySelector("#character")
let words = document.querySelector("#word")
let spaces = document.querySelector("#space")

// adding events to the elements:
area.addEventListener("keyup",e => {
    let text = area.value
    characters.textContent = text.length
    words.textContent = text.trim().split(" ").length 
    spaces.textContent = text.split(" ").length - 1
})

const cocModal = `
        <span class="close" "onClick="artClick()"> X </span>
        <span id="left" class="slide-arrow" style="font-size: xx-large;position:absolute; top: 8em; left: .5em;"><</span>
        <span id="right" class="slide-arrow" style="font-size: xx-large;position:absolute; top: 8em; right: .5em;">></span>
        <img style="max-height: 50%;" src="public/creature_of_consumption.png" />
        <h1>Creature of Consumption</h1>`
const terrModal = `
        <span class="close" "onClick="artClick()"> X </span>
        <span id="left" class="slide-arrow" style="font-size: xx-large;position:absolute; top: 8em; left: .5em;"><</span>
        <span id="right" class="slide-arrow" style="font-size: xx-large;position:absolute; top: 8em; right: .5em;">></span>
        <img style="max-height: 35%;" src="public/terra.png" />
        <h1>Terra</h1>`

const artArr = [cocModal, terrModal]

function artModal(innerHtml){
    return `<div id="modal" class="modal" style= height: 100%; display: table;" onclick="artClick()">${innerHtml}</div>`
}

function artClick() {
    // debugger
    if (event.target.className === "modal" || event.target.className === "close") {
        document.querySelector('#modal').remove()
    } else if (event.target.id === "right" && artIndx != artArr.length - 1) {
        event.stopPropagation()
        artIndx += 1
        document.querySelector('#modal').innerHTML = artArr[artIndx]
    } else if (event.target.id === "right" && artIndx === artArr.length - 1) {
        event.stopPropagation()
     artIndx = 0
        document.querySelector('#modal').innerHTML = artArr[artIndx]
    } else if (event.target.id === "left" && artIndx != 0) {
        event.stopPropagation()
     artIndx -= 1
        document.querySelector('#modal').innerHTML = artArr[artIndx]
    } else if (event.target.id === "left" && artIndx === 0) {
        event.stopPropagation()
     artIndx = (artArr.length - 1)
        document.querySelector('#modal').innerHTML = artArr[artIndx]
    } else if (typeof event.target.dataset.arrayPosition === "string") {
     artIndx = parseInt(event.target.dataset.arrayPosition, 10)
        event.stopPropagation()
        nav.insertAdjacentHTML("beforeend", artArr[artIndx])
    } else if (event.target.className === "about-href") {
        artIndx = 0
        let modal = artModal(artArr[artIndx])
        nav.insertAdjacentHTML("beforeend", modal)        
    }
}
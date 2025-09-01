document.onclick = () => {

let mustard = document.createElement("img")
mustard.style = "width: 100vw; height: 100vh; position: fixed; margin: 0px; right: 0px; bottom: 0px; z-index: 1; pointer-events: none;"
mustard.src = "https://raw.githubusercontent.com/wubleuw0/mango/d8513b4fe9cb978deec2d360406560a9fefba3cc/kendrick-kendrick-lamar.gif"
document.body.appendChild(mustard)

let phonk = new Audio("https://raw.githubusercontent.com/wubleuw0/mango/a34215aee9433ed1195b97d336ff5ce240875c41/Kendrick-Lamar-tvoff(AGRESSIVE-GAMING-PHONK-REMIX).mp3")
phonk.play()

setTimeout(() => {
    let txt = "afuahufheahfweh2384g8h384ghuhqguh489543876843r348r438fj834uft834u834ur4823u23r8ru8fu843ut482ut"
        while(true){ 
            txt += "543876843r348r438fj834uft834u834ur4823u23r8ru8fu843ut482ut543876843r348r438fj834uft834u834ur4823u23r8ru8fu843ut482ut"
            console.log(txt); console.error(txt)
        }
}, 8600)

}

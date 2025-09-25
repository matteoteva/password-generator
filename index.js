const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let firstPassEl = document.getElementById("first-password-el") 
let secondPassEl = document.getElementById("second-password-el") 
let copiedEl = document.getElementById("copy-msg")

function getPasswords() { 
    let firstPass = getRandomPassword()
    let secondPass = getRandomPassword()
    copiedEl.textContent = "Click on Password to Copy!"

    firstPassEl.textContent = firstPass
    secondPassEl.textContent = secondPass
}


function randNum() {
    num = Math.floor(Math.random() * characters.length)

    return num
}

function getRandomPassword() {
    let randomPass = "" 

    for(let i = 0; i <= 15; i++) {
        randomNum = randNum()

        randomPass += characters[randomNum]
        console.log(`Random Character Added: ${randomPass}`)
    }

    return randomPass
}

function copyToClipboardF() {
    navigator.clipboard.writeText(firstPassEl.textContent).then(() => {
        copiedEl.textContent = "Copied!"
    })
}

function copyToClipboardS() {
    navigator.clipboard.writeText(secondPassEl.textContent).then(() => {
        copiedEl.textContent = "Copied!"
    })
}





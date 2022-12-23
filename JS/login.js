const quote = document.querySelector("q")

function writeText(q){
    const textArray = q.innerText.split("")
    q.innerText = ""
    textArray.forEach((letter, index) => {
        setTimeout(() => q.innerText += letter,  60 * index)
    });
}
writeText(quote)


function toggleLogin(){
    const element = document.querySelector(".formulary")
    element.classList.toggle("active")
}

const form = document.querySelector("form")
const tooltip = document.querySelector(".alert")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    addAnRemoveActive()   
})

function addAnRemoveActive(){
    if (tooltip.className != "alert active"){
        tooltip.classList.add("active")
        setTimeout(() => tooltip.classList.remove("active"), 2500)
    }
}

const colors = ["Red", "Blue", "Green", "Yellow", "Orange", "White"]

const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener("click" , () => {
    const random = GetRandom()
    console.log(random)

    document.body.style.backgroundColor = colors[random]
    color.textContent = colors[random]
})

function GetRandom(){
    return Math.floor(Math.random() * colors.length)
}

const alertFunction = () =>{
    alert("Hello World")
}
const btn = document.querySelector("#btn")

btn.onclick = alertFunction

btn.addEventListener("click",alertFunction)
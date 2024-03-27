let listaDeCores = ["blue","red","green","yellow","black","pink","brown","purple","orange"]

let btn = document.getElementById("btn")
let span = document.getElementById("span")

btn.addEventListener("click" ,function (){
    number = getNumberRandom()
    document.body.style.backgroundColor = listaDeCores[number]
    span.innerHTML = listaDeCores[number]
})
function getNumberRandom(){
   return parseInt( Math.random() * listaDeCores.length)
}



let listaDeCores = ["blue","red","green","yellow","black","pink","brown","purple","orange"]

let btn = document.getElementById("btn")
let divi = document.getElementById("divi")

btn.addEventListener("click" ,function (){
    number = getNumberRandom()
    document.body.style.backgroundColor = listaDeCores[number]
    divi.innerHTML = listaDeCores[number]
})
function getNumberRandom(){
   return parseInt( Math.random() * listaDeCores.length)
}



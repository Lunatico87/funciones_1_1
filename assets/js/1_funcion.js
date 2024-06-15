let verificar = document.querySelector("#verificar")

verificar.addEventListener('click',()=>{
    let a = document.querySelector("#a").value
    let b = document.querySelector("#b").value
    let c = document.querySelector("#c").value

a = parseInt(a)
b = parseInt(b)
c = parseInt(c)

let suma = a + b + c


    document.querySelector("h3").innerHTML = "Resultado " + suma 
    
        
return a+b+c
})



//const suma = (a, b, c)=>{
    //return a+b+c



// function example(a, b, c){
 //   return a+b+c
 //   } 

 
console.log("hola")

 const sendLogin= async ()=>{
    console.log("hola estoy en login")
    const response = await fetch("/hola", {method:'POST',  headers: {'Accept': 'application/json','Content-Type': 'application/json'}, body:JSON.stringify("hola")})
    const result= await response.json()
    console.log(result)
 }
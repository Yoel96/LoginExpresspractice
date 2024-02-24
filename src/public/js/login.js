 

 const sendLogin= async ()=>{
      
    let loginEmail=document.getElementById("userEmail").value 
    let loginPassword= document.getElementById("loginPass").value 
    if(loginPassword.length && loginEmail.length ){
    const response = await fetch("/login", {method:'POST',  headers: {'Accept': 'application/json','Content-Type': 'application/json'}, body:JSON.stringify({email:loginEmail, pass:loginPassword})})
    const result= await response.json()
    if(result){

      document.querySelector("#loginResponse p").innerText="Now you are logged"

    }else{
      document.querySelector("#loginResponse p").innerText="Your email or password is wrong, please introduce a proper user"


    }
   }
 }


 const register= async()=>{

   const userObj={
      "userName":document.getElementById("userName").value,
      "firstName":document.getElementById("firstName").value,
      "lastName":document.getElementById("lastName").value,
      "email":document.getElementById("userREmail").value,
      "password":document.getElementById("registerPass").value,
   }

   console.log(userObj)
   const response = await fetch("/createUser", {method:'POST',  headers: {'Accept': 'application/json','Content-Type': 'application/json'}, body:JSON.stringify(userObj)})



 }
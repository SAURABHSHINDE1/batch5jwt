


let loginfrom = document.querySelector("#loginform")


loginfrom.addEventListener("submit" , async(e)=>{

    e.preventDefault()

    let email = document.querySelector("#email").value

    let pass = document.querySelector("#pass").value

    let res = await fetch("http://127.0.0.1:4000/api/login",{
        method :"POST",
        headers:{
           "Content-Type" : "application/json"
        },
        credentials :"include",
        body:JSON.stringify({
            email ,
            pass
        })
    })

    console.log(res)

    let data = await res.json()
    console.log(data)

    if(data.success){
        alert("login successfully")
        window.location.href = "../dashboard/index.html"
    }
    else{
        alert("invalid credencials ")
    }


})
const getdata = async()=>{

    let res  = await fetch("http://127.0.0.1:4000/api/dashboard", {
        method :"GET",
        credentials:"include"
    })


    let data =await res.json()

    console.log(data)

}

getdata()
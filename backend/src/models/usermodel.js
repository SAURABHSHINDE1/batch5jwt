import db from '../config/db.js'

export const registerUser = async(name , email , pass)=>{

    try{

        let sql = 'insert into user(name , email , pass) values (? , ? , ?)'

        let [rows] = await db.execute(sql , [name , email , pass])

        return rows

    }
    catch(error){
        return error.message
    }

}



export const loginUser = async(email)=>{

     try{

        let sql = 'select * from user where email  = ?'

        let [rows] = await db.execute(sql  , [email])

        return rows
     }
     catch(error){
        return error.message
     }

}
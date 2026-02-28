import {dashBoard, loginUser, registerUser} from'../models/usermodel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const registerUserController = async(req , res)=>{

    try{

        let {name , email , pass} = req.body

        let hashpass = await bcrypt.hash(pass , 10)

        let result = await registerUser(name , email , hashpass)

        if(result.affectedRows == 0){
            return res.json({success: false , Message :"user not register"})
        }

        return res.json({success: true , message :"user register successfull"})

    }
    catch(error){
        return res.json({success: false , Message :error.message})
    }

}


export const loginUserController = async(req , res)=>{

    try{

        let {email , pass} = req.body

        console.log(email , pass)

        let result = await loginUser(email)

        let user = result[0]

        console.log(user)

        let ismatch = await bcrypt.compare(pass , user.pass)

        console.log(ismatch)

        if(ismatch){
            let token = jwt.sign(
                {email :user.email,
                 id:user.id
                },
                process.env.JWT_SECRATE,
                {expiresIn:"2h" , algorithm:"HS256"}
            )

            console.log(token)

            res.cookie("token" , token ,{
                httpOnly: true , 
                secure:false,
                sameSite:"lax",
                maxAge: 2 * 60 * 60 * 1000
            })


            return res.json({success : true , message :"user Login successfully"})
        }
        else{
            return res.json({success:false , message :"some error in login"})
        }

    }
    catch(error){
         return res.json({success:false , message :error.message})
    }

}


export const dashBoardController = async(req , res) =>{
    try{

        let id = req.user.id

        let result = await dashBoard(id)

        if(result.length == 0){
            return res.json({success : false , message :"user not found"})
        }

        return res.json({success: true , message :result})

    }
    catch(error){
        return res.json({success : false , message :error.message})
    }
}
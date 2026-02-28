import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {

  try {

        let token  = req.cookies.token

        if(!token){
            res.json({success : false, message :"token not found"})
        }

        let decode = jwt.verify(token ,  process.env.JWT_SECRATE)

        req.user = decode


        next()
  } 
  catch (error) {
    res.json({success : false, message :error.message})
  }
};

import express from 'express'
import { dashBoardController, loginUserController, registerUserController } from '../controller/userController.js'
import { verifyToken } from '../middleware/authMiddleware.js'

const router = express.Router()


router.post('/register' , registerUserController)

router.post('/login' , loginUserController)

router.get('/dashboard' , verifyToken , dashBoardController)


export default router
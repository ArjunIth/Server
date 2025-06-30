import express, { Router } from 'express'  
import AuthController from '../../../controller/globals/auth/authController'
import asyncErrorHandler from '../../../service/asyncErrorHandler'

const router: Router = express.Router()
//router.post('/register', AuthController.registerUser);
router.route('/register').post(asyncErrorHandler(AuthController.registerUser))
router.route('/login').post(asyncErrorHandler(AuthController.loginUser))
export default router
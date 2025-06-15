import express from 'express'
const app = express()
import AuthController from './controller/globals/auth/authController' 
import authRoute from './route/globals/auth/authRoute'
import instituteRoute from './route/institute/instituteRoute'
//import bodyParser from 'body-parser'  
app.use(express.json()) // for parsing application/json
// alternative body-parser.urlencoded({ extended: true }) // for parsing application/x-www-form-urlencoded  
app.use('/api', authRoute) // Register the auth route
app.use('/api/institute',instituteRoute) // Register the AuthController





export default app
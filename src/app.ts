import express from 'express'
const app = express()
import AuthController from './controller/globals/auth/authController' 
import authRoute from './route/globals/auth/authRoute'
//import bodyParser from 'body-parser'  
app.use(express.json()) // for parsing application/json
// alternative body-parser.urlencoded({ extended: true }) // for parsing application/x-www-form-urlencoded  
app.use('/api/auth', authRoute) // Register the auth route





export default app
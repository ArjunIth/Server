import express from 'express'
const app = express()
import AuthController from './controller/globals/auth/authController' 
import authRoute from './route/globals/auth/authRoute'
import instituteRoute from './route/institute/instituteRoute'
import courseRoute from './route/institute/course/courseRoute'
import studentRoute from './route/institute/student/studentRoute'   
import categoryRoute from './route/institute/category/categoryRoute'
import teacherInstituteRoute from './route/institute/teacher/teacherRoute'
import teacherRoute from './route/teacher/teacherRoute'

//import bodyParser from 'body-parser'  
app.use(express.json()) // for parsing application/json
// alternative body-parser.urlencoded({ extended: true }) // for parsing application/x-www-form-urlencoded  
app.use('/api', authRoute) // Register the auth route
app.use('/api/institute',instituteRoute) // Register the AuthController
app.use('/api/institute/course',courseRoute)
app.use('/api/institute/student',studentRoute)
app.use('/api/institute/category',categoryRoute)
app.use('/api/institute/teacher',teacherInstituteRoute)

//TEACHER ROUTE
app.use("/api/teacher",teacherRoute)





export default app
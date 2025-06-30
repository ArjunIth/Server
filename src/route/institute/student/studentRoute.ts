import express, { Router } from "express"
import asyncErrorHandler from "../../../service/asyncErrorHandler"
import { getStudents } from "../../../controller/institute/student/studentController"


const router:Router = express.Router()

router.route("/")
.get(asyncErrorHandler(getStudents))



export default router

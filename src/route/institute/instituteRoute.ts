import express, { Router } from "express"

import isLoggedIn from "../../middleware/middleware"
//import { createCourseTable, createInstitute, createStudentTable, createTeacherTable } from "../../controller/institute/instituteController"
import { createCourseTable, createInstitute, createStudentTable, createTeacherTable } from "../../controller/institute/instituteController"
import asyncErrorHandler from "../../service/asyncErrorHandler"

const router:Router = express.Router()

router.route("/").post(asyncErrorHandler(isLoggedIn), asyncErrorHandler(createInstitute) ,asyncErrorHandler(createTeacherTable),asyncErrorHandler(createStudentTable),asyncErrorHandler(createCourseTable))


export default router
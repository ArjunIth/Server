import { NextFunction,Request,Response } from "express"

const asyncErrorHandler = (fn: Function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err:Error) => {
      //console.error("Async Error:", err)
            return res.status(500).json({
                message: err.message || "An unexpected error occurred",
                Fullerror: err || "No stack trace available"
            })
        })

    }
  
}



export default asyncErrorHandler
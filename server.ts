import app from "./src/app";
import { config } from "dotenv";
config()

import "./src/database/connection"; // database connection file lai import garne
function startServer(){
    const port = process.env.PORT 
    app.listen(port,function(){
        console.log(`Server has started at port ${port}`)
    })
}

startServer()
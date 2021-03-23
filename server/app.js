const express = require("express")
const app = express();
const port = 5000
const conn = require("./db/conn");
const cors = require("cors")
app.use(cors())



app.use(express.json())
app.use(express.urlencoded({extended:false}))
// routers
const routeruser = require("./routers/UserRouter")
app.use("/", routeruser);

const signuprouter =  require("./routers/UserSignupRouter");
app.use("/signup", signuprouter)


const loginrouter = require("./routers/UserLoginRouter")
app.use("/login", loginrouter)




app.listen(port , () => console.log(`server is listing on port ${port}`));

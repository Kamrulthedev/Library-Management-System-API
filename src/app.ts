import  express, { Application, Request, Response, urlencoded }  from "express";
import cors from "cors";
import cookieParser from 'cookie-parser'; 


const app: Application = express();
app.use(cors());
app.use(cookieParser()); 

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req: Request, res: Response) =>{
    res.send("Library Managment System API....")
});

// app.use("/api/v1", router);
// app.use(globalErrorHendlar);
// app.use(notFount);

export default app;
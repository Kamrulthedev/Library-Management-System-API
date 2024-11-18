import  express, { Application, Request, Response, urlencoded }  from "express";
import cors from "cors";
import cookieParser from 'cookie-parser'; 
import router from "./app/routes";
import { globalErrorHendlar } from "./app/middlewares/globalErrorHendlar";
import { notFount } from "./app/middlewares/notFount";


const app: Application = express();
app.use(cors());
app.use(cookieParser()); 

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req: Request, res: Response) =>{
    res.send("Library Managment System API....")
});

app.use("/api", router);
app.use(globalErrorHendlar);
app.use(notFount);

export default app;
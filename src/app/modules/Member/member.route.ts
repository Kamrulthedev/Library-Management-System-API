import express  from "express";
import { MemberControllars } from "./member.controllar";


const router = express.Router();

router.post("", MemberControllars.CreateMemberDB);



export const MemberRoutes = router;
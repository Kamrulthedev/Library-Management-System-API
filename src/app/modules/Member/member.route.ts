import express  from "express";
import { MemberControllars } from "./member.controllar";


const router = express.Router();

router.post("", MemberControllars.CreateMemberDB);


router.get("", MemberControllars.GetMembersDB)



export const MemberRoutes = router;
import express  from "express";
import { MemberControllars } from "./member.controllar";


const router = express.Router();

router.post("", MemberControllars.CreateMemberDB);


router.get("", MemberControllars.GetMembersDB);

router.get('/:memberId', MemberControllars.GetByMemberIdDB);

router.put('/:memberId', MemberControllars.UpdateMemberDB);

router.delete('/:memberId', MemberControllars.DeleteMemberDB);



export const MemberRoutes = router;
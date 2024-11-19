"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberRoutes = void 0;
const express_1 = __importDefault(require("express"));
const member_controllar_1 = require("./member.controllar");
const router = express_1.default.Router();
router.post("", member_controllar_1.MemberControllars.CreateMemberDB);
router.get("", member_controllar_1.MemberControllars.GetMembersDB);
router.get('/:memberId', member_controllar_1.MemberControllars.GetByMemberIdDB);
router.put('/:memberId', member_controllar_1.MemberControllars.UpdateMemberDB);
router.delete('/:memberId', member_controllar_1.MemberControllars.DeleteMemberDB);
exports.MemberRoutes = router;

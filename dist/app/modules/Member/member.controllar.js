"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberControllars = void 0;
const catchAsync_1 = require("../../../shared/catchAsync");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const member_service_1 = require("./member.service");
const CreateMemberDB = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield member_service_1.MemberService.CreateMember(data);
    (0, sendResponse_1.default)(res, {
        statusCode: 201,
        success: true,
        message: "Member created successfully!",
        data: result,
    });
}));
const GetMembersDB = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.MemberService.GetMembers();
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Members retrieved successfully!",
        data: result,
    });
}));
const GetByMemberIdDB = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const result = yield member_service_1.MemberService.GetByMemberId(memberId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Members retrieved successfully!",
        data: result,
    });
}));
const UpdateMemberDB = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const data = req.body;
    const result = yield member_service_1.MemberService.UpdateMember(memberId, data);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Member updated successfully!",
        data: result,
    });
}));
const DeleteMemberDB = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    yield member_service_1.MemberService.DeleteMember(memberId);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: "Member successfully deleted!",
        data: null,
    });
}));
exports.MemberControllars = {
    CreateMemberDB,
    GetMembersDB,
    GetByMemberIdDB,
    UpdateMemberDB,
    DeleteMemberDB
};

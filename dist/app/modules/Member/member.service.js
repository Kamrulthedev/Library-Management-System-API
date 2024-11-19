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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberService = void 0;
const sharedPrisma_1 = require("../../../shared/sharedPrisma");
const CreateMember = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, phone, membershipDate } = data;
        if (!name || !email || !phone || !membershipDate) {
            throw new Error("All fields (name, email, phone, membershipDate) are required.");
        }
        const newMember = yield sharedPrisma_1.prisma.member.create({
            data: {
                name,
                email,
                phone,
                membershipDate,
            },
        });
        return newMember;
    }
    catch (error) {
        console.error("Error creating member:", error);
        throw error;
    }
});
const GetMembers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const members = yield sharedPrisma_1.prisma.member.findMany();
        return members;
    }
    catch (error) {
        console.error("Error fetching members:", error);
        throw error;
    }
});
const GetByMemberId = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const member = yield sharedPrisma_1.prisma.member.findUnique({
            where: { memberId: id },
        });
        if (!member) {
            throw new Error(`Member with ID ${id} not found.`);
        }
        return member;
    }
    catch (error) {
        console.error("Error fetching member:", error);
        throw error;
    }
});
const UpdateMember = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingMember = yield sharedPrisma_1.prisma.member.findUnique({
            where: { memberId: id },
        });
        if (!existingMember) {
            throw new Error(`Member with ID ${id} not found.`);
        }
        const updatedMember = yield sharedPrisma_1.prisma.member.update({
            where: { memberId: id },
            data,
        });
        return updatedMember;
    }
    catch (error) {
        console.error("Error updating member:", error);
        throw error;
    }
});
const DeleteMember = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const member = yield sharedPrisma_1.prisma.member.findUnique({
            where: { memberId: id },
        });
        if (!member) {
            throw new Error(`Member with ID ${id} not found.`);
        }
        const deletedMember = yield sharedPrisma_1.prisma.member.delete({
            where: { memberId: id },
        });
        return deletedMember;
    }
    catch (error) {
        console.error("Error deleting member:", error);
        throw error;
    }
});
exports.MemberService = {
    CreateMember,
    GetMembers,
    GetByMemberId,
    UpdateMember,
    DeleteMember
};

import { prisma } from "../../../shared/sharedPrisma";

const CreateMember = async (data: TMember) => {
  try {
    const { name, email, phone, membershipDate } = data;
    if (!name || !email || !phone || !membershipDate) {
      throw new Error(
        "All fields (name, email, phone, membershipDate) are required."
      );
    }
    const newMember = await prisma.member.create({
      data: {
        name,
        email,
        phone,
        membershipDate,
      },
    });

    return newMember;
  } catch (error) {
    console.error("Error creating member:", error);
    throw error;
  }
};

const GetMembers = async () => {
  try {
    const members = await prisma.member.findMany();
    return members;
  } catch (error) {
    console.error("Error fetching members:", error);
    throw error;
  }
};

const GetByMemberId = async (id: string) => {
  try {
    const member = await prisma.member.findUnique({
      where: { memberId: id },
    });
    if (!member) {
      throw new Error(`Member with ID ${id} not found.`);
    }
    return member;
  } catch (error) {
    console.error("Error fetching member:", error);
    throw error;
  }
};


const UpdateMember = async (id: string, data: Partial<TMember>) => {
    try {
      const existingMember = await prisma.member.findUnique({
        where: { memberId: id },
      });
  
      if (!existingMember) {
        throw new Error(`Member with ID ${id} not found.`);
      }
      const updatedMember = await prisma.member.update({
        where: { memberId: id },
        data,
      });
  
      return updatedMember;
    } catch (error) {
      console.error("Error updating member:", error);
      throw error;
    }
  };
  

  const DeleteMember = async (id: string) => {
    try {
      const member = await prisma.member.findUnique({
        where: { memberId: id },
      });
  
      if (!member) {
        throw new Error(`Member with ID ${id} not found.`);
      }

      const deletedMember = await prisma.member.delete({
        where: { memberId: id },
      });
  
      return deletedMember;
    } catch (error) {
      console.error("Error deleting member:", error);
      throw error;
    }
  };



export const MemberService = {
  CreateMember,
  GetMembers,
  GetByMemberId,
  UpdateMember,
  DeleteMember
};

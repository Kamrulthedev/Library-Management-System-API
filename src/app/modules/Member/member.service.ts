import { prisma } from "../../../shared/sharedPrisma";

const CreateMember = async (data: TMember) => {
  try {
    // Log the input data for debugging
    console.log("Creating new member with data:", data);

    // Validate required fields
    const { name, email, phone, membershipDate } = data;
    if (!name || !email || !phone || !membershipDate) {
      throw new Error(
        "All fields (name, email, phone, membershipDate) are required."
      );
    }

    // Create a new member in the database
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


export const MemberService = {
  CreateMember,
  GetMembers
};

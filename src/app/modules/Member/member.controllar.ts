import { catchAsync } from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { MemberService } from "./member.service";

const CreateMemberDB = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await MemberService.CreateMember(data);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Member created successfully!",
    data: result,
  });
});

const GetMembersDB = catchAsync(async (req, res) => {
  const result = await MemberService.GetMembers();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Members retrieved successfully!",
    data: result,
  });
});

const GetByMemberIdDB = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await MemberService.GetByMemberId(memberId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Members retrieved successfully!",
    data: result,
  });
});


const UpdateMemberDB = catchAsync(async (req, res) => {
    const { memberId } = req.params;
    const data = req.body;
    const result = await MemberService.UpdateMember(memberId, data);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Member updated successfully!",
      data: result,
    });
  });


const DeleteMemberDB = catchAsync(async (req, res) => {
    const { memberId } = req.params;
    const result = await MemberService.DeleteMember(memberId);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Member successfully deleted!",
      data: null,
    });
  });

export const MemberControllars = {
  CreateMemberDB,
  GetMembersDB,
  GetByMemberIdDB,
  UpdateMemberDB,
  DeleteMemberDB
};

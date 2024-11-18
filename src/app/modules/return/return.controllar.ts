import { catchAsync } from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ReturnServices } from "./return.service";

const CreateReturnDB = catchAsync(async (req, res) => {
    const {borrowId} = req.body;
    const result = await ReturnServices.CreateReturn(borrowId);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Book returned successfully",
      data: null,
    });
  });


  export const ReturnControllars = {
    CreateReturnDB
  };
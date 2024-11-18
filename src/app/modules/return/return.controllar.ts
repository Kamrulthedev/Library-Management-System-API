import { catchAsync } from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ReturnServices } from "./return.service";

const CreateReturnDB = catchAsync(async (req, res) => {
    const data = req.body;
    const result = await ReturnServices.CreateReturn(data);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Book returned successfully",
      data: result,
    });
  });


  export const ReturnControllars = {
    CreateReturnDB
  };
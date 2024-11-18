import { catchAsync } from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BorrowServices } from "./borrow.service";


const CreateBorrowDB = catchAsync(async (req, res) => {
    const data = req.body;
    const result = await BorrowServices.CreateBorrow(data);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Book borrowed successfully!",
      data: result,
    });
  });


  export const BorrowControllars = {
    CreateBorrowDB
  };
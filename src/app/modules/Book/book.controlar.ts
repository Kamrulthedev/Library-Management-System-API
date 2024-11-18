import { catchAsync } from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BookServices } from "./book.service";

const CreateBookDB = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await BookServices.CreateBook(data);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book Created successfully!",
    data: result,
  });
});

const GetBooksDB = catchAsync(async (req, res) => {
  const result = await BookServices.GetBooks();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Books retrieved successfully",
    data: result,
  });
});

const GetByBookIdDB = catchAsync(async (req, res) => {
    const {id} = req.params;
  const result = await BookServices.GetByBookId(id as unknown as string);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Book retrieved successfully!",
    data: result,
  });
});

const UpdateBookDB = catchAsync(async(req, res) =>{
    const result = await BookServices
    sendResponse(res, {
        statusCode : 200, 
        success : true,
        message : "",
        data : result
    })
})

export const BooksControllars = {
  CreateBookDB,
  GetBooksDB,
  GetByBookIdDB,
  UpdateBookDB
};

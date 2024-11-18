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

export const BooksControllars = {
  CreateBookDB,
  GetBooksDB,
};

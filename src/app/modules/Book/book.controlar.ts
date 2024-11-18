import { catchAsync } from "../../../shared/catchAsync";
import { BookServices } from "./book.service";


const CreateBookDB = catchAsync(async (req, res) => {
    const data = req.body;
      const result = await BookServices.CreateBook(data);
      res.status(200).json({
        success: true,
        message: "Book Created Successfully!",
        data: result,
      });
  });
  
  export const BooksControllars = {
    CreateBookDB,
  };
  
-- CreateTable
CREATE TABLE "borrow_record" (
    "borrowId" TEXT NOT NULL,
    "borrowDate" TIMESTAMP(3) NOT NULL,
    "returnDate" TIMESTAMP(3),
    "bookId" TEXT NOT NULL,
    "memberId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "borrow_record_pkey" PRIMARY KEY ("borrowId")
);

-- AddForeignKey
ALTER TABLE "borrow_record" ADD CONSTRAINT "borrow_record_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "book"("bookId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrow_record" ADD CONSTRAINT "borrow_record_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "member"("memberId") ON DELETE RESTRICT ON UPDATE CASCADE;

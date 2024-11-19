# 📚 **Library Management System**

A comprehensive Library Management System API to manage books, members, and borrow/return operations efficiently. This project simplifies library operations by automating book tracking, member management, and overdue book alerts.

---

## 🌐 **Live URL**
[🚀 Live Deployment](#) <!-- Replace `#` with your live backend URL -->

---

## 🛠️ **Technology Stack & Packages**

### **Backend Technologies**
- 🟢 **Node.js**: Backend runtime
- ⚡ **Express.js**: Web framework
- 🛢️ **Prisma**: ORM for database interactions
- 🗄️ **PostgreSQL**: Database for storing data
- 🖋️ **TypeScript**: Strongly-typed language for building scalable applications

### **Packages Used**
- 🔑 `dotenv`: Manage environment variables
- 🔄 `cors`: Enable cross-origin requests
- 🛡️ `helmet`: Enhance API security
- 📦 `body-parser`: Parse incoming request bodies
- ✅ `joi`: Data validation for input fields
- ♻️ `nodemon`: For development server live reload
- 🆔 `uuid`: Generate unique identifiers

---

## 🏗️ **Setup Instructions**

### **Prerequisites**
- 💻 **Node.js** (v16 or later)
- 📦 **npm** (v7 or later) or **yarn**
- 🛢️ **PostgreSQL** installed and running

### **Steps to Run Locally**
1. **📂 Clone the Repository:**
   ```bash
   git clone https://github.com/your-repo/library-management-system.git
   cd library-management-system

   ```

2. **Install Dependencies:**

   ```base
   npm install
   ```

3. **Set Environment Variables: Create a .env file in the root directory and provide the required variables:**

```base
   DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
   PORT=5000
```

4. **Run Database Migrations:**
   
   ```base 
     npx prisma migrate dev
   ```

5. ***Start the Server:***
    
    ```base 
    npm run dev
    ```

6. ***Access the API: The server runs on http://localhost:5000.***


## ***Key Features & Functionality***

1. Book Management: Add, view, update, and delete books in the library.
2. Member Management: Manage library members and their details.
3. Borrow/Return Management: Track borrowed books, process returns, and calculate overdue books.
4. Overdue Tracking: Automatically track overdue books and notify administrators.
5. RESTful API: Designed with clean REST architecture.


## ***Known Issues/Bugs***

1. None identified at the moment. Please report any bugs in the issue tracker.


## ***Professional Formatting***

This README file is designed for easy navigation and professional formatting.
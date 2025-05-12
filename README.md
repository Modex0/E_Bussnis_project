# E-Business Project - Student & Doctor Management System

## 🚀 Overview
A RESTful API system built with Node.js and Express for managing students and doctors. The system provides endpoints for CRUD operations on both student and doctor records.

## 📋 Prerequisites
- Node.js (v14.0.0 or higher)
- MongoDB
- npm or yarn package manager

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Logging**: Morgan
- **Environment Variables**: dotenv

## 🔧 Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file in the root directory:
```env
PORT=3000
DB=mongodb://localhost:27017/ebusiness_db
```

## 📁 Project Structure
```yaml
E_Bussnis_project/
├── src/
│   ├── app.js                 # Express app initialization
│   ├── models/               # Database models
│   │   ├── StudentModel.js
│   │   └── DoctorModel.js
│   ├── controllers/          # Business logic
│   │   ├── StudentController.js
│   │   └── DoctorController.js
│   ├── db/
│   │   └── mongodb.js        # Database connection
│   └── routers/              # API routes
│       ├── StudentRouter.js
│       └── DoctorsRouter.js
├── .env                      # Environment variables
└── package.json             # Project dependencies
```

## 🚀 Running the Application
```bash
npm start
```
Server will start at: http://localhost:3000

## 📡 API Endpoints

### Students API
- `GET /api/student` - Get all students
- `GET /api/student/:id` - Get student by ID
- `POST /api/student` - Create new student
- `PUT /api/student/:id` - Update student
- `DELETE /api/student/:id` - Delete student

### Doctors API
- `GET /api/doctors` - Get all doctors
- `GET /api/doctors/:id` - Get doctor by ID
- `POST /api/doctors` - Create new doctor
- `PUT /api/doctors/:id` - Update doctor
- `DELETE /api/doctors/:id` - Delete doctor

## 📦 Request/Response Examples

### Create Student
```json
POST /api/student
{
    "name": "John Doe",
    "email": "john@example.com",
    "studentId": "STU001"
}
```

### Create Doctor
```json
POST /api/doctors
{
    "name": "Dr. Smith",
    "specialization": "Cardiology",
    "license": "DOC001"
}
```

## 🔒 Authentication
- Protected routes require JWT token in Authorization header
- Format: `Bearer <token>`

## 🧪 Testing
```bash
npm test
```

## 📝 Error Handling
The API uses standard HTTP response codes:
- 200: Success
- 400: Bad request
- 401: Unauthorized
- 404: Not found
- 500: Server error

## 🛡️ Environment Variables
- `PORT`: Server port (default: 3000)
- `DB`: MongoDB connection string

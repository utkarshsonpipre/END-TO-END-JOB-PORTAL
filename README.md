# 🧑‍💼 Job Portal MERN Stack Application

Welcome to the **Job Portal Web App** — a fully functional and responsive platform built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). The app allows users to **register, log in, post jobs, apply to jobs, and manage their profiles** — all from an intuitive user interface with real-time functionality.

---

## 🌐 Live Demo

🚀 [**Click to Visit the Live Website**](https://end-to-end-job-portal-1.onrender.com/)  
🧪 *(Replace with your deployed URL — e.g., Vercel frontend + Render backend)*

---

## 📸 Preview

> Screenshots or GIF demos can go here.
> - Login page
> - ![Screenshot_25-6-2025_183918_end-to-end-job-portal-1 onrender com](https://github.com/user-attachments/assets/33805708-fd1d-4c55-909e-8e8075d0879f)
> - Homepage
> - ![Screenshot_25-6-2025_183511_end-to-end-job-portal-1 onrender com](https://github.com/user-attachments/assets/fa93f481-a4b0-4622-8788-525f5170e688)
> - Job Listings
> - ![Screenshot_25-6-2025_183523_end-to-end-job-portal-1 onrender com](https://github.com/user-attachments/assets/7873a179-fdaa-4896-b8d8-286f11756c6d)
> - Apply Job Form
> - ![Screenshot_25-6-2025_183535_end-to-end-job-portal-1 onrender com](https://github.com/user-attachments/assets/bc08486e-ef7b-457a-83f7-fef4dbca9481)
> - Recruiter Dashboard
> - ![Screenshot_25-6-2025_183929_end-to-end-job-portal-1 onrender com](https://github.com/user-attachments/assets/5c36f995-d055-4659-9484-44cf36fcf5e4)
> - Profile
> - ![Screenshot_25-6-2025_183556_end-to-end-job-portal-1 onrender com](https://github.com/user-attachments/assets/f3a5ccd2-3033-4006-b6b3-ae0290dc026a)


---

## 📚 How It Works – Feature Walkthrough

### 👤 1. **User Registration & Authentication**
- Users can sign up as either a **Job Seeker** or a **Recruiter**.
- Secure **JWT-based authentication** ensures safe login sessions.
- User sessions are stored in local storage and managed via protected routes.

> 🔐 Tech: JWT, bcrypt, MongoDB

---

### 💼 2. **Job Posting (Recruiter Side)**
- Recruiters have access to a special dashboard.
- They can **create**, **update**, or **delete** job listings.
- Jobs include details like:
  - Job title
  - Company name
  - Job description
  - Salary
  - Work type (Remote, Hybrid, On-site)

> ✅ Real-time feedback using Toast alerts  
> 📤 Upload company logos using Cloudinary

---

### 🔍 3. **Job Browsing & Applications (User Side)**
- Users can browse a list of available jobs on the homepage.
- Jobs can be filtered by type, title, and location.
- One-click **Apply Now** functionality.
- Applications are tracked per user.

---

### 🧑‍💻 4. **Profile Management**
- Users can edit their **bio**, upload profile images, and manage personal info.
- Cloudinary integration allows image upload directly from the frontend.
- Profile data is fetched and updated through API calls to the backend.

---

### 🌍 5. **Admin & Role-Based Access (Planned)**
- Planned feature: Admin dashboard to monitor all users, jobs, and analytics.
- Role-based access already structured for easy scaling.

---

## 🛠️ Technologies Used

| Layer        | Tech Stack                       |
|--------------|----------------------------------|
| **Frontend** | React.js, Axios, React Router, Tailwind CSS |
| **Backend**  | Node.js, Express.js              |
| **Database** | MongoDB (Mongoose)               |
| **Cloud**    | Cloudinary (image upload), JWT (auth) |

---

## ⚙️ Setup & Installation

### 📝 Prerequisites
- Node.js
- MongoDB Atlas Account
- Cloudinary Account
- Git

# 📚 Blockchain Courses

Welcome to the Blockchain Courses website! This platform provides a comprehensive range of resources for exploring blockchain technology and its real-world applications.

## 📑 Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contact](#contact)

---

## 📝 Project Overview

This Blockchain Courses web application offers an interactive interface to browse, view, and manage a list of blockchain-related courses. Designed using the MERN stack (MongoDB, Express.js, React, and Node.js), the application aims to give users an engaging experience, allowing them to explore course offerings and add them to a cart. Admins can also manage the courses by editing or removing them from the list.

---

## ✨ Features
- **Course Listings**: Explore available blockchain courses.
- **Course Details**: Access detailed information for each course, including descriptions, prerequisites, and features.
- **Admin Controls**: Edit and remove courses with admin permissions.

---

## 🛠 Installation

### Prerequisites
- **Node.js**: Version 14.x or later
- **npm**: Version 6.x or later
- **MongoDB**: Version 4.x or later
- **MongoDB Daemon**: Ensure MongoDB is running by checking the daemon with `sudo systemctl start mongod`.

---

## 🚀 Getting Started

1. **Clone the Repository**

   Clone the project repository from GitHub and navigate into it:
   ```bash
   git clone [repo-url]
   cd MERN-ITAM-APP
   ```
2. **Set Up the Server**

To set up the backend server:

```bash
cd server
npm install
node server.js
```
Make sure MongoDB is running by starting the MongoDB daemon with:
```bash
sudo systemctl start mongod
```
3. **Set Up the Client**

To set up the frontend:

```bash
cd ../ui
npm install
npm run dev
```
Once the client server is running, open your browser and visit:
http://localhost:3000

4. **Stopping the Application**

To stop the application, press Ctrl+C in each terminal where the servers are running.

📫 Contact
For more information or support, please reach out via our Contact Page or email us at support@blockchaincourses.com.

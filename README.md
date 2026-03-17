# Job Portal – Full Stack Application

A full-stack Job Portal application built using **Angular, Spring Boot, and SQL Server**.
This project allows recruiters to post jobs and candidates to apply for them through a simple and responsive interface.

---

## 🚀 Tech Stack

### Frontend

* Angular
* TypeScript
* HTML / CSS
* Bootstrap

### Backend

* Java
* Spring Boot
* Spring Security
* REST APIs

### Database

* SQL Server

---

## ✨ Features

### Candidate

* Register / Login
* View available jobs
* Apply for jobs
* View applied jobs

### Recruiter / Admin

* Post new jobs
* Update job listings
* View applicants for a job
* Manage job postings

---

## 🏗️ Project Structure

```
JobPortal
│
├── JobPortalBackend      # Spring Boot Backend
│
└── job-portal-ui         # Angular Frontend
```

---

## ⚙️ How to Run the Project

### Backend (Spring Boot)

1. Navigate to the backend folder

```
cd JobPortalBackend
```

2. Run the Spring Boot application

```
mvn spring-boot:run
```

Backend will start on:

```
http://localhost:8080
```

---

### Frontend (Angular)

1. Navigate to the frontend folder

```
cd job-portal-ui
```

2. Install dependencies

```
npm install
```

3. Start Angular application

```
ng serve
```

Frontend will run on:

```
http://localhost:4200
```

---

## 🗄️ Database Setup

* Create a database in **SQL Server**
* Update database configuration in:

```
application.properties
```

Example:

```
spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=jobportal
spring.datasource.username=your_username
spring.datasource.password=your_password
```

---

## 📌 Future Improvements

* Resume upload feature
* Email notifications
* Job search and filters

---

## 👨‍💻 Author

**Manikanta Maguluri**

GitHub: https://github.com/manikantamaguluri1113-creator

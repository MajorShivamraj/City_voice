# 🏙️ CityVoice – Community Issue Reporting Platform  

CityVoice is a **full-stack web application** that empowers citizens to report community issues (with images) directly to local authorities.  
It combines a **Vite + React frontend** with a **Flask + PostgreSQL backend**, and integrates **Cloudinary** for image storage.  

---

## 🚀 Features  

- 📌 **Complaint Submission** – File issues with descriptions and images  
- 🖼️ **Image Uploads** – Secure image hosting with Cloudinary  
- 📧 **Email-based Tracking** – Complaints linked to user email for progress tracking  
- 📊 **Complaint Dashboard** – View and manage submitted issues  
- 🔒 **Secure API Endpoints** – JWT-protected routes for safe data handling  

---

## 🛠️ Tech Stack  

**Frontend (Vite + React)**  
- React 18, Vite, React Router  
- Tailwind CSS for styling  

**Backend (Flask)**  
- Flask, SQLAlchemy, psycopg2  
- PostgreSQL database  
- JWT Authentication  

**Other Tools**  
- Cloudinary (image storage)  
- GitHub, VS Code  

--- 

# Project Setup and Guide

This project combines a **Flask** backend with a **Vite + React** frontend. Below are the steps to set up both environments and run the project.

## Prerequisites

- **Python** (preferably version 3.8+)
- **Node.js** (for the Vite + React frontend)

### Check if Python is installed:
```bash
python --version
# or
python3 --version
```

If Python is not installed, download and install it from [python.org](https://python.org).

### Check if Node.js is installed:
```bash
node -v
# or
npm -v
```

If Node.js is not installed, download and install it from [nodejs.org](https://nodejs.org).

---

## Flask Backend Setup

1. **Create a Virtual Environment** (Recommended)

   Navigate to your project directory and create a virtual environment:
   ```bash
   cd /path/to/your/project
   python -m venv venv
   ```

2. **Activate the Virtual Environment**

   - **Windows (Command Prompt)**:
     ```bash
     venv\Scripts\activate
     ```

   - **Windows (PowerShell)**:
     ```bash
     venv\Scripts\Activate.ps1
     ```

   - **Mac/Linux**:
     ```bash
     source venv/bin/activate
     ```

3. **Install Dependencies**

   With the virtual environment active, install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask Application**

   Start the Flask development server:
   ```bash
   python app.py
   ```

---

## Vite + React Frontend Setup

1. **Install Frontend Dependencies**

   Navigate to your frontend directory and install the required Node.js dependencies:
   ```bash
   cd /path/to/your/react-project
   npm install
   ```

2. **Run the Vite + React Development Server**

   Start the Vite development server:
   ```bash
   npm run dev
   ```

   Your React app should now be accessible at `http://localhost:3000` (or whichever port is specified).

---

## Additional Information

- **Updating `requirements.txt`**: Ensure that `requirements.txt` is up to date with the installed Python packages. To update it, run:
  ```bash
  pip freeze > requirements.txt
  ```

- **Install Additional Python Packages**: To install additional dependencies in the backend, run:
  ```bash
  pip install package_name
  ```

- **Frontend Development**: For Vite + React, you can refer to the following official plugins:
  - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---


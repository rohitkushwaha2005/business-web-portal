# Full Stack Landing Page & Admin Panel

This is a full-stack web application consisting of a public landing page and an admin panel for managing content.

The application allows users to view projects and client testimonials, submit contact forms, and subscribe to a newsletter.  
Admins can manage projects, clients, and view submitted data through the admin panel.

---

## 🚀 Features

### Public Landing Page
- Dynamic “Our Projects” section
- Dynamic “Happy Clients” section
- Contact form submission
- Newsletter email subscription
- Fully responsive UI

### Admin Panel
- Add and manage projects
- Add and manage client information
- View contact form submissions
- View newsletter subscriber emails

---

## 🛠 Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

## Backend Implementation

This project uses Supabase as a Backend-as-a-Service (BaaS).
Supabase handles database operations and API endpoints, allowing the frontend
to interact securely with backend data without a separate server.

This approach simplifies deployment and follows modern full-stack practices.


---

## 📂 Project Structure

- `src/components` – Reusable UI components
- `src/pages` – Page-level components
- `src/services` – API service calls
- `src/routes` – Application routing
- `backend` – Server-side code and APIs

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js
- npm
- MongoDB (local or cloud)

### Steps to Run Locally

```bash
# Clone the repository
git clone <REPOSITORY_URL>

# Navigate to project folder
cd <PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev


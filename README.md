# 34 Paapi Pet Cafe 🐾☕

A full-stack food ordering platform for a fictional cafe — built as a resume project to demonstrate real-world MERN stack skills: authentication, payments, real-time updates, AI-assisted ordering, and a complete admin system.

🔗 **Live App:** [34-cafe.vercel.app](https://34-cafe.vercel.app)
🔗 **Admin Panel:** [34admin.vercel.app](https://34admin.vercel.app)
🔗 **Backend API:** [three4-cafe.onrender.com](https://three4-cafe.onrender.com)
🔗 **Admin Panel Repo:** [github.com/066rakesh/34admin](https://github.com/066rakesh/34admin)

---

## ✨ Features

### Customer-facing app
- **🔐 Authentication** — Signup/login via email OTP (sent through Brevo's HTTP API), JWT stored in localStorage
- **🍽️ Menu Browsing** — Category filters, veg/non-veg toggle, chef special/popular/craving tags, variant-based pricing
- **🛒 Cart** — Persists across page refresh
- **📍 Delivery Distance Check** — Google Distance Matrix API verifies the delivery address is within 7 km of the cafe before checkout
- **💳 Payments** — Razorpay integration with full checkout + server-side signature verification
- **📦 Order Tracking** — Order success page, order history, and a detailed order page with a live delivery-status stepper
- **⚡ Real-Time Status Updates** — Delivery status changes made by the admin are pushed instantly via **Socket.IO** — no refresh needed
- **🤖 AI Chat Assistant** — Natural language ordering ("something under ₹300 for 2 people") powered by **Google Gemini**, grounded in the live menu
- **🏠 Address Management** — Full CRUD on saved delivery addresses
- **📱 Fully Responsive**

### Admin panel (separate app — see [34admin](https://github.com/066rakesh/34admin))
- JWT-protected dashboard with revenue analytics, 7-day revenue chart, and live order breakdown
- Menu CRUD with image upload (Cloudinary)
- Orders table with real-time delivery-status updates (pushed to customers via Socket.IO)
- Users table

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- React Router
- CSS Modules
- react-icons / @tabler/icons-react
- Socket.IO Client

**Backend**
- Node.js, Express
- MongoDB (Atlas) + Mongoose
- Redis — caching for menu reads
- JWT — authentication (stored in localStorage, no refresh token)
- Razorpay — payments + webhook/signature verification
- Brevo HTTP API — transactional email (OTP, order confirmation)
- Google Distance Matrix API — delivery radius validation
- Google Gemini API — AI chat ordering assistant
- Socket.IO — real-time order status push
- Cloudinary + Multer — admin image uploads

**DevOps**
- GitHub Actions — CI (build checks)
- Vercel — frontend hosting
- Render — backend hosting

---

## ⚙️ CI/CD

This repo uses **GitHub Actions** for continuous integration, triggered on every push and pull request to `main`:

```yaml
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
```

Two parallel jobs — `frontend-ci` and `backend-ci` — each check out the code, install dependencies, and run a build. This catches build-breaking errors before anything reaches `main`. There are currently no automated tests in the pipeline — it's a build-verification gate only.

**Deployment is separate from this workflow** and happens automatically through Vercel's and Render's native GitHub integrations: any push to `main` that passes CI triggers an automatic deploy — Vercel rebuilds the frontend, Render rebuilds the backend. No manual deploy steps or custom deploy jobs are needed.

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB (local or Atlas)
- API keys for: Razorpay, Brevo, Google (Distance Matrix + Gemini), Cloudinary, Redis

### Installation

```bash
git clone https://github.com/066rakesh/34-cafe.git
cd 34-cafe
```

**Backend:**
```bash
cd Backend
npm install
```

Create a `.env` file in `Backend/`:
```
PORT=5000
MONGO_URI=
JWT_SECRET=
GOOGLE_MAPS_API_KEY=
BREVO_SENDER_EMAIL=
EMAIL_PASS=
GEMINI_API_KEY=
BREVO_API_KEY=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
REDIS_URL=
ADMIN_EMAIL=
ADMIN_PASSWORD=
JWT_ADMIN_SECRET=
```

```bash
npm run dev
```

**Frontend:**
```bash
cd Frontend
npm install
```

Create a `.env` file in `Frontend/`:
```
VITE_BASE_API_URL=http://localhost:5000
```

```bash
npm run dev
```

---

## 📂 Project Structure

34-cafe/
Frontend/ # Customer-facing React app
Backend/ # Express API — shared by the customer app and the admin panel
.github/
workflows/ # CI pipeline (build checks)


---

## 🙋 About This Project

Built to demonstrate end-to-end full-stack development — authentication, payments, real-time systems, AI integration, and a complete admin tooling suite, with a CI pipeline and live deployments. Feedback and suggestions are welcome!

**Connect with me:** [LinkedIn](https://www.linkedin.com/in/066rakesh) 
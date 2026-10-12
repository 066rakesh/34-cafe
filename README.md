# 34 Paapi Pet Cafe 🐾☕

A full-stack food ordering platform for a fictional cafe, built as a resume project to practice real-world MERN skills: OTP authentication, payments, real-time updates, delivery radius checks, AI-assisted ordering, and an admin panel.

🔗 **Live App:** [34-cafe.vercel.app](https://34-cafe.vercel.app)
🔗 **Admin Panel:** [34admin.vercel.app](https://34admin.vercel.app)
🔗 **Backend API:** [three4-cafe.onrender.com](https://three4-cafe.onrender.com)
🔗 **Admin Panel Repo:** [github.com/066rakesh/34admin](https://github.com/066rakesh/34admin)

> **Note:** The backend runs on Render's free tier, so the first request after inactivity can take around 30 seconds. Payments run in Razorpay **test mode**, so no real money is charged.

---

## 🧪 Try It

- **Delivery address for the demo:** `<demo address, for example IMT Manesar, Sector 7/8, Gurugram>`. Delivery works only within 7 km of the cafe (Sector 34, Gurugram), so addresses far away are rejected.
- **Payments:** use Razorpay's test card details from their [test mode docs](https://razorpay.com/docs/payments/payments/test-card-details/).
- **Admin panel:** `<how reviewers can access it, or write "credentials available on request">`.

---

## ✨ Features

### Customer app
- **🔐 Email OTP login:** OTPs are hashed with bcrypt, expire after 5 minutes, allow 5 attempts (counted with an atomic update), and have a 60-second resend cooldown. Sessions use JWT.
- **🍽️ Menu:** category filters, veg/non-veg toggle, tags, and variant-based pricing.
- **🛒 Cart:** saved in the browser (localStorage), so it survives a refresh.
- **📍 Delivery check:** a 7 km limit using the Google Routes and Geocoding APIs. A straight-line (Haversine) pre-check skips paid API calls for far locations, and the check is repeated on the server when the order is created.
- **💳 Payments:** Razorpay with server-side price calculation and signature verification. A webhook (HMAC-verified) marks the order paid even if the user closes the page.
- **📦 Orders:** order history and a detail page with a live status stepper.
- **⚡ Real-time updates:** Socket.IO with a JWT-authenticated handshake. Each order has its own room, and only the order's owner can join it.
- **🤖 AI assistant:** Google Gemini, grounded in the live menu. Suggested item IDs are validated against the database and totals are computed in code.
- **🏠 Saved addresses:** full CRUD, with the address text taken from reverse geocoding.

### Admin panel (separate app: [34admin](https://github.com/066rakesh/34admin))
- Separate admin login with its own JWT secret.
- Dashboard with paid-only revenue (cancelled orders excluded) and a 7-day chart.
- Menu CRUD with Cloudinary image upload (type and size validation).
- Orders table with forward-only status updates on paid orders, pushed to customers in real time.
- Users table.

---

## 🔒 Security Notes

- Rate limiting on all routes, with a stricter limiter on login and OTP routes (`express-rate-limit`, in-memory store).
- `typeof` checks on request inputs to guard against NoSQL injection.
- Prices and totals are always calculated on the server, never trusted from the client.
- Separate JWT secrets for customers and admin.

---

## 🛠️ Tech Stack

**Frontend:** React (Vite), React Router, CSS Modules, Socket.IO Client

**Backend:** Node.js, Express, MongoDB Atlas + Mongoose, Redis (menu cache), JWT, Razorpay, Brevo HTTP API (OTP and order emails), Google Routes + Geocoding APIs, Google Gemini API, Socket.IO, Cloudinary + Multer

**DevOps:** GitHub Actions (CI), Vercel (frontend), Render (backend)

---

## 🧱 Architecture

```
Customer app (Vercel)  ─┐
                        ├──►  Express API (Render)  ──►  MongoDB Atlas
Admin panel (Vercel)   ─┘            │
                                     ├──►  Redis (menu cache)
                                     ├──►  Razorpay, Brevo, Google APIs, Cloudinary
                                     └──►  Socket.IO (order rooms)
```

- One backend serves both frontends. Both read the API URL from `VITE_BASE_API_URL`.
- The menu is cached in Redis with a 1-hour TTL and cleared on every admin write. If Redis is down, the API falls back to MongoDB.

---

## ⚙️ CI and Deployment

GitHub Actions runs on every push and pull request to `main`:

- `frontend-ci`: installs dependencies and builds the frontend.
- `backend-ci`: installs dependencies and runs backend tests with Node's built-in test runner (`npm test`). Current tests cover the delivery distance logic.

Deployment is separate: Vercel and Render deploy automatically from GitHub when `main` is updated. Deployment does not wait for CI to pass.

---

## 🚀 Getting Started

### Prerequisites
Node.js, a MongoDB database (local or Atlas), and API keys for Razorpay, Brevo, Google (Routes, Geocoding, Gemini), Cloudinary and Redis.

### Backend
```bash
git clone https://github.com/066rakesh/34-cafe.git
cd 34-cafe/Backend
npm install
```

Create `Backend/.env` (see `.env.example`):
```
PORT=5000
CLIENT_URL=
MONGO_URI=
JWT_SECRET=
JWT_ADMIN_SECRET=
ADMIN_EMAIL=
ADMIN_PASSWORD=
GOOGLE_MAPS_API_KEY=
GEMINI_API_KEY=
BREVO_API_KEY=
BREVO_SENDER_EMAIL=
RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
REDIS_URL=
```

```bash
npm run dev
```

### Frontend
```bash
cd ../Frontend
npm install
```

Create `Frontend/.env`:
```
VITE_BASE_API_URL=http://localhost:5000
```

```bash
npm run dev
```

Run backend tests with `npm test` inside `Backend/`.

---

## 📂 Project Structure

```
34-cafe/
├── Frontend/          # Customer React app
├── Backend/           # Express API, shared by the customer app and admin panel
└── .github/
    └── workflows/     # CI (frontend build + backend tests)
```

---

## ⚠️ Known Limitations

- Razorpay runs in test mode only, and cancelling an order does not trigger a refund.
- Delivery works only near the cafe in Gurugram.
- House number and landmark are free text.
- Admin dashboard numbers are calculated in the browser. A server-side aggregation endpoint is the next step.
- No pagination yet.
- Abandoned orders in `created` status are never cleaned up.
- The cart is stored in localStorage, so it does not sync across devices.
- The rate limiter uses an in-memory store, so counters reset on restart.
- The JWT is stored in localStorage and lasts 7 days. A shorter-lived access token with a refresh token in an httpOnly cookie is the planned improvement.
- Tests currently cover only the delivery logic.

---

## 🙋 About

Built to practice end-to-end full-stack development. Feedback is welcome!

**Connect:** [LinkedIn](https://www.linkedin.com/in/066rakesh)
# 🗺️ AI Travel Planner

> **CEE Final Project 2026** — An AI-powered web application that generates personalized, day-by-day travel itineraries based on destination, duration, budget, and interests.

🌐 **Live App:** [https://cee-travel-planne.vercel.app/](https://cee-travel-planne.vercel.app/)

---

## 📖 What It Does

Users sign in with their GitHub account, enter a travel destination, trip duration, budget, and personal interests — and the app instantly generates a complete day-by-day itinerary powered by Google Gemini or Groq AI. The result includes:

- A structured daily schedule with activities and estimated costs
- An interactive map of the destination
- A cost breakdown bar chart
- Live weather data for the location
- The ability to save, revisit, and delete trips

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **User Login** | GitHub OAuth via NextAuth.js — no passwords stored |
| 🤖 **AI Generation** | Google Gemini 1.5 Flash + Groq Llama 3.3 70B |
| 🗺️ **Interactive Map** | Leaflet + OpenStreetMap plots the destination |
| 📊 **Cost Dashboard** | Chart.js bar chart of daily expense breakdown |
| 🌤️ **Live Weather** | Real-time data from OpenWeatherMap API |
| 💾 **Saved Trips** | Full CRUD — save, view, and delete trips (MongoDB) |
| 🌙 **Dark / Light Mode** | Theme toggle, persisted via `next-themes` |
| 📄 **PDF Export** | Download your itinerary as a PDF |

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4
- **Auth:** NextAuth.js (GitHub OAuth)
- **Database:** MongoDB Atlas
- **AI:** Google Gemini API, Groq API
- **APIs:** OpenWeatherMap, Unsplash, Leaflet/OpenStreetMap
- **Deployment:** Vercel

---

## 🚀 Getting Started (Local Setup)

### 1. Clone the Repository

```bash
git clone https://github.com/poijit/cee-travel-planne.git
cd cee-travel-planne
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root of the project:

```bash
cp .env.example .env.local
```

Then fill in your values:

```env
# ── NextAuth ──────────────────────────────────────────────
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here

# ── GitHub OAuth (https://github.com/settings/developers) ─
GITHUB_ID=your_github_oauth_app_id
GITHUB_SECRET=your_github_oauth_app_secret

# ── MongoDB Atlas (https://cloud.mongodb.com) ─────────────
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/travel-planner

# ── Google Gemini (https://aistudio.google.com/app/apikey) ─
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key

# ── Groq (https://console.groq.com/keys) ─────────────────
GROQ_API_KEY=your_groq_api_key

# ── OpenWeatherMap (https://openweathermap.org/api) ───────
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_openweather_api_key

# ── Unsplash (https://unsplash.com/developers) ────────────
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
```

> ⚠️ **Never commit your `.env.local` file.** It is already listed in `.gitignore`.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔑 How to Get API Keys

| Service | Where to get it |
|---|---|
| **GitHub OAuth** | [github.com/settings/developers](https://github.com/settings/developers) → New OAuth App |
| **NEXTAUTH_SECRET** | Run `openssl rand -base64 32` in your terminal |
| **MongoDB Atlas** | [cloud.mongodb.com](https://cloud.mongodb.com) → Free M0 cluster |
| **Google Gemini** | [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey) |
| **Groq** | [console.groq.com/keys](https://console.groq.com/keys) |
| **OpenWeatherMap** | [openweathermap.org/api](https://openweathermap.org/api) → Free tier |
| **Unsplash** | [unsplash.com/developers](https://unsplash.com/developers) → New Application |

---

## 📁 Project Structure

```
cee-travel-planne/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/[...nextauth]/   # GitHub OAuth handler
│   │   │   ├── generate-itinerary/   # AI generation endpoint
│   │   │   ├── trips/                # CRUD for saved trips
│   │   │   └── weather/              # Weather proxy endpoint
│   │   ├── planner/                  # Main planner page
│   │   ├── saved-trips/              # Saved trips page
│   │   └── page.tsx                  # Landing page
│   ├── components/
│   │   └── ui/                       # Reusable UI components
│   └── lib/
│       ├── auth.ts                   # NextAuth config
│       └── mongodb.ts                # MongoDB connection
├── .env.local                        # ← your secrets (NOT committed)
├── .gitignore
└── README.md
```

---

## 🌍 Deployment

The app is deployed on **Vercel** with automatic CI/CD:

1. Every push to `master` triggers a new production build
2. All environment variables are stored securely in the Vercel dashboard
3. No secrets are ever committed to the repository

---

## 👥 Team

| Name | Role |
|---|---|
| Member 1 | Full Stack |
| Member 2 | Full Stack |
| Prin Bhutiangkul | Full Stack |

---

## 📄 License

This project was built for the **Computer Engineering Essential (CEE)** course, 2026.

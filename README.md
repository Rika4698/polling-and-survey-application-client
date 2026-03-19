<div align="center">
 

  <h1>📊 Survey Swift</h1>
  <p><em>A Comprehensive Polling and Survey Web Application</em></p>
  
  <a href="https://polling-and-survey-client.web.app/" target="_blank">
    <img src="https://img.shields.io/badge/Website-Live_Link-purple?style=for-the-badge&logo=vercel" alt="Live Website" />
  </a>
</div>

<br />



## 📖 Overview the Project

**Survey Swift** is a full-stack Polling and Survey application designed to provide users with an intuitive platform to create, participate in, and analyze surveys. 

With elegant real-time charts, secure payments, and role-based access control (RBAC), Survey Swift caters to <strong>Admins, Surveyors, Pro Users, and regular Users</strong> out of the box.

---

## ✨ Key Features


<summary><b>🛡️ Role-Based Access Control (RBAC)</b></summary>
<br>

* **Admin:** Manage user roles (promote to Admin/Surveyor), delete users, publish/unpublish surveys, provide feedback to surveyors, and oversee all survey data with detailed charts.
* **Surveyor:** Create, update, and monitor custom surveys. View user/admin feedback and visualize survey responses through charts and tables.
* **Pro User:** Can vote on surveys and leave comments.
* **User:** Register, log in, browse published surveys, vote, report surveys, and upgrade to Pro status.



<summary><b>📈 Dynamic Data Visualization</b></summary>
<br>

Real-time survey results are beautifully displayed via interactive charts using **Chart.js** and **Recharts**. Data is visible upon voting or when the survey deadline expires.


<summary><b>💳 Secure Payments (Pro Subscription)</b></summary>
<br>

Integrated with **Stripe** to facilitate robust and secure payment processing, allowing regular users to purchase a "Pro User" subscription easily.


<summary><b>🔒 Authentication & Security</b></summary>
<br>

Built with **Firebase Authentication**, supporting traditional Email/Password registration/login and seamless Google account integration.


<summary><b>🎨 Interactive UI & Animations</b></summary>
<br>

Designed using **Tailwind CSS** and **DaisyUI** for a highly responsive, aesthetic interface. Includes micro-animations using **Framer Motion** to ensure a premium user experience.

---

## 💻 Tech Stack

<div align="center">
  <img src="https://skillicons.dev/icons?i=react,vite,js,tailwind,firebase,axios&perline=6" alt="Tech Stack Core" />
  <br>
  <img src="https://skillicons.dev/icons?i=stripe,figma,github,vercel,vscode&perline=6" alt="Tech Stack Services" />
</div>

<br>

**Key Libraries & Tools:**
- **Frontend:** React 18 & Vite
- **Backend:** Node.js, Express.js
- **DataBase:** MongoDB
- **Styling:** Tailwind CSS, DaisyUI, Framer Motion
- **Routing:** React Router DOM v6
- **Data Fetching & State:** React Query (TanStack Query), Axios
- **Authentication:** Firebase
- **Data Visualization:** Chart.js, React ChartJS 2, Recharts
- **Payment Processing:** Stripe


---

## 🔑 Credentials

For testing purposes, you can use the following default credentials to explore different role views:

> **👔 Admin Account:**
> - **Email:** `person12@gmail.com`
> - **Password:** `*Person4`

> **📝 Surveyor Account:**
> - **Email:** `person@gmail.com`
> - **Password:** `!Abcdefg`

---

## 🚀 Local Setup

Instructions to set up the project locally:

**1. Clone the repository**
```bash
git clone https://github.com/Rika4698/polling-and-survey-application-client.git
cd polling-and-survey-application-client
```

**2. Install dependencies**
```bash
npm install
```

**3. Environment Variables**
Create a `.env.local` file in the root directory and add the following:
```env
VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_firebase_auth_domain
VITE_PROJECTID=your_firebase_project_id
VITE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_MESSAGINGSENDERID=your_firebase_messaging_sender_id
VITE_APPID=your_firebase_app_id
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

**4. Run Development Server**
```bash
npm run dev
```
> The application will be accessible at `http://localhost:5173`.

---

## 👤 Author & Contact

**Name: Sharmin Akter Reka**
**Role: Frontend Developer**
**Portfolio: https://sharmin-rika-portfolio.vercel.app/**

---
<div align="center">
  <p>Made with for interactive data collection.</p>
</div>

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <>
        {/* ================= INTERNAL CSS ================= */}
        <style>{`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #eaf6fb;
            color: #334155;
          }

          /* ---------- HEADER ---------- */
          .header {
            background: linear-gradient(90deg, #d7eef9, #c6e6f5);
            border-bottom: 1px solid #b9ddee;
          }

          .header-inner {
            max-width: 1100px;
            margin: auto;
            padding: 22px 16px;
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
          }

          .logo {
            width: 120px;
            height: 120px;
            object-fit: contain;
          }

          .title {
            text-align: center;
          }

          .title h1 {
            font-size: 2.4rem;
            color: #0b3c5d;
          }

          .title p {
            font-size: 0.9rem;
            color: #4b728c;
          }

          /* ---------- NAVBAR ---------- */
          .navbar {
            background: #0b3c5d;
          }

          .nav-list {
            display: flex;
            justify-content: center;
            gap: 40px;
            padding: 14px 0;
            list-style: none;
          }

          .nav-list a {
            color: #e0f2fe;
            text-decoration: none;
            font-size: 0.95rem;
            position: relative;
          }

          .nav-list a:hover {
            color: #ffffff;
          }

          .nav-list a::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -6px;
            width: 0%;
            height: 2px;
            background: #7dd3fc;
            transition: width 0.3s ease;
          }
.nav-list a svg:hover {
  stroke: #ffffff;
  transform: scale(1.1);
  transition: transform 0.2s ease, stroke 0.2s ease;
}
          .nav-list a:hover::after {
            width: 100%;
          }

          /* ---------- HERO ---------- */
          .hero {
            height: 70vh;
            background-image: url("/hero-water.jpg");
            background-size: cover;
            background-position: center;
            position: relative;
          }

          .hero-overlay {
            position: absolute;
            inset: 0;
            background: rgba(11, 60, 93, 0.55);
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          .hero-content {
            max-width: 800px;
            padding: 20px;
          }

          .hero-content h2 {
            font-size: 2.6rem;
            color: #ffffff;
            margin-bottom: 16px;
          }

          .hero-content p {
            font-size: 1.1rem;
            color: #e0f2fe;
            line-height: 1.8;
          }

          /* ---------- ON GROUND REPORTS ---------- */
          .reports-section {
            padding: 80px 20px;
            background: #f3faff;
          }

          .reports-title {
            text-align: center;
            font-size: 1.9rem;
            color: #0b3c5d;
            margin-bottom: 40px;
          }

          .reports-grid {
            max-width: 1100px;
            margin: auto;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 22px;
          }

          .report-card img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            border-radius: 12px;
            transition: all 0.35s ease;
            cursor: zoom-in;
          }

          .report-card:hover img {
            position: fixed;
            top: 50%;
            left: 50%;
            width: 70vw;
            max-height: 75vh;
            height: auto;
            object-fit: contain;
            transform: translate(-50%, -50%);
            z-index: 1001;
            border-radius: 14px;
            background: #000;
            pointer-events: none;
          }

          .report-card:hover::before {
            content: "";
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.55);
            z-index: 1000;
            pointer-events: none;
          }
/* ---------- SPECIAL THANKS ---------- */
.thanks-section {
  background: #ffffff;
  padding: 70px 20px;
  text-align: center;
}

.thanks-title {
  font-size: 1.9rem;
  color: #0b3c5d;
  margin-bottom: 20px;
}

.thanks-text {
  max-width: 900px;
  margin: auto;
  line-height: 1.8;
  color: #355f7a;
  font-size: 1rem;
}

          /* ---------- INFO ---------- */
          .info-section {
            background: #f3faff;
            padding: 70px 20px;
          }

          .info-grid {
            max-width: 1000px;
            margin: auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 44px;
          }

          .info-box h3 {
            margin-bottom: 12px;
            color: #0b3c5d;
          }

          /* ---------- TEAM PAGE ---------- */
          .team-container {
            max-width: 1100px;
            margin: auto;
            padding: 80px 20px;
          }

          .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
            margin-top: 40px;
          }

          .team-card {
            background: #ffffff;
            border-radius: 16px;
            padding: 22px;
            box-shadow: 0 10px 24px rgba(0,0,0,0.08);
            text-align: center;
          }

          .team-card img {
            width: 100%;
            height: 260px;
            object-fit: cover;
            border-radius: 14px;
            margin-bottom: 16px;
          }

          footer {
            background: linear-gradient(180deg, #d7eef9, #c6e6f5);
            border-top: 1px solid #b9ddee;
            text-align: center;
            padding: 22px;
            font-size: 0.85rem;
            color: #4b728c;
          }
        `}</style>

        {/* ================= HEADER ================= */}
        <header className="header">
          <div className="header-inner">
            <img src="/nss-logo.png" className="logo" />
            <div className="title">
              <h1>Nirmal Jal</h1>
              <p>Swachh Pani • Swasth Jeevan</p>
            </div>
            <img src="/nirmal-jal-logo.png" className="logo" />
          </div>
        </header>

        {/* ================= NAVBAR ================= */}
<nav className="navbar">
  <ul
    className="nav-list"
    style={{
      alignItems: "center",
    }}
  >
    <li><Link to="/">Home</Link></li>
    <li><Link to="/">About</Link></li>
    <li><Link to="/team">Team</Link></li>
    <li><Link to="/">Events</Link></li>
    <li><Link to="/">Contact</Link></li>

    {/* Instagram Icon */}
    <li>
      <a
        href="https://www.instagram.com/teambhaskara/"
        target="_blank"
        rel="noopener noreferrer"
        title="Team Bhaskara on Instagram"
        style={{ display: "flex", alignItems: "center" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e0f2fe"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37a4 4 0 1 1-7.87 1.18 4 4 0 0 1 7.87-1.18z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </a>
    </li>
  </ul>
</nav>
        {/* ================= ROUTES ================= */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
        </Routes>

        {/* ================= FOOTER ================= */}
          <footer>
  © 2026 Nirmal Jal Initiative <br />
  Swachh Pani • Swasth Jeevan • Surakshit Bhavishya
  <br /><br />
  <span style={{ fontSize: "0.8rem", color: "#355f7a" }}>
    Developed by <strong>Akshat Thakur</strong>
  </span>
        </footer>
      </>
    </Router>
  );
}

/* ================= HOME PAGE ================= */
function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h2>Jal Hi Jeevan Hai</h2>
            <p>
              Saaf aur surakshit pani har nagrik ka adhikar hai.
            </p>
          </div>
        </div>
      </section>

      <section className="reports-section">
        <h2 className="reports-title">On-Ground Reports</h2>
        <div className="reports-grid">
          {[1,2,3,4,5,6,7,8,9].map(i => (
            <div key={i} className="report-card">
              <img src={`/reports/report-${i}.jpg`} />
            </div>
          ))}
        </div>
      </section>

      {/* ================= SPECIAL THANKS SECTION ================= */}
<section className="thanks-section">
  <h2 className="thanks-title">Special Acknowledgement</h2>
  <p className="thanks-text">
    We express our sincere gratitude to the National Service Scheme (NSS) and
    SETU – The Social Connect Club for their invaluable support and dedication
    towards social welfare. Their continuous efforts in community outreach,
    awareness campaigns, and youth engagement have played a crucial role in
    strengthening the Nirmal Jal initiative. Their commitment to promoting
    cleanliness, public hygiene, and responsible citizenship has significantly
    contributed to spreading awareness about safe drinking water and public
    health.
  </p>
</section>


 {/* ================= info SECTION ================= */}
      <section className="info-section">
        <div className="info-grid">
          <div className="info-box">
            <h3>Kyun Zaroori Hai Nirmal Jal?</h3>
            <p>Swachh pani swasth jeevan ki buniyad hai.</p>
          </div>
          <div className="info-box">
            <h3>Hamara Lakshya</h3>
            <p>Har ghar tak surakshit pani pahunchana.</p>
          </div>
        </div>
      </section>
    </>
  );
}

/* ================= TEAM PAGE ================= */
/* ================= TEAM PAGE ================= */
function Team() {
  const members = [
    {
      name: "Chitranshi Pushpad",
      linkedin: "https://www.linkedin.com/in/chitranshi-pushpad-a423a5269/",
      img: "/team/member1.jpg",
    },
    {
      name: "Anika Babar",
      linkedin: "https://www.linkedin.com/in/anika-babar-143926323/",
      img: "/team/member2.jpg",
    },
    {
      name: "Aayushi Rathore",
      linkedin: "https://www.linkedin.com/in/aayushi-rathore-4b630a310/",
      img: "/team/member3.jpg",
    },
    {
      name: "Avni Sodhiya",
      linkedin: "https://www.linkedin.com/in/avni-sodhiya-041545289/",
      img: "/team/member4.jpg",
    },
  ];

  return (
    <div className="team-container">
      <h2 style={{ textAlign: "center", color: "#0b3c5d" }}>
        Meet Our Team
      </h2>

      <div className="team-grid">
        {members.map((member, i) => (
          <div key={i} className="team-card">
            <img src={member.img} alt={member.name} />

            <h3>{member.name}</h3>

            {/* LinkedIn Icon */}
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", margin: "10px 0" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="#0A66C2"
              >
                <path d="M22.23 0H1.77C.79 0 0 .774 0 1.727v20.545C0 23.227.79 24 1.77 24h20.46c.98 0 1.77-.773 1.77-1.728V1.727C24 .774 23.21 0 22.23 0zM7.09 20.452H3.56V9h3.53v11.452zM5.33 7.433c-1.13 0-2.05-.924-2.05-2.062 0-1.14.92-2.063 2.05-2.063s2.05.923 2.05 2.063c0 1.138-.92 2.062-2.05 2.062zM20.45 20.452h-3.53v-5.569c0-1.328-.03-3.037-1.85-3.037-1.85 0-2.13 1.445-2.13 2.94v5.666h-3.53V9h3.39v1.561h.05c.47-.89 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.41v6.331z" />
              </svg>
            </a>

            <p>Dedicated contributor to Nirmal Jal initiative.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

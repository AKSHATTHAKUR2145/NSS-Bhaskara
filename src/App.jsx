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
            align-items: center;
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

          .hero-content h2 {
            font-size: 2.6rem;
            color: #ffffff;
            margin-bottom: 16px;
          }

          .hero-content p {
            font-size: 1.1rem;
            color: #e0f2fe;
          }

          /* ---------- REPORTS ---------- */
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
          }

          /* ---------- THANKS ---------- */
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

          /* ---------- TEAM ---------- */
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
              <h1>Sajag Jal</h1>
              <p>Swachh Pani • Swasth Jeevan</p>
            </div>
            <img src="/sajag-jal-logo.png" className="logo" />
          </div>
        </header>

        {/* ================= NAVBAR ================= */}
        <nav className="navbar">
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/">Events</Link></li>
            <li><Link to="/team">Contact</Link></li>
          </ul>
        </nav>

        {/* ================= ROUTES ================= */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
        </Routes>

        {/* ================= FOOTER ================= */}
        <footer>
          © 2026 Sajag Jal Initiative <br />
          Swachh Pani • Swasth Jeevan • Surakshit Bhavishya
          <br /><br />
          Developed by <strong>Akshat Thakur</strong>
        </footer>
      </>
    </Router>
  );
}

/* ================= HOME ================= */
function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h2>Jal Hi Jeevan Hai</h2>
            <p>Saaf aur surakshit pani har nagrik ka adhikar hai.</p>
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

      <section className="thanks-section">
        <h2 className="thanks-title">Special Acknowledgement</h2>
        <p className="thanks-text">
          We thank NSS and SETU – The Social Connect Club for supporting the
          Sajag Jal initiative and promoting public health awareness.
        </p>
      </section>

      <section className="info-section">
        <div className="info-grid">
          <div>
            <h3>Kyun Zaroori Hai Sajag Jal?</h3>
            <p>Swachh pani swasth jeevan ki buniyad hai.</p>
          </div>
          <div>
            <h3>Hamara Lakshya</h3>
            <p>Har ghar tak surakshit pani pahunchana.</p>
          </div>
        </div>
      </section>
    </>
  );
}

/* ================= TEAM ================= */
function Team() {
  const members = [
    { name: "Chitranshi Pushpad", img: "/team/member1.jpg" },
    { name: "Anika Babar", img: "/team/member2.jpg" },
    { name: "Aayushi Rathore", img: "/team/member3.jpg" },
    { name: "Avni Sodhiya", img: "/team/member4.jpg" },
  ];

  return (
    <div className="team-container">
      <h2 style={{ textAlign: "center", color: "#0b3c5d" }}>Meet Our Team</h2>

      <div className="team-grid">
        {members.map((m, i) => (
          <div key={i} className="team-card">
            <img src={m.img} alt={m.name} />
            <h3>{m.name}</h3>
            <p>Dedicated contributor to Sajag Jal initiative.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

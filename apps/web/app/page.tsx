import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mentor-home">
      <Image
        src="/mentoros-landing.png"
        alt="MentorOS learning platform"
        fill
        priority
        className="hero-background"
        sizes="100vw"
      />

      <div className="hero-overlay" />

      <div className="hero-content">
        {/* LOGO */}
        <div className="brand">
          <div className="brand-symbol">◆</div>

          <div>
            <div className="brand-name">
              Mentor<span>OS</span>
            </div>
            <div className="brand-tagline">
              Learn · Grow · Succeed
            </div>
          </div>
        </div>

        {/* HERO TEXT */}
        <section className="hero-text">
          <p className="eyebrow">
            NEXT-GEN LEARNING MANAGEMENT SYSTEM
          </p>

          <h1>
            Smarter Learning.
            <br />
            <span>Brighter Futures.</span>
          </h1>

          <p className="hero-description">
            MentorOS brings together students, mentors and institutions
            on one powerful platform — powered by AI, designed for real
            growth.
          </p>

          <div className="hero-buttons">
            <Link href="/student" className="get-started">
              Get Started
              <span>→</span>
            </Link>

            <a href="#roles" className="explore-button">
              <span className="play">▶</span>
              Explore Platform
            </a>
          </div>
        </section>

        {/* ROLE OPTIONS */}
        <section id="roles" className="roles">
          <div className="roles-title">
            <p>CHOOSE YOUR EXPERIENCE</p>
            <h2>Continue as</h2>
          </div>

          <div className="role-grid">
            {/* STUDENT */}
            <Link href="/student" className="role-card">
              <div className="role-icon">🎓</div>

              <div className="role-info">
                <h3>Student</h3>
                <p>
                  Learn courses, complete assignments and track your
                  progress.
                </p>
              </div>

              <span className="role-arrow">→</span>
            </Link>

            {/* MENTOR */}
            <Link href="/mentor" className="role-card">
              <div className="role-icon mentor-icon">👨‍🏫</div>

              <div className="role-info">
                <h3>Mentor</h3>
                <p>
                  Guide students, manage learning and review their
                  progress.
                </p>
              </div>

              <span className="role-arrow">→</span>
            </Link>

            {/* ADMIN */}
            <Link href="/admin" className="role-card">
              <div className="role-icon admin-icon">🏢</div>

              <div className="role-info">
                <h3>Administrator</h3>
                <p>
                  Manage users, courses, mentors and platform analytics.
                </p>
              </div>

              <span className="role-arrow">→</span>
            </Link>
          </div>
        </section>

        {/* FEATURES */}
        <section className="features">
          <div className="feature">
            <div className="feature-icon">◈</div>
            <div>
              <strong>Interactive</strong>
              <small>Courses</small>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">♙</div>
            <div>
              <strong>Expert</strong>
              <small>Mentors</small>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">AI</div>
            <div>
              <strong>AI-Powered</strong>
              <small>Learning</small>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">▮</div>
            <div>
              <strong>Progress</strong>
              <small>Tracking</small>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">✦</div>
            <div>
              <strong>Secure</strong>
              <small>& Reliable</small>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        .mentor-home {
          position: relative;
          min-height: 100vh;
          overflow-x: hidden;
          background: #07142f;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        }

        .hero-background {
          z-index: 0;
          object-fit: cover;
          object-position: center;
        }

        .hero-overlay {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            linear-gradient(
              90deg,
              rgba(3, 12, 35, 0.86) 0%,
              rgba(5, 18, 48, 0.58) 40%,
              rgba(4, 10, 30, 0.28) 100%
            );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          min-height: 100vh;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 28px 5vw;
        }

        .brand-symbol {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          transform: rotate(45deg);
          background: linear-gradient(
            135deg,
            #9c7cff,
            #2389ff
          );
          box-shadow:
            0 12px 35px rgba(58, 88, 255, 0.45);
          font-size: 23px;
        }

        .brand-name {
          font-size: 30px;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .brand-name span {
          color: #438fff;
        }

        .brand-tagline {
          margin-top: 3px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 12px;
          letter-spacing: 1px;
        }

        .hero-text {
          width: min(650px, 90%);
          margin-left: 5vw;
          padding-top: 70px;
        }

        .eyebrow {
          margin: 0 0 18px;
          color: #c4d0ff;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        h1 {
          margin: 0;
          font-size: clamp(48px, 6vw, 82px);
          line-height: 0.98;
          letter-spacing: -4px;
          font-weight: 800;
        }

        h1 span {
          background: linear-gradient(
            90deg,
            #12a5ff,
            #8a72ff,
            #d76dff
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-description {
          max-width: 570px;
          margin-top: 28px;
          color: rgba(255, 255, 255, 0.86);
          font-size: 18px;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          gap: 15px;
          margin-top: 30px;
          flex-wrap: wrap;
        }

        .get-started,
        .explore-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 52px;
          padding: 0 25px;
          border-radius: 14px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 700;
          transition: all 0.25s ease;
        }

        .get-started {
          color: white;
          background: linear-gradient(
            135deg,
            #2586ff,
            #7655f7
          );
          box-shadow:
            0 15px 35px rgba(70, 83, 255, 0.4);
        }

        .get-started:hover {
          transform: translateY(-3px);
          box-shadow:
            0 20px 45px rgba(70, 83, 255, 0.55);
        }

        .explore-button {
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.45);
          background: rgba(10, 25, 60, 0.42);
          backdrop-filter: blur(10px);
        }

        .explore-button:hover {
          transform: translateY(-3px);
          background: rgba(60, 80, 170, 0.45);
        }

        .play {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          font-size: 10px;
        }

        .roles {
          width: min(1180px, 90%);
          margin: 90px auto 30px;
          padding: 28px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 26px;
          background: rgba(5, 17, 46, 0.68);
          backdrop-filter: blur(18px);
          box-shadow:
            0 25px 80px rgba(0, 0, 0, 0.35);
        }

        .roles-title {
          text-align: center;
          margin-bottom: 22px;
        }

        .roles-title p {
          margin: 0;
          color: #98adff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .roles-title h2 {
          margin: 7px 0 0;
          font-size: 30px;
        }

        .role-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .role-card {
          display: flex;
          align-items: center;
          gap: 15px;
          min-height: 135px;
          padding: 20px;
          color: white;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.07);
          transition: all 0.25s ease;
        }

        .role-card:hover {
          transform: translateY(-7px);
          border-color: #788cff;
          background: rgba(74, 89, 190, 0.32);
          box-shadow:
            0 18px 45px rgba(44, 77, 255, 0.3);
        }

        .role-icon {
          flex-shrink: 0;
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: linear-gradient(
            135deg,
            #268dff,
            #7856f8
          );
          font-size: 25px;
        }

        .mentor-icon {
          background: linear-gradient(
            135deg,
            #765fff,
            #bb62f5
          );
        }

        .admin-icon {
          background: linear-gradient(
            135deg,
            #1783db,
            #6155f5
          );
        }

        .role-info {
          flex: 1;
        }

        .role-info h3 {
          margin: 0 0 6px;
          font-size: 18px;
        }

        .role-info p {
          margin: 0;
          color: rgba(255, 255, 255, 0.68);
          font-size: 12px;
          line-height: 1.5;
        }

        .role-arrow {
          color: #9aabff;
          font-size: 25px;
          transition: 0.25s ease;
        }

        .role-card:hover .role-arrow {
          transform: translateX(5px);
          color: white;
        }

        .features {
          width: min(900px, 90%);
          margin: 35px auto 45px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          padding: 18px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          background: rgba(2, 13, 39, 0.75);
          backdrop-filter: blur(15px);
        }

        .feature {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
        }

        .feature:last-child {
          border-right: none;
        }

        .feature-icon {
          color: #7890ff;
          font-size: 21px;
          font-weight: 800;
        }

        .feature strong,
        .feature small {
          display: block;
        }

        .feature strong {
          font-size: 12px;
        }

        .feature small {
          margin-top: 3px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 10px;
        }

        @media (max-width: 950px) {
          .role-grid {
            grid-template-columns: 1fr;
          }

          .features {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }

          .feature {
            border-right: none;
          }
        }

        @media (max-width: 600px) {
          .brand {
            padding: 20px;
          }

          .brand-symbol {
            width: 42px;
            height: 42px;
          }

          .brand-name {
            font-size: 23px;
          }

          .hero-text {
            margin-left: 20px;
            padding-top: 55px;
          }

          h1 {
            font-size: 47px;
            letter-spacing: -2px;
          }

          .hero-description {
            font-size: 15px;
          }

          .roles {
            width: 92%;
            padding: 18px;
            margin-top: 65px;
          }

          .features {
            width: 92%;
            grid-template-columns: 1fr;
          }

          .feature {
            justify-content: flex-start;
          }
        }
      `}</style>
    </main>
  );
}
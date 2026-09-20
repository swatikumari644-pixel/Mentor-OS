"use client";

import React, { useState } from "react";

export default function Feedback() {
  const [selectedSubmission, setSelectedSubmission] = useState(
    "Build a Responsive Navbar"
  );

  const submissions = [
    {
      title: "Build a Responsive Navbar",
      course: "Frontend Development",
      date: "12 Sep 2025",
      score: 85,
      color: "#7c3aed",
    },
    {
      title: "Create REST APIs",
      course: "Backend Development",
      date: "08 Sep 2025",
      score: 68,
      color: "#f59e0b",
    },
    {
      title: "Design Database Schema",
      course: "Database",
      date: "05 Sep 2025",
      score: 92,
      color: "#2563eb",
    },
    {
      title: "UI/UX Design Implementation",
      course: "Frontend Development",
      date: "01 Sep 2025",
      score: 76,
      color: "#ef4444",
    },
    {
      title: "API Integration",
      course: "Full Stack",
      date: "28 Aug 2025",
      score: 88,
      color: "#10b981",
    },
    {
      title: "Environment Setup",
      course: "DevOps",
      date: "20 Aug 2025",
      score: 95,
      color: "#2563eb",
    },
  ];

  const selected =
    submissions.find((item) => item.title === selectedSubmission) ??
    submissions[0];

  return (
    <div style={styles.page}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.brand}>
          <div style={styles.brandIcon}>🎓</div>

          <div>
            <div style={styles.brandName}>MentorOS</div>
            <div style={styles.brandTagline}>Learn · Build · Grow</div>
          </div>
        </div>

        <nav style={styles.nav}>
          <NavItem icon="▣" text="Dashboard" />
          <NavItem icon="▤" text="My Assignments" />
          <NavItem icon="▣" text="My Submissions" />
          <NavItem icon="⌁" text="Progress" />

          <NavItem
            icon="✦"
            text="AI Feedback"
            active
          />

          <NavItem icon="▱" text="Learning Resources" />

          <div style={styles.notificationNav}>
            <span style={styles.navIcon}>♧</span>
            <span>Notifications</span>
            <span style={styles.notificationBadge}>3</span>
          </div>

          <NavItem icon="♙" text="Profile" />
          <NavItem icon="⚙" text="Settings" />
        </nav>

        <div style={styles.sidebarBottom}>
          <div style={styles.keepIcon}>🚀</div>

          <div style={styles.keepTitle}>Keep Improving!</div>

          <div style={styles.keepText}>
            Feedback is a gift. Use it to grow.
          </div>
        </div>
      </aside>

      {/* Main */}
      <main style={styles.main}>
        {/* Top Header */}
        <header style={styles.topHeader}>
          <div style={styles.searchBox}>
            <span style={styles.searchIcon}>⌕</span>
            <span>Search assignments, resources, or anything...</span>
          </div>

          <div style={styles.headerRight}>
            <div style={styles.bell}>
              ♧
              <span style={styles.bellBadge}>3</span>
            </div>

            <div style={styles.userAvatar}>SK</div>

            <div style={styles.userInfo}>
              <strong>Student</strong>
              <span>Student</span>
            </div>

            <span style={styles.chevron}>⌄</span>
          </div>
        </header>

        {/* Page Header */}
        <section style={styles.pageHeader}>
          <div style={styles.pageTitleArea}>
            <div style={styles.pageIcon}>✦</div>

            <div>
              <h1 style={styles.pageTitle}>AI Feedback</h1>
              <p style={styles.pageSubtitle}>
                Get detailed AI-powered feedback on your submissions. Learn,
                improve, and do better.
              </p>
            </div>
          </div>

          <div style={styles.infoBanner}>
            <span style={styles.infoLight}>💡</span>

            <span>
              AI Feedback helps you understand your mistakes, learn better
              approaches, and improve your skills step by step.
            </span>
          </div>
        </section>

        {/* Content */}
        <div style={styles.contentGrid}>
          {/* Left Submissions */}
          <section style={styles.submissionPanel}>
            <div style={styles.panelTitle}>My Submissions</div>

            <div style={styles.searchSmall}>
              <span>⌕</span>
              <span>Search submissions...</span>
            </div>

            <div style={styles.submissionList}>
              {submissions.map((submission) => (
                <button
                  key={submission.title}
                  type="button"
                  onClick={() => setSelectedSubmission(submission.title)}
                  style={{
                    ...styles.submissionItem,
                    ...(selectedSubmission === submission.title
                      ? styles.submissionActive
                      : {}),
                  }}
                >
                  <div
                    style={{
                      ...styles.submissionIcon,
                      color: submission.color,
                    }}
                  >
                    {submission.title.includes("Database")
                      ? "▣"
                      : submission.title.includes("Design")
                        ? "◉"
                        : submission.title.includes("Environment")
                          ? "⚙"
                          : "</>"}
                  </div>

                  <div style={styles.submissionInfo}>
                    <strong>{submission.title}</strong>
                    <span>{submission.course}</span>
                    <small>{submission.date}</small>
                  </div>

                  <div
                    style={{
                      ...styles.scoreSmall,
                      backgroundColor:
                        submission.score >= 80 ? "#dff7ed" : "#fff1d8",
                      color:
                        submission.score >= 80 ? "#059669" : "#d97706",
                    }}
                  >
                    {submission.score}
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* Right Feedback */}
          <section style={styles.feedbackArea}>
            <div style={styles.feedbackTop}>
              <button type="button" style={styles.backButton}>
                ← Back to Submissions
              </button>

              <span>Submitted on 12 Sep 2025, 10:30 AM</span>
            </div>

            {/* Assignment Header */}
            <div style={styles.assignmentHeader}>
              <div style={styles.assignmentIcon}>
                ▣
              </div>

              <div style={styles.assignmentInfo}>
                <h2>Build a Responsive Navbar</h2>

                <span>Frontend Development</span>

                <p>
                  Create a responsive navigation bar using HTML, CSS and
                  JavaScript.
                </p>

                <div style={styles.tags}>
                  <Tag text="HTML" />
                  <Tag text="CSS" />
                  <Tag text="JavaScript" />
                  <Tag text="Responsive Design" />
                </div>
              </div>

              <div style={styles.scoreCard}>
                <div style={styles.scoreCircle}>
                  <div>
                    <strong>85</strong>
                    <span>/100</span>
                  </div>
                </div>

                <div>
                  <strong style={styles.goodTitle}>Good Work!</strong>
                  <p style={styles.goodText}>
                    Your code is clean and well-structured. Keep it up!
                  </p>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div style={styles.tabs}>
              <button type="button" style={styles.activeTab}>
                ✦ AI Feedback
              </button>

              <button type="button">▣ Detailed Review</button>
              <button type="button">◉ Suggestions</button>
              <button type="button">▤ Similar Examples</button>
            </div>

            {/* Feedback Grid */}
            <div style={styles.feedbackGrid}>
              {/* Center */}
              <div style={styles.centerColumn}>
                <div style={styles.card}>
                  <div style={styles.cardHeading}>
                    <span style={styles.headingIcon}>▣</span>
                    <strong>Overall Feedback</strong>
                  </div>

                  <p style={styles.feedbackText}>
                    Great job! You have successfully implemented a responsive
                    navbar with clean code structure. The design works well
                    across different screen sizes. There are a few minor
                    improvements you can make to enhance accessibility and
                    code organization.
                  </p>
                </div>

                <div style={styles.twoCards}>
                  {/* Good */}
                  <div
                    style={{
                      ...styles.card,
                      backgroundColor: "#f0fbf7",
                    }}
                  >
                    <div style={styles.goodHeading}>
                      <span>✓</span>
                      <strong>What You Did Well</strong>
                    </div>

                    <CheckItem text="Clean and organized code structure" />
                    <CheckItem text="Responsive design works on all screen sizes" />
                    <CheckItem text="Good use of CSS Flexbox" />
                    <CheckItem text="Smooth hover effects and transitions" />
                    <CheckItem text="Mobile menu functionality implemented" />
                  </div>

                  {/* Improvement */}
                  <div
                    style={{
                      ...styles.card,
                      backgroundColor: "#fff7ef",
                    }}
                  >
                    <div style={styles.improveHeading}>
                      <span>!</span>
                      <strong>Areas for Improvement</strong>
                    </div>

                    <ImproveItem text="Add proper ARIA labels for accessibility" />
                    <ImproveItem text="Improve keyboard navigation" />
                    <ImproveItem text="Optimize CSS for better performance" />
                    <ImproveItem text="Consider using semantic HTML elements" />
                    <ImproveItem text="Add active state for current page" />
                  </div>
                </div>

                {/* Comments */}
                <div style={styles.card}>
                  <div style={styles.commentsHeader}>
                    <div style={styles.cardHeading}>
                      <span style={styles.headingIcon}>✦</span>
                      <strong>AI Comments (Line by Line)</strong>
                    </div>

                    <button type="button" style={styles.reviewButton}>
                      View Full Review
                    </button>
                  </div>

                  <div style={styles.codeReview}>
                    <div style={styles.codeLines}>
                      <CodeLine number="1" text={'<nav className="navbar">'} />
                      <CodeLine
                        number="2"
                        text={'<div className="nav-container">'}
                      />
                      <CodeLine
                        number="3"
                        text={'<div className="logo">MentorOS</div>'}
                      />
                      <CodeLine
                        number="4"
                        text={'<ul className="nav-links">'}
                      />
                      <CodeLine
                        number="5"
                        text={'<li><a href="/home">Home</a></li>'}
                      />
                      <CodeLine
                        number="6"
                        text={"</ul>"}
                      />
                    </div>

                    <div style={styles.comments}>
                      <CommentGood text="Good: Semantic HTML element used" />
                      <CommentGood text="Good: Clean class naming" />
                      <CommentSuggest text="Suggestion: Consider using an anchor tag for better semantics" />
                      <CommentGood text="Good: Proper list structure" />
                      <CommentSuggest text="Suggestion: Add active state for current page" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div style={styles.rightColumn}>
                {/* Score Breakdown */}
                <div style={styles.card}>
                  <div style={styles.cardHeading}>
                    <span style={styles.headingIcon}>▤</span>
                    <strong>Score Breakdown</strong>
                  </div>

                  <ScoreBar
                    label="Functionality"
                    value={90}
                    className="blue"
                  />

                  <ScoreBar
                    label="Code Quality"
                    value={85}
                    className="green"
                  />

                  <ScoreBar
                    label="Responsive Design"
                    value={88}
                    className="purple"
                  />

                  <ScoreBar
                    label="UI/UX"
                    value={80}
                    className="orange"
                  />

                  <ScoreBar
                    label="Best Practices"
                    value={78}
                    className="red"
                  />
                </div>

                {/* AI Model */}
                <div style={styles.card}>
                  <div style={styles.cardHeading}>
                    <span style={styles.aiModelIcon}>◉</span>
                    <strong>AI Model</strong>
                  </div>

                  <p style={styles.modelText}>
                    Evaluated using GPT-4. Analysis based on code quality,
                    best practices, functionality, and design principles.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

/* ---------- Small Components ---------- */

function NavItem({
  icon,
  text,
  active = false,
}: {
  icon: string;
  text: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      style={{
        ...styles.navItem,
        ...(active ? styles.navItemActive : {}),
      }}
    >
      <span style={styles.navIcon}>{icon}</span>
      <span>{text}</span>
    </button>
  );
}

function Tag({ text }: { text: string }) {
  return <span style={styles.tag}>{text}</span>;
}

function CheckItem({ text }: { text: string }) {
  return (
    <div style={styles.listItem}>
      <span style={styles.checkCircle}>✓</span>
      <span>{text}</span>
    </div>
  );
}

function ImproveItem({ text }: { text: string }) {
  return (
    <div style={styles.listItem}>
      <span style={styles.warningCircle}>!</span>
      <span>{text}</span>
    </div>
  );
}

function CodeLine({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div style={styles.codeLine}>
      <span>{number}</span>
      <code>{text}</code>
    </div>
  );
}

function CommentGood({ text }: { text: string }) {
  return (
    <div style={styles.commentGood}>
      <span>+</span>
      <span>{text}</span>
    </div>
  );
}

function CommentSuggest({ text }: { text: string }) {
  return (
    <div style={styles.commentSuggest}>
      <span>+</span>
      <span>{text}</span>
    </div>
  );
}

function ScoreBar({
  label,
  value,
  className,
}: {
  label: string;
  value: number;
  className: string;
}) {
  return (
    <div style={styles.scoreRow}>
      <div style={styles.scoreLabel}>
        <span>{label}</span>
        <strong>{value}</strong>
      </div>

      <div style={styles.scoreTrack}>
        <div
          className={className}
          style={{
            ...styles.scoreFill,
            width: `${value}%`,
          }}
        />
      </div>
    </div>
  );
}

/* ---------- Styles ---------- */

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "flex",
    backgroundColor: "#f5f8fc",
    color: "#10244a",
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
    fontSize: "13px",
  },

  sidebar: {
    width: "188px",
    minHeight: "100vh",
    backgroundColor: "#102844",
    color: "#ffffff",
    padding: "15px 12px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "2px 5px 15px",
    borderBottom: "1px solid rgba(255,255,255,0.12)",
  },

  brandIcon: {
    fontSize: "25px",
  },

  brandName: {
    fontSize: "18px",
    fontWeight: 800,
    letterSpacing: "-0.4px",
  },

  brandTagline: {
    fontSize: "8px",
    color: "#b7c7dd",
    marginTop: "2px",
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
    marginTop: "17px",
  },

  navItem: {
    width: "100%",
    border: "none",
    backgroundColor: "transparent",
    color: "#dce7f6",
    padding: "9px 8px",
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "11px",
    textAlign: "left",
    cursor: "pointer",
  },

  navItemActive: {
    backgroundColor: "#1769e8",
    color: "#ffffff",
  },

  navIcon: {
    width: "18px",
    textAlign: "center",
    fontSize: "14px",
  },

  notificationNav: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#dce7f6",
    padding: "9px 8px",
    fontSize: "11px",
  },

  notificationBadge: {
    marginLeft: "auto",
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    backgroundColor: "#f43f5e",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "9px",
    fontWeight: 700,
  },

  sidebarBottom: {
    marginTop: "auto",
    backgroundColor: "#1a3553",
    borderRadius: "9px",
    padding: "15px 12px",
  },

  keepIcon: {
    fontSize: "24px",
    marginBottom: "8px",
  },

  keepTitle: {
    fontSize: "12px",
    fontWeight: 800,
    marginBottom: "6px",
  },

  keepText: {
    fontSize: "9px",
    lineHeight: 1.5,
    color: "#c7d5e6",
  },

  main: {
    flex: 1,
    minWidth: 0,
  },

  topHeader: {
    height: "52px",
    backgroundColor: "#ffffff",
    borderBottom: "1px solid #e2e8f2",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 22px",
    boxSizing: "border-box",
  },

  searchBox: {
    width: "500px",
    maxWidth: "60%",
    height: "34px",
    backgroundColor: "#f0f5fa",
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
    gap: "9px",
    padding: "0 12px",
    color: "#60708c",
    fontSize: "10px",
  },

  searchIcon: {
    fontSize: "18px",
    color: "#2563eb",
  },

  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
  },

  bell: {
    position: "relative",
    fontSize: "18px",
    marginRight: "6px",
  },

  bellBadge: {
    position: "absolute",
    top: "-7px",
    right: "-6px",
    width: "13px",
    height: "13px",
    borderRadius: "50%",
    backgroundColor: "#ef4444",
    color: "#ffffff",
    fontSize: "7px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  userAvatar: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    backgroundColor: "#10233f",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    fontWeight: 800,
  },

  userInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "1px",
    fontSize: "10px",
  },

  userInfoSpan: {},

  chevron: {
    color: "#48617e",
    fontSize: "16px",
    marginLeft: "6px",
  },

  pageHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "18px",
    padding: "17px 14px 12px",
  },

  pageTitleArea: {
    display: "flex",
    alignItems: "center",
    gap: "11px",
  },

  pageIcon: {
    width: "38px",
    height: "38px",
    borderRadius: "8px",
    backgroundColor: "#eee8ff",
    color: "#7048e8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "19px",
  },

  pageTitle: {
    margin: 0,
    fontSize: "20px",
    fontWeight: 800,
    letterSpacing: "-0.4px",
  },

  pageSubtitle: {
    margin: "3px 0 0",
    color: "#607391",
    fontSize: "10px",
  },

  infoBanner: {
    maxWidth: "440px",
    backgroundColor: "#edf5ff",
    border: "1px solid #dbeafe",
    borderRadius: "7px",
    padding: "9px 12px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#526783",
    fontSize: "9px",
    lineHeight: 1.4,
  },

  infoLight: {
    fontSize: "17px",
  },

  contentGrid: {
    display: "grid",
    gridTemplateColumns: "202px minmax(0, 1fr)",
    gap: "10px",
    padding: "0 14px 15px",
  },

  submissionPanel: {
    backgroundColor: "#ffffff",
    border: "1px solid #dce5f1",
    borderRadius: "7px",
    padding: "10px",
    height: "fit-content",
  },

  panelTitle: {
    fontSize: "11px",
    fontWeight: 800,
    marginBottom: "9px",
  },

  searchSmall: {
    height: "26px",
    border: "1px solid #dbe4ef",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "0 8px",
    color: "#70819b",
    fontSize: "8px",
    marginBottom: "8px",
  },

  submissionList: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  },

  submissionItem: {
    width: "100%",
    border: "none",
    borderLeft: "2px solid transparent",
    backgroundColor: "#ffffff",
    padding: "7px 5px",
    display: "flex",
    alignItems: "center",
    gap: "7px",
    textAlign: "left",
    borderRadius: "4px",
    cursor: "pointer",
  },

  submissionActive: {
    backgroundColor: "#eef5ff",
    borderLeftColor: "#1769e8",
  },

  submissionIcon: {
    width: "25px",
    height: "25px",
    borderRadius: "5px",
    backgroundColor: "#eef2ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    flexShrink: 0,
  },

  submissionInfo: {
    minWidth: 0,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  },

  scoreSmall: {
    minWidth: "21px",
    height: "21px",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "8px",
    fontWeight: 800,
  },

  feedbackArea: {
    minWidth: 0,
  },

  feedbackTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "7px",
    color: "#667a96",
    fontSize: "8px",
  },

  backButton: {
    border: "none",
    backgroundColor: "transparent",
    color: "#1769e8",
    fontSize: "8px",
    cursor: "pointer",
    padding: 0,
  },

  assignmentHeader: {
    backgroundColor: "#ffffff",
    border: "1px solid #dce5f1",
    borderRadius: "7px 7px 0 0",
    padding: "11px",
    display: "flex",
    alignItems: "center",
    gap: "9px",
  },

  assignmentIcon: {
    width: "36px",
    height: "36px",
    borderRadius: "7px",
    backgroundColor: "#e9f2ff",
    color: "#1769e8",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    flexShrink: 0,
  },

  assignmentInfo: {
    flex: 1,
    minWidth: 0,
  },

  assignmentInfoH2: {},

  tags: {
    display: "flex",
    gap: "4px",
    marginTop: "5px",
  },

  tag: {
    backgroundColor: "#f1f5f9",
    color: "#526783",
    padding: "3px 6px",
    borderRadius: "4px",
    fontSize: "7px",
  },

  scoreCard: {
    width: "190px",
    backgroundColor: "#eefaf5",
    borderRadius: "5px",
    padding: "8px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  scoreCircle: {
    width: "53px",
    height: "53px",
    borderRadius: "50%",
    background:
      "conic-gradient(#10b981 0deg 306deg, #d9f4e9 306deg 360deg)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  scoreCircleInner: {},

  goodTitle: {
    fontSize: "10px",
    color: "#07845e",
  },

  goodText: {
    margin: "3px 0 0",
    color: "#5f7b70",
    fontSize: "8px",
    lineHeight: 1.4,
  },

  tabs: {
    backgroundColor: "#ffffff",
    borderLeft: "1px solid #dce5f1",
    borderRight: "1px solid #dce5f1",
    borderBottom: "1px solid #dce5f1",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "0 10px",
  },

  activeTab: {
    color: "#1769e8",
    borderBottom: "2px solid #1769e8",
  },

  feedbackGrid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) 175px",
    gap: "8px",
    marginTop: "8px",
  },

  centerColumn: {
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  rightColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #dce5f1",
    borderRadius: "7px",
    padding: "10px",
  },

  cardHeading: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "10px",
    marginBottom: "7px",
  },

  headingIcon: {
    color: "#1769e8",
    fontSize: "13px",
  },

  feedbackText: {
    margin: 0,
    color: "#5b6e89",
    fontSize: "8px",
    lineHeight: 1.6,
  },

  twoCards: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "8px",
  },

  goodHeading: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "#07845e",
    fontSize: "9px",
    marginBottom: "7px",
  },

  improveHeading: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "#e17b00",
    fontSize: "9px",
    marginBottom: "7px",
  },

  listItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "6px",
    color: "#526783",
    fontSize: "7px",
    lineHeight: 1.5,
    marginTop: "5px",
  },

  checkCircle: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#10b981",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "7px",
    flexShrink: 0,
  },

  warningCircle: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#f59e0b",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "7px",
    flexShrink: 0,
  },

  commentsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  reviewButton: {
    border: "none",
    backgroundColor: "transparent",
    color: "#1769e8",
    fontSize: "7px",
    cursor: "pointer",
  },

  codeReview: {
    display: "grid",
    gridTemplateColumns: "1fr 1.35fr",
    gap: "7px",
    backgroundColor: "#f8fafc",
    borderRadius: "5px",
    padding: "7px",
  },

  codeLines: {
    fontFamily: "Consolas, monospace",
    fontSize: "7px",
    color: "#45556d",
  },

  codeLine: {
    display: "flex",
    gap: "8px",
    lineHeight: 1.8,
  },

  comments: {
    display: "flex",
    flexDirection: "column",
    gap: "3px",
  },

  commentGood: {
    backgroundColor: "#e7f8ef",
    color: "#07845e",
    borderRadius: "3px",
    padding: "3px 5px",
    fontSize: "6px",
  },

  commentSuggest: {
    backgroundColor: "#fff3d9",
    color: "#b56b00",
    borderRadius: "3px",
    padding: "3px 5px",
    fontSize: "6px",
  },

  scoreRow: {
    marginTop: "8px",
  },

  scoreLabel: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "7px",
    color: "#5b6e89",
    marginBottom: "4px",
  },

  scoreTrack: {
    height: "5px",
    backgroundColor: "#e9eef5",
    borderRadius: "5px",
    overflow: "hidden",
  },

  scoreFill: {
    height: "100%",
    borderRadius: "5px",
  },

  aiModelIcon: {
    color: "#1769e8",
    fontSize: "14px",
  },

  modelText: {
    margin: 0,
    color: "#657d9b",
    fontSize: "7px",
    lineHeight: 1.6,
  },

};
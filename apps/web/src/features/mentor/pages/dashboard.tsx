"use client";

import React from "react";

export default function MentorDashboard() {
  const stats = [
    {
      title: "My Students",
      value: "48",
      subtitle: "6 new this month",
      icon: "👥",
    },
    {
      title: "Active Courses",
      value: "8",
      subtitle: "3 courses in progress",
      icon: "📚",
    },
    {
      title: "Pending Reviews",
      value: "12",
      subtitle: "Need your attention",
      icon: "📝",
    },
    {
      title: "Average Progress",
      value: "78%",
      subtitle: "Across all students",
      icon: "📈",
    },
  ];

  const students = [
    {
      name: "Aarav Sharma",
      course: "Full Stack Development",
      progress: 86,
      status: "On Track",
      avatar: "AS",
    },
    {
      name: "Priya Singh",
      course: "Machine Learning",
      progress: 72,
      status: "On Track",
      avatar: "PS",
    },
    {
      name: "Rahul Kumar",
      course: "Data Structures",
      progress: 54,
      status: "Needs Attention",
      avatar: "RK",
    },
    {
      name: "Ananya Verma",
      course: "Frontend Development",
      progress: 91,
      status: "Excellent",
      avatar: "AV",
    },
  ];

  const assignments = [
    {
      title: "React Dashboard Project",
      student: "Aarav Sharma",
      due: "Today",
      status: "Pending",
    },
    {
      title: "ML Classification Task",
      student: "Priya Singh",
      due: "Tomorrow",
      status: "Review",
    },
    {
      title: "Binary Tree Problems",
      student: "Rahul Kumar",
      due: "18 Sep",
      status: "Pending",
    },
    {
      title: "UI Design Assignment",
      student: "Ananya Verma",
      due: "20 Sep",
      status: "Reviewed",
    },
  ];

  return (
    <div style={styles.page}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.logoSection}>
          <div style={styles.logo}>M</div>

          <div>
            <div style={styles.logoText}>MentorOS</div>
            <div style={styles.logoSubtext}>Mentor Portal</div>
          </div>
        </div>

        <nav style={styles.navigation}>
          <div style={{ ...styles.navItem, ...styles.activeNavItem }}>
            <span>🏠</span>
            <span>Dashboard</span>
          </div>

          <div style={styles.navItem}>
            <span>👥</span>
            <span>My Students</span>
          </div>

          <div style={styles.navItem}>
            <span>📚</span>
            <span>My Courses</span>
          </div>

          <div style={styles.navItem}>
            <span>📝</span>
            <span>Assignments</span>
          </div>

          <div style={styles.navItem}>
            <span>📊</span>
            <span>Student Progress</span>
          </div>

          <div style={styles.navItem}>
            <span>💬</span>
            <span>Messages</span>
          </div>

          <div style={styles.navItem}>
            <span>🤖</span>
            <span>AI Insights</span>
          </div>
        </nav>

        <div style={styles.sidebarBottom}>
          <div style={styles.navItem}>
            <span>⚙️</span>
            <span>Settings</span>
          </div>

          <div style={styles.navItem}>
            <span>🚪</span>
            <span>Logout</span>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main style={styles.main}>
        {/* Header */}
        <header style={styles.header}>
          <div>
            <h1 style={styles.headerTitle}>Mentor Dashboard</h1>

            <p style={styles.headerSubtitle}>
              Manage your students, courses and learning activities.
            </p>
          </div>

          <div style={styles.headerRight}>
            <button style={styles.notificationButton}>
              🔔
            </button>

            <div style={styles.profile}>
              <div style={styles.avatar}>M</div>

              <div>
                <div style={styles.profileName}>Mentor</div>
                <div style={styles.profileRole}>Instructor</div>
              </div>

              <span style={styles.dropdown}>⌄</span>
            </div>
          </div>
        </header>

        {/* Welcome */}
        <section style={styles.welcomeCard}>
          <div>
            <p style={styles.welcomeSmall}>WELCOME BACK 👋</p>

            <h2 style={styles.welcomeTitle}>
              Good Morning, Mentor!
            </h2>

            <p style={styles.welcomeText}>
              You have 12 assignments waiting for review and 4
              students who may need your attention.
            </p>

            <button style={styles.primaryButton}>
              Review Assignments →
            </button>
          </div>

          <div style={styles.welcomeIcon}>🎓</div>
        </section>

        {/* Stats */}
        <section style={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.title} style={styles.statCard}>
              <div style={styles.statTop}>
                <div>
                  <p style={styles.statTitle}>{stat.title}</p>

                  <h3 style={styles.statValue}>
                    {stat.value}
                  </h3>
                </div>

                <div style={styles.statIcon}>
                  {stat.icon}
                </div>
              </div>

              <p style={styles.statSubtitle}>
                {stat.subtitle}
              </p>
            </div>
          ))}
        </section>

        {/* Main Grid */}
        <section style={styles.mainGrid}>
          {/* Students */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <div>
                <h2 style={styles.cardTitle}>
                  My Students
                </h2>

                <p style={styles.cardSubtitle}>
                  Monitor student learning progress
                </p>
              </div>

              <button style={styles.viewButton}>
                View All
              </button>
            </div>

            <div>
              {students.map((student) => (
                <div
                  key={student.name}
                  style={styles.studentItem}
                >
                  <div style={styles.studentAvatar}>
                    {student.avatar}
                  </div>

                  <div style={styles.studentContent}>
                    <div style={styles.studentTop}>
                      <div>
                        <div style={styles.studentName}>
                          {student.name}
                        </div>

                        <div style={styles.studentCourse}>
                          {student.course}
                        </div>
                      </div>

                      <span
                        style={{
                          ...styles.statusBadge,
                          ...(student.status ===
                          "Needs Attention"
                            ? styles.warningBadge
                            : styles.successBadge),
                        }}
                      >
                        {student.status}
                      </span>
                    </div>

                    <div style={styles.progressBackground}>
                      <div
                        style={{
                          ...styles.progressBar,
                          width: `${student.progress}%`,
                        }}
                      />
                    </div>

                    <div style={styles.progressInfo}>
                      <span>Progress</span>

                      <strong>
                        {student.progress}%
                      </strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assignments */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <div>
                <h2 style={styles.cardTitle}>
                  Recent Assignments
                </h2>

                <p style={styles.cardSubtitle}>
                  Review student submissions
                </p>
              </div>

              <button style={styles.viewButton}>
                View All
              </button>
            </div>

            <div>
              {assignments.map((assignment) => (
                <div
                  key={assignment.title}
                  style={styles.assignmentItem}
                >
                  <div style={styles.assignmentIcon}>
                    📝
                  </div>

                  <div style={styles.assignmentContent}>
                    <div style={styles.assignmentTitle}>
                      {assignment.title}
                    </div>

                    <div style={styles.assignmentStudent}>
                      Student: {assignment.student}
                    </div>

                    <div style={styles.assignmentBottom}>
                      <span>
                        Due: {assignment.due}
                      </span>

                      <span
                        style={{
                          ...styles.assignmentBadge,
                          ...(assignment.status ===
                          "Reviewed"
                            ? styles.reviewedBadge
                            : styles.pendingBadge),
                        }}
                      >
                        {assignment.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Grid */}
        <section style={styles.bottomGrid}>
          {/* Performance */}
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <div>
                <h2 style={styles.cardTitle}>
                  Student Performance
                </h2>

                <p style={styles.cardSubtitle}>
                  Overall performance of your students
                </p>
              </div>

              <button style={styles.viewButton}>
                This Month ▾
              </button>
            </div>

            <div style={styles.performanceArea}>
              <div style={styles.performanceCircle}>
                <div style={styles.circleInner}>
                  <strong>78%</strong>
                  <span>Average</span>
                </div>
              </div>

              <div style={styles.performanceDetails}>
                <div style={styles.performanceRow}>
                  <span>Excellent Students</span>
                  <strong>18</strong>
                </div>

                <div style={styles.performanceRow}>
                  <span>On Track</span>
                  <strong>24</strong>
                </div>

                <div style={styles.performanceRow}>
                  <span>Needs Attention</span>
                  <strong>6</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div style={styles.quickCard}>
            <div style={styles.quickIcon}>⚡</div>

            <h2 style={styles.quickTitle}>
              Quick Actions
            </h2>

            <p style={styles.quickText}>
              Quickly access common mentor activities.
            </p>

            <div style={styles.quickGrid}>
              <button style={styles.quickButton}>
                <span>👥</span>
                Students
              </button>

              <button style={styles.quickButton}>
                <span>📝</span>
                Review Work
              </button>

              <button style={styles.quickButton}>
                <span>📚</span>
                Add Course
              </button>

              <button style={styles.quickButton}>
                <span>💬</span>
                Message
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    backgroundColor: "#f5f7fb",
    color: "#172033",
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
  },

  sidebar: {
    width: "250px",
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    borderRight: "1px solid #e5e7eb",
    padding: "24px 16px",
    boxSizing: "border-box" as const,
    display: "flex",
    flexDirection: "column" as const,
  },

  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "4px 10px 30px",
  },

  logo: {
    width: "42px",
    height: "42px",
    borderRadius: "12px",
    backgroundColor: "#4f46e5",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "22px",
    fontWeight: 800,
  },

  logoText: {
    fontSize: "19px",
    fontWeight: 800,
  },

  logoSubtext: {
    fontSize: "11px",
    color: "#8a94a6",
    marginTop: "2px",
  },

  navigation: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "7px",
  },

  navItem: {
    display: "flex",
    alignItems: "center",
    gap: "13px",
    padding: "12px 13px",
    borderRadius: "10px",
    color: "#697386",
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
  },

  activeNavItem: {
    backgroundColor: "#eef2ff",
    color: "#4f46e5",
  },

  sidebarBottom: {
    marginTop: "auto",
    display: "flex",
    flexDirection: "column" as const,
    gap: "7px",
    borderTop: "1px solid #eef0f4",
    paddingTop: "18px",
  },

  main: {
    flex: 1,
    minWidth: 0,
    padding: "28px 34px 50px",
    boxSizing: "border-box" as const,
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    marginBottom: "25px",
  },

  headerTitle: {
    margin: 0,
    fontSize: "27px",
    fontWeight: 800,
    letterSpacing: "-0.5px",
  },

  headerSubtitle: {
    margin: "7px 0 0",
    color: "#7a8496",
    fontSize: "14px",
  },

  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },

  notificationButton: {
    width: "40px",
    height: "40px",
    border: "1px solid #e3e7ef",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    cursor: "pointer",
    fontSize: "17px",
  },

  profile: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#e0e7ff",
    color: "#4338ca",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
  },

  profileName: {
    fontSize: "13px",
    fontWeight: 700,
  },

  profileRole: {
    fontSize: "11px",
    color: "#8a94a6",
    marginTop: "2px",
  },

  dropdown: {
    color: "#697386",
    fontSize: "18px",
  },

  welcomeCard: {
    backgroundColor: "#4f46e5",
    color: "#ffffff",
    borderRadius: "18px",
    padding: "28px 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
    overflow: "hidden",
  },

  welcomeSmall: {
    margin: 0,
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "1px",
    opacity: 0.8,
  },

  welcomeTitle: {
    margin: "8px 0 6px",
    fontSize: "24px",
    fontWeight: 800,
  },

  welcomeText: {
    margin: 0,
    fontSize: "13px",
    lineHeight: 1.6,
    opacity: 0.88,
    maxWidth: "650px",
  },

  welcomeIcon: {
    fontSize: "72px",
    marginRight: "25px",
  },

  primaryButton: {
    marginTop: "18px",
    border: "none",
    borderRadius: "9px",
    backgroundColor: "#ffffff",
    color: "#4f46e5",
    padding: "10px 15px",
    fontSize: "12px",
    fontWeight: 700,
    cursor: "pointer",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: "16px",
    marginBottom: "20px",
  },

  statCard: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "15px",
    padding: "19px",
  },

  statTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  statTitle: {
    margin: 0,
    color: "#7b8494",
    fontSize: "12px",
    fontWeight: 600,
  },

  statValue: {
    margin: "5px 0 0",
    fontSize: "27px",
    fontWeight: 800,
  },

  statIcon: {
    width: "42px",
    height: "42px",
    borderRadius: "10px",
    backgroundColor: "#f1f3ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  },

  statSubtitle: {
    margin: "12px 0 0",
    fontSize: "11px",
    color: "#8992a3",
  },

  mainGrid: {
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: "20px",
    marginBottom: "20px",
  },

  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "15px",
    padding: "21px",
  },

  cardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "17px",
  },

  cardTitle: {
    margin: 0,
    fontSize: "17px",
    fontWeight: 800,
  },

  cardSubtitle: {
    margin: "4px 0 0",
    fontSize: "11px",
    color: "#8a94a6",
  },

  viewButton: {
    border: "none",
    backgroundColor: "transparent",
    color: "#4f46e5",
    fontSize: "12px",
    fontWeight: 700,
    cursor: "pointer",
  },

  studentItem: {
    display: "flex",
    gap: "13px",
    padding: "14px 0",
    borderTop: "1px solid #f0f1f4",
  },

  studentAvatar: {
    width: "40px",
    height: "40px",
    flexShrink: 0,
    borderRadius: "10px",
    backgroundColor: "#eef2ff",
    color: "#4f46e5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    fontWeight: 800,
  },

  studentContent: {
    flex: 1,
    minWidth: 0,
  },

  studentTop: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "10px",
  },

  studentName: {
    fontSize: "13px",
    fontWeight: 700,
  },

  studentCourse: {
    fontSize: "10px",
    color: "#8992a3",
    marginTop: "4px",
  },

  statusBadge: {
    padding: "4px 7px",
    borderRadius: "5px",
    fontSize: "9px",
    fontWeight: 700,
    whiteSpace: "nowrap" as const,
  },

  successBadge: {
    backgroundColor: "#dcfce7",
    color: "#166534",
  },

  warningBadge: {
    backgroundColor: "#fef3c7",
    color: "#92400e",
  },

  progressBackground: {
    height: "6px",
    backgroundColor: "#edf0f5",
    borderRadius: "10px",
    overflow: "hidden",
    marginTop: "10px",
  },

  progressBar: {
    height: "100%",
    backgroundColor: "#4f46e5",
    borderRadius: "10px",
  },

  progressInfo: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "10px",
    color: "#8992a3",
    marginTop: "5px",
  },

  assignmentItem: {
    display: "flex",
    gap: "12px",
    padding: "14px 0",
    borderTop: "1px solid #f0f1f4",
  },

  assignmentIcon: {
    width: "38px",
    height: "38px",
    flexShrink: 0,
    borderRadius: "9px",
    backgroundColor: "#f5f3ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "17px",
  },

  assignmentContent: {
    flex: 1,
    minWidth: 0,
  },

  assignmentTitle: {
    fontSize: "12px",
    fontWeight: 700,
  },

  assignmentStudent: {
    fontSize: "10px",
    color: "#8992a3",
    marginTop: "3px",
  },

  assignmentBottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "7px",
    fontSize: "10px",
    color: "#8992a3",
  },

  assignmentBadge: {
    padding: "4px 7px",
    borderRadius: "5px",
    fontWeight: 700,
    fontSize: "9px",
  },

  pendingBadge: {
    backgroundColor: "#fef3c7",
    color: "#92400e",
  },

  reviewedBadge: {
    backgroundColor: "#dcfce7",
    color: "#166534",
  },

  bottomGrid: {
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: "20px",
  },

  performanceArea: {
    display: "flex",
    alignItems: "center",
    gap: "35px",
    paddingTop: "10px",
  },

  performanceCircle: {
    width: "150px",
    height: "150px",
    flexShrink: 0,
    borderRadius: "50%",
    background:
      "conic-gradient(#4f46e5 0deg 281deg, #e9eaf3 281deg 360deg)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  circleInner: {
    width: "112px",
    height: "112px",
    borderRadius: "50%",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
  },

  performanceDetails: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    gap: "18px",
  },

  performanceRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    color: "#697386",
    paddingBottom: "10px",
    borderBottom: "1px solid #f0f1f4",
  },

  quickCard: {
    backgroundColor: "#171c35",
    color: "#ffffff",
    borderRadius: "15px",
    padding: "25px",
  },

  quickIcon: {
    fontSize: "30px",
    marginBottom: "10px",
  },

  quickTitle: {
    margin: 0,
    fontSize: "19px",
    fontWeight: 800,
  },

  quickText: {
    color: "#c4c9db",
    fontSize: "12px",
    lineHeight: 1.6,
    margin: "8px 0 18px",
  },

  quickGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "9px",
  },

  quickButton: {
    border: "none",
    borderRadius: "9px",
    backgroundColor: "#ffffff",
    color: "#171c35",
    padding: "10px 8px",
    fontSize: "11px",
    fontWeight: 700,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
  },
};
"use client";

import React from "react";

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Students",
      value: "1,248",
      change: "+12.5%",
      icon: "👨‍🎓",
    },
    {
      title: "Active Courses",
      value: "36",
      change: "+4.2%",
      icon: "📚",
    },
    {
      title: "Total Mentors",
      value: "48",
      change: "+8.1%",
      icon: "👨‍🏫",
    },
    {
      title: "Assignments",
      value: "2,486",
      change: "+18.4%",
      icon: "📝",
    },
  ];

  const students = [
    {
      name: "Aarav Sharma",
      email: "aarav@example.com",
      course: "Full Stack Development",
      progress: 86,
      status: "Active",
    },
    {
      name: "Priya Singh",
      email: "priya@example.com",
      course: "Data Science",
      progress: 72,
      status: "Active",
    },
    {
      name: "Rahul Kumar",
      email: "rahul@example.com",
      course: "Machine Learning",
      progress: 64,
      status: "Active",
    },
    {
      name: "Ananya Verma",
      email: "ananya@example.com",
      course: "UI/UX Design",
      progress: 91,
      status: "Active",
    },
  ];

  const activities = [
    {
      icon: "👨‍🎓",
      title: "New student registered",
      description: "Aarav Sharma joined Full Stack Development",
      time: "10 min ago",
    },
    {
      icon: "📚",
      title: "New course created",
      description: "Machine Learning Fundamentals",
      time: "35 min ago",
    },
    {
      icon: "📝",
      title: "Assignment submitted",
      description: "Priya Singh submitted React Project",
      time: "1 hour ago",
    },
    {
      icon: "👨‍🏫",
      title: "New mentor added",
      description: "Dr. Amit Kumar joined the mentor team",
      time: "2 hours ago",
    },
  ];

  return (
    <div style={styles.page}>
      <aside style={styles.sidebar}>
        <div style={styles.logoSection}>
          <div style={styles.logo}>M</div>

          <div>
            <div style={styles.logoText}>MentorOS</div>
            <div style={styles.logoSubtext}>Admin Portal</div>
          </div>
        </div>

        <nav style={styles.nav}>
          <div style={{ ...styles.navItem, ...styles.activeNav }}>
            <span>🏠</span>
            <span>Dashboard</span>
          </div>

          <div style={styles.navItem}>
            <span>👨‍🎓</span>
            <span>Students</span>
          </div>

          <div style={styles.navItem}>
            <span>👨‍🏫</span>
            <span>Mentors</span>
          </div>

          <div style={styles.navItem}>
            <span>📚</span>
            <span>Courses</span>
          </div>

          <div style={styles.navItem}>
            <span>📝</span>
            <span>Assignments</span>
          </div>

          <div style={styles.navItem}>
            <span>📊</span>
            <span>Reports</span>
          </div>

          <div style={styles.navItem}>
            <span>🔔</span>
            <span>Notifications</span>
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

      <main style={styles.main}>
        <header style={styles.header}>
          <div>
            <h1 style={styles.title}>Admin Dashboard</h1>
            <p style={styles.subtitle}>
              Manage students, mentors, courses and learning activities.
            </p>
          </div>

          <div style={styles.headerRight}>
            <button style={styles.notification}>🔔</button>

            <div style={styles.profile}>
              <div style={styles.avatar}>A</div>

              <div>
                <div style={styles.profileName}>Admin</div>
                <div style={styles.profileRole}>Administrator</div>
              </div>

              <span style={styles.arrow}>⌄</span>
            </div>
          </div>
        </header>

        <section style={styles.welcome}>
          <div>
            <div style={styles.welcomeSmall}>ADMIN OVERVIEW</div>

            <h2 style={styles.welcomeTitle}>
              Welcome back, Admin 👋
            </h2>

            <p style={styles.welcomeText}>
              Here is what is happening across your MentorOS platform today.
            </p>
          </div>

          <div style={styles.welcomeIcon}>📊</div>
        </section>

        <section style={styles.statsGrid}>
          {stats.map((stat) => (
            <div key={stat.title} style={styles.statCard}>
              <div style={styles.statHeader}>
                <div>
                  <p style={styles.statTitle}>{stat.title}</p>
                  <h3 style={styles.statValue}>{stat.value}</h3>
                </div>

                <div style={styles.statIcon}>{stat.icon}</div>
              </div>

              <div style={styles.statChange}>
                <span style={styles.greenText}>↗ {stat.change}</span>
                <span style={styles.mutedText}> from last month</span>
              </div>
            </div>
          ))}
        </section>

        <section style={styles.twoColumn}>
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <div>
                <h2 style={styles.cardTitle}>Student Overview</h2>
                <p style={styles.cardSubtitle}>
                  Recently active students
                </p>
              </div>

              <button style={styles.viewButton}>View All</button>
            </div>

            <div style={styles.table}>
              <div style={styles.tableHeader}>
                <span>Student</span>
                <span>Course</span>
                <span>Progress</span>
                <span>Status</span>
              </div>

              {students.map((student) => (
                <div key={student.email} style={styles.tableRow}>
                  <div style={styles.studentCell}>
                    <div style={styles.studentAvatar}>
                      {student.name.charAt(0)}
                    </div>

                    <div>
                      <div style={styles.studentName}>
                        {student.name}
                      </div>

                      <div style={styles.studentEmail}>
                        {student.email}
                      </div>
                    </div>
                  </div>

                  <div style={styles.courseText}>
                    {student.course}
                  </div>

                  <div style={styles.progressCell}>
                    <div style={styles.progressTop}>
                      <span>{student.progress}%</span>
                    </div>

                    <div style={styles.progressBackground}>
                      <div
                        style={{
                          ...styles.progressBar,
                          width: `${student.progress}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <span style={styles.activeBadge}>
                      {student.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <div>
                <h2 style={styles.cardTitle}>Recent Activity</h2>
                <p style={styles.cardSubtitle}>
                  Latest platform activity
                </p>
              </div>

              <button style={styles.viewButton}>View All</button>
            </div>

            <div>
              {activities.map((activity) => (
                <div key={activity.title} style={styles.activity}>
                  <div style={styles.activityIcon}>
                    {activity.icon}
                  </div>

                  <div style={styles.activityContent}>
                    <div style={styles.activityTitle}>
                      {activity.title}
                    </div>

                    <div style={styles.activityDescription}>
                      {activity.description}
                    </div>

                    <div style={styles.activityTime}>
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.bottomGrid}>
          <div style={styles.card}>
            <div style={styles.cardHeader}>
              <div>
                <h2 style={styles.cardTitle}>Platform Statistics</h2>
                <p style={styles.cardSubtitle}>
                  Current learning platform performance
                </p>
              </div>
            </div>

            <div style={styles.statLines}>
              <div style={styles.statLine}>
                <div>
                  <span style={styles.lineTitle}>
                    Course Completion
                  </span>
                  <span style={styles.lineValue}>82%</span>
                </div>

                <div style={styles.lineBackground}>
                  <div
                    style={{
                      ...styles.lineProgress,
                      width: "82%",
                    }}
                  />
                </div>
              </div>

              <div style={styles.statLine}>
                <div>
                  <span style={styles.lineTitle}>
                    Assignment Completion
                  </span>
                  <span style={styles.lineValue}>76%</span>
                </div>

                <div style={styles.lineBackground}>
                  <div
                    style={{
                      ...styles.lineProgress,
                      width: "76%",
                    }}
                  />
                </div>
              </div>

              <div style={styles.statLine}>
                <div>
                  <span style={styles.lineTitle}>
                    Student Engagement
                  </span>
                  <span style={styles.lineValue}>91%</span>
                </div>

                <div style={styles.lineBackground}>
                  <div
                    style={{
                      ...styles.lineProgress,
                      width: "91%",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div style={styles.quickCard}>
            <div style={styles.quickIcon}>⚡</div>

            <h2 style={styles.quickTitle}>Quick Actions</h2>

            <p style={styles.quickText}>
              Quickly manage important platform activities.
            </p>

            <button style={styles.quickButton}>
              + Add New Student
            </button>

            <button style={styles.quickButton}>
              + Create Course
            </button>

            <button style={styles.quickButton}>
              + Add Mentor
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "flex",
    backgroundColor: "#f5f7fb",
    color: "#172033",
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
  },

  sidebar: {
    width: "245px",
    minHeight: "100vh",
    backgroundColor: "#101d32",
    color: "#ffffff",
    padding: "22px 14px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
  },

  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: "11px",
    padding: "5px 10px 30px",
  },

  logo: {
    width: "42px",
    height: "42px",
    borderRadius: "12px",
    backgroundColor: "#6d4aff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "21px",
    fontWeight: 800,
  },

  logoText: {
    fontSize: "19px",
    fontWeight: 800,
  },

  logoSubtext: {
    fontSize: "10px",
    color: "#aeb9cb",
    marginTop: "2px",
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },

  navItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 12px",
    borderRadius: "9px",
    color: "#b9c3d3",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
  },

  activeNav: {
    backgroundColor: "#2168df",
    color: "#ffffff",
  },

  sidebarBottom: {
    marginTop: "auto",
    paddingTop: "15px",
    borderTop: "1px solid #27354a",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },

  main: {
    flex: 1,
    minWidth: 0,
    padding: "28px 32px 45px",
    boxSizing: "border-box",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    marginBottom: "25px",
  },

  title: {
    margin: 0,
    fontSize: "28px",
    fontWeight: 800,
    letterSpacing: "-0.5px",
  },

  subtitle: {
    margin: "6px 0 0",
    color: "#7d8798",
    fontSize: "13px",
  },

  headerRight: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  notification: {
    width: "40px",
    height: "40px",
    border: "1px solid #e1e5ed",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    cursor: "pointer",
    fontSize: "17px",
  },

  profile: {
    display: "flex",
    alignItems: "center",
    gap: "9px",
  },

  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#e5e1ff",
    color: "#5b45d6",
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
    fontSize: "10px",
    color: "#8a94a6",
    marginTop: "2px",
  },

  arrow: {
    color: "#7c8799",
    marginLeft: "2px",
  },

  welcome: {
    backgroundColor: "#5542d9",
    borderRadius: "17px",
    padding: "26px 29px",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "19px",
    overflow: "hidden",
  },

  welcomeSmall: {
    fontSize: "10px",
    fontWeight: 800,
    letterSpacing: "1px",
    opacity: 0.8,
  },

  welcomeTitle: {
    margin: "7px 0 5px",
    fontSize: "23px",
    fontWeight: 800,
  },

  welcomeText: {
    margin: 0,
    fontSize: "12px",
    opacity: 0.85,
  },

  welcomeIcon: {
    fontSize: "58px",
    marginRight: "22px",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: "15px",
    marginBottom: "20px",
  },

  statCard: {
    backgroundColor: "#ffffff",
    border: "1px solid #e4e8ef",
    borderRadius: "14px",
    padding: "18px",
  },

  statHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  statTitle: {
    margin: 0,
    color: "#7d8798",
    fontSize: "11px",
    fontWeight: 600,
  },

  statValue: {
    margin: "5px 0 0",
    fontSize: "25px",
    fontWeight: 800,
  },

  statIcon: {
    width: "39px",
    height: "39px",
    borderRadius: "10px",
    backgroundColor: "#eeebff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
  },

  statChange: {
    marginTop: "13px",
    fontSize: "10px",
  },

  greenText: {
    color: "#16a34a",
    fontWeight: 700,
  },

  mutedText: {
    color: "#929aaa",
  },

  twoColumn: {
    display: "grid",
    gridTemplateColumns: "1.5fr 0.8fr",
    gap: "19px",
    marginBottom: "19px",
  },

  card: {
    backgroundColor: "#ffffff",
    border: "1px solid #e4e8ef",
    borderRadius: "15px",
    padding: "20px",
    minWidth: 0,
  },

  cardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "16px",
  },

  cardTitle: {
    margin: 0,
    fontSize: "16px",
    fontWeight: 800,
  },

  cardSubtitle: {
    margin: "4px 0 0",
    fontSize: "10px",
    color: "#8a94a6",
  },

  viewButton: {
    border: "none",
    backgroundColor: "transparent",
    color: "#5542d9",
    fontSize: "11px",
    fontWeight: 700,
    cursor: "pointer",
  },

  table: {
    width: "100%",
  },

  tableHeader: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1.2fr 0.9fr 0.6fr",
    gap: "12px",
    padding: "9px 0",
    borderBottom: "1px solid #eef0f4",
    color: "#8a94a6",
    fontSize: "9px",
    fontWeight: 700,
  },

  tableRow: {
    display: "grid",
    gridTemplateColumns: "1.4fr 1.2fr 0.9fr 0.6fr",
    gap: "12px",
    alignItems: "center",
    padding: "13px 0",
    borderBottom: "1px solid #f0f2f5",
  },

  studentCell: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    minWidth: 0,
  },

  studentAvatar: {
    width: "31px",
    height: "31px",
    borderRadius: "50%",
    backgroundColor: "#ebe8ff",
    color: "#5542d9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "11px",
    fontWeight: 800,
    flexShrink: 0,
  },

  studentName: {
    fontSize: "10px",
    fontWeight: 700,
  },

  studentEmail: {
    fontSize: "8px",
    color: "#929aaa",
    marginTop: "2px",
  },

  courseText: {
    fontSize: "9px",
    color: "#667085",
  },

  progressCell: {
    minWidth: 0,
  },

  progressTop: {
    fontSize: "9px",
    color: "#555f70",
    marginBottom: "4px",
  },

  progressBackground: {
    height: "5px",
    backgroundColor: "#edf0f5",
    borderRadius: "8px",
    overflow: "hidden",
  },

  progressBar: {
    height: "100%",
    backgroundColor: "#5542d9",
    borderRadius: "8px",
  },

  activeBadge: {
    display: "inline-block",
    padding: "4px 7px",
    borderRadius: "5px",
    backgroundColor: "#dcfce7",
    color: "#15803d",
    fontSize: "8px",
    fontWeight: 700,
  },

  activity: {
    display: "flex",
    gap: "10px",
    padding: "12px 0",
    borderBottom: "1px solid #f0f2f5",
  },

  activityIcon: {
    width: "34px",
    height: "34px",
    borderRadius: "9px",
    backgroundColor: "#eeebff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "15px",
    flexShrink: 0,
  },

  activityContent: {
    minWidth: 0,
  },

  activityTitle: {
    fontSize: "10px",
    fontWeight: 700,
  },

  activityDescription: {
    fontSize: "9px",
    color: "#7e8797",
    marginTop: "3px",
    lineHeight: 1.4,
  },

  activityTime: {
    fontSize: "8px",
    color: "#a0a7b3",
    marginTop: "4px",
  },

  bottomGrid: {
    display: "grid",
    gridTemplateColumns: "1.5fr 0.8fr",
    gap: "19px",
  },

  statLines: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    paddingTop: "5px",
  },

  statLine: {
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  },

  lineTitle: {
    fontSize: "10px",
    color: "#687386",
  },

  lineValue: {
    float: "right",
    fontSize: "10px",
    fontWeight: 800,
  },

  lineBackground: {
    height: "7px",
    backgroundColor: "#edf0f5",
    borderRadius: "10px",
    overflow: "hidden",
  },

  lineProgress: {
    height: "100%",
    backgroundColor: "#5542d9",
    borderRadius: "10px",
  },

  quickCard: {
    backgroundColor: "#171c35",
    color: "#ffffff",
    borderRadius: "15px",
    padding: "22px",
  },

  quickIcon: {
    fontSize: "28px",
    marginBottom: "9px",
  },

  quickTitle: {
    margin: 0,
    fontSize: "17px",
    fontWeight: 800,
  },

  quickText: {
    margin: "7px 0 15px",
    color: "#c4c9db",
    fontSize: "10px",
    lineHeight: 1.5,
  },

  quickButton: {
    display: "block",
    width: "100%",
    border: "1px solid #3a4059",
    borderRadius: "8px",
    backgroundColor: "#252b48",
    color: "#ffffff",
    padding: "9px 10px",
    marginTop: "8px",
    fontSize: "10px",
    fontWeight: 700,
    textAlign: "left",
    cursor: "pointer",
  },
};
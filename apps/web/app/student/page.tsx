import Link from "next/link";

export default function StudentDashboard() {
  return (
    <main className="student-page">
      <aside className="sidebar">
        <div className="logo">
          🎓 <span>MentorOS</span>
        </div>

        <nav>
          <Link href="/student" className="menu active">
            🏠 Dashboard
          </Link>

          <Link href="/student/courses" className="menu">
            📚 Courses
          </Link>

          <Link href="/student/assignments" className="menu">
            📝 Assignments
          </Link>

          <Link href="/student/submission" className="menu">
            📤 Submissions
          </Link>

          <Link href="/student/progress" className="menu">
            📊 Progress
          </Link>

          <Link href="/student/settings" className="menu">
            ⚙️ Settings
          </Link>
        </nav>
      </aside>

      <section className="content">
        <header className="header">
          <div>
            <h1>Good Morning, Student! 👋</h1>
            <p>Keep learning, keep building. You are doing great!</p>
          </div>

          <div className="profile">
            <div className="avatar">S</div>
            <div>
              <strong>Student</strong>
              <small>Student</small>
            </div>
          </div>
        </header>

        <div className="cards">
          <div className="card">
            <span>📚</span>
            <p>Total Assignments</p>
            <h2>5</h2>
            <small>3 Pending • 2 Completed</small>
          </div>

          <div className="card">
            <span>✅</span>
            <p>Submissions</p>
            <h2>3</h2>
            <small>2 Reviewed • 1 Pending</small>
          </div>

          <div className="card">
            <span>📈</span>
            <p>Overall Progress</p>
            <h2>78%</h2>
            <small>+12% from last month</small>
          </div>

          <div className="card">
            <span>⭐</span>
            <p>AI Feedback Score</p>
            <h2>4.2</h2>
            <small>Good Performance</small>
          </div>
        </div>

        <div className="grid">
          <div className="panel">
            <div className="panel-title">
              <div>
                <h2>Learning Progress</h2>
                <p>Your journey so far</p>
              </div>

              <button>This Month ▾</button>
            </div>

            <div className="progress-section">
              <div className="circle">
                <div>
                  <strong>78%</strong>
                  <span>Completed</span>
                </div>
              </div>

              <div className="progress-list">
                <Progress
                  name="Assignments"
                  value="8/10"
                  percent={80}
                />

                <Progress
                  name="Submissions"
                  value="6/8"
                  percent={75}
                />

                <Progress
                  name="Mentor Feedback"
                  value="4/6"
                  percent={67}
                />

                <Progress
                  name="Learning Hours"
                  value="12/20"
                  percent={60}
                />
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-title">
              <div>
                <h2>Upcoming Deadlines</h2>
                <p>Don't miss your assignments</p>
              </div>

              <Link href="/student/assignments">
                View All
              </Link>
            </div>

            <div className="deadline">
              <div className="date">
                <strong>12</strong>
                <span>SEP</span>
              </div>

              <div>
                <strong>Frontend Assignment</strong>
                <p>Build a responsive navbar</p>
              </div>

              <b className="red">3 days left</b>
            </div>

            <div className="deadline">
              <div className="date">
                <strong>15</strong>
                <span>SEP</span>
              </div>

              <div>
                <strong>Backend Assignment</strong>
                <p>Create REST APIs</p>
              </div>

              <b className="yellow">6 days left</b>
            </div>

            <div className="deadline">
              <div className="date">
                <strong>18</strong>
                <span>SEP</span>
              </div>

              <div>
                <strong>Database Assignment</strong>
                <p>Design database schema</p>
              </div>

              <b className="blue">9 days left</b>
            </div>

            <div className="deadline">
              <div className="date">
                <strong>22</strong>
                <span>SEP</span>
              </div>

              <div>
                <strong>Final Project</strong>
                <p>Submit project proposal</p>
              </div>

              <b className="blue">13 days left</b>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Progress({
  name,
  value,
  percent,
}: {
  name: string;
  value: string;
  percent: number;
}) {
  return (
    <div className="progress-item">
      <div className="progress-label">
        <span>{name}</span>
        <strong>{value}</strong>
      </div>

      <div className="bar">
        <div
          className="bar-fill"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
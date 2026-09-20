import Link from "next/link";

export default function LearningResourcesPage() {
  return (
    <main className="student-simple-page">
      <Link href="/student" className="student-back">
        ← Back to Dashboard
      </Link>

      <h1>Learning Resources</h1>

      <p>Explore useful learning materials.</p>

      <div className="resource-grid">

        <div className="student-simple-card">
          <h2>HTML & CSS</h2>
          <p>Frontend fundamentals</p>
          <button className="student-action-btn">
            Open Resource
          </button>
        </div>

        <div className="student-simple-card">
          <h2>JavaScript</h2>
          <p>Learn modern JavaScript</p>
          <button className="student-action-btn">
            Open Resource
          </button>
        </div>

        <div className="student-simple-card">
          <h2>React</h2>
          <p>Build modern interfaces</p>
          <button className="student-action-btn">
            Open Resource
          </button>
        </div>

      </div>
    </main>
  );
}
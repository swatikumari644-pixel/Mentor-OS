import Link from "next/link";

export default function AssignmentsPage() {
  return (
    <main className="student-simple-page">

      <Link href="/student" className="student-back">
        ← Back to Dashboard
      </Link>

      <h1>My Assignments</h1>

      <p>
        Here you can see all your assignments.
      </p>

      <div className="student-simple-card">
        <h2>Frontend Assignment</h2>
        <p>Build a responsive navbar.</p>

        <button className="student-action-btn">
          Open Assignment
        </button>
      </div>

      <div className="student-simple-card">
        <h2>Backend Assignment</h2>
        <p>Create REST APIs.</p>

        <button className="student-action-btn">
          Open Assignment
        </button>
      </div>

    </main>
  );
}
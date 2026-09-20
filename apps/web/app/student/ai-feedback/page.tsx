import Link from "next/link";

export default function AIFeedbackPage() {
  return (
    <main className="student-simple-page">
      <Link href="/student" className="student-back">
        ← Back to Dashboard
      </Link>

      <h1>AI Feedback</h1>

      <p>Review feedback generated for your assignments.</p>

      <div className="student-simple-card">
        <h2>Latest Feedback</h2>
        <p>Your overall AI feedback score is 4.2/5.</p>
      </div>
    </main>
  );
}
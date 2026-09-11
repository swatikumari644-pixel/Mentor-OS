"use client";

import { useEffect, useState } from "react";
import { api } from "@/src/shared/services/api/client";

export default function StudentDashboard() {
  const [message, setMessage] = useState("Checking Backend...");

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await api.get("/health");
        setMessage(response.data.message);
      } catch (error) {
        setMessage("Backend Connection Failed");
      }
    };

    checkHealth();
  }, []);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <p>{message}</p>
    </div>
  );
}
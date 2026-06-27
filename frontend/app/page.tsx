"use client";

import { useEffect, useState } from "react";

type HealthResponse = {
  status: string;
};

export default function Home() {
  const [healthStatus, setHealthStatus] = useState<string>("loading");
  const [error, setError] = useState<string>("");
    useEffect(() => {
    async function checkBackendHealth() {
      try {
        const response = await fetch("http://127.0.0.1:8000/health");

       if (!response.ok) {
          throw new Error("Backend health check failed");
        }

        const data: HealthResponse = await response.json();
        setHealthStatus(data.status);
      } catch {
        setHealthStatus("offline");
        setError("Could not connect to backend");
      }
    }

    checkBackendHealth();
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <section className="max-w-xl w-full rounded-2xl bg-slate-900 p-8 shadow-lg border border-slate-800">
        <p className="text-sm text-slate-400 mb-2">CareerPilot AI</p>

        <h1 className="text-3xl font-bold mb-4">
          Full-Stack GenAI Career Assistant
        </h1>

        <p className="text-slate-300 mb-6">
          Frontend is running with Next.js. Backend health is checked through
          the FastAPI API.
        </p>

        <div className="rounded-xl bg-slate-800 p-4">
          <p className="text-sm text-slate-400">Backend status</p>

          <p className="text-2xl font-semibold mt-1">
            {healthStatus === "loading" ? "Checking..." : healthStatus}
          </p>

          {error && <p className="text-red-400 mt-2">{error}</p>}
        </div>
      </section>
    </main>
  );
}
    
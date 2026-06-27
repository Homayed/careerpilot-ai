"use client";

import { useEffect, useState } from "react";

type HealthResponse = {
  status: string;
};

const featureCards = [
  {
    title: "Career Documents",
    description: "Upload or save CV, skills, portfolio, and LinkedIn details.",
  },
  {
    title: "Job Posts",
    description: "Paste job descriptions and track opportunities.",
  },
  {
    title: "AI Analysis",
    description: "Compare your profile with job requirements using AI.",
  },
  {
    title: "Interview Prep",
    description: "Generate interview questions and preparation plans.",
  },
];

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
        setError("");
      } catch {
        setHealthStatus("offline");
        setError("Could not connect to backend");
      }
    }

    checkBackendHealth();
  }, []);

  const statusClassName =
    healthStatus === "ok"
      ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
      : healthStatus === "offline"
        ? "bg-red-500/10 text-red-300 border-red-500/30"
        : "bg-yellow-500/10 text-yellow-300 border-yellow-500/30";

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-sm text-slate-400">CareerPilot AI</p>
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>

          <div className={`rounded-full border px-4 py-2 text-sm ${statusClassName}`}>
            Backend: {healthStatus === "loading" ? "Checking..." : healthStatus}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-10 rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-lg">
          <p className="mb-3 text-sm font-medium text-blue-300">
            Full-Stack GenAI Career Assistant
          </p>

          <h2 className="mb-4 text-4xl font-bold tracking-tight">
            Build stronger job applications with your real career data.
          </h2>

          <p className="max-w-3xl text-slate-300">
            CareerPilot AI will help users manage career documents, analyze job
            descriptions, generate tailored proposals, and prepare for interviews.
          </p>
        </div>

        <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-sm text-slate-400">Backend health check</p>

          <p className="mt-2 text-3xl font-semibold">
            {healthStatus === "loading" ? "Checking..." : healthStatus}
          </p>

          {error && <p className="mt-2 text-red-400">{error}</p>}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {featureCards.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm leading-6 text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
    
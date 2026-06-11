import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl animate-pulse"></div>
        <div className="absolute top-32 right-0 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-0 left-1/2 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse delay-1000"></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex min-h-screen items-center px-6 py-20 lg:px-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-3xl">
            <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-blue-200 backdrop-blur-md">
              AI Powered Learning Platform
            </span>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Smart Learn <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Professional Platform
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Build a smarter learning experience with accessible, personalized,
              and data-driven skill development. Smart Learn helps professionals
              upskill through adaptive learning paths, corporate training,
              compliance certifications, and real-time performance tracking.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/add"
                className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-400/40"
              >
                Add Course
              </Link>

              <Link
                to="/courses"
                className="rounded-xl border border-white/20 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                View Courses
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-cyan-300">AI</h3>
                <p className="text-sm text-slate-300">Adaptive Learning</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-blue-300">24/7</h3>
                <p className="text-sm text-slate-300">Skill Access</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md">
                <h3 className="text-2xl font-bold text-purple-300">100%</h3>
                <p className="text-sm text-slate-300">Trackable Growth</p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-2xl"></div>

            <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">Learning Dashboard</h2>
                  <p className="text-sm text-slate-300">Performance Overview</p>
                </div>
                <div className="rounded-full bg-green-400/20 px-4 py-1 text-sm text-green-300">
                  Live
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>Corporate Training</span>
                    <span>85%</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10">
                    <div className="h-3 w-[85%] rounded-full bg-gradient-to-r from-blue-400 to-cyan-300"></div>
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>Compliance Certification</span>
                    <span>72%</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10">
                    <div className="h-3 w-[72%] rounded-full bg-gradient-to-r from-purple-400 to-pink-300"></div>
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between text-sm">
                    <span>Professional Upskilling</span>
                    <span>93%</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10">
                    <div className="h-3 w-[93%] rounded-full bg-gradient-to-r from-green-400 to-emerald-300"></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-slate-900/70 p-5">
                <p className="text-sm text-slate-300">Current Course</p>
                <h3 className="mt-2 text-2xl font-bold">
                  AI Driven Skill Development
                </h3>
                <p className="mt-3 text-sm text-slate-400">
                  Personalized learning path generated based on performance
                  analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
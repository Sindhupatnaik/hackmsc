"use client";

import { useState } from "react";
import { HiX, HiArrowRight, HiArrowUp, HiDocumentText } from "react-icons/hi";
import { FaGlobe, FaRocket } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import "./styles.css";

export default function Home() {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      {bannerVisible && (
        <div className="bg-[#2563eb] text-white px-6 py-3 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <FaRocket className="text-red-400" />
            <span>Report city issues 24/7 • Help improve your community</span>
            <HiArrowRight className="ml-2" />
          </div>
          <button
            onClick={() => setBannerVisible(false)}
            className="hover:opacity-70 transition-opacity"
          >
            <HiX className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Navigation Bar */}
      <nav className="bg-white px-6 py-4 flex items-center justify-between relative">
        <div className="text-2xl font-bold text-[#2563eb]">Sudhaar</div>
        <div className="hidden md:flex items-center gap-8 text-gray-700 absolute left-1/2 transform -translate-x-1/2">
          <a href="#" className="hover:text-[#2563eb] transition-colors">
            Report Issues
          </a>
          <a href="#" className="hover:text-[#2563eb] transition-colors">
            My Reports
          </a>
          <a href="#" className="hover:text-[#2563eb] transition-colors">
            About Us
          </a>
          <a href="#" className="hover:text-[#2563eb] transition-colors">
            Statistics
          </a>
        </div>
        <div className="flex items-center gap-6 ml-auto">
          <a href="#" className="text-gray-700 hover:text-[#2563eb] transition-colors">
            Login
          </a>
          <button className="bg-[#2563eb] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#1e40af] transition-colors">
            Sign Up <HiArrowRight />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Hero Content */}
          <div className="space-y-8">
            <div className="text-[#2563eb] text-sm font-semibold uppercase tracking-wide">
              START REPORTING
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Help Build a Better City
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Report potholes, broken streetlights, water leaks, garbage collection issues, and more. Track your submissions in real-time and see how your city is improving.
            </p>
            <button className="bg-[#2563eb] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#1e40af] transition-colors">
              Report Now
            </button>
            <div className="flex items-center gap-3 pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-700 font-semibold">4.8</span>
              <span className="text-gray-600">
                from 5,000+ <span className="underline">citizens</span>
              </span>
            </div>
          </div>

          {/* Right Section - Feature Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left - Mobile App Visual */}
            <div className="bg-gray-200 rounded-lg p-6 flex items-center justify-center relative overflow-hidden min-h-[280px]">
              <div className="absolute top-4 right-4 space-y-2">
                <div className="w-12 h-1 bg-white rounded"></div>
                <div className="w-8 h-1 bg-white rounded"></div>
              </div>
              <div className="relative transform rotate-6">
                <div className="w-32 h-56 bg-black rounded-3xl shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-1 bg-gray-50 rounded-2xl"></div>
                  <div className="absolute top-2 left-3 right-3 h-1 bg-gray-300 rounded-full"></div>
                  <div className="absolute top-8 left-3 right-3 space-y-2">
                    <div className="h-10 bg-blue-500 rounded-lg"></div>
                    <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Right - Currencies */}
            <div className="bg-[#f5e6d3] rounded-tl-2xl rounded-br-2xl p-6 flex flex-col justify-between relative min-h-[280px]">
              <div></div>
              <div>
                <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-2">12K+</div>
                <div className="text-lg font-semibold text-gray-900">Issues Resolved</div>
              </div>
              <div className="flex justify-end mt-4">
                <FaGlobe className="w-8 h-8 text-gray-700" />
              </div>
            </div>

            {/* Bottom Left - Users Active */}
            <div className="bg-[#dbeafe] rounded-tl-2xl rounded-br-2xl p-6 flex flex-col relative min-h-[280px]">
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 bg-[#2563eb] rounded-full"></div>
                <div className="w-3 h-3 bg-[#2563eb] rounded-full"></div>
              </div>
              <div className="mt-12 flex-grow flex flex-col justify-between">
                <div className="text-lg font-semibold text-gray-900 mb-6">
                  Active Users
                </div>
                <div className="flex items-center -space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full border-2 border-white"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                  <div className="w-12 h-12 bg-[#2563eb] rounded-full border-2 border-white flex items-center justify-center">
                    <HiArrowRight className="text-white w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right - Saving */}
            <div className="bg-[#2563eb] rounded-lg p-6 flex flex-col justify-between min-h-[280px]">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl lg:text-5xl font-bold text-white">2,850</div>
                <HiArrowUp className="text-white w-6 h-6" />
              </div>
              <div className="mt-auto">
                <div className="h-24 relative mb-3">
                  {/* Simple line chart representation */}
                  <svg className="w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
                    <polyline
                      points="0,50 10,45 20,40 30,35 40,30 50,25 60,20 70,15 80,10 90,5 100,0"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="text-white font-semibold text-right">Resolved This Month</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* New Feature Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm uppercase tracking-wider text-gray-500 mb-4">ABOUT US</div>
        </div>

        {/* Hero Text */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            One platform for all your{" "}
            <span className="font-serif italic text-6xl lg:text-7xl font-bold">city</span>{" "}
            improvements
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Remove all the friction that stands in the way of your community goals.
          </p>
        </div>

        {/* Feature Blocks */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Block - Track Progress */}
          <div className="bg-[#2563eb] rounded-tl-3xl rounded-br-3xl p-5 lg:p-8 relative overflow-hidden min-h-[260px] flex flex-col">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Track Resolution Progress
            </h3>
            
            {/* Bar Chart Visualization */}
            <div className="flex-grow flex items-end gap-2 mb-4 relative">
              {/* Bars */}
              <div className="flex items-end gap-2 flex-grow mb-8">
                <div className="bg-blue-200 h-10 w-8 rounded-t"></div>
                <div className="bg-blue-200 h-16 w-8 rounded-t"></div>
                <div className="bg-blue-200 h-20 w-8 rounded-t"></div>
                <div className="bg-blue-200 h-24 w-8 rounded-t"></div>
              </div>
              
              {/* Arrow */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <div className="text-white text-2xl font-bold mb-1">12,000</div>
                <svg
                  className="w-8 h-12 text-white"
                  fill="currentColor"
                  viewBox="0 0 100 150"
                >
                  <path d="M50 10 L10 140 L90 140 Z" stroke="white" strokeWidth="8" fill="white" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Block - Global Reach */}
          <div className="bg-[#e0f2fe] rounded-tr-3xl rounded-bl-3xl p-5 lg:p-8 relative overflow-hidden min-h-[260px] flex flex-col">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Report from Anywhere
            </h3>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-64 h-64 border-2 border-blue-600 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-blue-500 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-blue-400 rounded-full"></div>
              </div>
            </div>

            <div className="relative z-10 flex-grow flex flex-col justify-between">
              {/* Top Section - Submission Card */}
              <div className="flex justify-start mb-2">
                <div className="bg-white rounded-lg shadow-lg p-2.5 max-w-[160px]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <HiDocumentText className="text-blue-600 w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-gray-900">25,000</div>
                      <div className="text-xs text-gray-600">Reports Sent</div>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-1.5">
                    <div className="w-5 h-5 bg-blue-400 rounded-full border-2 border-white"></div>
                    <div className="w-5 h-5 bg-blue-500 rounded-full border-2 border-white -ml-2"></div>
                  </div>
                </div>
              </div>

              {/* Center - Globe */}
              <div className="flex justify-center items-center my-2">
                <div className="relative">
                  <FaGlobe className="w-20 h-20 text-blue-600 opacity-80" />
                  {/* Wireframe effect */}
                  <svg
                    className="absolute inset-0 w-20 h-20"
                    viewBox="0 0 100 100"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="50" cy="50" r="45" className="text-blue-600" />
                    <ellipse cx="50" cy="50" rx="45" ry="20" className="text-blue-600" />
                    <ellipse cx="50" cy="50" rx="20" ry="45" className="text-blue-600" />
                    <line x1="50" y1="5" x2="50" y2="95" className="text-blue-600" />
                    <line x1="5" y1="50" x2="95" y2="50" className="text-blue-600" />
                  </svg>
                </div>
              </div>

              {/* Bottom Section - Resolution Card */}
              <div className="flex justify-end">
                <div className="bg-[#2563eb] rounded-lg shadow-lg p-2.5 max-w-[160px]">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-6 h-6 bg-blue-300 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">✓</span>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">40,000</div>
                      <div className="text-xs text-blue-100">Issues Fixed</div>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-1.5">
                    <div className="w-5 h-5 bg-blue-300 rounded-full border-2 border-blue-500"></div>
                  </div>
                </div>
              </div>

              {/* Flags at bottom */}
              <div className="flex justify-end gap-1.5 mt-2">
                <div className="w-6 h-6 bg-gradient-to-b from-red-600 via-white to-blue-600 rounded-full border-2 border-gray-300"></div>
                <div className="w-6 h-6 bg-gradient-to-b from-yellow-500 via-red-600 to-black rounded-full border-2 border-gray-300"></div>
                <div className="w-6 h-6 bg-gradient-to-b from-green-600 via-white to-green-600 rounded-full border-2 border-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

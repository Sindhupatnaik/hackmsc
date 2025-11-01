"use client";

import { useState } from "react";
import { HiX, HiArrowRight, HiArrowUp } from "react-icons/hi";
import { FaGlobe, FaRocket } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

export default function Home() {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      {bannerVisible && (
        <div className="bg-[#1a5f3f] text-white px-6 py-3 flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <FaRocket className="text-red-400" />
            <span>Session 2024 • Early-bird registration now open</span>
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
        <div className="text-2xl font-bold text-[#1a5f3f]">Ascone</div>
        <div className="hidden md:flex items-center gap-8 text-gray-700 absolute left-1/2 transform -translate-x-1/2">
          <a href="#" className="hover:text-[#1a5f3f] transition-colors">
            Features
          </a>
          <a href="#" className="hover:text-[#1a5f3f] transition-colors">
            Accounts
          </a>
          <a href="#" className="hover:text-[#1a5f3f] transition-colors">
            Company
          </a>
          <a href="#" className="hover:text-[#1a5f3f] transition-colors">
            Insight
          </a>
        </div>
        <div className="flex items-center gap-6 ml-auto">
          <a href="#" className="text-gray-700 hover:text-[#1a5f3f] transition-colors">
            Login
          </a>
          <button className="bg-[#1a5f3f] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#155236] transition-colors">
            Sign Up <HiArrowRight />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Hero Content */}
          <div className="space-y-8">
            <div className="text-[#1a5f3f] text-sm font-semibold uppercase tracking-wide">
              TRY IT NOW!
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Change the way you use your{" "}
              <span className="font-serif italic text-6xl lg:text-7xl font-bold">
                money
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              From your everyday spending, to planning for your future with
              savings and investments, Ascone helps you get more from your money.
            </p>
            <button className="bg-[#1a5f3f] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#155236] transition-colors">
              Get Started Now
            </button>
            <div className="flex items-center gap-3 pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-gray-700 font-semibold">5.0</span>
              <span className="text-gray-600">
                from 120+ <span className="underline">reviews</span>
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
                <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-2">56+</div>
                <div className="text-lg font-semibold text-gray-900">Currencies</div>
              </div>
              <div className="flex justify-end mt-4">
                <FaGlobe className="w-8 h-8 text-gray-700" />
              </div>
            </div>

            {/* Bottom Left - Users Active */}
            <div className="bg-[#e0f2e9] rounded-tl-2xl rounded-br-2xl p-6 flex flex-col relative min-h-[280px]">
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 bg-[#1a5f3f] rounded-full"></div>
                <div className="w-3 h-3 bg-[#1a5f3f] rounded-full"></div>
              </div>
              <div className="mt-12 flex-grow flex flex-col justify-between">
                <div className="text-lg font-semibold text-gray-900 mb-6">
                  Users Active
                </div>
                <div className="flex items-center -space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full border-2 border-white"></div>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full border-2 border-white"></div>
                  <div className="w-12 h-12 bg-[#1a5f3f] rounded-full border-2 border-white flex items-center justify-center">
                    <HiArrowRight className="text-white w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right - Saving */}
            <div className="bg-[#1a5f3f] rounded-lg p-6 flex flex-col justify-between min-h-[280px]">
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl lg:text-5xl font-bold text-white">$196,000</div>
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
                <div className="text-white font-semibold text-right">Saving</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

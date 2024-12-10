"use client";
import React from "react";

const ElegantSkeletonLoader = ({ className = "" }) => {
  return (
    <div className={`elegant-skeleton-container ${className}`}>
      <div className="elegant-skeleton-wrapper">
        <div className="elegant-skeleton-image-container">
          <div className="elegant-skeleton-image-overlay">
            <div className="elegant-skeleton-image-content">
              {/* Elegant Image Placeholder */}
              <div className="elegant-skeleton-image-placeholder">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  className="elegant-skeleton-icon"
                >
                  <defs>
                    <linearGradient
                      id="imageGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.6" />
                      <stop
                        offset="100%"
                        stopColor="#f0f5ff"
                        stopOpacity="0.9"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M8 56h48c4.4 0 8-3.6 8-8V16c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8v32c0 4.4 3.6 8 8 8zm6-34c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6zm-6 22l12-12 8 8 12-12 16 16v6H8v-6z"
                    fill="url(#imageGradient)"
                  />
                </svg>
              </div>

              {/* Animated Loading Elements */}
              <div className="elegant-skeleton-loading-elements">
                <div className="elegant-skeleton-loading-bar w-full"></div>
                <div className="elegant-skeleton-loading-bar w-5/6"></div>
                <div className="elegant-skeleton-loading-bar w-3/4"></div>
              </div>
            </div>
          </div>

          {/* Subtle Animated Gradient Overlay */}
          <div className="elegant-skeleton-gradient-overlay"></div>
        </div>

        {/* Caption Skeleton */}
        <div className="elegant-skeleton-caption">
          <div className="elegant-skeleton-caption-line"></div>
        </div>
      </div>

      {/* Tailwind and Custom Styles */}
      <style jsx>{`
        .elegant-skeleton-container {
          @apply w-full relative rounded-xl overflow-hidden shadow-sm;
        }

        .elegant-skeleton-wrapper {
          @apply w-full;
        }

        .elegant-skeleton-image-container {
          @apply relative w-full aspect-w-16 aspect-h-9 bg-gradient-to-br from-blue-50 to-indigo-50;
          position: relative;
          overflow: hidden;
        }

        .elegant-skeleton-image-overlay {
          @apply absolute inset-0 z-10 flex items-center justify-center;
        }

        .elegant-skeleton-image-content {
          @apply w-full h-full flex flex-col items-center justify-center space-y-4 p-6;
        }

        .elegant-skeleton-image-placeholder {
          @apply w-24 h-24 opacity-50 mb-4;
        }

        .elegant-skeleton-icon {
          @apply w-full h-full drop-shadow-md;
        }

        .elegant-skeleton-loading-elements {
          @apply w-full space-y-3;
        }

        .elegant-skeleton-loading-bar {
          @apply h-3 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 rounded-full animate-pulse;
        }

        .elegant-skeleton-gradient-overlay {
          @apply absolute inset-0 z-0;
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0.1) 100%
          );
          animation: elegant-gradient-flow 3s ease infinite;
          background-size: 400% 400%;
        }

        .elegant-skeleton-caption {
          @apply py-4 px-6 bg-gray-50;
        }

        .elegant-skeleton-caption-line {
          @apply w-1/2 mx-auto h-3 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 rounded-full animate-pulse;
        }

        @keyframes elegant-gradient-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default ElegantSkeletonLoader;

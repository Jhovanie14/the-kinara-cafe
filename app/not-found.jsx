"use client";
export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        {/* 404 Number */}
        <h1 className="text-9xl font-bold text-yellow-400 mb-4 animate-pulse">
          404
        </h1>

        {/* Error Message */}
        <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>

        {/* Description */}
        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for seems to have wandered off into the
          digital void.
        </p>

        {/* Decorative Elements */}
        <div className="flex justify-center gap-2 mb-8">
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
          <div
            className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors duration-300 shadow-lg hover:shadow-yellow-400/50"
          >
            Go Home
          </a>

          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-300 shadow-lg"
          >
            Go Back
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            Error Code:{" "}
            <span className="text-yellow-400 font-mono">404_NOT_FOUND</span>
          </p>
        </div>
      </div>
    </div>
  );
}

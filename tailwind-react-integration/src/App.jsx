import React from "react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center">
        Tailwind is Working!
      </h1>
      <p className="text-lg md:text-xl mb-8 text-center max-w-xl">
        Congratulations! Your React project is now fully integrated with Tailwind CSS.
        You can start building responsive, beautiful components right away.
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-colors">
          Get Started
        </button>
        <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors">
          Learn More
        </button>
      </div>
      <footer className="mt-16 text-gray-400 text-sm">
        © 2025 Tailwind Test Project
      </footer>
    </div>
  );
}

export default App;

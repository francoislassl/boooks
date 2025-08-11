import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-blue-600 text-white p-5">
        <h1 className="text-3xl font-bold text-center">Welcome to Book Haven</h1>
        <p className="text-center mt-2">Discover your next great read!</p>
      </header>

      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center bg-gray-100 p-10">
        <div className="max-w-3xl text-center">
          <h2 className="text-2xl font-semibold mb-4">Explore a World of Books</h2>
          <p className="text-lg mb-6">Join our community of book lovers and find books tailored just for you.</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all duration-300">
            Start Reading
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white p-10">
        <h3 className="text-2xl font-semibold text-center mb-6">Why Choose Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-5 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="font-bold mb-2">Personalized Recommendations</h4>
            <p>Get book suggestions based on your reading preferences.</p>
          </div>
          <div className="p-5 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="font-bold mb-2">Community Reviews</h4>
            <p>Read and share reviews with fellow readers.</p>
          </div>
          <div className="p-5 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h4 className="font-bold mb-2">Wide Selection</h4>
            <p>Access a vast collection of books across genres.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white p-5 text-center">
        <p>&copy; 2023 Book Haven. All Rights Reserved.</p>
        <p>Follow us on social media!</p>
      </footer>
    </div>
  );
};

export default LandingPage;
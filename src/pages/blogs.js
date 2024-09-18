import React from 'react';
import { Search } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    { id: 1, title: 'Lorem Ipsum Dolor Sit Amet Consectetur', date: '02 August, 2024', image: '/api/placeholder/400/300' },
    { id: 2, title: 'Lorem Ipsum Dolor Sit Amet Consectetur', date: '02 August, 2024', image: '/api/placeholder/400/300' },
    { id: 3, title: 'Lorem Ipsum Dolor Sit Amet Consectetur', date: '02 August, 2024', image: '/api/placeholder/400/300' },
    { id: 4, title: 'Lorem Ipsum Dolor Sit Amet Consectetur', date: '02 August, 2024', image: '/api/placeholder/400/300' },
    { id: 5, title: 'Lorem Ipsum Dolor Sit Amet Consectetur', date: '02 August, 2024', image: '/api/placeholder/400/300' },
    { id: 6, title: 'Lorem Ipsum Dolor Sit Amet Consectetur', date: '02 August, 2024', image: '/api/placeholder/400/300' },
    { id: 7, title: 'Lorem Ipsum Dolor Sit Amet Consectetur', date: '02 August, 2024', image: '/api/placeholder/400/300' },
    { id: 8, title: 'Lorem Ipsum Dolor Sit Amet Consectetur', date: '02 August, 2024', image: '/api/placeholder/400/300' },
  ];

  return (
    <div className="bg-tone text-white min-h-screen">
      <header className="container mx-auto py-6 px-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/api/placeholder/40/40" alt="Tone Design Logo" className="w-10 h-10" />
            <h1 className="text-xl font-bold">TONE DESIGN</h1>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-yellow-500">Home</a>
            <a href="#" className="hover:text-yellow-500">About</a>
            <a href="#" className="hover:text-yellow-500">Services</a>
            <a href="#" className="hover:text-yellow-500">Projects</a>
            <a href="#" className="hover:text-yellow-500">Tone AI</a>
            <a href="#" className="hover:text-yellow-500">Blogs</a>
            <a href="#" className="hover:text-yellow-500">Contact Us</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <button>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-8 px-4">
        <h2 className="text-4xl font-bold mb-8">Blogs</h2>
        
        <div className="mb-8">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Search for any blog..."
              className="flex-grow bg-tone rounded-full px-4 py-2"
            />
            <input
              type="date"
              className="bg-tone rounded-full px-4 py-2"
            />
            <input
              type="date"
              className="bg-tone rounded-full px-4 py-2"
            />
            <button className="bg-yellow-500 text-black rounded-full px-6 py-2 flex items-center justify-center">
              <Search size={20} />
              <span className="ml-2">Search</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-tone rounded-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                <h3 className="text-lg font-semibold">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <nav className="inline-flex rounded-md shadow-sm" aria-label="Pagination">
            <a href="#" className="px-3 py-2 rounded-l-md border border-gray-700 bg-tone text-sm font-medium hover:bg-gray-700">
              First
            </a>
            <a href="#" className="px-3 py-2 border border-gray-700 bg-tone text-sm font-medium hover:bg-gray-700">
              Previous
            </a>
            {[1, 2, 3, 4, 5].map((page) => (
              <a
                key={page}
                href="#"
                className={`px-3 py-2 border border-gray-700 ${
                  page === 1 ? 'bg-gray-700' : 'bg-tone'
                } text-sm font-medium hover:bg-gray-700`}
              >
                {page}
              </a>
            ))}
            <a href="#" className="px-3 py-2 border border-gray-700 bg-tone text-sm font-medium hover:bg-gray-700">
              Next
            </a>
            <a href="#" className="px-3 py-2 rounded-r-md border border-gray-700 bg-tone text-sm font-medium hover:bg-gray-700">
              Last
            </a>
          </nav>
        </div>
      </main>

      <footer className="bg-tone py-6 mt-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Tone Design Studio. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, ArrowRightIcon } from 'lucide-react';
import { blogPosts } from '../data/blogs';
const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredPosts = blogPosts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) || post.category.toLowerCase().includes(searchTerm.toLowerCase()));
  return <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">All Articles</h1>
        <p className="text-lg text-gray-600 mb-6">
          Browse all articles on generative AI
        </p>
        {/* Search */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input type="text" placeholder="Search articles..." className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
        </div>
      </div>
      {/* Articles */}
      <div className="space-y-6">
        {filteredPosts.length > 0 ? filteredPosts.map(post => <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 flex flex-col md:flex-row">
              {post.imageUrl && <div className="md:w-1/3">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-48 md:h-full object-cover" />
                </div>}
              <div className="p-6 md:w-2/3">
                <div className="mb-2 flex items-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {post.category}
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    {post.date}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-blue-600 font-medium flex items-center hover:text-blue-800">
                  Read more <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>) : <div className="text-center py-10">
            <p className="text-gray-500">
              No articles found matching your search.
            </p>
          </div>}
      </div>
    </div>;
};
export default BlogList;
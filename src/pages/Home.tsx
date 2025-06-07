import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { blogPosts } from '../data/blogs';
const Home = () => {
  // Get featured post and recent posts
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);
  return <div>
      <section className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Exploring Generative AI
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Insights, tutorials, and critical analysis of the latest in generative
          AI technologies
        </p>
      </section>
      {/* Featured Post */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Featured Article
        </h2>
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          {featuredPost.imageUrl && <img src={featuredPost.imageUrl} alt={featuredPost.title} className="w-full h-64 object-cover" />}
          <div className="p-6">
            <div className="mb-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {featuredPost.category}
              </span>
              <span className="ml-2 text-sm text-gray-500">
                {featuredPost.date}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {featuredPost.title}
            </h3>
            <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
            <Link to={`/blog/${featuredPost.id}`} className="text-blue-600 font-medium flex items-center hover:text-blue-800">
              Read more <ArrowRightIcon className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      {/* Recent Posts */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Recent Articles
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map(post => <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              {post.imageUrl && <img src={post.imageUrl} alt={post.title} className="w-full h-40 object-cover" />}
              <div className="p-4">
                <div className="mb-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.id}`} className="text-blue-600 text-sm font-medium flex items-center hover:text-blue-800">
                  Read more <ArrowRightIcon className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </div>)}
        </div>
        <div className="mt-6 text-center">
          <Link to="/blogs" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            View all articles
          </Link>
        </div>
      </section>
    </div>;
};
export default Home;
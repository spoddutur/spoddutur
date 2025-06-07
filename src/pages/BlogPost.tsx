import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, CalendarIcon, TagIcon, ShareIcon } from 'lucide-react';
import { blogPosts } from '../data/blogs';
const BlogPost = () => {
  const {
    id
  } = useParams();
  const post = blogPosts.find(post => post.id === id);
  if (!post) {
    return <div className="text-center py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Article not found
        </h1>
        <p className="text-gray-600 mb-6">
          The article you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/blogs" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to all articles
        </Link>
      </div>;
  }
  return <article>
      {/* Back button */}
      <div className="mb-6">
        <Link to="/blogs" className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600">
          <ArrowLeftIcon className="mr-1 h-4 w-4" />
          Back to all articles
        </Link>
      </div>
      {/* Article header */}
      <header className="mb-8">
        <div className="flex items-center mb-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {post.category}
          </span>
          <div className="ml-4 flex items-center text-sm text-gray-500">
            <CalendarIcon className="mr-1 h-4 w-4" />
            {post.date}
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Author" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Jane Smith</p>
            <p className="text-sm text-gray-500">
              AI Researcher & Technical Writer
            </p>
          </div>
        </div>
      </header>
      {/* Featured image */}
      {post.imageUrl && <div className="mb-8">
          <img src={post.imageUrl} alt={post.title} className="w-full h-auto rounded-lg shadow-md" />
        </div>}
      {/* Article content */}
      <div className="prose max-w-none">
        {post.content.split('\n\n').map((paragraph, i) => <p key={i} className="mb-4 text-gray-800">
            {paragraph}
          </p>)}
      </div>
      {/* Tags */}
      <div className="mt-8 flex items-center">
        <TagIcon className="h-5 w-5 text-gray-400 mr-2" />
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
              {tag}
            </span>)}
        </div>
      </div>
      {/* Share */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex items-center">
          <ShareIcon className="h-5 w-5 text-gray-400 mr-2" />
          <span className="text-sm font-medium text-gray-900">
            Share this article
          </span>
        </div>
        <div className="mt-2 flex space-x-3">
          {['Twitter', 'LinkedIn', 'Facebook'].map(platform => <button key={platform} className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              {platform}
            </button>)}
        </div>
      </div>
    </article>;
};
export default BlogPost;
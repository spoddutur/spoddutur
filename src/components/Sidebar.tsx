import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HomeIcon, BookOpenIcon, TagIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { blogPosts, BlogPost } from '../data/blogs';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleTagClick = (tag: string) => {
    navigate(`/blogs?tag=${encodeURIComponent(tag)}`);
  };

  // Get unique tags from all blog posts
  const allTags = Array.from(new Set(blogPosts.flatMap((post: BlogPost) => post.tags)));

  return (
    <div className="h-full flex flex-col relative">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-2">
            AI
          </div>
          {!isCollapsed && <h1 className="text-xl font-bold text-gray-900">GenAI Writer</h1>}
        </Link>
        <button
          onClick={onToggle}
          className="p-1 rounded-md hover:bg-gray-100 hidden lg:block"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRightIcon size={20} /> : <ChevronLeftIcon size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 pt-4 pb-4 overflow-y-auto">
        <div className="px-4 mb-4">
          {!isCollapsed && (
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Navigation
            </h2>
          )}
          <div className="mt-2 space-y-1">
            <Link
              to="/"
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                isActive('/') ? 'bg-gray-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <HomeIcon className="h-5 w-5 text-gray-500" />
              {!isCollapsed && <span className="ml-3">Home</span>}
            </Link>
            <Link
              to="/blogs"
              className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                isActive('/blogs') ? 'bg-gray-100 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <BookOpenIcon className="h-5 w-5 text-gray-500" />
              {!isCollapsed && <span className="ml-3">All Articles</span>}
            </Link>
          </div>
        </div>

        {/* Recent Posts */}
        {!isCollapsed && (
          <div className="px-4 mb-4">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Recent Posts
            </h2>
            <div className="mt-2 space-y-1">
              {blogPosts.slice(0, 5).map((post: BlogPost) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 truncate"
                >
                  {post.title}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {!isCollapsed && (
          <div className="px-4">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Topics
            </h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {allTags.map((tag: string) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                >
                  <TagIcon className="mr-1 h-3 w-3" />
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">© 2023 GenAI Writer</p>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
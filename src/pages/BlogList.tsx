import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SearchIcon, ArrowRightIcon, TagIcon } from 'lucide-react';
import { blogPosts, BlogPost } from '../data/blogs';

const BlogList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams] = useSearchParams();
  const tag = searchParams.get('tag');

  // Reset search term when tag changes
  useEffect(() => {
    if (tag) {
      setSearchTerm('');
    }
  }, [tag]);

  const filteredPosts = blogPosts.filter((post: BlogPost) => {
    const searchTermLower = searchTerm.toLowerCase();
    
    // First filter by tag if a tag is selected
    if (tag) {
      const hasTag = post.tags.some((postTag: string) => 
        postTag.toLowerCase() === tag.toLowerCase()
      );
      if (!hasTag) return false;
    }

    // Then apply search term if it exists
    if (searchTerm) {
      return (
        post.title.toLowerCase().includes(searchTermLower) ||
        post.content.toLowerCase().includes(searchTermLower)
      );
    }

    return true;
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {tag ? `Articles tagged with "${tag}"` : 'All Articles'}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {tag 
            ? `Found ${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''}`
            : 'Browse all articles on generative AI'
          }
        </p>
        {/* Search */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search within articles..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Articles */}
      <div className="space-y-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post: BlogPost) => (
            <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="p-6">
                <div className="mb-2 flex items-center">
                  <span className="text-sm text-gray-500">
                    {post.date}
                  </span>
                  <span className="mx-2 text-gray-500">•</span>
                  <span className="text-sm text-gray-500">
                    {post.author}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.content.substring(0, 200)}...
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag: string) => (
                    <Link
                      key={tag}
                      to={`/blogs?tag=${encodeURIComponent(tag)}`}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
                    >
                      <TagIcon className="mr-1 h-3 w-3" />
                      {tag}
                    </Link>
                  ))}
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800"
                >
                  Read more <ArrowRightIcon className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">
              No articles found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { BlogPostsService, BlogPost } from './blogPosts';
import './writing.css';

export default function WritingPage() {
  const [expandedPosts, setExpandedPosts] = useState<Set<string>>(new Set());
  const blogPosts = BlogPostsService.getAllPosts();

  const togglePost = (postId: string) => {
    const newExpanded = new Set(expandedPosts);
    if (newExpanded.has(postId)) {
      newExpanded.delete(postId);
    } else {
      newExpanded.add(postId);
    }
    setExpandedPosts(newExpanded);
  };

  return (
    <div className="container">
      <div className="postsList">
        {blogPosts.map((post, index) => (
          <div key={post.id} className="postItem">
            <button
              onClick={() => togglePost(post.id)}
              className="toggleButton"
            >
              <div className="postHeader">
                {post.isArchived && (
                  <span className="archiveTag">
                    Archive
                  </span>
                )}
                <span className="postTitle">
                  {post.title}
                </span>
              </div>
              
              <div className="postMeta">
                <span className="categoryTag">
                  {post.category}
                </span>
                <span className="yearTag">
                  {post.year}
                </span>
                <div className="chevronIcon">
                  {expandedPosts.has(post.id) ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>
              </div>
            </button>
            
            {expandedPosts.has(post.id) && (
              <div className="expandedContent">
                <div className="contentText">
                  {post.content}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
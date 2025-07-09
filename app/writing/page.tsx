'use client';

import { useState, useRef } from 'react';
import { ChevronDown, ChevronUp, Lock, Star } from 'lucide-react';
import { BlogPostsService, BlogPost } from './blogPosts';
import './writing.css';

export default function WritingPage() {
  const [expandedPosts, setExpandedPosts] = useState<Set<string>>(new Set());
  const [unlockedPosts, setUnlockedPosts] = useState<Set<string>>(new Set());
  const [starredPosts, setStarredPosts] = useState<Set<string>>(new Set());
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [showPasswordPrompt, setShowPasswordPrompt] = useState<string | null>(null);
  const blogPosts = BlogPostsService.getAllPosts();

  const PASSWORD = "marla2008";

  const handlePasswordSubmit = (postId: string) => {
    if (passwordInput === PASSWORD) {
      const newUnlocked = new Set(unlockedPosts);
      newUnlocked.add(postId);
      setUnlockedPosts(newUnlocked);
      setShowPasswordPrompt(null);
      setPasswordInput('');
      
      // Also expand the post after unlocking
      const newExpanded = new Set(expandedPosts);
      newExpanded.add(postId);
      setExpandedPosts(newExpanded);
    } else {
      alert('Incorrect password');
      setPasswordInput('');
    }
  };

  const toggleStar = (postId: string, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent triggering the toggle post
    const newStarred = new Set(starredPosts);
    
    if (starredPosts.has(postId)) {
      newStarred.delete(postId);
    } else {
      newStarred.add(postId);
    }
    setStarredPosts(newStarred);
  };

  const togglePost = (postId: string) => {
    const newExpanded = new Set(expandedPosts);
    
    if (expandedPosts.has(postId)) {
      // If it's expanded, close it
      newExpanded.delete(postId);
      setExpandedPosts(newExpanded);
    } else {
      // If it's not expanded, open it
      newExpanded.add(postId);
      setExpandedPosts(newExpanded);
    }
  };

  return (
    <div className="container">
      <div className="postsList">
        {blogPosts.map((post, index) => (
          <div key={post.id} className="postItem">
            <div className="postItemHeader">
              <div className="postHeaderSection">
                {post.isArchived && (
                  <span className="archiveTag">
                    Archive
                  </span>
                )}
                {post.isPasswordProtected && !unlockedPosts.has(post.id) ? (
                  <Lock size={16} className="lockIcon" />
                ) : (
                  <button
                    onClick={(e) => toggleStar(post.id, e)}
                    className="starButton"
                  >
                    <Star 
                      size={16} 
                      className={starredPosts.has(post.id) ? "starIcon starred" : "starIcon"}
                      fill={starredPosts.has(post.id) ? "currentColor" : "none"}
                    />
                  </button>
                )}
                <span className="postTitle">
                  {post.title}
                </span>
              </div>
              
              <button
                onClick={() => togglePost(post.id)}
                className="toggleButton"
              >
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
            </div>
            
            {expandedPosts.has(post.id) && (
              <div className="expandedContent">
                {post.isPasswordProtected && !unlockedPosts.has(post.id) ? (
                  <div className="passwordProtectedContent">
                    <div className="blurredContentContainer">
                      <div className="blurredText">
                        {post.content}
                      </div>
                      {post.excerpt && (
                        <div className="excerptContainer">
                          <div className="excerptText">
                            {post.excerpt}
                          </div>
                        </div>
                      )}
                      <div className="passwordOverlay">
                        <p>This content is password protected.</p>
                        <input
                          type="password"
                          value={passwordInput}
                          onChange={(e) => setPasswordInput(e.target.value)}
                          onKeyDown={(e) => e.key === 'Enter' && handlePasswordSubmit(post.id)}
                          placeholder="Enter password"
                          className="inlinePasswordInput"
                        />
                        <button 
                          onClick={() => handlePasswordSubmit(post.id)}
                          className="inlinePasswordButton"
                        >
                          Unlock
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="contentText">
                    {post.content}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Password Prompt Modal */}
      {showPasswordPrompt && (
        <div className="passwordModal">
          <div className="passwordPrompt">
            <h3>Enter Password</h3>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handlePasswordSubmit(showPasswordPrompt)}
              placeholder="Password"
              autoFocus
            />
            <div className="passwordButtons">
              <button onClick={() => handlePasswordSubmit(showPasswordPrompt)}>
                Submit
              </button>
              <button onClick={() => {
                setShowPasswordPrompt(null);
                setPasswordInput('');
              }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
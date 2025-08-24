'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import './writing.css';

interface Article {
  id: number;
  title: string;
  author: string;
  blocks: string;
  images: string[];
  content: string;
}

export default function WritingPage() {
  const router = useRouter();
  const [expandedArticle, setExpandedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    
{
  id: 1,
  title: "on using code as a tool for creativity",
  author: "marla",
  blocks: "7/13/2025",
  images: ['/rnb.jpg'],
  content: `my goal as a programmer is to write elegant code. 

but elegant code isn’t easy to write because it needs to be simple, readable, and efficient. in today's age, that often means maximizing storage, speed, and/or computational power (as we’ve seen with DeepSeek’s V0 model!). 

the idea for this entry came from a excerpt  i recently read from robert martin’s "clean code."  i was most surprised to learn that the "the majority of costs of a software project is in the long-term maintenance.” some ways we can create elegant code is to separate functions, run tests, and slowly "clean" our code (via refactoring, minimizing classes, etc) as we go. this way, our code isn't immediately translated into gibberish that even the programmer themselves can't understand.

i never thought a book about coding would be as interesting as it was, but my main takeaways about the importance of readability resonated with me. <span class="highlight">efficient isn’t always the same as effective.</span class="highlight"> yes, efficient code is . . . well, efficient. but from an innately human pov, perfect code can lead to bloat and slower development cycles (cuz of unnecessary complexity and over-engineering solutions). that said, i will always give the most value to the thought process behind the code im building because i want to learn how to strike a balance between what is effective and what is efficient.

the more i continue to create and learn from others, the more i realize how much i love the "creative" aspect of computer science. that is, how creativity in code is expression. <span class="highlight">through silly side quests with nextjs (web dev!!) and some poorly solved leetcode 😭, not only am i challenging my own coding abilities by approaching problems in unconventional ways but i'm also using said code to create uniquely “human” designs + solutions. </span class="highlight">

“human” is an odd way to describe a website’s frontend design, i know i know. but with the rise of ai-assisted coders (you may know them as vibe coderz), most (if not all) chatbots such as claude and chatgpt spit out generic designs that regurgitate all of the patterns it has recognized in its training data. in no way am i an expert on the llm process, <span class="highlight">but there is one thing i know for sure: the ability to think critically and introspectively about new problems is our most important tool to create better more readable code. </span class="highlight">`
},
{
  id: 1,
  title: "on luck",
  author: "marla",
  blocks: "7/11/2025",
  images: ['/rnb.jpg'],
  content: `preparation + opportunity = luck. 
  
  thats the post. `
},
{
  id: 2,
  title: "thoughts, in no particular order",
  author: "society",
  blocks: "7/15/2025",
  images: ['/rnb2.jpg'],
  content: `01. fulfillment isn't something we discover so much as something we create through attention and choice. i like to see it as <span class="highlight">all the people who inspire us, all the ideas that challenge us, the work that engages us, and through the quality of our actions</span>. perhaps this is why there is no universal formula to anything. what draws one person forward might leave another. 

02. with uni coming up in the fall, i'd like to iterate over what i value. 

i'm someone who enjoys music as equally as she approaches others with genuine curiosity, always wondering about the stories they carry and the worlds they've built inside their minds. i'm endlessly fascinated by how new technology works and am driven to complete whatever opportunity sits in front of me with the utmost intention (except household chores :<).

i value internal validation from goals and dreams over external applause.  <span class="highlight">but most of all, i'm someone who knows that if i am the smartest person in a room, i'm not in the right room. i know its cheugy, but labels are ok because they're never the full story. i believe it is up to people to learn more about the story that's inside them.</span> if we knew everyone's story. we wouldn't be curious or willing to make mistakes and learn from them. 

`

},

    {
      id: 3,
      title: "digital minimalism in practice",
      author: "growth", 
      blocks: "3/14/2025",
      images: ['/greenruf.jpg'],
      content: `digital minimalism in practicetbd`
    }
  ];

  const handleBackClick = () => {
    router.push('/');
  };

  const handleArticleToggle = (article: Article) => {
    setExpandedArticle(expandedArticle?.id === article.id ? null : article);
  };

  return (
    <div className="writing-page">

      <div className="writing-main-container">
        <div className="writing-header">
          <h2 className="writing-title">writing</h2>
          <p className="writing-description">
            general thoughts on human-centered computing, philosophy, and society.
          </p>
        </div>

        <div className="writing-grid">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className={`writing-card ${expandedArticle?.id === article.id ? 'expanded' : ''}`}
              style={{
                '--card-bg-image': article.images[0] ? `url(${article.images[0]})` : 'none'
              } as React.CSSProperties}
            >
              <div 
                className="writing-card-header"
                onClick={() => handleArticleToggle(article)}
              >
                <div className="writing-card-content">
                  <div className="writing-card-text">
                    <h3 className="writing-card-title">{article.title}</h3>
                    <p className="writing-card-author">{article.author}</p>
                    <p className="writing-card-meta">{article.blocks}</p>
                  </div>
                </div>
                
                <div className="writing-card-toggle">
                  {expandedArticle?.id === article.id ? '−' : '+'}
                </div>
              </div>
              
              {expandedArticle?.id === article.id && (
                <div className="writing-card-expanded">
                  <div 
                    className="writing-card-full-text"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
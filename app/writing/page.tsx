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
  id: 2,
  title: "on using code as a tool for creativity",
  author: "marla",
  blocks: "7/1/2025",
  images: ['/rnb.jpg'],
  content: `although i don't strongly consider myself a traditionally creative person (such as within the fine arts and music), <span class="highlight">i do believe that the ability to think critically and introspectively runs far beyond silicon valley's insistence on speed, efficiency, and optimization.</span class="highlight">

one such thought involves integrating creativity into computer science. and no, not in a "how can i solve this algorithm to achieve the most efficiency" or "how can i maximize cpu usage here" ways, but rather in a "how can i use computer science as a tool to express design creatively?"

nowadays, we are so focused on creating the most optimal algorithm to some problem or maximizing storage, speed, and optimizing GPUs for computational power (as we've seen with DeepSeek's V0 model). while such academia is deeply necessary to advancing computation, so is creating ui/ux design that is uniquely ours.

by creativity, i mean expression. by no means does this mean the code must be functional, because the true creativity comes from experimentation and testing out different ways to position elements, animations, and text throughout the screen. being able to test various fonts, shapes, screen sizes, and animations all contribute to a website's/design's overall message.`
},

    {
      id: 3,
      title: "digital minimalism in practice",
      author: "growth", 
      blocks: "3/14/2025",
      images: ['/greenruf.jpg'],
      content: `digital minimalism in practice

Digital minimalism sounds appealing in theory—who doesn't want less digital clutter and more intentional technology use? But the gap between concept and practice is where most good intentions go to die.

I've been experimenting with digital minimalism for two years now, and the results have surprised me. It's not about having fewer apps or a cleaner desktop. It's about fundamentally changing your relationship with technology from reactive to intentional.

The first principle is clarity of purpose. Before installing any app or signing up for any service, I ask: what specific outcome do I want this to enable? "Staying informed" isn't specific enough. "Understanding climate policy developments that affect my local community" is.

The second principle is friction by design. I've added intentional barriers to my most compulsive digital behaviors. My phone requires a 30-second wait before opening social media. My news apps are buried three folders deep. My email notifications are disabled during focus hours.

The third principle is regular audits. Every three months, I review every app, service, and digital subscription. The question isn't "might this be useful someday?" but "has this actively contributed to my goals in the past 90 days?"

The results have been subtle but profound. I read more books. I have longer conversations. I notice things I used to miss. The constant background anxiety of digital overwhelm has diminished.

Digital minimalism isn't about deprivation—it's about discernment. It's choosing signal over noise, depth over breadth, intention over automation.

The goal isn't to use less technology. It's to use technology that serves your actual values rather than the values embedded in someone else's business model.

In a world designed to capture and monetize your attention, choosing how to spend that attention becomes a radical act.`
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
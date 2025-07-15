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
      content: `01. i often wonder what we women could become if we lived in a world where we were equally empowered to be loud, to be wrong, to be messy, to be brilliant without having to dim our light for others. <span class="highlight">what would we create if we didn't spend so much energy managing our image, if we could channel that mental bandwidth toward spontaneity without blinking twice and wholeheartedly pursue our dreams without setback?</span> there are certainly many women who have done so—who have created businesses, become investors, become mothers and businesswomen, who see the strength in softness. the list goes on and on. i believe this is simply the first spark. <span class="highlight">now more than ever, we need to continue celebrating each other's victories as our own, turning competition into collaboration and building each other up instead of feeling threatened by another woman's success. </span>
      
02. fulfillment isn't something we discover so much as something we create through attention and choice. i like to see it as <span class="highlight">all the people who inspire us, all the ideas that challenge us, the work that engages us, and through the quality of our actions</span>. perhaps this is why there is no universal formula to anything. what draws one person forward might leave another. 
    
03. i can already imagine the 200+ conversations i'll have of "what's your major? what's your dorm? your name?" on the grounds of uc berkeley this fall. yet, if i could never introduce myself with my occupation, or school, or age, or ethnicity, or my hometown, who am i? 

what is my essence?

my whole high school career, i've been usually been known as that 4.0 girl, the girl who got into two ivies, who is reserved, who is into tech, who is mongolian, who is book-smart. if you know me personally, you also know that i'm a die-hard arianator. yet, surrounding myself with new music tastes this summer (notably hiphop), and moving past the songs of my past--the songs that have memories of high school, of friendship breakup, of strange situationships, of nearly burning out from college apps--has shown me the next chapter of my life. without the labels, who is marla?

well, i'm someone who enjoys music as equally as she approaches others with genuine curiosity, always wondering about the stories they carry and the worlds they've built inside their minds. i'm endlessly fascinated by how new technology works and am driven to complete whatever opportunity sits in front of me with the utmost intention (except household chores :<).

i'm also someone who enjoys expressing her creativity through choreographing and ux design. someone who has learned to stand her ground while understanding others with empathy. in other words, that softness is strength. 

most importantly, i value internal validation from goals and dreams over external applause.  <span class="highlight">but most of all, i'm someone who knows that if i am the smartest person in a room, i'm not in the right room. i know its cheugy, but labels are ok because they're never the full story. i believe it is up to people to learn more about the story that's inside them.</span> if we knew everyone's story. we wouldn't be curious or willing to make mistakes and learn from them. 
  
`

},
    {
      id: 2,
      title: "tech/design tools waitlist",
      author: "tech",
      blocks: "7/1/2025",
      images: ['/rnb.jpg'],
      content: `tech/design tools waitlist

The ritual has become familiar: a sleek landing page, a minimal form, and the promise that something revolutionary is coming. "Join the waitlist," they say. "Be among the first to experience the future."

I have a folder in my bookmarks called "Waitlists" with 47 entries. Tools for design, productivity, AI, collaboration—each one promising to solve problems I didn't know I had. The optimism is infectious. Maybe this will be the app that finally makes everything click.

But here's what I've learned from years of early access: the tools that change everything rarely announce themselves with fanfare. They slip into your workflow quietly, solving real problems so elegantly that you can't imagine working without them.

The best design tools I use daily—Figma, Linear, Notion—didn't need elaborate waitlist campaigns. They simply worked better than what came before. They earned their place through utility, not hype.

There's something seductive about being "among the first." It feeds our desire to be ahead of the curve, to discover the next big thing before everyone else. But productivity isn't about having the newest tools—it's about mastering the ones that serve your actual needs.

I've started asking different questions before joining waitlists. Does this solve a problem I actually have? Will it integrate with my existing workflow? Can I articulate what success would look like?

The answer is usually no. Most waitlist tools are solutions searching for problems, built for the excitement of building rather than the discipline of solving.

The future of productivity tools isn't about accumulating more apps. It's about finding the small set of tools that disappear into your process, that enhance your thinking rather than complicate it.

Maybe the most radical thing you can do is stop joining waitlists and start mastering what you already have.`
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
      <button onClick={handleBackClick} className="writing-back-button">
        ← back
      </button>

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
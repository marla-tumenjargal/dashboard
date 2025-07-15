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
      title: "huggable corners of the internet",
      author: "society",
      blocks: "7/15/2025",
      images: ['/rnb2.jpg'],
      content: `huggable corners of the internet

In the vast expanse of digital space, there exist pockets of warmth that feel like home. These are the huggable corners of the internet—places where humanity shines through pixels and code.

I've been thinking about what makes a digital space feel welcoming. It's not just good design or smooth interactions, though those help. It's something more fundamental: the sense that real people built this with care, that they considered how it would feel to be here.

The best online communities I've found share certain qualities. They have rituals and inside jokes. They remember your birthday. They create space for vulnerability alongside celebration. They feel lived-in rather than engineered.

Consider the comment sections that actually make you smile, the forums where strangers become friends, the platforms where creativity flourishes without performance pressure. These spaces exist because someone decided that connection mattered more than engagement metrics.

Building huggable corners requires intentional design choices. Slower loading times that create anticipation rather than frustration. Gentle notifications that feel like taps on the shoulder rather than shouts for attention. Features that encourage depth over velocity.

The internet doesn't have to be a hostile place. We can choose to build corners that invite lingering, that reward curiosity, that make people feel seen and heard. In a world of infinite scroll, the most radical act might be creating spaces that encourage stopping, breathing, and connecting.

Every interface is a doorway. Every interaction is a handshake. Every user experience is an opportunity to say: you belong here, you matter, you're welcome to stay as long as you'd like.

The huggable corners of the internet remind us that technology, at its best, amplifies our capacity for warmth.`
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
                  <pre className="writing-card-full-text">
                    {article.content}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
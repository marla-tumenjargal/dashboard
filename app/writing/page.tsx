'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
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
      title: "quick lessons i've learned in uni!",
      author: "opinion",
      blocks: "9/15/2025",
      images: ['/green.jpg'],
      content: `🌸 small lessons i’ve learned in one of month university: 

  1) time management is super important!
  2) <span class="highlight">balance is everything.</span class="highlight"> make time to eat well, exercise well, study well, to be goofy with your friends, to be bored, 
     to be stressed, to be unproductive. 

  3) it's important to be vulnerable with yourself and others. i’ve become more of an open book recently, and its been v fulfilling :D

  4) it’s not entirely useless to have conversations with people you know you’ll never see again. if anything, small talk has helped me 
     express myself better. i’ve done so coffee chats and tech/behavorial interviews + social mixers and through it all, i have a 
     different perspective on small talk. i like to think of it as practice and getting comfortable with my own voice and the types of 
     jokes that i make. i used to talk in a way that was fearful of perception. let me explainn. especially in hs, i spoke by keeping 
     the thoughts of what others may think at the forefront of my mind. nowadays, i speak whats on my mind and if someone doesn’t like 
     that particular joke or such i leave it there. <span class="highlight">i find that being comfortable in my own thoughts and emotions has helped me connect </span class="highlight">
     with people better and has become an important stepping stone of sorts to become a bit more fearless and courageous in my everyday life. 

  5) <span class="highlight">hypocrisy erodes trust.</span class="highlight"> given the recent and unfortunate news in orem, utah @ Utah Valley University, i've become saddened 
    by how polarized US politics has become. 
    
    why are we defining the value of someone's life on their beliefs? <
    why do we uphold an idea only when it relates to those with the same beliefs as us? 

    <span class="highlight">the first amendment allows all of us to speak freely, to debate freely, and to express ourselves in a safe environment. college</span class="highlight">
    <span class="highlight">campuses must encourage critical thinking and debate, especially with topics we disagree with, because that is how we determine </span class="highlight">
    <span class="highlight">the concepts we each individually believe are "correct." our opinions do not define our value as humans. we must work towards creating </span class="highlight">
    <span class="highlight">spaces where everyone, not just students, are encouraged to respectfully debate one another. </span class="highlight">`
    },
    {
      id: 3,
      title: "does innovation only happen within its context? ",
      author: "technology",
      blocks: "9/1/2025",
      images: ['/blueruf.jpg'],
      content: `
      
when Darwin created his Theory of Evolution, some may say that the "time was ripe." if Darwin never
coined it in his place. but let's look at another example: Gregor Mendel! when he discovered the
punnett square, his work was barely acknowledged. this, in part, is because he was quite ahead of his
time. he combined two completely disparaging fields (math and biology) together to radically innovate
(we call this radical innovation).

this fall semester, i'm taking Data 94, which explores the social dynamics behind computational
thinking, including topics such as AGI, recommendation systems, the Turing test as a marker of
intelligence, and free speech online. behind the fundamental questions of technology's role in society
is binary. binary is credited to Leibniz. similarly to Mendel, he combined two different fields (logic
and algebra) together to create a "language" of sorts--that is the precursor to probabilistic inference.
he proved that everything done by our mind is possible with computation. he believed math was a language.
private language can not exist. you can not express a concept if it does not have a name (again, why we
don't have memories as babies because we can not conceptualize what we do not yet know) and math is a
language and language is simply made up of symbols/signs thus, we can not think or reason or compute
to ourselves without language (in this case, language is math + logic). binary is only concerned with 0
and 1s, on or off.

one fundamental logic behind this idea are the three laws of thought. these three laws are the law of
identity, law of contradiction, and the law of excluded middle. <span class="highlight">leibniz believed all knowledge is self
evident, meaning that the mind itself already knows.</span class="highlight"> for example, a triangle is self evidence because you
can not comprehend of a triangle without three sides. another example is a bachelor. a bachelor is always
unmarried. other knowledge (he calls it empirical knowledge) is found "through" other knowledge. for
example, if i say "kidney" you would not intuitively correlate that with "pumping blood." most empirical
knowledge drives scientific knowledge since we always discovering new facts that continue creating new
knowledge. <span class="highlight">we do not think through these three laws of thought but we experience and behave through them.</span class="highlight">

leibniz also thought that there must be a metaphysical grounding to everything. binary is either on or off.
it has a certain specialness to it because that is how humans think. we can not know what is good but we
do understand good" as the opposite of evil. <span class="highlight">these are quite messy thoughts, but i think they are quite
interesting.</span class="highlight">`
    },
    {
      id: 4,
      title: "on using code as a tool for creativity",
      author: "opinion",
      blocks: "7/13/2025",
      images: ['/greenblue.jpg'],
      content: `my goal as a programmer is to write elegant code. 

but elegant code isn’t easy to write because it needs to be simple, readable, and efficient. in today's age, that often means maximizing storage, speed, and/or computational power (as we’ve seen with DeepSeek’s V0 model!). 

the idea for this entry came from an excerpt i recently read from robert martin’s "clean code." i was most surprised to learn that "the majority of costs of a software project is in the long-term maintenance.” some ways we can create elegant code is to separate functions, run tests, and slowly "clean" our code (via refactoring, minimizing classes, etc) as we go. this way, our code isn't immediately translated into gibberish that even the programmer themselves can't understand.

i never thought a book about coding would be as interesting as it was, but my main takeaways about the importance of readability resonated with me. <span class="highlight">efficient isn’t always the same as effective.</span> yes, efficient code is . . . well, efficient. but from an innately human pov, perfect code can lead to bloat and slower development cycles (cuz of unnecessary complexity and over-engineering solutions). that said, i will always give the most value to the thought process behind the code im building because i want to learn how to strike a balance between what is effective and what is efficient.

the more i continue to create and learn from others, the more i realize how much i love the "creative" aspect of computer science. that is, how creativity in code is expression. <span class="highlight">through silly side quests with nextjs (web dev!!) and some poorly solved leetcode 😭, not only am i challenging my own coding abilities by approaching problems in unconventional ways but i'm also using said code to create uniquely “human” designs + solutions.</span>

“human” is an odd way to describe a website’s frontend design, i know i know. but with the rise of ai-assisted coders (you may know them as vibe coderz), most (if not all) chatbots such as claude and chatgpt spit out generic designs that regurgitate all of the patterns it has recognized in its training data. in no way am i an expert on the llm process, <span class="highlight">but there is one thing i know for sure: the ability to think critically and introspectively about new problems is our most important tool to create better more readable code.</span>`
    },
    {
      id: 5,
      title: "on luck",
      author: "opinion",
      blocks: "7/11/2025",
      images: ['/rnb.jpg'],
      content: `<span class="highlight">preparation + opportunity = luck.</span>`
    },
    {
      id: 6,
      title: "thoughts, in no particular order",
      author: "society",
      blocks: "7/15/2025",
      images: ['/rnb2.jpg'],
      content: `01. fulfillment isn't something we discover so much as something we create through attention and choice. i like to see it as <span class="highlight">all the people who inspire us, all the ideas that challenge us, the work that engages us, and through the quality of our actions</span>. perhaps this is why there is no universal formula to anything. what draws one person forward might leave another. 

02. with uni coming up in the fall, i'd like to iterate over what i value. 

i'm someone who enjoys music as equally as she approaches others with genuine curiosity, always wondering about the stories they carry and the worlds they've built inside their minds. i'm endlessly fascinated by how new technology works and am driven to complete whatever opportunity sits in front of me with the utmost intention (except household chores :<).

i value internal validation from goals and dreams over external applause. <span class="highlight">but most of all, i'm someone who knows that if i am the smartest person in a room, i'm not in the right room. i know its cheugy, but labels are ok because they're never the full story. i believe it is up to people to learn more about the story that's inside them.</span> if we knew everyone's story. we wouldn't be curious or willing to make mistakes and learn from them.`
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

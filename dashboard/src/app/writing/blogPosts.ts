export interface BlogPost {
    id: string;
    title: string;
    year: string;
    category: string;
    content: string;
    isArchived?: boolean;
    isPasswordProtected?: boolean;
    excerpt?: string;
  }
  
  export class BlogPostsService {
    private static posts: BlogPost[] = [
  
      {
        id: 'poem 1',
        title: 'code driven by self-doubt',
        year: 'march 12th, 2025',
        category: 'poetry',
        isPasswordProtected: true,
        excerpt: "... and so, what is wrong with a little bit of poison, if it teaches you to bloom—if it teaches you to rise from the ashes with softer hands, clearer eyes, and roots deep enough hold your own weight?...",
        content: `
  i drank the drop, every bitter ounce,
  thinking the truth would melt on my tongue,
  like lush honey—
  but it seared a hole straight through
  through           the silences i never gave voice to. 
  through           a voice i once poured all of myself into. 
  truth is a match, and whomever strikes it— 
  boldly, 
  timidly, 
  truthfully,
  holds its flame . . . 
                                   . . .   midair. 
  i tried clearing a thundercloud with sunlight
  hoping its weight would evaporate into the sky, 
  but they do say that to grow feels like blooming—
  but some petals come only after the thorns have torn you open. 
  my skin still carries the ache and all the blood—
  not of cruelty, but of truths too sharp to hold gently. 
  and yet, in that silence,
  something sacred bloomed: strength isn't proven by how tight you cling, but in the softness of letting go. 
  and so—i did. slowly, with grace and ire. 
  i've learned from the red thorns that prick and preach into my skin every day: what is wrong with
  a little bit of poison, if it teaches you to bloom—if it teaches you to rise from the ashes with softer
  hands, clearer eyes, and roots deep enough hold your own weight? nothing. nothing at all. and so, the bloom for the brightest red rose has begun again.
        `
      },
      {
        id: 'reflection',
        title: 'airplanes windows are my favorite ordinary thing. ',
        year: '2025',
        category: 'reflections',
        content: `Co:Create was a collaborative design initiative that brought together designers, developers, and creative professionals to explore the intersection of technology and human creativity. The project focused on developing new methodologies for cross-disciplinary collaboration in the digital age.
  
  Our approach centered around creating shared spaces where different creative disciplines could converge and inform each other. We developed a series of workshops, tools, and frameworks that enabled more effective communication between team members with diverse skill sets and perspectives.
  
  The visual identity we created reflected this collaborative spirit through interconnected geometric forms that could be combined and recombined in infinite ways. The color palette drew from the full spectrum to represent the diversity of perspectives we sought to bring together.
  
  The project resulted in a new framework for creative collaboration that has since been adopted by numerous design agencies and in-house teams around the world.`
      },
      {
        id: 'like the calm blue and starstruck moon, sort out who you really are. ',
        title: 'like the calm blue and starstruck moon, sort out who you really are. ',
        year: '2025',
        category: 'poetry',
        isPasswordProtected: true,
        excerpt: 'yet, no matter the season, the air i breathe on my strolls always carries the same chilled clarity—not the kind of air that makes your lungs wince from the cold, but the kind that rinses your head clean.',
        content: `
        there is a particular shade of blue that stains the sky just before the stars stir awake. it is a calm blue. it is an ethereal blue—one that coats the sky in a lush, thick pastel so soft i understand why the clouds choose to bathe in its presence each day. under it, i always take afternoon strolls to rewire my thoughts. with every step, i begin to remember the parts of myself i misplace in the rush of (criminally late) cramming for final exams and the strange pressure to know everything all at once. i begin to resent that feeling of wanting to go back and do it all over again while simultaneously romanticizing the ambitious strides i’ll take in the future. 

        yet, no matter the season, the air i breathe on my strolls always carries the same chilled clarity—not the kind of air that makes your lungs wince from the cold, but the kind that rinses your head clean. i stop often. just to look up. just to remember what it feels like to exist without desperately grasping to fast forward time. 

        sometimes, tears blur my vision—not from sorrow, but from the weight of memory. under this very sky, i’ve stargazed across the mongolian steppe, endured the itch of summer mosquitoes, held my parents’ warm hands, felt their quiet kisses on my forehead. I’ve remembered, again and again, my love for stories, for the sky, for searching. And I’ve come to better understand what drives me—beyond prestige or performance—the values, resolve, and quiet strength poured into every decision, every initiative. and so, through these strolls and my parent’s love, i always feel incredibly grateful to reconnect with every version of myself—who i’ve been, who i’m becoming, who i aspire to be. and in many ways, i still am connected with the little i was once was—the girl who once stockpiled fortune cookie notes, saw dragons in the clouds, and slept with books under her cashmere pillow. i truly believe i've reclaimed that silly little girl in myself this year—piecing together all of her wildness, hope, and wonder. she is still here, hiding in the space between my ribs and behind my eyelids. and on occasion, i gather her wonder piece by piece, folding it into myself like a paper crane. i feel her hope vividly rekindling in my palms, stubborn and bright. and so, like the calm blue and starstruck moon, i always look up when i can afford the time and notice that the blue is always the same—soft, quiet, eternal.
        `
      },
      {
        id: 'how a hair tie changed my life.',
        title: 'how a hair tie changed my life.',
        year: '2025',
        category: 'reflections',
        content: `The Caminhos Film Festival visual identity project was inspired by the Portuguese word "caminhos" meaning "paths" or "ways." The festival celebrated independent cinema from Portuguese-speaking countries, and we wanted the brand to reflect the diverse journeys of filmmakers and their stories.
  
  Our design concept centered around path-like elements that could form different configurations - sometimes intersecting, sometimes parallel, sometimes diverging. These visual metaphors represented the various narrative paths explored in cinema and the different cultural perspectives represented at the festival.
  
  The color palette was deliberately restrained, using deep blues and warm oranges to evoke both the evening screenings and the warmth of community gathering. Typography choices emphasized readability while maintaining an artistic sensibility appropriate for a cultural event.
  
  The identity was applied across all festival materials including programs, posters, digital assets, and environmental graphics. The flexible system allowed for different configurations while maintaining strong brand recognition throughout the event's duration.`
      },
      {
        id: 'show me your friends, and i’ll show you your future',
        title: 'show me your friends, and i’ll show you your future',
        year: '2025',
        category: 'reflections',
        content: `Caleidoscópio (Kaleidoscope) was a visual identity project for a contemporary art exhibition that explored themes of perception, transformation, and multiple perspectives. The exhibition featured works by emerging artists who challenged traditional ways of seeing and understanding visual art.
  
  The identity drew inspiration from the kaleidoscope's ability to create infinite patterns from simple elements. We developed a dynamic logo system that could shift and change while maintaining core recognition elements. The mark itself was built from modular components that could be rearranged to create different configurations.
  
  Color played a crucial role in the identity, with a vibrant palette that could shift and blend like light through colored glass. We created a system where different combinations of colors could be used for different artists or exhibition sections, while maintaining overall cohesion.
  
  The identity was implemented across exhibition materials, including catalogs, wall graphics, digital displays, and promotional materials. The flexible system allowed for unique applications while maintaining the cohesive visual language throughout the exhibition space.`
      },
      {
        id: 'time tells us what to measure, but not what is meaningful',
        title: 'time tells us what to measure, but not what is meaningful',
        year: '2021',
        category: 'VISUAL IDENTITY',
        content: `
        flashback one year ago and you’ll find me with my head in this very computer at some cafe in Mongolia, jotting down each and every childhood memory and lesson and value i’ve ever learned and/or discovered to brainstorm my 650-word commonapp essay for college apps. and although decisions for university came out mooonths ago, i want to take a moment to reflect on timelines and how authenticity is one’s greatest power amidst competition.

before that, however, i must address competition itself. from the surface, competition is always seen as a negative emotion–just as jealousy is. yet, it is not something we can directly control within a given moment. as humans, we are all naturally wired to strive for the best and to be accepted by social groups–to adapt if you will. but at the same time, i am not dismissing competition as a good emotion either. instead, competition is best when it’s accepted and used to better one’s self, whether that be academically, spiritually, socially, career-wise (when done ethically, of course), etc. 

now, one whole year after college apps, i now realize i was attempting to package sixteen years of becoming into a neat narrative arc that would convince strangers i was worth their acceptance.

 i see competition as a double-edged sword–something that brings out all the sides of you (frustration, growth, joy, jealousy)

the moments that matter become ingrained within us—a book that changed how you think, a conversation that shifted your perspective, moments you resist picking up your phone to just clear your mind. competition taught me that everyone's timeline looks different from the inside. what appears as overnight success to an observer is usually years of invisible work, false starts, and recalibrations that never make it into the highlight reel. 

the point is: we don’t become ourselves all at once. we iterate, shift, gather data from the things we love, and the people who light us up.
authenticity becomes radical when it refuses to perform on anyone else's schedule. fulfillment isn’t something we discover so much as something we create through attention and choice. i like to see it as all the people who inspire us, all the ideas that challenge us, the work that engages us, and through the quality of our actions. perhaps this is why there is no universal formula to anything. what draws one person forward might leave another. so, after all that, if there’s one thing you take away: fulfillment isn’t something we discover so much as something we create through attention and choice. i know i’ve already written it, but it’s a motto i strive to live by.

        `
      },
      {
        id: 'raise y_our glasses (one last time!)',
        title: 'raise y_our glasses (one last time!)',
        year: '2025',
        category: 'reflections',
        content: `writing here`
      },
      {
        id: 'queima-fitas',
        title: 'Queima das Fitas',
        year: '2020',
        category: 'VISUAL IDENTITY',
        content: `Queima das Fitas is a traditional Portuguese academic festival, and our visual identity project aimed to modernize this centuries-old celebration while respecting its cultural significance. The challenge was creating something that would appeal to contemporary students while honoring the festival's rich traditions.
  
  Our design concept balanced historical elements with modern aesthetics. We incorporated traditional Portuguese azulejo tile patterns in contemporary applications, creating a bridge between past and present. The color palette drew from the ribbons (fitas) that give the festival its name, using vibrant colors that represented different academic faculties.
  
  The identity system was designed to work across multiple touchpoints including digital platforms, merchandise, environmental graphics, and promotional materials. We created a flexible logo system that could adapt to different contexts while maintaining strong brand recognition.
  
  The project successfully revitalized the festival's image, attracting both traditional participants and new audiences while maintaining the authentic spirit of this important cultural celebration.`
      }
    ];
  
    static getAllPosts(): BlogPost[] {
      return [...this.posts].reverse(); // Return a reversed copy to show newest first
    }
  
    static getPostById(id: string): BlogPost | undefined {
      return this.posts.find(post => post.id === id);
    }
  
    static getPostsByCategory(category: string): BlogPost[] {
      return this.posts.filter(post => post.category === category);
    }
  
    static getPostsByYear(year: string): BlogPost[] {
      return this.posts.filter(post => post.year === year);
    }
  
    static getArchivedPosts(): BlogPost[] {
      return this.posts.filter(post => post.isArchived);
    }
  
    static getActivePosts(): BlogPost[] {
      return this.posts.filter(post => !post.isArchived);
    }
  
    static addPost(post: BlogPost): void {
      this.posts.push(post);
    }
  
    static updatePost(id: string, updatedPost: Partial<BlogPost>): boolean {
      const index = this.posts.findIndex(post => post.id === id);
      if (index !== -1) {
        this.posts[index] = { ...this.posts[index], ...updatedPost };
        return true;
      }
      return false;
    }
  
    static deletePost(id: string): boolean {
      const index = this.posts.findIndex(post => post.id === id);
      if (index !== -1) {
        this.posts.splice(index, 1);
        return true;
      }
      return false;
    }
  }
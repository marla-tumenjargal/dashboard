export interface BlogPost {
    id: string;
    title: string;
    year: string;
    category: string;
    content: string;
    isArchived?: boolean;
  }
  
  export class BlogPostsService {
    private static posts: BlogPost[] = [
      {
        id: 'co-create',
        title: 'Co:Create',
        year: '2022',
        category: 'VISUAL IDENTITY',
        isArchived: true,
        content: `Co:Create was a collaborative design initiative that brought together designers, developers, and creative professionals to explore the intersection of technology and human creativity. The project focused on developing new methodologies for cross-disciplinary collaboration in the digital age.
  
  Our approach centered around creating shared spaces where different creative disciplines could converge and inform each other. We developed a series of workshops, tools, and frameworks that enabled more effective communication between team members with diverse skill sets and perspectives.
  
  The visual identity we created reflected this collaborative spirit through interconnected geometric forms that could be combined and recombined in infinite ways. The color palette drew from the full spectrum to represent the diversity of perspectives we sought to bring together.
  
  The project resulted in a new framework for creative collaboration that has since been adopted by numerous design agencies and in-house teams around the world.`
      },
      {
        id: 'wer-farmers',
        title: 'WeRFarmers',
        year: '2021',
        category: 'UX-UI',
        content: `WeRFarmers was a comprehensive digital platform designed to connect small-scale farmers with consumers, creating a direct-to-consumer marketplace that eliminated intermediaries and increased farmer profits while providing consumers with fresh, locally-sourced produce.
  
  The UX challenge was significant: creating an interface that would work for farmers who might have limited digital literacy while also appealing to urban consumers accustomed to polished e-commerce experiences. We conducted extensive field research, spending time with farmers to understand their workflows and pain points.
  
  Our solution featured a simplified seller interface with large, clear buttons and intuitive navigation, while the consumer-facing side offered advanced filtering, detailed product information, and seamless checkout. We implemented features like harvest calendars, weather integration, and automated inventory management.
  
  The platform launched with over 200 farmers and achieved 15,000 registered consumers in its first year, demonstrating the viability of direct agricultural commerce.`
      },
      {
        id: 'caminhos-festival',
        title: 'Caminhos Film Festival',
        year: '2021',
        category: 'VISUAL IDENTITY',
        content: `The Caminhos Film Festival visual identity project was inspired by the Portuguese word "caminhos" meaning "paths" or "ways." The festival celebrated independent cinema from Portuguese-speaking countries, and we wanted the brand to reflect the diverse journeys of filmmakers and their stories.
  
  Our design concept centered around path-like elements that could form different configurations - sometimes intersecting, sometimes parallel, sometimes diverging. These visual metaphors represented the various narrative paths explored in cinema and the different cultural perspectives represented at the festival.
  
  The color palette was deliberately restrained, using deep blues and warm oranges to evoke both the evening screenings and the warmth of community gathering. Typography choices emphasized readability while maintaining an artistic sensibility appropriate for a cultural event.
  
  The identity was applied across all festival materials including programs, posters, digital assets, and environmental graphics. The flexible system allowed for different configurations while maintaining strong brand recognition throughout the event's duration.`
      },
      {
        id: 'caleidoscopio',
        title: 'Caleidoscópio',
        year: '2021',
        category: 'VISUAL IDENTITY',
        content: `Caleidoscópio (Kaleidoscope) was a visual identity project for a contemporary art exhibition that explored themes of perception, transformation, and multiple perspectives. The exhibition featured works by emerging artists who challenged traditional ways of seeing and understanding visual art.
  
  The identity drew inspiration from the kaleidoscope's ability to create infinite patterns from simple elements. We developed a dynamic logo system that could shift and change while maintaining core recognition elements. The mark itself was built from modular components that could be rearranged to create different configurations.
  
  Color played a crucial role in the identity, with a vibrant palette that could shift and blend like light through colored glass. We created a system where different combinations of colors could be used for different artists or exhibition sections, while maintaining overall cohesion.
  
  The identity was implemented across exhibition materials, including catalogs, wall graphics, digital displays, and promotional materials. The flexible system allowed for unique applications while maintaining the cohesive visual language throughout the exhibition space.`
      },
      {
        id: 'uxp',
        title: 'UXP',
        year: '2021',
        category: 'VISUAL IDENTITY',
        content: `UXP (User Experience Platform) was a comprehensive rebrand for a UX design consultancy that specialized in helping companies transform their digital products through human-centered design principles. The challenge was creating an identity that would appeal to both startup founders and enterprise executives.
  
  Our approach focused on the intersection of human insight and digital innovation. The logo combined geometric precision with organic curves, representing the balance between systematic methodology and creative problem-solving that defines excellent UX work.
  
  The visual system included a distinctive color palette of deep teals and warm grays, chosen to convey both professionalism and approachability. Typography selections emphasized clarity and readability - principles that directly reflected the company's UX philosophy.
  
  We developed a comprehensive brand guideline that included applications for presentations, case studies, digital interfaces, and business materials. The identity successfully positioned UXP as a premium consultancy while maintaining accessibility for diverse client types.`
      },
      {
        id: 'jazz-centro',
        title: 'Jazz ao Centro Clube',
        year: '2020',
        category: 'UX-UI',
        content: `Jazz ao Centro Clube was a digital platform designed to connect jazz enthusiasts, musicians, and venues in central Portugal. The project aimed to create a thriving community around jazz music while providing practical tools for event discovery and musician networking.
  
  The UX research revealed that jazz communities are tight-knit but often lack digital tools for connection and discovery. Musicians needed better ways to find collaboration opportunities, venues needed help promoting events, and fans wanted a centralized place to discover performances.
  
  Our solution featured a community-driven platform with event listings, musician profiles, venue information, and integrated social features. The design aesthetic drew inspiration from jazz album covers and club atmospheres, using deep blues and warm golds to create an inviting digital space.
  
  Key features included a sophisticated event discovery system with filtering by style, venue, and date, musician networking tools, and integration with streaming services for music discovery. The platform launched with partnerships with major jazz venues across the region.`
      },
      {
        id: 'jof',
        title: 'JOF',
        year: '2020',
        category: 'UX-UI',
        content: `JOF (Jobs Opportunities Framework) was a comprehensive employment platform designed to address the specific needs of recent graduates and entry-level job seekers. The project emerged from research showing that traditional job boards were poorly suited for candidates with limited work experience.
  
  Our UX approach focused on skill-based matching rather than experience-based filtering. We developed algorithms that could identify transferable skills from academic projects, volunteer work, and personal interests, creating more opportunities for new graduates to connect with suitable positions.
  
  The interface design prioritized clarity and confidence-building. We included features like application tracking, interview preparation resources, and personalized feedback to help users navigate the job search process more effectively.
  
  The platform also included employer tools for posting entry-level positions and evaluating candidates based on potential rather than just experience. This two-sided approach created a more balanced marketplace that benefited both job seekers and employers looking for fresh talent.`
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
      return this.posts;
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